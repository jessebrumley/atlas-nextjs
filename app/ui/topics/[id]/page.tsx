// app/ui/topics/[id]/page.tsx

interface TopicPageProps {
    params: {
        id: string;
    };
}

export default function TopicDetail({ params }: TopicPageProps) {
    return <h1>Questions for Topic ID: {params.id}</h1>;
}
