"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, Database, Network } from "lucide-react";
export function Hero() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Revolutionizing Hiring & Job Preparation with AI";

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-pattern opacity-10 animate-pulse"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black to-black"></div>
      <div className="max-w-4xl mx-auto z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          {typedText}
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-fade-in-delay text-gray-300">
          Smarter Hiring. Faster Career Growth. AI-Powered.
        </p>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96"></div>
        {/* <Button
          size="lg"
          className="animate-fade-in-delay-2 bg-white text-black hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
        >
          Join Beta Now <ArrowRight className="ml-2" />
        </Button> */}
        <Button
          type="submit"
          className="bg-white text-black hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.7)] transition-all duration-300"
        >
          Join Beta Now <ArrowRight className="ml-2" />
        </Button>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
        <AIParticles />
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-8">
        <AIIcon Icon={Cpu} tooltip="AI-Powered Analysis" />
        <AIIcon Icon={Database} tooltip="Data-Driven Insights" />
        <AIIcon Icon={Network} tooltip="Smart Matching" />
      </div>
    </section>
  );
}

function AIParticles() {
  return (
    <div className="particles">
      {[...Array(50)].map((_, i) => (
        <div key={i} className="particle"></div>
      ))}
    </div>
  );
}

function AIIcon({ Icon, tooltip }) {
  return (
    <div className="group relative">
      <div className="p-3 bg-white bg-opacity-10 rounded-full backdrop-blur-sm transition-all duration-300 transform hover:scale-110 hover:bg-opacity-20">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-white text-black text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {tooltip}
      </div>
    </div>
  );
}
