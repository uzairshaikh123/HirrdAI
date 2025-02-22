"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Free",
    price: { monthly: 0, annually: 0 },
    features: ["10 AI-generated articles per month", "Basic analytics", "1 user"],
  },
  {
    name: "Pro",
    price: { monthly: 29, annually: 290 },
    features: [
      "100 AI-generated articles per month",
      "Advanced analytics",
      "5 users",
      "Priority support",
      "Custom branding",
    ],
  },
  {
    name: "Enterprise",
    price: { monthly: 99, annually: 990 },
    features: [
      "Unlimited AI-generated articles",
      "Advanced analytics with custom reports",
      "Unlimited users",
      "24/7 priority support",
      "Custom branding",
      "API access",
      "Dedicated account manager",
    ],
  },
]

export default function PlansPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annually">("monthly")

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">Choose Your Plan</h1>
      <div className="flex justify-center items-center space-x-4 mb-8">
        <span className={billingCycle === "monthly" ? "font-bold" : ""}>Monthly</span>
        <Switch
          checked={billingCycle === "annually"}
          onCheckedChange={() => setBillingCycle(billingCycle === "monthly" ? "annually" : "monthly")}
        />
        <span className={billingCycle === "annually" ? "font-bold" : ""}>Annually</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <Card key={plan.name} className="flex flex-col">
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>
                <span className="text-3xl font-bold">${plan.price[billingCycle]}</span>
                {plan.price[billingCycle] > 0 && (
                  <span className="text-sm">/{billingCycle === "monthly" ? "month" : "year"}</span>
                )}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">{plan.name === "Free" ? "Get Started" : "Subscribe"}</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

