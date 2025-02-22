import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Edit3, BarChart2, Users, Lightbulb, ShoppingBag } from "lucide-react"

export function DashboardContent() {
  return (
    <ScrollArea className="h-full">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="neumorphic hover-effect">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">AI Writing Assistant</CardTitle>
            <Edit3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15 Articles</div>
            <p className="text-xs text-muted-foreground">Generated this week</p>
          </CardContent>
        </Card>
        <Card className="neumorphic hover-effect">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Analytics</CardTitle>
            <BarChart2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+20.1%</div>
            <p className="text-xs text-muted-foreground">Engagement increase</p>
          </CardContent>
        </Card>
        <Card className="neumorphic hover-effect">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Team Collaboration</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7 Members</div>
            <p className="text-xs text-muted-foreground">Active this month</p>
          </CardContent>
        </Card>
        <Card className="neumorphic hover-effect">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">AI Idea Generator</CardTitle>
            <Lightbulb className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">32 Ideas</div>
            <p className="text-xs text-muted-foreground">Generated this week</p>
          </CardContent>
        </Card>
        <Card className="neumorphic hover-effect">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Marketplace</CardTitle>
            <ShoppingBag className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12 Campaigns</div>
            <p className="text-xs text-muted-foreground">Active collaborations</p>
          </CardContent>
        </Card>
      </div>
    </ScrollArea>
  )
}

