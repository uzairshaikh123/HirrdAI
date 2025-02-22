"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const predictedGrowth = [
  { platform: "YouTube", current: 100000, predicted: 150000 },
  { platform: "Instagram", current: 50000, predicted: 80000 },
  { platform: "TikTok", current: 75000, predicted: 130000 },
  { platform: "Twitter", current: 30000, predicted: 45000 },
  { platform: "LinkedIn", current: 20000, predicted: 35000 },
];

const contentSuggestions = [
  { topic: "AI in Healthcare", score: 95 },
  { topic: "Sustainable Technology", score: 88 },
  { topic: "Cybersecurity Trends", score: 82 },
  { topic: "Quantum Computing", score: 79 },
  { topic: "Blockchain Applications", score: 75 },
];

export function PredictiveInsights() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Predicted Follower Growth</CardTitle>
          <CardDescription>
            AI-powered 6-month growth predictions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={predictedGrowth}>
              <XAxis dataKey="platform" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="current" fill="#8884d8" name="Current Followers" />
              <Bar
                dataKey="predicted"
                fill="#82ca9d"
                name="Predicted Followers"
              />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>AI-Suggested Content Topics</CardTitle>
          <CardDescription>
            Topics with high potential for engagement
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={contentSuggestions} layout="vertical">
              <XAxis type="number" />
              <YAxis dataKey="topic" type="category" width={150} />
              <Tooltip />
              <Bar dataKey="score" fill="#8884d8" name="Potential Score" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
