'use client';
import { Span } from "next/dist/trace";
import React, { ReactNode } from "react";
import { Typewriter } from 'react-simple-typewriter';
import { Divider } from "@nextui-org/react";
import CardButton from '@/components/cardbutton/CardButton';

export default function App() {
  const item = {
    subtitle: 'Hackthebox',
    date: '2024-22-3',
    header: 'WifineticTwo',
    img: '/images/wifinetictwo.png',
    link: '/posts/wifinetictwo',
    className: 'lg:col-span-3 md:col-span-6 mx-auto'
  };
  return (
    <div className="relative h-full">
      <div className="w-full bg-[#27272A] px-2 py-1">
        <h2 className="font-extrabold text-xl">Toan Nguyen&apos;s personal site</h2>
      </div>
      <div className="mt-[3rem] w-4/5 mx-auto drop-shadow-xl contrast-200">
        <p className="font-extrabold text-3xl text-[#d8d8d8] blur-[0.1px] italic">Hello everyone</p>
        <span className="text-[#17c964] font-semibold text-lg">
          <Typewriter
            words={['Welcome to my blog.', 'My name is Nguyen Minh Toan.', 'This blog shares my knowledge within the realms of learning about software engineering and cybersecurity, focusing mainly on penetration testing.']}
            loop={true}
            cursor={true}
            cursorBlinking={true}
            // cursorColor="red"
            cursorStyle={<span className="text-bold text-xl text-[#17c964]">|</span>}
            typeSpeed={50}
            deleteSpeed={10}
          />
        </span>
      </div>
      <div className="w-4/5 mx-auto mb-[3rem] ">
          <Divider className="mt-4 my-4" />
          <p className="font-semibold text-xl text-[#00BFFF]">Explore</p>
          <div className="md:grid md:grid-cols-12 mt-3">
            <CardButton item={item}/>
          </div>
        </div>
      <div className="absolute bottom-0 left-0 bottom-0 w-full bg-[#27272A] px-2 py-1">
        <h2 className="text-center font-bold text-lg">&copy; Minh Toan - 2024</h2>
      </div>
    </div>

  );
}
