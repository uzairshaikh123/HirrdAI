"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Loader2, Music, Image, Edit, Trash2 } from "lucide-react"
import { toast } from "@/components/ui/use-toast"

// Mock function to simulate AI-generated music
const generateMusic = async (params) => {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  return {
    id: Math.random().toString(36).substr(2, 9),
    title: `AI Generated ${params.genre} Track`,
    duration: "3:30",
    url: "/path/to/audio.mp3",
  }
}

// Mock function to simulate AI-generated video
const generateVideo = async (params) => {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  return {
    id: Math.random().toString(36).substr(2, 9),
    title: `AI Generated ${params.theme} Video`,
    duration: "0:30",
    url: "/path/to/video.mp4",
  }
}

// Mock function to simulate text-to-video generation
const textToVideo = async (text) => {
  await new Promise((resolve) => setTimeout(resolve, 4000))
  return {
    id: Math.random().toString(36).substr(2, 9),
    title: `Video: ${text.slice(0, 20)}...`,
    duration: "1:00",
    url: "/path/to/text-video.mp4",
  }
}

// Mock function to simulate text-to-music generation
const textToMusic = async (text) => {
  await new Promise((resolve) => setTimeout(resolve, 2500))
  return {
    id: Math.random().toString(36).substr(2, 9),
    title: `Music: ${text.slice(0, 20)}...`,
    duration: "2:45",
    url: "/path/to/text-music.mp3",
  }
}

export function MediaLibrary() {
  const [activeTab, setActiveTab] = useState("generate")
  const [isGenerating, setIsGenerating] = useState(false)
  const [mediaType, setMediaType] = useState("music")
  const [genre, setGenre] = useState("cinematic")
  const [theme, setTheme] = useState("corporate")
  const [textPrompt, setTextPrompt] = useState("")
  const [generatedMedia, setGeneratedMedia] = useState([])
  const [libraryMedia, setLibraryMedia] = useState([
    { id: "1", title: "Upbeat Corporate", type: "music", duration: "2:30", url: "/path/to/music1.mp3" },
    { id: "2", title: "Inspirational Video", type: "video", duration: "1:15", url: "/path/to/video1.mp4" },
    { id: "3", title: "Product Showcase", type: "video", duration: "0:45", url: "/path/to/video2.mp4" },
    { id: "4", title: "Relaxing Ambient", type: "music", duration: "5:00", url: "/path/to/music2.mp3" },
  ])
  const [searchTerm, setSearchTerm] = useState("")
  const [editingMedia, setEditingMedia] = useState(null)
  const audioRef = useRef(null)
  const videoRef = useRef(null)

  const handleGenerate = async () => {
    setIsGenerating(true)
    let newMedia
    if (mediaType === "music") {
      newMedia = await generateMusic({ genre })
    } else if (mediaType === "video") {
      newMedia = await generateVideo({ theme })
    }
    setGeneratedMedia([newMedia, ...generatedMedia])
    setIsGenerating(false)
    toast({
      title: "Media Generated",
      description: `Your ${mediaType} has been successfully generated.`,
    })
  }

  const handleTextToMedia = async () => {
    setIsGenerating(true)
    let newMedia
    if (mediaType === "music") {
      newMedia = await textToMusic(textPrompt)
    } else if (mediaType === "video") {
      newMedia = await textToVideo(textPrompt)
    }
    setGeneratedMedia([newMedia, ...generatedMedia])
    setIsGenerating(false)
    toast({
      title: "Media Generated",
      description: `Your ${mediaType} has been successfully generated from text.`,
    })
  }

  const handleSaveToLibrary = (media) => {
    setLibraryMedia([media, ...libraryMedia])
    toast({
      title: "Saved to Library",
      description: `${media.title} has been saved to your library.`,
    })
  }

  const handleDeleteFromLibrary = (mediaId) => {
    setLibraryMedia(libraryMedia.filter((m) => m.id !== mediaId))
    toast({
      title: "Deleted from Library",
      description: "The media has been removed from your library.",
    })
  }

  const filteredLibraryMedia = libraryMedia.filter((media) =>
    media.title.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleEditMedia = (media) => {
    setEditingMedia(media)
  }

  const handleUpdateMedia = (updatedMedia) => {
    setLibraryMedia(libraryMedia.map((m) => (m.id === updatedMedia.id ? updatedMedia : m)))
    setEditingMedia(null)
    toast({
      title: "Media Updated",
      description: "Your media has been successfully updated.",
    })
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>AI-Powered Media Library</CardTitle>
        <CardDescription>Generate, customize, and manage AI-created music and videos</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="generate">Generate Media</TabsTrigger>
            <TabsTrigger value="library">Media Library</TabsTrigger>
            <TabsTrigger value="edit">Edit & Customize</TabsTrigger>
          </TabsList>

          <TabsContent value="generate" className="space-y-4">
            <div className="flex space-x-4">
              <div className="w-1/2">
                <Label htmlFor="mediaType">Media Type</Label>
                <Select value={mediaType} onValueChange={setMediaType}>
                  <SelectTrigger id="mediaType">
                    <SelectValue placeholder="Select media type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="music">Music</SelectItem>
                    <SelectItem value="video">Video</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {mediaType === "music" ? (
                <div className="w-1/2">
                  <Label htmlFor="genre">Genre</Label>
                  <Select value={genre} onValueChange={setGenre}>
                    <SelectTrigger id="genre">
                      <SelectValue placeholder="Select genre" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cinematic">Cinematic</SelectItem>
                      <SelectItem value="upbeat">Upbeat</SelectItem>
                      <SelectItem value="dramatic">Dramatic</SelectItem>
                      <SelectItem value="lofi">Lo-Fi</SelectItem>
                      <SelectItem value="classical">Classical</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              ) : (
                <div className="w-1/2">
                  <Label htmlFor="theme">Theme</Label>
                  <Select value={theme} onValueChange={setTheme}>
                    <SelectTrigger id="theme">
                      <SelectValue placeholder="Select theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="corporate">Corporate</SelectItem>
                      <SelectItem value="cinematic">Cinematic</SelectItem>
                      <SelectItem value="social">Social Media</SelectItem>
                      <SelectItem value="product">Product Showcase</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>
            <Button onClick={handleGenerate} disabled={isGenerating}>
              {isGenerating ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>Generate {mediaType === "music" ? "Music" : "Video"}</>
              )}
            </Button>
            <div className="space-y-2">
              <Label htmlFor="textPrompt">Text-to-Media Prompt</Label>
              <Input
                id="textPrompt"
                placeholder="Describe your desired music or video..."
                value={textPrompt}
                onChange={(e) => setTextPrompt(e.target.value)}
              />
              <Button onClick={handleTextToMedia} disabled={isGenerating || !textPrompt}>
                {isGenerating ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>Generate from Text</>
                )}
              </Button>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Generated Media</h3>
              <ScrollArea className="h-[200px] w-full rounded-md border p-4">
                {generatedMedia.map((media) => (
                  <div key={media.id} className="flex items-center justify-between py-2">
                    <div>
                      <p className="font-medium">{media.title}</p>
                      <p className="text-sm text-muted-foreground">Duration: {media.duration}</p>
                    </div>
                    <Button onClick={() => handleSaveToLibrary(media)}>Save to Library</Button>
                  </div>
                ))}
              </ScrollArea>
            </div>
          </TabsContent>

          <TabsContent value="library" className="space-y-4">
            <div className="flex space-x-2">
              <Input placeholder="Search media..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
            <ScrollArea className="h-[300px] w-full rounded-md border p-4">
              {filteredLibraryMedia.map((media) => (
                <div key={media.id} className="flex items-center justify-between py-2">
                  <div>
                    <p className="font-medium">{media.title}</p>
                    <p className="text-sm text-muted-foreground">
                      Type: {media.type}, Duration: {media.duration}
                    </p>
                  </div>
                  <div className="space-x-2">
                    <Button size="sm" onClick={() => handleEditMedia(media)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => handleDeleteFromLibrary(media.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </ScrollArea>
          </TabsContent>

          <TabsContent value="edit" className="space-y-4">
            {editingMedia ? (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Editing: {editingMedia.title}</h3>
                {editingMedia.type === "music" ? (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="tempo">Tempo</Label>
                      <Slider id="tempo" min={60} max={180} step={1} defaultValue={[120]} />
                    </div>
                    <div>
                      <Label htmlFor="instruments">Instruments</Label>
                      <Select>
                        <SelectTrigger id="instruments">
                          <SelectValue placeholder="Select instruments" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="piano">Piano</SelectItem>
                          <SelectItem value="guitar">Guitar</SelectItem>
                          <SelectItem value="drums">Drums</SelectItem>
                          <SelectItem value="strings">Strings</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <audio ref={audioRef} controls src={editingMedia.url} className="w-full" />
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="videoEffects">Video Effects</Label>
                      <Select>
                        <SelectTrigger id="videoEffects">
                          <SelectValue placeholder="Select effect" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">None</SelectItem>
                          <SelectItem value="blur">Blur</SelectItem>
                          <SelectItem value="sepia">Sepia</SelectItem>
                          <SelectItem value="grayscale">Grayscale</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="removeBackground" />
                      <Label htmlFor="removeBackground">Remove Background</Label>
                    </div>
                    <video ref={videoRef} controls src={editingMedia.url} className="w-full" />
                  </div>
                )}
                <div className="flex space-x-2">
                  <Button onClick={() => handleUpdateMedia(editingMedia)}>Save Changes</Button>
                  <Button variant="outline" onClick={() => setEditingMedia(null)}>
                    Cancel
                  </Button>
                </div>
              </div>
            ) : (
              <p>Select a media item from the library to edit.</p>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={() => setActiveTab("generate")}>
          <Music className="mr-2 h-4 w-4" />
          Generate New Media
        </Button>
        <Button variant="outline" onClick={() => setActiveTab("library")}>
          <Image className="mr-2 h-4 w-4" />
          View Library
        </Button>
      </CardFooter>
    </Card>
  )
}

