"use client";

import { motion } from "framer-motion";
import { Twitter, Linkedin, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-blue-950/20 border-t border-blue-500/20">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              AI Hiring Platform
            </h3>
            <p className="text-gray-400">
              Revolutionizing recruitment with AI technology
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Features</li>
              <li>Pricing</li>
              <li>Use Cases</li>
              <li>Documentation</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-blue-500/20">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} AI Hiring Platform. All rights
            reserved.
          </p>
          <div className="flex space-x-4">
            <SocialIcon href="#" icon={Twitter} />
            <SocialIcon href="#" icon={Linkedin} />
            <SocialIcon href="#" icon={Github} />
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, icon: Icon }) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="p-2 rounded-full bg-blue-950/50 text-blue-400 hover:bg-blue-900/50 hover:text-blue-300 transition-colors duration-200"
    >
      <Icon className="h-5 w-5" />
    </motion.a>
  );
}
