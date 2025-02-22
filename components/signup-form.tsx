"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import toast from "react-hot-toast";
import { ArrowRight } from "lucide-react";

export function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("candidate");
  const [linkedin, setLinkedin] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    setIsLoading(true);
    e.preventDefault();
    const formData = { name, email, role, linkedin };

    try {
      const response = await fetch("http://localhost:8080/beta-access", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Thank you for your interest. We'll be in touch soon.");
        // Reset form fields
        setName("");
        setEmail("");
        setRole("");
        setLinkedin("");
      } else {
        toast.error(data.message);
        // toast({ title: "Error", description: data.message });
      }
    } catch (error) {
      // toast({ title: "Submission failed", description: "Please try again." });
      toast.error("Submission failed,Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="w-full py-20 px-4 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-gray-900 to-black"></div>
      <div className="max-w-md mx-auto relative z-10">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">
          Get Beta Access
        </h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white bg-opacity-10 p-8 rounded-lg shadow-lg border border-gray-800 backdrop-blur-sm hover:shadow-white/10 transition-all duration-300"
        >
          <div>
            <Label htmlFor="name" className="text-gray-300">
              Name
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="bg-gray-800 text-white border-gray-700"
            />
          </div>
          <div>
            <Label htmlFor="email" className="text-gray-300">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-gray-800 text-white border-gray-700"
            />
          </div>
          <div>
            <Label htmlFor="linkedin" className="text-gray-300">
              LinkedIn (Optional)
            </Label>
            <Input
              id="linkedin"
              value={linkedin}
              onChange={(e) => setLinkedin(e.target.value)}
              className="bg-gray-800 text-white border-gray-700"
            />
          </div>
          <div>
            <Label className="text-gray-300">Role</Label>
            <RadioGroup
              value={role}
              onValueChange={setRole}
              className="flex space-x-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="company"
                  id="company"
                  className="text-white"
                />
                <Label htmlFor="company" className="text-gray-300">
                  Company
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="candidate"
                  id="candidate"
                  className="text-white"
                />
                <Label htmlFor="candidate" className="text-gray-300">
                  Candidate
                </Label>
              </div>
            </RadioGroup>
          </div>
          <Button
            disabled={isLoading}
            type="submit"
            className="w-full bg-white text-black hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.7)] transition-all duration-300"
          >
            {isLoading ? "Submitting..." : "Join Beta"}
          </Button>
        </form>
      </div>
    </section>
  );
}
