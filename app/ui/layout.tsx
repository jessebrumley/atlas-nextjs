// app/ui/layout.tsx
import Sidebar from '@/components/Sidebar';

export default function UILayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex">
            <Sidebar />
            <main className="flex-1 p-4">{children}</main>
        </div>
    );
}
