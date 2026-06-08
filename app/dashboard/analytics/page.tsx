"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown, Users, FolderKanban, Clock, Activity } from "lucide-react"
import { Line, LineChart, Bar, BarChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const activityData = [
  { date: "Jan 1", projects: 4, files: 12, collaborations: 8 },
  { date: "Jan 8", projects: 6, files: 18, collaborations: 12 },
  { date: "Jan 15", projects: 8, files: 24, collaborations: 16 },
  { date: "Jan 22", projects: 7, files: 21, collaborations: 14 },
  { date: "Jan 29", projects: 10, files: 30, collaborations: 20 },
  { date: "Feb 5", projects: 12, files: 36, collaborations: 24 },
]

const projectsData = [
  { name: "Website", value: 35 },
  { name: "Mobile", value: 28 },
  { name: "Marketing", value: 22 },
  { name: "Design", value: 15 },
]

export default function AnalyticsPage() {
  const stats = [
    {
      label: "Total Projects",
      value: "12",
      change: "+2.5%",
      trend: "up",
      icon: FolderKanban,
    },
    {
      label: "Active Users",
      value: "5",
      change: "+12.3%",
      trend: "up",
      icon: Users,
    },
    {
      label: "Avg. Project Time",
      value: "4.2h",
      change: "-8.1%",
      trend: "down",
      icon: Clock,
    },
    {
      label: "Total Activity",
      value: "248",
      change: "+18.2%",
      trend: "up",
      icon: Activity,
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Analytics</h1>
        <p className="text-muted-foreground mt-2">Track your team's performance and project insights</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          const TrendIcon = stat.trend === "up" ? TrendingUp : TrendingDown
          return (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-orange-500 to-pink-600 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div
                    className={`flex items-center gap-1 text-sm font-medium ${
                      stat.trend === "up" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    <TrendIcon className="h-4 w-4" />
                    {stat.change}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="text-2xl font-bold mt-1">{stat.value}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Activity Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                projects: { label: "Projects", color: "hsl(var(--chart-1))" },
                files: { label: "Files", color: "hsl(var(--chart-2))" },
                collaborations: { label: "Collaborations", color: "hsl(var(--chart-3))" },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={activityData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line type="monotone" dataKey="projects" stroke="var(--color-projects)" strokeWidth={2} />
                  <Line type="monotone" dataKey="files" stroke="var(--color-files)" strokeWidth={2} />
                  <Line type="monotone" dataKey="collaborations" stroke="var(--color-collaborations)" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Projects by Category</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                value: { label: "Projects", color: "hsl(var(--chart-1))" },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={projectsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="value" fill="var(--color-value)" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
