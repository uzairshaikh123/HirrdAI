"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Loader2, Lightbulb, TrendingUp, Save, ThumbsUp, ThumbsDown, RefreshCw, Plus } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { toast } from "@/components/ui/use-toast"

// Mock function to simulate AI idea generation
const generateIdeas = async (category: string, prompt: string) => {
  await new Promise((resolve) => setTimeout(resolve, 1500))
  return [
    {
      id: 1,
      title: "AI-powered personal finance assistant",
      category: "Tech",
      contentType: "Mobile App",
      viralPotential: 85,
      description:
        "An AI-driven app that provides personalized financial advice and helps users manage their expenses and investments.",
    },
    {
      id: 2,
      title: "Sustainable fashion marketplace",
      category: "Lifestyle",
      contentType: "E-commerce Platform",
      viralPotential: 72,
      description:
        "An online platform connecting eco-conscious consumers with sustainable fashion brands and second-hand luxury items.",
    },
    {
      id: 3,
      title: "Virtual reality meditation experiences",
      category: "Health",
      contentType: "VR Application",
      viralPotential: 78,
      description:
        "Immersive VR environments for guided meditation sessions, helping users reduce stress and improve mental well-being.",
    },
    {
      id: 4,
      title: "Blockchain-based voting system",
      category: "Tech",
      contentType: "Web Application",
      viralPotential: 90,
      description:
        "A secure and transparent online voting platform utilizing blockchain technology to ensure election integrity.",
    },
    {
      id: 5,
      title: "AI-driven recipe generator for dietary restrictions",
      category: "Food",
      contentType: "Mobile App",
      viralPotential: 68,
      description:
        "An app that creates personalized recipes based on users' dietary restrictions, allergies, and nutritional goals.",
    },
  ]
}

// Mock function to simulate trend analysis
const analyzeTrends = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return [
    {
      keyword: "Artificial Intelligence",
      growth: 25,
      relatedTopics: ["Machine Learning", "Neural Networks", "Deep Learning"],
    },
    { keyword: "Sustainable Living", growth: 18, relatedTopics: ["Zero Waste", "Eco-friendly Products", "Minimalism"] },
    {
      keyword: "Remote Work",
      growth: 30,
      relatedTopics: ["Digital Nomads", "Virtual Collaboration", "Work-Life Balance"],
    },
    { keyword: "Mental Health", growth: 22, relatedTopics: ["Mindfulness", "Therapy Apps", "Self-care"] },
    { keyword: "Cryptocurrency", growth: 15, relatedTopics: ["Bitcoin", "Blockchain", "Decentralized Finance"] },
  ]
}

// Mock function to simulate competitor analysis
const analyzeCompetitors = async (idea: string) => {
  await new Promise((resolve) => setTimeout(resolve, 1200))
  return [
    { name: "Company A", similarIdea: "AI-powered budgeting tool", uniqueAngle: "Focus on millennials and Gen Z" },
    {
      name: "Company B",
      similarIdea: "Robo-advisor for personal finance",
      uniqueAngle: "Integration with major banks",
    },
    { name: "Company C", similarIdea: "Financial literacy app", uniqueAngle: "Gamification of learning process" },
  ]
}

export function IdeaGenerator() {
  const [activeTab, setActiveTab] = useState("generate")
  const [category, setCategory] = useState("Tech")
  const [prompt, setPrompt] = useState("")
  const [ideas, setIdeas] = useState([])
  const [isGenerating, setIsGenerating] = useState(false)
  const [trends, setTrends] = useState([])
  const [customCategories, setCustomCategories] = useState([])
  const [newCategory, setNewCategory] = useState("")
  const [brainstormMode, setBrainstormMode] = useState(false)
  const [selectedIdea, setSelectedIdea] = useState(null)
  const [competitorInsights, setCompetitorInsights] = useState([])
  const [isAnalyzingCompetitors, setIsAnalyzingCompetitors] = useState(false)

  useEffect(() => {
    analyzeTrends().then(setTrends)
  }, [])

  const handleGenerateIdeas = async () => {
    setIsGenerating(true)
    const newIdeas = await generateIdeas(category, prompt)
    setIdeas(newIdeas)
    setIsGenerating(false)
    toast({
      title: "Ideas Generated",
      description: `${newIdeas.length} new ideas have been generated based on your input.`,
    })
  }

  const handleAddCategory = () => {
    if (newCategory && !customCategories.includes(newCategory)) {
      setCustomCategories([...customCategories, newCategory])
      setNewCategory("")
      toast({
        title: "Category Added",
        description: `${newCategory} has been added to your custom categories.`,
      })
    }
  }

  const handleRefinement = (ideaId: number, action: "like" | "dislike") => {
    setIdeas(
      ideas.map((idea) =>
        idea.id === ideaId
          ? {
              ...idea,
              viralPotential:
                action === "like" ? Math.min(idea.viralPotential + 5, 100) : Math.max(idea.viralPotential - 5, 0),
            }
          : idea,
      ),
    )
  }

  const handleBrainstorm = () => {
    setBrainstormMode(!brainstormMode)
    if (!brainstormMode) {
      toast({
        title: "Brainstorm Mode Activated",
        description: "AI will continuously refine ideas based on your feedback.",
      })
    }
  }

  const handleExportIdea = (idea) => {
    const blob = new Blob([JSON.stringify(idea, null, 2)], { type: "application/json" })
    const href = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = href
    link.download = `idea_${idea.id}.json`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    toast({
      title: "Idea Exported",
      description: `"${idea.title}" has been exported as a JSON file.`,
    })
  }

  const handleAnalyzeCompetitors = async (idea) => {
    setIsAnalyzingCompetitors(true)
    const insights = await analyzeCompetitors(idea.title)
    setCompetitorInsights(insights)
    setIsAnalyzingCompetitors(false)
    setSelectedIdea(idea)
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>AI-Powered Idea Generator</CardTitle>
        <CardDescription>Generate innovative ideas with the power of AI</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="generate">Generate Ideas</TabsTrigger>
            <TabsTrigger value="trends">Trend Analysis</TabsTrigger>
            <TabsTrigger value="competitors">Competitor Insights</TabsTrigger>
          </TabsList>

          <TabsContent value="generate" className="space-y-4">
            <div className="flex space-x-4">
              <div className="w-1/2">
                <Label htmlFor="category">Category</Label>
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Tech">Tech</SelectItem>
                    <SelectItem value="Business">Business</SelectItem>
                    <SelectItem value="Lifestyle">Lifestyle</SelectItem>
                    <SelectItem value="Finance">Finance</SelectItem>
                    <SelectItem value="Entertainment">Entertainment</SelectItem>
                    {customCategories.map((cat) => (
                      <SelectItem key={cat} value={cat}>
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="w-1/2">
                <Label htmlFor="prompt">Idea Prompt (Optional)</Label>
                <Input
                  id="prompt"
                  placeholder="Enter a basic idea or keywords..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="brainstorm-mode" checked={brainstormMode} onCheckedChange={handleBrainstorm} />
              <Label htmlFor="brainstorm-mode">Brainstorm Mode</Label>
            </div>
            <Button onClick={handleGenerateIdeas} disabled={isGenerating}>
              {isGenerating ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating Ideas...
                </>
              ) : (
                <>
                  <Lightbulb className="mr-2 h-4 w-4" />
                  Generate Ideas
                </>
              )}
            </Button>
            <ScrollArea className="h-[400px] w-full rounded-md border p-4">
              {ideas.map((idea) => (
                <Card key={idea.id} className="mb-4">
                  <CardHeader>
                    <CardTitle>{idea.title}</CardTitle>
                    <CardDescription>
                      {idea.category} | {idea.contentType}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-2">{idea.description}</p>
                    <div className="flex justify-between items-center">
                      <Badge variant="secondary">
                        <TrendingUp className="mr-1 h-3 w-3" />
                        Viral Potential: {idea.viralPotential}%
                      </Badge>
                      <div className="space-x-2">
                        <Button size="sm" variant="outline" onClick={() => handleRefinement(idea.id, "like")}>
                          <ThumbsUp className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => handleRefinement(idea.id, "dislike")}>
                          <ThumbsDown className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" onClick={() => handleExportIdea(idea)}>
                      <Save className="mr-2 h-4 w-4" />
                      Export Idea
                    </Button>
                    <Button variant="outline" onClick={() => handleAnalyzeCompetitors(idea)}>
                      <TrendingUp className="mr-2 h-4 w-4" />
                      Analyze Competitors
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </ScrollArea>
          </TabsContent>

          <TabsContent value="trends" className="space-y-4">
            <h3 className="text-lg font-semibold">Current Trending Topics</h3>
            <ScrollArea className="h-[400px] w-full rounded-md border p-4">
              {trends.map((trend, index) => (
                <Card key={index} className="mb-4">
                  <CardHeader>
                    <CardTitle className="flex justify-between items-center">
                      <span>{trend.keyword}</span>
                      <Badge variant="default">
                        <TrendingUp className="mr-1 h-3 w-3" />
                        {trend.growth}% Growth
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-2">Related Topics:</h4>
                    <div className="flex flex-wrap gap-2">
                      {trend.relatedTopics.map((topic, i) => (
                        <Badge key={i} variant="secondary">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </ScrollArea>
          </TabsContent>

          <TabsContent value="competitors" className="space-y-4">
            <h3 className="text-lg font-semibold">Competitor Insights</h3>
            {selectedIdea ? (
              <div>
                <p className="mb-2">Analyzing competitors for: {selectedIdea.title}</p>
                {isAnalyzingCompetitors ? (
                  <div className="flex items-center justify-center h-[200px]">
                    <Loader2 className="h-8 w-8 animate-spin" />
                  </div>
                ) : (
                  <ScrollArea className="h-[400px] w-full rounded-md border p-4">
                    {competitorInsights.map((competitor, index) => (
                      <Card key={index} className="mb-4">
                        <CardHeader>
                          <CardTitle>{competitor.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p>
                            <strong>Similar Idea:</strong> {competitor.similarIdea}
                          </p>
                          <p>
                            <strong>Unique Angle:</strong> {competitor.uniqueAngle}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </ScrollArea>
                )}
              </div>
            ) : (
              <p>Select an idea and click "Analyze Competitors" to see insights.</p>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">
              <Plus className="mr-2 h-4 w-4" />
              Add Custom Category
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Custom Category</DialogTitle>
              <DialogDescription>Create a new category for idea generation.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={handleAddCategory}>Add Category</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <Button variant="outline" onClick={() => setActiveTab(activeTab === "generate" ? "trends" : "generate")}>
          <RefreshCw className="mr-2 h-4 w-4" />
          {activeTab === "generate" ? "View Trends" : "Generate Ideas"}
        </Button>
      </CardFooter>
    </Card>
  )
}

