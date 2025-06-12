import { fetchQuestion, fetchQuestions } from "@/lib/data";

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await (params);
    const data = await fetchQuestions(id);
    let payload = [];
    for (const question of data) {
        const item = {
            id: question.id,
            title: question.title,
            topic_id: question.topic_id,
            votes: question.votes
        }
        payload.push(item);
    }
    const questions = JSON.stringify(payload)
    return Response.json(questions);
}