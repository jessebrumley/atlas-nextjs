// app/ui/topics/[id]/page.tsx
export default function TopicDetail({ params }: { params: { id: string } }) {
    return <h1>Questions for Topic ID: {params.id}</h1>;
}
