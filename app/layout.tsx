// app/layout.tsx
import { Providers } from "@/app/providers";
import Nav from "@/components/menu/Nav";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { inner } from "@/config/fonts";
export const metadata: Metadata = {
  title: 'Toan Nguyen',
  icons: {icon: './favicon.ico'},
  openGraph: {
    title: 'Blog - Personal website',
    description: 'Toan Nguyen\'s blog'
  }
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const bg = "bg-gradient-to-r from-[#000000] from-20% via-[#191919] via-40% via-[#333] via-60% via-[#4c4c4c] via-80% to-[#666] to-100%"
  return (
    <html lang="en" className='dark'>
      <body className={inner.className}>
        <Providers>
          <div className="block md:flex md:flex-row">
            <Nav className="m-0 md:sticky md:top-0 md:w-2/12 md:h-[100vh] h-[23vh] bg-[rgb(86,93,95)] bg-gradient-to-r from-[#3f3f46] to-[#3f3f46]" />
            <div className={`md:w-10/12 h-[100vh] ${bg}`}>{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
}