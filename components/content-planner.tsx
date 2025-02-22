"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"

export function ContentPlanner() {
  const [date, setDate] = useState<Date>()
  const [title, setTitle] = useState("")
  const [platform, setPlatform] = useState("")

  const scheduleContent = () => {
    console.log("Scheduled:", { title, platform, date })
    // Here you would typically send this data to your backend
  }

  return (
    <Card className="m-4">
      <CardHeader>
        <CardTitle>Content Planner</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="title">Content Title</Label>
          <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="platform">Platform</Label>
          <Input id="platform" value={platform} onChange={(e) => setPlatform(e.target.value)} />
        </div>
        <div className="space-y-2">
          <Label>Publish Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-start text-left font-normal">
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
            </PopoverContent>
          </Popover>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={scheduleContent}>Schedule Content</Button>
      </CardFooter>
    </Card>
  )
}

