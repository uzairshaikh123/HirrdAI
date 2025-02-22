"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FileUp, Code, MessageSquare, Briefcase } from "lucide-react";

const steps = [
  {
    icon: FileUp,
    title: "Upload Resume",
    description: "AI Analyzes Strengths",
    preview: (
      <div className="bg-gray-800 p-4 rounded-lg">
        <div className="w-full h-32 bg-gray-700 rounded-lg mb-2 animate-pulse"></div>
        <div className="w-3/4 h-4 bg-gray-700 rounded mb-2 animate-pulse"></div>
        <div className="w-1/2 h-4 bg-gray-700 rounded animate-pulse"></div>
      </div>
    ),
  },
  {
    icon: Code,
    title: "AI Coding Feedback",
    description: "Get Personalized Insights",
    preview: (
      <div className="bg-gray-800 p-4 rounded-lg">
        <div className="w-full h-32 bg-gray-700 rounded-lg mb-2 overflow-hidden">
          <div className="w-full h-full flex">
            <div className="w-1/2 p-2">
              <div className="w-full h-4 bg-red-500 rounded mb-2"></div>
              <div className="w-3/4 h-4 bg-gray-600 rounded mb-2"></div>
              <div className="w-full h-4 bg-gray-600 rounded"></div>
            </div>
            <div className="w-1/2 p-2 ">
              <div className="w-full h-4 bg-green-500 rounded mb-2"></div>
              <div className="w-3/4 h-4 bg-gray-700 rounded mb-2"></div>
              <div className="w-full h-4 bg-gray-700 rounded"></div>
            </div>
          </div>
        </div>
        <div className="w-full h-4 bg-gray-700 rounded animate-pulse"></div>
      </div>
    ),
  },
  {
    icon: MessageSquare,
    title: "Interview Simulations",
    description: "Practice Like a Pro",
    preview: (
      <div className="bg-gray-800 p-4 rounded-lg">
        <div className="flex mb-2">
          <div className="w-8 h-8 bg-blue-500 rounded-full mr-2"></div>
          <div className="flex-1">
            <div className="w-3/4 h-4 bg-gray-700 rounded mb-1"></div>
            <div className="w-1/2 h-4 bg-gray-700 rounded"></div>
          </div>
        </div>
        <div className="flex mb-2 justify-end">
          <div className="flex-1 text-right">
            <div className="w-3/4 h-4 bg-gray-700 rounded mb-1 ml-auto"></div>
            <div className="w-1/2 h-4 bg-gray-700 rounded ml-auto"></div>
          </div>
          <div className="w-8 h-8 bg-green-500 rounded-full ml-2"></div>
        </div>
        <div className="w-full h-8 bg-gray-700 rounded"></div>
      </div>
    ),
  },
  {
    icon: Briefcase,
    title: "Job Matches",
    description: "AI Finds the Best Roles",
    preview: (
      <div className="bg-gray-800 p-4 rounded-lg">
        <div className="w-full h-8 bg-violet-600 rounded mb-2"></div>
        <div className="w-full h-16 bg-gray-700 rounded mb-2"></div>
        <div className="w-full h-16 bg-gray-700 rounded mb-2"></div>
        <div className="w-full h-16 bg-gray-700 rounded"></div>
      </div>
    ),
  },
];

export function ForCandidates() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="w-full py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">
          For Candidates
        </h2>
        <p className="text-xl mb-12 text-center text-gray-300">
          Accelerate your career with AI-powered job preparation
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(0)}
              >
                <Card className=" border-gray-800 hover:border-violet-500 transition-all duration-300 transform hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center text-white">
                      <step.icon className="mr-2 w-6 h-6 text-violet-500" />
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300">
                      {step.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="relative">
            <div className="sticky top-24">
              {activeStep !== null && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="border border-gray-800 rounded-lg p-4"
                >
                  {steps[activeStep].preview}
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
