'use client';
import { Span } from "next/dist/trace";
import React, { ReactNode } from "react";
import { Typewriter } from 'react-simple-typewriter';

export default function App() {
  const cur: ReactNode = "*";

  return (
    <div className="mt-[3rem] w-4/5 mx-auto drop-shadow-xl contrast-200">
      <p className="font-extrabold text-3xl text-[#d8d8d8] blur-[0.1px] italic">Hello everyone</p>
      <span className="text-[#E91E63] font-semibold text-lg">
        <Typewriter
          words={['Welcome to my blog', 'My name is Nguyen Minh Toan', 'This blog shares my knowledge within the realms of learning about software engineering and cybersecurity, focusing mainly on penetration testing.']}
          loop={true}
          cursor={true}
          cursorBlinking={true}
          cursorColor="red"
          cursorStyle={<span className="text-bold text-xl">*</span>}
          typeSpeed={50}
          deleteSpeed={10}
        />
      </span>
      
      <p className="mt-[10rem]">Updating</p>
    </div>
  );
}
