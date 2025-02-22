"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Copy, TrendingUp, Download, Plus } from "lucide-react"
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

// Mock data for trending keywords
const trendingKeywords = [
  { keyword: "AI content creation", volume: 15000, growth: 25, category: "tech" },
  { keyword: "Machine learning trends", volume: 12000, growth: 18, category: "tech" },
  { keyword: "Data science jobs", volume: 10000, growth: 15, category: "tech" },
  { keyword: "Python programming", volume: 20000, growth: 10, category: "tech" },
  { keyword: "Blockchain technology", volume: 8000, growth: 20, category: "tech" },
  { keyword: "Stock market analysis", volume: 18000, growth: 12, category: "finance" },
  { keyword: "Cryptocurrency investments", volume: 22000, growth: 30, category: "finance" },
  { keyword: "Personal finance tips", volume: 13000, growth: 8, category: "finance" },
  { keyword: "Streaming services comparison", volume: 25000, growth: 15, category: "entertainment" },
  { keyword: "Home workout routines", volume: 30000, growth: 22, category: "health" },
]

// Mock function to simulate keyword search
const searchKeyword = async (keyword: string) => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  const result = {
    keyword,
    volume: Math.floor(Math.random() * 20000) + 5000,
    growth: Math.floor(Math.random() * 30) - 5,
    trend: Array.from({ length: 12 }, () => Math.floor(Math.random() * 100)),
  }

  // AI-powered suggestions
  const suggestions = [`${keyword} best practices`, `${keyword} for beginners`, `advanced ${keyword} techniques`]

  return { ...result, suggestions }
}

// Mock function for trend prediction
const predictTrends = (keywords) => {
  return keywords.map((kw) => ({
    ...kw,
    predictedGrowth: Math.floor(Math.random() * 50) + 10,
  }))
}

export default function CompetitorAnalyzer() {
  const [activeTab, setActiveTab] = useState("trends")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResult, setSearchResult] = useState(null)
  const [isSearching, setIsSearching] = useState(false)
  const [customCategories, setCustomCategories] = useState([])
  const [newCategory, setNewCategory] = useState("")
  const [selectedLocation, setSelectedLocation] = useState("global")
  const [filteredKeywords, setFilteredKeywords] = useState(trendingKeywords)
  const [sortBy, setSortBy] = useState("volume")
  const [predictedTrends, setPredictedTrends] = useState([])

  useEffect(() => {
    const filtered = trendingKeywords.filter((kw) => selectedCategory === "all" || kw.category === selectedCategory)
    const sorted = filtered.sort((a, b) => b[sortBy] - a[sortBy])
    setFilteredKeywords(sorted)
  }, [selectedCategory, sortBy])

  useEffect(() => {
    setPredictedTrends(predictTrends(filteredKeywords.slice(0, 5)))
  }, [filteredKeywords])

  const handleSearch = async () => {
    setIsSearching(true)
    const result = await searchKeyword(searchTerm)
    setSearchResult(result)
    setIsSearching(false)
  }

  const handleAddCategory = () => {
    if (newCategory && !customCategories.includes(newCategory)) {
      setCustomCategories([...customCategories, newCategory])
      setNewCategory("")
    }
  }

  const handleCopyKeyword = (keyword) => {
    navigator.clipboard.writeText(keyword)
    toast({
      title: "Keyword Copied",
      description: `"${keyword}" has been copied to your clipboard.`,
    })
  }

  const handleExportKeywords = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      filteredKeywords.map((kw) => `${kw.keyword},${kw.volume},${kw.growth}`).join("\n")
    const encodedUri = encodeURI(csvContent)
    const link = document.createElement("a")
    link.setAttribute("href", encodedUri)
    link.setAttribute("download", "trending_keywords.csv")
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">AI-Powered Content Analyzer</h1>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="trends">Trend Discovery</TabsTrigger>
          <TabsTrigger value="search">Keyword Analysis</TabsTrigger>
          <TabsTrigger value="predictions">Trend Predictions</TabsTrigger>
        </TabsList>
        <TabsContent value="trends">
          <Card>
            <CardHeader>
              <CardTitle>Trending Keywords</CardTitle>
              <CardDescription>Discover the hottest keywords in your industry</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-4 mb-4">
                <div className="flex-1">
                  <Label htmlFor="category">Category</Label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="tech">Technology</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="health">Health</SelectItem>
                      <SelectItem value="entertainment">Entertainment</SelectItem>
                      {customCategories.map((cat) => (
                        <SelectItem key={cat} value={cat}>
                          {cat}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex-1">
                  <Label htmlFor="location">Location</Label>
                  <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                    <SelectTrigger id="location">
                      <SelectValue placeholder="Select a location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="global">Global</SelectItem>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="ca">Canada</SelectItem>
                      <SelectItem value="au">Australia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex-1">
                  <Label htmlFor="sort">Sort By</Label>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger id="sort">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="volume">Search Volume</SelectItem>
                      <SelectItem value="growth">Growth Rate</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-4">
                {filteredKeywords.map((kw, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-secondary rounded-lg">
                    <div>
                      <p className="font-medium">{kw.keyword}</p>
                      <p className="text-sm text-muted-foreground">Volume: {kw.volume.toLocaleString()}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant={kw.growth > 0 ? "default" : "destructive"}>
                        <TrendingUp className="mr-1 h-3 w-3" />
                        {kw.growth}%
                      </Badge>
                      <Button size="sm" variant="ghost" onClick={() => handleCopyKeyword(kw.keyword)}>
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
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
                    <DialogDescription>Create a new category to organize your keywords.</DialogDescription>
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
              <Button onClick={handleExportKeywords}>
                <Download className="mr-2 h-4 w-4" />
                Export Keywords
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="search">
          <Card>
            <CardHeader>
              <CardTitle>Keyword Analysis</CardTitle>
              <CardDescription>Get detailed insights for any keyword</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-2 mb-4">
                <Input
                  placeholder="Enter a keyword"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Button onClick={handleSearch} disabled={isSearching}>
                  {isSearching ? "Searching..." : "Search"}
                </Button>
              </div>
              {searchResult && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">{searchResult.keyword}</h3>
                    <Badge variant={searchResult.growth > 0 ? "default" : "destructive"}>
                      <TrendingUp className="mr-1 h-3 w-3" />
                      {searchResult.growth}%
                    </Badge>
                  </div>
                  <p>Search Volume: {searchResult.volume.toLocaleString()}</p>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={searchResult.trend.map((value, index) => ({ month: index + 1, value }))}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="value" stroke="#8884d8" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">AI-Powered Suggestions:</h4>
                    <ul className="list-disc pl-5">
                      {searchResult.suggestions.map((suggestion, index) => (
                        <li key={index}>{suggestion}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="predictions">
          <Card>
            <CardHeader>
              <CardTitle>Trend Predictions</CardTitle>
              <CardDescription>AI-powered insights on future keyword trends</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {predictedTrends.map((kw, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-secondary rounded-lg">
                    <div>
                      <p className="font-medium">{kw.keyword}</p>
                      <p className="text-sm text-muted-foreground">Current Volume: {kw.volume.toLocaleString()}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary">
                        <TrendingUp className="mr-1 h-3 w-3" />
                        Predicted Growth: {kw.predictedGrowth}%
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

