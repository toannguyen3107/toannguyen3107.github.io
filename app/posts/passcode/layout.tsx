import { Metadata } from "next";

export const metadata = {
    title: 'Passcode'
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