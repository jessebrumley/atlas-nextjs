import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { addCorrectAnswer } from "@/lib/actions";

export default function AnswerVote({ id, question_id, question_answer_id }: { id: string, question_id: string, question_answer_id: string }) {
    console.log("this answer's id is: ", id);
    console.log("this question's correct answer's id is: ", question_answer_id);
    if (id !== question_answer_id) {
        return (
            <form action={addCorrectAnswer}>
                <input type="hidden" name="id" value={id} />
                <input type="hidden" name="question_id" value={question_id} />
                <button
                    type="submit"
                    className="h-8 w-8 min-w-[2rem] rounded-full ring-gray-200 hover:text-atlas-teal active:bg-primary active:text-white active:outline-none active:ring-2 active:ring-primary"
                >
                    <CheckCircleIcon />
                </button>
            </form>
        );
    }
    return (
        <form action={addCorrectAnswer}>
            <input type="hidden" name="id" value={id} />
            <input type="hidden" name="question_id" value={question_id} />
            <button
                type="submit"
                className="h-8 w-8 min-w-[2rem] rounded-full text-atlas-teal bg-primary text-white outline-none ring-2 ring-primary"
            >
                <CheckCircleIcon />
            </button>
        </form>
    );
}