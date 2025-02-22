"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Instagram, Youtube, Linkedin, Twitch } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

const platforms = [
  { name: "Instagram", icon: Instagram, color: "bg-pink-600" },
  { name: "YouTube", icon: Youtube, color: "bg-red-600" },
  { name: "LinkedIn", icon: Linkedin, color: "bg-blue-600" },
  { name: "Twitch", icon: Twitch, color: "bg-purple-600" },
]

export default function IntegrationsPage() {
  const [connectedPlatforms, setConnectedPlatforms] = useState<string[]>([])
  const { toast } = useToast()

  const togglePlatform = (platformName: string) => {
    setConnectedPlatforms((prev) =>
      prev.includes(platformName) ? prev.filter((p) => p !== platformName) : [...prev, platformName],
    )
  }

  const handleConnect = (platformName: string) => {
    // Here you would typically initiate the OAuth flow for the selected platform
    toast({
      title: `Connecting to ${platformName}`,
      description: "Redirecting to authentication page...",
    })
    // Simulate successful connection after a delay
    setTimeout(() => {
      togglePlatform(platformName)
      toast({
        title: `Connected to ${platformName}`,
        description: "You can now manage your content on this platform.",
      })
    }, 2000)
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Platform Integrations</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {platforms.map((platform) => (
          <Card key={platform.name}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <platform.icon className={`mr-2 h-6 w-6 ${platform.color} text-white rounded-full p-1`} />
                {platform.name}
              </CardTitle>
              <CardDescription>Manage your {platform.name} content</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <Switch
                  checked={connectedPlatforms.includes(platform.name)}
                  onCheckedChange={() => togglePlatform(platform.name)}
                />
                <span>{connectedPlatforms.includes(platform.name) ? "Connected" : "Disconnected"}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                onClick={() => handleConnect(platform.name)}
                disabled={connectedPlatforms.includes(platform.name)}
              >
                {connectedPlatforms.includes(platform.name) ? "Manage" : "Connect"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

