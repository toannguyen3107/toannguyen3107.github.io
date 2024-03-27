// app/layout.tsx
import { Providers } from "@/app/providers";
import Nav from "@/components/menu/Nav";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { inner } from "@/config/fonts";
import { Divider } from "@nextui-org/react";
export const metadata: Metadata = {
  title: {
    default: 'Toan Nguyen - Personal Website',
    template: '%s  - Personal Website'
  },
  icons: { icon: '/favicon.ico' },
  openGraph: {
    title: 'Toan Nguyen - Blog',
    description: 'Explore Toan Nguyen\'s personal blog and writings.',
  },
  keywords: 'Toan Nguyen, personal website, blog, writings, portfolio, projects, technology, programming, web development, software engineering, pwnable, hackthebox, binary exploitation, web exploit',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const bg = "bg-gradient-to-r from-[#000000] from-20% via-[#191919] via-40% via-[#333] via-60% via-[#4c4c4c] via-80% to-[#666] to-100%"
  return (
    <html lang="en" className='dark'>
      <body className={inner.className}>
        <Providers>
          <div className="block md:flex md:flex-row">
            <Nav className="m-0 md:sticky md:top-0 md:w-2/12 md:h-[100vh] h-[23vh] bg-[rgb(86,93,95)] bg-gradient-to-r from-[#3f3f46] to-[#3f3f46]" />
            <div className={`relative md:w-10/12 h-[100vh] ${bg} overflow-y-auto`}>
              <div className="w-full bg-[#27272A] px-2 py-1">
                <h2 className="font-extrabold text-xl">Toan Nguyen&apos;s personal site</h2>
              </div>
              <div className="overflow-auto">
                {children}
              </div>
              <div className="bottom-0 left-0 bottom-0 w-2/5 mx-auto px-2 py-1">
                <Divider />
                <h2 className="text-center font-bold text-lg">&copy; Minh Toan - 2024</h2>
              </div>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}