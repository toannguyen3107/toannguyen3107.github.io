import { Metadata } from "next";

export const metadata = {
    title: 'WifineticTwo'
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