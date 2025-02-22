"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const initialContent = [
  { id: 1, title: "10 Tips for Productivity", platform: "Blog", status: "Draft", date: "2023-06-01" },
  { id: 2, title: "How to Cook Perfect Pasta", platform: "YouTube", status: "Published", date: "2023-05-28" },
  { id: 3, title: "Summer Fashion Trends", platform: "Instagram", status: "Scheduled", date: "2023-06-05" },
  { id: 4, title: "Beginner's Guide to Meditation", platform: "Blog", status: "Draft", date: "2023-06-02" },
  { id: 5, title: "Top 5 Travel Destinations", platform: "Twitter", status: "Published", date: "2023-05-30" },
]

export function Publishing() {
  const [content, setContent] = useState(initialContent)
  const [titleFilter, setTitleFilter] = useState("")
  const [platformFilter, setPlatformFilter] = useState("")
  const [statusFilter, setStatusFilter] = useState("")

  const filteredContent = content.filter(
    (item) =>
      item.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      (platformFilter === "" || item.platform === platformFilter) &&
      (statusFilter === "" || item.status === statusFilter),
  )

  return (
    <Card className="m-4">
      <CardHeader>
        <CardTitle>Content Publishing</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex space-x-4">
            <div className="flex-1 space-y-2">
              <Label htmlFor="title-filter">Title Filter</Label>
              <Input
                id="title-filter"
                placeholder="Filter by title..."
                value={titleFilter}
                onChange={(e) => setTitleFilter(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="platform-filter">Platform</Label>
              <Select onValueChange={setPlatformFilter} value={platformFilter}>
                <SelectTrigger id="platform-filter">
                  <SelectValue placeholder="All Platforms" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Platforms</SelectItem>
                  <SelectItem value="Blog">Blog</SelectItem>
                  <SelectItem value="YouTube">YouTube</SelectItem>
                  <SelectItem value="Instagram">Instagram</SelectItem>
                  <SelectItem value="Twitter">Twitter</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="status-filter">Status</Label>
              <Select onValueChange={setStatusFilter} value={statusFilter}>
                <SelectTrigger id="status-filter">
                  <SelectValue placeholder="All Statuses" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="Draft">Draft</SelectItem>
                  <SelectItem value="Scheduled">Scheduled</SelectItem>
                  <SelectItem value="Published">Published</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Platform</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredContent.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.title}</TableCell>
                  <TableCell>{item.platform}</TableCell>
                  <TableCell>{item.status}</TableCell>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}

