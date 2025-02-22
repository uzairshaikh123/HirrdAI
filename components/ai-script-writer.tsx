"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/components/ui/use-toast"
import { Loader2, Mic, Play, Save, Share2 } from "lucide-react"

// Mock function to simulate AI script generation
const generateScript = async (prompt: string, tone: string, genre: string, length: number) => {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 2000))
  return `This is a ${tone} ${genre} script about ${prompt}. It is approximately ${length} words long.

[FADE IN:]

INT. MYSTERIOUS LABORATORY - NIGHT

We see a dimly lit room filled with strange equipment and bubbling beakers. DR. SMITH, a middle-aged scientist with wild hair, is hunched over a complex machine.

DR. SMITH
(excited)
Finally, after all these years, I've done it!

Suddenly, the machine starts to spark and shake violently.

DR. SMITH (CONT'D)
(panicked)
Oh no, what's happening?

A bright flash fills the room, and when it fades, we see...

[FADE OUT.]

This is where your amazing story continues...`
}

export function AIScriptWriter() {
  const [prompt, setPrompt] = useState("")
  const [tone, setTone] = useState("casual")
  const [genre, setGenre] = useState("movie")
  const [length, setLength] = useState([500])
  const [isGenerating, setIsGenerating] = useState(false)
  const [script, setScript] = useState("")
  const { toast } = useToast()

  const handleGenerate = async () => {
    setIsGenerating(true)
    try {
      const generatedScript = await generateScript(prompt, tone, genre, length[0])
      setScript(generatedScript)
      toast({
        title: "Script Generated",
        description: "Your script has been successfully generated!",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate script. Please try again.",
        variant: "destructive",
      })
    }
    setIsGenerating(false)
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>AI Script Writer</CardTitle>
        <CardDescription>Generate high-quality scripts with AI</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="write" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="write">Write</TabsTrigger>
            <TabsTrigger value="edit">Edit & Enhance</TabsTrigger>
          </TabsList>
          <TabsContent value="write" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="prompt">Script Idea</Label>
              <Textarea
                id="prompt"
                placeholder="Enter your script idea or prompt here..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="min-h-[100px]"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="tone">Tone</Label>
                <Select onValueChange={setTone} defaultValue={tone}>
                  <SelectTrigger id="tone">
                    <SelectValue placeholder="Select tone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="casual">Casual</SelectItem>
                    <SelectItem value="professional">Professional</SelectItem>
                    <SelectItem value="cinematic">Cinematic</SelectItem>
                    <SelectItem value="conversational">Conversational</SelectItem>
                    <SelectItem value="humorous">Humorous</SelectItem>
                    <SelectItem value="dramatic">Dramatic</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="genre">Genre</Label>
                <Select onValueChange={setGenre} defaultValue={genre}>
                  <SelectTrigger id="genre">
                    <SelectValue placeholder="Select genre" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="movie">Movie</SelectItem>
                    <SelectItem value="youtube">YouTube Video</SelectItem>
                    <SelectItem value="podcast">Podcast</SelectItem>
                    <SelectItem value="ad">Advertisement</SelectItem>
                    <SelectItem value="explainer">Explainer Video</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Script Length (words)</Label>
              <Slider min={100} max={2000} step={100} value={length} onValueChange={setLength} />
              <div className="text-right text-sm text-muted-foreground">{length} words</div>
            </div>
            <Button onClick={handleGenerate} disabled={isGenerating || !prompt}>
              {isGenerating && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {isGenerating ? "Generating..." : "Generate Script"}
            </Button>
          </TabsContent>
          <TabsContent value="edit" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="script">Your Script</Label>
              <Textarea
                id="script"
                placeholder="Your generated script will appear here..."
                value={script}
                onChange={(e) => setScript(e.target.value)}
                className="min-h-[300px]"
              />
            </div>
            <div className="flex space-x-2">
              <Button variant="outline">
                <Play className="mr-2 h-4 w-4" />
                Text-to-Speech
              </Button>
              <Button variant="outline">
                <Share2 className="mr-2 h-4 w-4" />
                Collaborate
              </Button>
              <Button variant="outline">
                <Save className="mr-2 h-4 w-4" />
                Export
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">
          <Mic className="mr-2 h-4 w-4" />
          Voice Input
        </Button>
        <div className="flex items-center space-x-2">
          <Switch id="research-mode" />
          <Label htmlFor="research-mode">Research Mode</Label>
        </div>
      </CardFooter>
    </Card>
  )
}

