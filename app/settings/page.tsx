"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"

export default function SettingsPage() {
  const [email, setEmail] = useState("user@example.com")
  const [notifications, setNotifications] = useState(true)
  const { toast } = useToast()

  const handleSave = () => {
    // Here you would typically save the settings to your backend
    toast({
      title: "Settings saved",
      description: "Your settings have been successfully updated.",
    })
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      <Card>
        <CardHeader>
          <CardTitle>Account Settings</CardTitle>
          <CardDescription>Manage your account settings and preferences.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="notifications" checked={notifications} onCheckedChange={setNotifications} />
            <Label htmlFor="notifications">Enable notifications</Label>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleSave}>Save Changes</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

