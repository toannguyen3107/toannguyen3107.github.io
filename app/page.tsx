'use client';
import { Span } from "next/dist/trace";
import React, { ReactNode } from "react";
import { Typewriter } from 'react-simple-typewriter';
import { Divider } from "@nextui-org/react";
import CardButton from '@/components/cardbutton/CardButton';
import { list_post } from "@/config/post";
export default function App() {
  
  const className = 'lg:col-span-3 md:col-span-6 mx-auto md:gap-4';
  return (
    <div>
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
        <Divider className="my-[3rem]" />
        <p className="font-semibold text-xl text-[#00BFFF] my-[2rem]">Explore</p>
        <div className="md:grid md:grid-cols-12 mt-3">
          {list_post.map((item, index) => (
            <CardButton key={index} item={item} className={className} />
          ))}
        </div>
      </div>
    </div>

  );
}
