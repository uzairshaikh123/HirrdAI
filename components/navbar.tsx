"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const solutions = [
  { name: "AI Resume Screening", href: "#" },
  { name: "Coding Assessments", href: "#" },
  { name: "Project-Based Hiring", href: "#" },
  { name: "AI Interview Assistant", href: "#" },
];

const resources = [
  { name: "Documentation", href: "#" },
  { name: "Case Studies", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Support", href: "#" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-blue-500 blur-lg opacity-50" />
              <h1 className="relative text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                Hirrd AI
              </h1>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavDropdown
              title="Solutions"
              items={solutions}
              isActive={activeDropdown === "solutions"}
              onMouseEnter={() => setActiveDropdown("solutions")}
              onMouseLeave={() => setActiveDropdown(null)}
            />
            <NavDropdown
              title="Resources"
              items={resources}
              isActive={activeDropdown === "resources"}
              onMouseEnter={() => setActiveDropdown("resources")}
              onMouseLeave={() => setActiveDropdown(null)}
            />
            <Link
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Pricing
            </Link>
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                className="text-gray-300 hover:text-white"
              >
                Sign In
              </Button>
              <Button className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.7)] transition-all duration-300">
                Get Started
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-300" />
            ) : (
              <Menu className="h-6 w-6 text-gray-300" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/90 backdrop-blur-lg border-t border-gray-800"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              <MobileDropdown title="Solutions" items={solutions} />
              <MobileDropdown title="Resources" items={resources} />
              <Link
                href="#"
                className="block py-2 text-gray-300 hover:text-white transition-colors"
              >
                Pricing
              </Link>
              <div className="pt-4 space-y-2">
                <Button
                  variant="ghost"
                  className="w-full text-gray-300 hover:text-white"
                >
                  Sign In
                </Button>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300">
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

function NavDropdown({ title, items, isActive, onMouseEnter, onMouseLeave }) {
  return (
    <div
      className="relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors">
        <span>{title}</span>
        <ChevronDown
          className={`h-4 w-4 transition-transform ${
            isActive ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 mt-2 w-48 rounded-md bg-black/90 backdrop-blur-lg border border-gray-800 shadow-lg"
          >
            <div className="py-2">
              {items.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-gray-300 hover:bg-blue-500/10 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileDropdown({ title, items }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-2 text-gray-300 hover:text-white transition-colors"
      >
        <span>{title}</span>
        <ChevronDown
          className={`h-4 w-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="pl-4 space-y-2"
          >
            {items.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-400 hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
