"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  CalendarDays,
  Edit3,
  BarChart2,
  Share2,
  Tag,
  Users,
  Lightbulb,
  Image,
  ShoppingBag,
  DollarSign,
  Settings,
  User,
  CreditCard,
  Menu,
  Link,
  TrendingUp,
  Zap,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const sidebarItems = [
  { icon: Edit3, label: "AI Resume", id: "ai-resume" },
  { icon: Edit3, label: "AI Coding", id: "ai-coding" },
  { icon: Edit3, label: "Interview Prep", id: "interview-prep" },
  { icon: Edit3, label: "Jobs", id: "ai-jobs" },
  { icon: BarChart2, label: "Analytics", id: "analytics" },

  // { icon: CalendarDays, label: "Content Planning", id: "content-planning" },
  // { icon: Share2, label: "Publishing", id: "publishing" },
  // { icon: Tag, label: "Categorization", id: "categorization" },
  // { icon: Users, label: "Collaboration", id: "collaboration" },
  // { icon: Lightbulb, label: "Idea Generator", id: "idea-generator" },
  // { icon: Image, label: "Media Library", id: "media-library" },
  // { icon: ShoppingBag, label: "Marketplace", id: "marketplace" },
  // { icon: DollarSign, label: "Personal Store", id: "personal-store" },
  // { icon: Link, label: "Integrations", id: "integrations" },
  // { icon: TrendingUp, label: "Competitor Analyzer", id: "competitor-analyzer" },
  // { icon: Settings, label: "Settings", id: "settings" },
  // { icon: User, label: "Profile", id: "profile" },
  // { icon: CreditCard, label: "Plans & Pricing", id: "plans" },
  // { icon: Zap, label: "Viral Post Generator", id: "viral-post-generator" },
];

export function Sidebar({ setActiveSection }) {
  const [open, setOpen] = useState(false);

  const SidebarContent = () => (
    <div className="flex h-full flex-col">
      <div className="p-6">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Hirrd AI
        </h1>
      </div>
      <ScrollArea className="flex-1 px-4">
        <div className="space-y-2">
          {sidebarItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              className="w-full justify-start hover:bg-primary/10 hover:text-primary transition-all duration-200 ease-in-out"
              onClick={() => {
                setActiveSection(item.id);
                setOpen(false);
              }}
            >
              <item.icon className="mr-2 h-4 w-4" />
              {item.label}
            </Button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );

  return (
    <>
      <aside className="hidden w-64 border-r bg-card text-card-foreground shadow-lg md:block">
        <SidebarContent />
      </aside>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="fixed left-4 top-4 z-40 md:hidden"
          >
            <Menu className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <SidebarContent />
        </SheetContent>
      </Sheet>
    </>
  );
}
