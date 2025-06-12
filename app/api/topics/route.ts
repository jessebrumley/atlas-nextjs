import { fetchTopics } from "@/lib/data";

export async function GET(request: Request) {
    const data = await fetchTopics();
    const topics = JSON.stringify(data);
    return Response.json(topics);
}