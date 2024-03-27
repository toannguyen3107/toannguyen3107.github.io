import { Metadata } from "next";

export const metadata = {
    title: 'Racecar'
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