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
  return (
    <html lang="en" className='dark'>
      <body className={inner.className}>
        <Providers>
          <div className="block md:flex md:flex-row md:gap-2">
            <Nav className="m-0 md:sticky md:top-0 md:w-2/12 md:h-[100vh] h-[20vh] bg-[rgb(86,93,95)] bg-[linear-gradient(90deg, rgba(86,93,95,1) 0%, rgba(76,76,83,1) 31%, rgba(171,196,203,1) 68%, rgba(193,224,231,1) 99%)] " />
            <div className="w-10/12">{children}</div>
          </div>

        </Providers>
      </body>
    </html>
  );
}