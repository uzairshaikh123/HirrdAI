"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FileSearch, Code, Briefcase, BarChart2 } from "lucide-react";

const features = [
  {
    icon: FileSearch,
    title: "AI Resume Screening",
    description:
      "Quickly identify top candidates with our advanced AI screening technology.",
    animation: "scan",
  },
  {
    icon: Code,
    title: "AI-Powered Coding Challenges",
    description:
      "Evaluate technical skills with adaptive, AI-generated coding tests.",
    animation: "code",
  },
  {
    icon: Briefcase,
    title: "Real-World Project Evaluations",
    description:
      "Assess candidates' practical skills through AI-analyzed project simulations.",
    animation: "flip",
  },
  {
    icon: BarChart2,
    title: "AI Hiring Insights",
    description: "Gain data-driven insights to make informed hiring decisions.",
    animation: "graph",
  },
];

export function ForCompanies() {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section className="w-full py-20 px-4 ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">
          For Companies
        </h2>
        <p className="text-xl mb-12 text-center text-gray-300">
          Revolutionize your hiring process with AI-powered tools
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-black bg-opacity-50 border-gray-800 hover:border-white transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <feature.icon className="mr-2 w-6 h-6" />
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  {feature.description}
                </CardDescription>
                <div className="mt-4 h-32 flex items-center justify-center">
                  <FeatureAnimation
                    type={feature.animation}
                    active={activeCard === index}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureAnimation({ type, active }) {
  switch (type) {
    case "scan":
      return (
        <div
          className={`w-16 h-16 border-2 border-white rounded-lg relative ${
            active ? "animate-scan" : ""
          }`}
        >
          <div className="absolute top-0 left-0 w-full h-0.5 bg-blue-500 transform -translate-y-1/2"></div>
        </div>
      );
    case "code":
      return (
        <div
          className={`w-16 h-16 bg-gray-800 rounded-lg overflow-hidden ${
            active ? "animate-type" : ""
          }`}
        >
          <div className="h-4 w-3/4 bg-green-500 mt-2 ml-2"></div>
          <div className="h-4 w-1/2 bg-blue-500 mt-2 ml-2"></div>
          <div className="h-4 w-2/3 bg-purple-500 mt-2 ml-2"></div>
        </div>
      );
    case "flip":
      return (
        <div
          className={`w-16 h-16 bg-gray-800 rounded-lg ${
            active ? "animate-flip" : ""
          }`}
        >
          <div className="w-full h-full flex items-center justify-center">
            <Briefcase className="text-white" />
          </div>
        </div>
      );
    case "graph":
      return (
        <div
          className={`w-16 h-16 flex items-end justify-around ${
            active ? "animate-graph" : ""
          }`}
        >
          <div
            className="w-3 bg-blue-500"
            style={{ height: active ? "100%" : "20%" }}
          ></div>
          <div
            className="w-3 bg-green-500"
            style={{ height: active ? "75%" : "20%" }}
          ></div>
          <div
            className="w-3 bg-yellow-500"
            style={{ height: active ? "50%" : "20%" }}
          ></div>
          <div
            className="w-3 bg-red-500"
            style={{ height: active ? "25%" : "20%" }}
          ></div>
        </div>
      );
    default:
      return null;
  }
}
