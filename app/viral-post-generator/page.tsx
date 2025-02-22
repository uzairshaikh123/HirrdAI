"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { Loader2 } from "lucide-react"

const platforms = ["Instagram", "Twitter", "LinkedIn", "Facebook", "YouTube", "TikTok"]
const niches = ["Tech & AI", "Fashion", "Food", "Travel", "Fitness", "Business", "Entertainment"]

export default function ViralPostGenerator() {
  const [platform, setPlatform] = useState("")
  const [niche, setNiche] = useState("")
  const [topic, setTopic] = useState("")
  const [generatedPost, setGeneratedPost] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const { toast } = useToast()

  const generatePost = async () => {
    if (!platform || !niche || !topic) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields before generating a post.",
        variant: "destructive",
      })
      return
    }

    setIsGenerating(true)
    // Simulating API call to AI model
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const post = `🔥 "${topic} is changing everything! 🚀 Are you ready for the future? 🤖👇

${niche} is evolving faster than ever. In 5 years, these 5 trends will dominate:

1️⃣ [Trend 1]
2️⃣ [Trend 2]
3️⃣ [Trend 3]
4️⃣ [Trend 4]
5️⃣ [Trend 5]

Swipe 👉 to see how each trend will impact YOU!

#${niche.replace(/&/g, "").replace(/\s+/g, "")} #FutureOfWork #Innovation`

    setGeneratedPost(post)
    setIsGenerating(false)
    toast({
      title: "Post Generated",
      description: "Your viral post has been created!",
    })
  }

  return (
    <div className="container mx-auto py-10">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>AI Viral Post Generator</CardTitle>
          <CardDescription>Create engaging, trend-based content for maximum reach and engagement</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="platform">Platform</Label>
            <Select value={platform} onValueChange={setPlatform}>
              <SelectTrigger id="platform">
                <SelectValue placeholder="Select a platform" />
              </SelectTrigger>
              <SelectContent>
                {platforms.map((p) => (
                  <SelectItem key={p} value={p}>
                    {p}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="niche">Niche</Label>
            <Select value={niche} onValueChange={setNiche}>
              <SelectTrigger id="niche">
                <SelectValue placeholder="Select a niche" />
              </SelectTrigger>
              <SelectContent>
                {niches.map((n) => (
                  <SelectItem key={n} value={n}>
                    {n}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="topic">Trending Topic</Label>
            <Input
              id="topic"
              placeholder="Enter a trending topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            />
          </div>
          <Button onClick={generatePost} disabled={isGenerating}>
            {isGenerating ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating...
              </>
            ) : (
              "Generate Viral Post"
            )}
          </Button>
        </CardContent>
        {generatedPost && (
          <CardFooter>
            <div className="space-y-2 w-full">
              <Label htmlFor="generated-post">Generated Viral Post</Label>
              <Textarea id="generated-post" value={generatedPost} readOnly className="h-64 resize-none" />
            </div>
          </CardFooter>
        )}
      </Card>
    </div>
  )
}

