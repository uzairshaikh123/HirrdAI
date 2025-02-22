"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Building2, User } from "lucide-react";

export function TabSection() {
  const [activeTab, setActiveTab] = useState("companies");

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg p-1 bg-blue-950/30">
            <Button
              variant={activeTab === "companies" ? "default" : "ghost"}
              onClick={() => setActiveTab("companies")}
              className="flex items-center space-x-2"
            >
              <Building2 className="h-4 w-4" />
              <span>For Companies</span>
            </Button>
            <Button
              variant={activeTab === "candidates" ? "default" : "ghost"}
              onClick={() => setActiveTab("candidates")}
              className="flex items-center space-x-2"
            >
              <User className="h-4 w-4" />
              <span>For Candidates</span>
            </Button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            {activeTab === "companies" ? (
              <CompaniesContent />
            ) : (
              <CandidatesContent />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function CompaniesContent() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-2xl font-bold mb-4">
          Transform Your Hiring Process
        </h3>
        <p className="text-gray-400 mb-6">
          Leverage AI-powered tools to streamline recruitment, evaluate
          candidates effectively, and make data-driven hiring decisions.
        </p>
        <ul className="space-y-4">
          <li className="flex items-center space-x-3">
            <div className="h-2 w-2 bg-blue-500 rounded-full" />
            <span>Reduce time-to-hire by 60%</span>
          </li>
          <li className="flex items-center space-x-3">
            <div className="h-2 w-2 bg-blue-500 rounded-full" />
            <span>Improve candidate quality</span>
          </li>
          <li className="flex items-center space-x-3">
            <div className="h-2 w-2 bg-blue-500 rounded-full" />
            <span>Eliminate hiring bias</span>
          </li>
        </ul>
      </div>
      <div className="bg-blue-950/20 rounded-lg p-6">
        {/* Add company dashboard preview or illustration here */}
        <div className="aspect-video bg-blue-900/20 rounded-lg animate-pulse" />
      </div>
    </div>
  );
}

function CandidatesContent() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-2xl font-bold mb-4">Boost Your Career Prospects</h3>
        <p className="text-gray-400 mb-6">
          Get personalized AI assistance to optimize your resume, practice
          interviews, and showcase your skills effectively.
        </p>
        <ul className="space-y-4">
          <li className="flex items-center space-x-3">
            <div className="h-2 w-2 bg-blue-500 rounded-full" />
            <span>Increase interview success rate</span>
          </li>
          <li className="flex items-center space-x-3">
            <div className="h-2 w-2 bg-blue-500 rounded-full" />
            <span>Perfect your resume</span>
          </li>
          <li className="flex items-center space-x-3">
            <div className="h-2 w-2 bg-blue-500 rounded-full" />
            <span>Practice with AI feedback</span>
          </li>
        </ul>
      </div>
      <div className="bg-blue-950/20 rounded-lg p-6">
        {/* Add candidate dashboard preview or illustration here */}
        <div className="aspect-video bg-blue-900/20 rounded-lg animate-pulse" />
      </div>
    </div>
  );
}
