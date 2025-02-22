"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const influencers = [
  { id: 1, name: "Alice Johnson", niche: "Tech", followers: "50K", rate: "$500" },
  { id: 2, name: "Bob Smith", niche: "Fitness", followers: "100K", rate: "$800" },
  { id: 3, name: "Carol Williams", niche: "Fashion", followers: "75K", rate: "$600" },
]

export function Marketplace() {
  const [selectedInfluencer, setSelectedInfluencer] = useState(null)

  const handleConnect = (influencer) => {
    setSelectedInfluencer(influencer)
    // Here you would typically initiate a connection or chat with the influencer
  }

  return (
    <div className="m-4 space-y-4">
      <h2 className="text-2xl font-bold">Influencer-Startup Marketplace</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {influencers.map((influencer) => (
          <Card key={influencer.id}>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={`https://i.pravatar.cc/150?u=${influencer.id}`} />
                  <AvatarFallback>
                    {influencer.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>{influencer.name}</CardTitle>
                  <CardDescription>{influencer.niche}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between">
                <Badge>{influencer.followers} followers</Badge>
                <span className="font-bold">{influencer.rate}/post</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={() => handleConnect(influencer)} className="w-full">
                Connect
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      {selectedInfluencer && (
        <Card>
          <CardHeader>
            <CardTitle>Connection Request Sent</CardTitle>
            <CardDescription>You've initiated a connection with {selectedInfluencer.name}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>They will be notified of your interest. You can discuss collaboration details once they accept.</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

