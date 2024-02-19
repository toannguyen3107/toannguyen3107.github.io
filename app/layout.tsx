// app/layout.tsx
import { Providers } from "@/app/providers";
import Nav from "@/components/menu/Nav";
import "@/styles/globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: 'Toan Nguyen',
  openGraph: {
    title: 'Blog - Personal website',
    description: 'Toan Nguyen\'s blog'
  }
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className='dark'>
      <body>
        <Providers>
          <Nav />
          {children}
        </Providers>
      </body>
    </html>
  );
}