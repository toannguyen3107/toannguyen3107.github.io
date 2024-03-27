import { Metadata } from "next";

export const metadata = {
    title: 'Random'
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