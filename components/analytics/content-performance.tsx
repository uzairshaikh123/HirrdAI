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
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const contentData = [
  {
    title: "10 AI Trends for 2023",
    views: 15000,
    engagement: 2500,
    viralScore: 85,
  },
  {
    title: "Machine Learning Basics",
    views: 12000,
    engagement: 1800,
    viralScore: 72,
  },
  {
    title: "Data Science Career Guide",
    views: 18000,
    engagement: 3000,
    viralScore: 90,
  },
  {
    title: "Python for Beginners",
    views: 20000,
    engagement: 3500,
    viralScore: 95,
  },
  {
    title: "Deep Learning Explained",
    views: 10000,
    engagement: 1500,
    viralScore: 68,
  },
];

const trendData = Array.from({ length: 30 }, (_, i) => ({
  date: `2023-05-${i + 1}`,
  views: Math.floor(Math.random() * 5000) + 1000,
  engagement: Math.floor(Math.random() * 1000) + 100,
}));

export function ContentPerformance() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Content Performance Overview</CardTitle>
          <CardDescription>
            Top performing content based on views and engagement
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={contentData}>
              <XAxis dataKey="title" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Bar yAxisId="left" dataKey="views" fill="#8884d8" name="Views" />
              <Bar
                yAxisId="right"
                dataKey="engagement"
                fill="#82ca9d"
                name="Engagement"
              />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Content Trend Analysis</CardTitle>
          <CardDescription>Daily views and engagement trends</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={trendData}>
              <XAxis dataKey="date" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="views"
                stroke="#8884d8"
                name="Views"
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="engagement"
                stroke="#82ca9d"
                name="Engagement"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
