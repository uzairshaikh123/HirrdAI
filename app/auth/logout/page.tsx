"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useToast } from "@/components/ui/use-toast"
import { logout } from "@/lib/auth"

export default function LogoutPage() {
  const router = useRouter()
  const { toast } = useToast()

  useEffect(() => {
    logout()
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    })
    router.push("/auth/login")
  }, [router, toast])

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <p>Logging out...</p>
    </div>
  )
}

