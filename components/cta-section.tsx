"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl" />
          <div className="relative bg-blue-950/50 rounded-2xl p-12 backdrop-blur-sm border border-blue-500/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Hiring & Interview Prep Process?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of companies and candidates using AI to succeed.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.7)] transition-all duration-300"
              >
                Join To Change
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              {/* <Button
                size="lg"
                variant="outline"
                className="group border-blue-500 text-blue-400 hover:bg-blue-500/10 shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-all duration-300"
              >
                Optimize Your Resume
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button> */}
            </div>
          </div>
        </motion.div>
        -
      </div>
    </section>
  );
}
