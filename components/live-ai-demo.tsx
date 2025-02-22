"use client";

import type React from "react";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2, Send } from "lucide-react";

export function LiveAIDemo() {
  const [resume, setResume] = useState("");
  const [score, setScore] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    {
      role: "ai",
      content:
        "Hello! I'm your AI interview assistant. What would you like to practice today?",
    },
  ]);
  const [userInput, setUserInput] = useState("");

  const handleResumeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate AI processing
    setTimeout(() => {
      setScore(Math.floor(Math.random() * 41) + 60); // Random score between 60 and 100
      setLoading(false);
    }, 2000);
  };

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const newUserMessage = { role: "user", content: userInput };
    setChatMessages([...chatMessages, newUserMessage]);
    setUserInput("");

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        role: "ai",
        content: "That's a great question! Here's a sample answer...",
      };
      setChatMessages((prevMessages) => [...prevMessages, aiResponse]);
    }, 1000);
  };

  return (
    <section className="w-full py-20 px-4 ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">
          Live AI Demo
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-black bg-opacity-50 border-gray-800 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">AI Resume Scorer</CardTitle>
              <CardDescription className="text-gray-300">
                Get an instant AI-generated score for your resume
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleResumeSubmit} className="space-y-4">
                <Input
                  placeholder="Paste your resume text here..."
                  value={resume}
                  onChange={(e) => setResume(e.target.value)}
                  className="bg-gray-800 text-white border-gray-700"
                />
                <Button
                  type="submit"
                  disabled={loading || !resume}
                  className="w-full bg-white text-black hover:bg-gray-200"
                >
                  {loading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    "Analyze Resume"
                  )}
                </Button>
              </form>
              {score !== null && (
                <div className="mt-4 text-center">
                  <p className="text-2xl font-bold text-white">
                    Resume Score: {score}
                  </p>
                  <p className="text-gray-300">
                    {score >= 80
                      ? "Excellent! Your resume is well-optimized."
                      : score >= 60
                      ? "Good start! There's room for improvement."
                      : "Your resume needs significant improvements."}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
          <Card className="bg-black bg-opacity-50 border-gray-800 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">
                AI Interview Assistant
              </CardTitle>
              <CardDescription className="text-gray-300">
                Practice with our AI-powered interview chatbot
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 overflow-y-auto mb-4 space-y-2">
                {chatMessages.map((message, index) => (
                  <div
                    key={index}
                    className={`p-2 rounded-lg ${
                      message.role === "user"
                        ? "bg-blue-900 ml-auto"
                        : "bg-gray-800"
                    } max-w-[80%]`}
                  >
                    {message.content}
                  </div>
                ))}
              </div>
              <form onSubmit={handleChatSubmit} className="flex space-x-2">
                <Input
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-grow bg-gray-800 text-white border-gray-700"
                />
                <Button
                  type="submit"
                  className="bg-white text-black hover:bg-gray-200"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
