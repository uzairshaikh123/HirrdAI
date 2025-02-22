"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const widgetOptions = [
  { id: "followers", title: "Follower Growth", type: "line" },
  { id: "engagement", title: "Engagement Rate", type: "bar" },
  { id: "content", title: "Content Performance", type: "pie" },
  { id: "sentiment", title: "Audience Sentiment", type: "pie" },
];

const mockData = {
  followers: Array.from({ length: 12 }, (_, i) => ({
    month: i + 1,
    value: Math.floor(Math.random() * 10000) + 5000,
  })),
  engagement: Array.from({ length: 5 }, (_, i) => ({
    platform: ["YouTube", "Instagram", "TikTok", "Twitter", "LinkedIn"][i],
    rate: Math.random() * 10,
  })),
  content: [
    { name: "Video", value: 400 },
    { name: "Blog", value: 300 },
    { name: "Podcast", value: 200 },
    { name: "Infographic", value: 100 },
  ],
  sentiment: [
    { name: "Positive", value: 60 },
    { name: "Neutral", value: 30 },
    { name: "Negative", value: 10 },
  ],
};

function Widget({ id, title, type }) {
  const data = mockData[id];

  const renderChart = () => {
    switch (type) {
      case "line":
        return (
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={data}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        );
      case "bar":
        return (
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={data}>
              <XAxis dataKey="platform" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="rate" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        );
      case "pie":
        return (
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label
              />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        );
      default:
        return null;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>{renderChart()}</CardContent>
    </Card>
  );
}

export function CustomDashboard() {
  const [widgets, setWidgets] = useState(widgetOptions.slice(0, 2));

  const onDragEnd = (result: any) => {
    if (!result.destination) return;

    const items = Array.from(widgets);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setWidgets(items);
  };

  const addWidget = (widgetId: any) => {
    const widgetToAdd = widgetOptions.find((w) => w.id === widgetId);
    if (widgetToAdd && !widgets.some((w) => w.id === widgetId)) {
      setWidgets([...widgets, widgetToAdd]);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Select onValueChange={addWidget}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Add widget" />
          </SelectTrigger>
          <SelectContent>
            {widgetOptions.map((widget) => (
              <SelectItem key={widget.id} value={widget.id}>
                {widget.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="widgets">
          {(provided: any) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="space-y-4"
            >
              {widgets.map((widget, index) => (
                <Draggable
                  key={widget.id}
                  draggableId={widget.id}
                  index={index}
                >
                  {(provided: any) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Widget
                        id={widget.id}
                        title={widget.title}
                        type={widget.type}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
