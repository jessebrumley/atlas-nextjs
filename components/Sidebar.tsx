'use client';

import Link from 'next/link';

export default function Sidebar() {
    return (
        <aside className="w-64 p-4 bg-gray-100 h-screen">
            <nav>
                <ul className="space-y-2">
                    <li>
                        <Link
                            href="/ui"
                            className="block p-2 rounded hover:bg-gray-200 transition"
                        >
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/ui/topics/new"
                            className="block p-2 rounded hover:bg-gray-200 transition"
                        >
                            Create Topic
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}
