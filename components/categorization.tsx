"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"

export function Categorization() {
  const [content, setContent] = useState("")
  const [categories, setCategories] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const categorizeContent = async () => {
    setIsLoading(true)
    try {
      const response = await fetch("/api/categorize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content }),
      })
      const data = await response.json()
      if (response.ok) {
        setCategories(data.categories)
      } else {
        console.error("Error:", data.error)
        // Handle error (e.g., show error message to user)
      }
    } catch (error) {
      console.error("Error:", error)
      // Handle error (e.g., show error message to user)
    }
    setIsLoading(false)
  }

  return (
    <Card className="m-4">
      <CardHeader>
        <CardTitle>AI Content Categorization</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="content">Content to Categorize</Label>
          <Input
            id="content"
            placeholder="Enter your content here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <Button onClick={categorizeContent} disabled={!content} loading={isLoading}>
          Categorize Content
        </Button>
        {categories.length > 0 && (
          <div className="space-y-2">
            <Label>Suggested Categories:</Label>
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <Badge key={index} variant="secondary">
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

