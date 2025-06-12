import { fetchAnswers } from "@/lib/data";

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await (params);
    const data = await fetchAnswers(id);
    const answers = JSON.stringify(data);
    return Response.json(answers);
}