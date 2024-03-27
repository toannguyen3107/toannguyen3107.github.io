import { Metadata } from "next";

export const metadata = {
    title: 'Headless'
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