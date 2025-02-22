import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Free",
    price: "$0/mo",
    features: ["10 AI scripts/month", "Basic thumbnail generator", "Basic analytics"],
  },
  {
    name: "Creator",
    price: "$19/mo",
    features: ["100 AI scripts/month", "Advanced thumbnails", "AI video enhancer", "1M video views analytics"],
  },
  {
    name: "Pro",
    price: "$49/mo",
    features: ["Unlimited AI scripts", "Custom AI training", "Advanced video AI", "10M+ video analytics"],
  },
  {
    name: "Agency",
    price: "$99/mo",
    features: ["Multi-user collaboration", "Client workspaces", "Priority support", "API access"],
  },
]

export default function PricingPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-10">Choose Your Plan</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan) => (
          <Card key={plan.name} className="flex flex-col">
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription className="text-2xl font-bold">{plan.price}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Choose Plan</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

