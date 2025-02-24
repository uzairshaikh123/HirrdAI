"use client";
import { Hero } from "@/components/hero";
import { ForCompanies } from "@/components/for-companies";
import { ForCandidates } from "@/components/for-candidates";
import { LiveAIDemo } from "@/components/live-ai-demo";
import { SignupForm } from "@/components/signup-form";
import { Testimonials } from "@/components/testimonials";
import { Footer } from "@/components/footer";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";
import { AIWritingAssistant } from "@/components/ai-writing-assistant";
import { ContentPlanner } from "@/components/content-planner";
import { Marketplace } from "@/components/marketplace";
import { Publishing } from "@/components/publishing";
import { Categorization } from "@/components/categorization";
import { MediaLibrary } from "@/components/media-library";
import IntegrationsPage from "./integrations/page";
import CompetitorAnalyzer from "./competitor-analyzer/page";
import SettingsPage from "./settings/page";
import ProfilePage from "./profile/page";
import PricingPage from "./pricing/page";
import PlansPage from "./plans/page";
import { IdeaGenerator } from "@/components/idea-generator";
import ViralPostGenerator from "./viral-post-generator/page";
import { DashboardContent } from "@/components/dashboard-content";
import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import { AnalyticsDashboard } from "@/components/analytics-dashboard";
import { CTASection } from "@/components/cta-section";
import { TabSection } from "@/components/tab-section";
import { MouseTrail } from "@/components/mouse-trail";
import { Navbar } from "@/components/navbar";
import { Toaster } from "react-hot-toast";

export default function Home() {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [authChecked, setAuthChecked] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/");
    } else {
      setAuthChecked(true);
    }
  }, [router]);

  const renderContent = () => {
    switch (activeSection) {
      case "ai-resume":
        return <AIWritingAssistant />;
      case "ai-coding":
        return <ContentPlanner />;
      case "interview-prep":
        return <AnalyticsDashboard />;
      case "jobs":
        return <Marketplace />;
      case "ai-writing":
        return <AIWritingAssistant />;
      case "content-planning":
        return <ContentPlanner />;
      case "analytics":
        return <AnalyticsDashboard />;
      case "marketplace":
        return <Marketplace />;
      case "publishing":
        return <Publishing />;
      case "categorization":
        return <Categorization />;
      case "media-library":
        return <MediaLibrary />;
      case "integrations":
        return <IntegrationsPage />;
      case "competitor-analyzer":
        return <CompetitorAnalyzer />;
      case "settings":
        return <SettingsPage />;
      case "profile":
        return <ProfilePage />;
      case "pricing":
        return <PricingPage />;
      case "plans":
        return <PlansPage />;
      case "idea-generator":
        return <IdeaGenerator />;
      case "viral-post-generator":
        return <ViralPostGenerator />;
      default:
        return <DashboardContent />;
    }
  };

  if (!authChecked) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between bg-black text-white">
        <Toaster />
        <Navbar />
        <MouseTrail />
        <Hero />
        <ForCompanies />
        <ForCandidates />
        {/* <LiveAIDemo /> */}
        <TabSection />
        <SignupForm />
        <CTASection />
        {/* <Testimonials /> */}
        <Footer />
      </main>
    ); // or a loading spinner
  }
  return (
    <div className="flex h-screen bg-background">
      <Toaster />
      {/* <Sidebar setActiveSection={setActiveSection} /> */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header activeSection={activeSection} />
        <main className="flex-1 overflow-y-auto p-6 bg-gradient-to-br from-background to-secondary">
          <div className="container mx-auto">
            <div className="glassmorphic rounded-lg p-6 shadow-lg">
              {renderContent()}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
