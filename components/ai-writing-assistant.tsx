"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AIScriptWriter } from "./ai-script-writer"

export function AIWritingAssistant() {
  const [activeTab, setActiveTab] = useState("content")

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>AI Writing Assistant</CardTitle>
        <CardDescription>Generate various types of content with AI</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="content">General Content</TabsTrigger>
            <TabsTrigger value="script">Script Writing</TabsTrigger>
          </TabsList>
          <TabsContent value="content">
            {/* Existing content generation form */}
            <div className="text-center py-4">
              <p>General content writing assistant (existing functionality)</p>
            </div>
          </TabsContent>
          <TabsContent value="script">
            <AIScriptWriter />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

