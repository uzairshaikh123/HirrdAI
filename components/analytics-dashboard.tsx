"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Download, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { ContentPerformance } from "./analytics/content-performance"
import { SocialMediaAnalytics } from "./analytics/social-media-analytics"
import { PredictiveInsights } from "./analytics/predictive-insights"
import { CustomDashboard } from "./analytics/custom-dashboard"

export function AnalyticsDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const { theme, setTheme } = useTheme()

  const handleExport = () => {
    // Implement export functionality
    console.log("Exporting analytics data...")
  }

  return (
    <Card className="w-full max-w-6xl mx-auto">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>AI-Powered Analytics Suite</CardTitle>
          <CardDescription>Comprehensive insights for data-driven decision making</CardDescription>
        </div>
        <div className="flex items-center space-x-2">
          <Switch
            id="dark-mode"
            checked={theme === "dark"}
            onCheckedChange={() => setTheme(theme === "light" ? "dark" : "light")}
          />
          <Label htmlFor="dark-mode">
            {theme === "light" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Label>
          <Button variant="outline" size="sm" onClick={handleExport}>
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="content">Content Performance</TabsTrigger>
            <TabsTrigger value="social">Social Media</TabsTrigger>
            <TabsTrigger value="predictive">Predictive Insights</TabsTrigger>
            <TabsTrigger value="custom">Custom Dashboard</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <CustomDashboard />
          </TabsContent>
          <TabsContent value="content">
            <ContentPerformance />
          </TabsContent>
          <TabsContent value="social">
            <SocialMediaAnalytics />
          </TabsContent>
          <TabsContent value="predictive">
            <PredictiveInsights />
          </TabsContent>
          <TabsContent value="custom">
            <CustomDashboard />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

