import { fetchQuestion } from "@/lib/data";
import AnswerVote from "./AnswerVote";

type AnswerProps = {
    id: string;
    answer: string;
    question_id: string;
    question_answer_id: string;
};

export function Answer({ id, answer, question_id, question_answer_id }: AnswerProps) {
    console.log(`correct answer id in the Answer component: ${question_answer_id}`);
    return (
        <div className="flex items-center border-l border-r border-t border-atlas-white-300 p-6 first:rounded-t-md last:rounded-b-md last:border-b">

            <p className="text w-full text-left">{answer}</p>
            <AnswerVote id={id} question_id={question_id} question_answer_id={question_answer_id} />
        </div>
    );
}
