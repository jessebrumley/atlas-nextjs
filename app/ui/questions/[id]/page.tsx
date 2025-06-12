
import { fetchAnswers, fetchAnswer, fetchQuestion } from "@/lib/data";
import { HashtagIcon } from "@heroicons/react/24/outline";
import { Answer } from "@/components/Answer";
import { AnswerQuestion } from "@/components/AnswerQuestion";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const question = await fetchQuestion(id);
    const answers = await fetchAnswers(id);
    const correctAnswer = await fetchAnswer(question[0].answer_id);
    console.log("correct answer id in page component: ", question[0].answer_id);
    return (
        <div>
            <h1 className="text-3xl font-black flex items-center">
                <HashtagIcon className="h-6 w-6 mr-2" /> {question[0].title}
            </h1>
            <AnswerQuestion question={id} />
            {...answers.map((answer) => {
                if (answer.id === question[0].answer_id) {
                    return <Answer
                        key={answer.id}
                        id={answer.id}
                        answer={answer.answer}
                        question_id={answer.question_id}
                        question_answer_id={question[0].answer_id}
                    />
                }
            })}
            {...answers.map((answer) => {
                if (answer.id !== question[0].answer_id) {
                    return <Answer
                        key={answer.id}
                        id={answer.id}
                        answer={answer.answer}
                        question_id={answer.question_id}
                        question_answer_id={question[0].answer_id}
                    />
                }
            })}
        </div>
    )
}