import { sql } from "@vercel/postgres";
import { Question, Topic, User, Answer } from "./definitions";

export async function fetchUser(email: string): Promise<User | undefined> {
  try {
    const user = await sql<User>`SELECT * FROM users WHERE email = ${email}`;
    return user.rows[0];
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}

export async function fetchTopics() {
  try {
    const data = await sql<Topic>`SELECT * FROM topics`;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch topics.");
  }
}

export async function fetchTopic(id: string) {
  try {
    const data = await sql<Topic>`SELECT * FROM topics WHERE id = ${id}`;
    return data.rows && data.rows.length > 0 ? data.rows[0] : null;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch topics.");
  }
}

export async function fetchQuestions(id: string) {
  try {
    const data =
      await sql<Question>`SELECT * FROM questions WHERE topic_id = ${id} ORDER BY votes DESC`;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch questions.");
  }
}

export async function fetchQuestion(id: string) {
  try {
    const data =
      await sql<Question>`SELECT * FROM questions WHERE id = ${id}`;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch question.");
  }
}

export async function fetchAnswers(id: string) {
  try {
    const data =
      await sql<Answer>`SELECT * FROM answers WHERE question_id = ${id}`;
    return data.rows;
  } catch (error) {
    console.error("Database Error: ", error);
    throw new Error("Failed to fetch answers");
  }
}

export async function fetchAnswer(id: string) {
  try {
    const data =
      await sql<Answer>`SELECT * FROM answers WHERE id = ${id}`;
    return data.rows;
  } catch (error) {
    console.error("Database Error: ", error);
    throw new Error("failed to fetch answer");
  }
}

export async function insertQuestion(
  question: Pick<Question, "title" | "topic_id" | "votes">
) {
  try {
    const data =
      await sql<Question>`INSERT INTO questions (title, topic_id, votes) VALUES (${question.title}, ${question.topic_id}, ${question.votes})`;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to add question.");
  }
}

export async function insertTopic(topic: Pick<Topic, "title">) {
  try {
    const data =
      await sql<Topic>`INSERT INTO topics (title) VALUES (${topic.title}) RETURNING id;`;
    console.log(data.rows[0]);
    return data.rows[0];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to add topic.");
  }
}

export async function insertAnswer(answer: Pick<Answer, "answer" | "question_id">) {
  try {
    const data =
      await sql<Answer>`INSERT INTO answers (answer, question_id) VALUES (${answer.answer}, ${answer.question_id}) RETURNING id;`;
    console.log(data.rows[0]);
    return data.rows[0];
  } catch (error) {
    console.error("Database Error: ", error);
    throw new Error("Failed to add answer.");
  }
}

export async function updateQuestionAnswer(id: string, answer_id: string) {
  try {
    const data =
      await sql<Question>`UPDATE questions SET answer_id = ${answer_id} WHERE id = ${id};`;
    return data.rows;
  } catch (error) {
    console.error("Database Error: ", error);
    throw new Error("Failed to add correct answer.");
  }
}

export async function incrementVotes(id: string) {
  try {
    const data =
      await sql<Question>`UPDATE questions SET votes = votes + 1 WHERE id = ${id}`;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to increment votes.");
  }
}
