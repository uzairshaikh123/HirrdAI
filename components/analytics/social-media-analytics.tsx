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

const platformData = [
  { platform: "YouTube", followers: 100000, engagement: 5000, growth: 2.5 },
  { platform: "Instagram", followers: 50000, engagement: 3000, growth: 1.8 },
  { platform: "TikTok", followers: 75000, engagement: 8000, growth: 5.2 },
  { platform: "Twitter", followers: 30000, engagement: 1500, growth: 0.9 },
  { platform: "LinkedIn", followers: 20000, engagement: 1000, growth: 1.2 },
];

const growthData = Array.from({ length: 12 }, (_, i) => ({
  month: `2023-${i + 1}`,
  YouTube: Math.floor(Math.random() * 5000) + 1000,
  Instagram: Math.floor(Math.random() * 3000) + 500,
  TikTok: Math.floor(Math.random() * 8000) + 2000,
  Twitter: Math.floor(Math.random() * 2000) + 300,
  LinkedIn: Math.floor(Math.random() * 1000) + 200,
}));

export function SocialMediaAnalytics() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Social Media Performance</CardTitle>
          <CardDescription>
            Followers and engagement across platforms
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={platformData}>
              <XAxis dataKey="platform" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Bar
                yAxisId="left"
                dataKey="followers"
                fill="#8884d8"
                name="Followers"
              />
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
          <CardTitle>Follower Growth Trends</CardTitle>
          <CardDescription>
            Monthly follower growth across platforms
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={growthData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="YouTube" stroke="#ff0000" />
              <Line type="monotone" dataKey="Instagram" stroke="#e1306c" />
              <Line type="monotone" dataKey="TikTok" stroke="#69c9d0" />
              <Line type="monotone" dataKey="Twitter" stroke="#1da1f2" />
              <Line type="monotone" dataKey="LinkedIn" stroke="#0077b5" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
