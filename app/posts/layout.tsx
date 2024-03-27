import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Blog'
}

export default function ContentLayout({ children, }: {
    children: React.ReactNode
}) {
    return (
        <>
            {children}
        </>
    );
}