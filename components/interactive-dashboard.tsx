"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  BarChart,
  FileText,
  Zap,
  TrendingUp,
  Eye,
  Heart,
  MessageCircle,
  Share,
  Sparkles,
  Target,
  Clock,
} from "lucide-react"

const storyTemplates = [
  {
    id: 1,
    title: "Problem-Solution Story",
    description: "Share a challenge your client faced and how you solved it",
    category: "Case Study",
    engagement: 85,
    color: "bg-blue-500",
  },
  {
    id: 2,
    title: "Transformation Journey",
    description: "Show before/after results with compelling metrics",
    category: "Success Story",
    engagement: 92,
    color: "bg-green-500",
  },
  {
    id: 3,
    title: "Industry Insight",
    description: "Share valuable industry trends and predictions",
    category: "Thought Leadership",
    engagement: 78,
    color: "bg-purple-500",
  },
  {
    id: 4,
    title: "Personal Learning",
    description: "Share lessons learned from failures or successes",
    category: "Personal Brand",
    engagement: 88,
    color: "bg-orange-500",
  },
]

const sampleMetrics = {
  views: 12500,
  likes: 340,
  comments: 28,
  shares: 15,
  engagement: 3.1,
}

export function InteractiveDashboard() {
  const [selectedTemplate, setSelectedTemplate] = useState(storyTemplates[0])
  const [storyContent, setStoryContent] = useState({
    hook: "Did you know that 73% of B2B buyers ignore sales pitches?",
    problem: "My client was struggling with low response rates...",
    solution: "We implemented a storytelling approach that...",
    result: "Within 30 days, their response rate increased by 340%",
  })
  const [activeTab, setActiveTab] = useState("builder")

  return (
    <div className="w-full max-w-7xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden border">
      {/* Dashboard Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">LinkedIn Sales Story Builder</h2>
            <p className="text-blue-100">Create compelling stories that convert</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <div className="text-2xl font-bold">12</div>
              <div className="text-xs text-blue-100">Stories Created</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">340%</div>
              <div className="text-xs text-blue-100">Avg Engagement</div>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-gray-50">
          <TabsTrigger value="builder" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Story Builder
          </TabsTrigger>
          <TabsTrigger value="templates" className="flex items-center gap-2">
            <Sparkles className="h-4 w-4" />
            Templates
          </TabsTrigger>
          <TabsTrigger value="analytics" className="flex items-center gap-2">
            <BarChart className="h-4 w-4" />
            Analytics
          </TabsTrigger>
          <TabsTrigger value="optimization" className="flex items-center gap-2">
            <Target className="h-4 w-4" />
            Optimize
          </TabsTrigger>
        </TabsList>

        {/* Story Builder Tab */}
        <TabsContent value="builder" className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Story Input */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Build Your Story
                  </CardTitle>
                  <CardDescription>
                    Using template: <Badge variant="secondary">{selectedTemplate.title}</Badge>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="hook">Hook (Attention Grabber)</Label>
                    <Textarea
                      id="hook"
                      value={storyContent.hook}
                      onChange={(e) => setStoryContent({ ...storyContent, hook: e.target.value })}
                      placeholder="Start with a compelling statistic or question..."
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="problem">Problem/Challenge</Label>
                    <Textarea
                      id="problem"
                      value={storyContent.problem}
                      onChange={(e) => setStoryContent({ ...storyContent, problem: e.target.value })}
                      placeholder="Describe the challenge your client faced..."
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="solution">Solution</Label>
                    <Textarea
                      id="solution"
                      value={storyContent.solution}
                      onChange={(e) => setStoryContent({ ...storyContent, solution: e.target.value })}
                      placeholder="Explain how you solved the problem..."
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="result">Results/Outcome</Label>
                    <Textarea
                      id="result"
                      value={storyContent.result}
                      onChange={(e) => setStoryContent({ ...storyContent, result: e.target.value })}
                      placeholder="Share the measurable results..."
                      className="mt-1"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Live Preview */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="h-5 w-5" />
                    Live Preview
                  </CardTitle>
                  <CardDescription>See how your story will look on LinkedIn</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                        JD
                      </div>
                      <div>
                        <div className="font-semibold">John Doe</div>
                        <div className="text-sm text-gray-500">Sales Director at TechCorp</div>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <p className="font-medium">{storyContent.hook}</p>
                      <p>{storyContent.problem}</p>
                      <p>{storyContent.solution}</p>
                      <p className="font-medium text-green-600">{storyContent.result}</p>
                    </div>
                    <div className="flex items-center justify-between pt-3 border-t">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Heart className="h-4 w-4" />
                          {sampleMetrics.likes}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageCircle className="h-4 w-4" />
                          {sampleMetrics.comments}
                        </span>
                        <span className="flex items-center gap-1">
                          <Share className="h-4 w-4" />
                          {sampleMetrics.shares}
                        </span>
                      </div>
                      <Badge variant="outline" className="text-green-600">
                        {sampleMetrics.engagement}% engagement
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* AI Suggestions */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-yellow-500" />
                    AI Suggestions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                    <p className="text-sm font-medium">💡 Engagement Tip</p>
                    <p className="text-sm text-gray-600">Add a question at the end to encourage comments</p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                    <p className="text-sm font-medium">📊 Data Suggestion</p>
                    <p className="text-sm text-gray-600">Include specific metrics to make your results more credible</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg border-l-4 border-green-400">
                    <p className="text-sm font-medium">🎯 SEO Tip</p>
                    <p className="text-sm text-gray-600">Add hashtags: #SalesStrategy #B2B #LinkedIn</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* Templates Tab */}
        <TabsContent value="templates" className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {storyTemplates.map((template) => (
              <Card
                key={template.id}
                className={`cursor-pointer transition-all hover:shadow-lg ${
                  selectedTemplate.id === template.id ? "ring-2 ring-blue-500" : ""
                }`}
                onClick={() => setSelectedTemplate(template)}
              >
                <CardHeader>
                  <div className={`w-full h-2 ${template.color} rounded-full mb-2`}></div>
                  <CardTitle className="text-lg">{template.title}</CardTitle>
                  <CardDescription>{template.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{template.category}</Badge>
                    <div className="flex items-center gap-1 text-sm text-green-600">
                      <TrendingUp className="h-4 w-4" />
                      {template.engagement}%
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Analytics Tab */}
        <TabsContent value="analytics" className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Total Views</p>
                    <p className="text-2xl font-bold">{sampleMetrics.views.toLocaleString()}</p>
                  </div>
                  <Eye className="h-8 w-8 text-blue-500" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Likes</p>
                    <p className="text-2xl font-bold">{sampleMetrics.likes}</p>
                  </div>
                  <Heart className="h-8 w-8 text-red-500" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Comments</p>
                    <p className="text-2xl font-bold">{sampleMetrics.comments}</p>
                  </div>
                  <MessageCircle className="h-8 w-8 text-green-500" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Shares</p>
                    <p className="text-2xl font-bold">{sampleMetrics.shares}</p>
                  </div>
                  <Share className="h-8 w-8 text-purple-500" />
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Performance Trends</CardTitle>
              <CardDescription>Your story engagement over the last 30 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Week 1</span>
                  <Progress value={65} className="w-1/2" />
                  <span className="text-sm font-medium">65%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Week 2</span>
                  <Progress value={78} className="w-1/2" />
                  <span className="text-sm font-medium">78%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Week 3</span>
                  <Progress value={85} className="w-1/2" />
                  <span className="text-sm font-medium">85%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Week 4</span>
                  <Progress value={92} className="w-1/2" />
                  <span className="text-sm font-medium">92%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Optimization Tab */}
        <TabsContent value="optimization" className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Optimization Score
                </CardTitle>
                <CardDescription>How well your story is optimized for engagement</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600">87/100</div>
                  <p className="text-sm text-gray-500">Optimization Score</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Hook Strength</span>
                    <div className="flex items-center gap-2">
                      <Progress value={90} className="w-20" />
                      <span className="text-sm font-medium">90%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Story Structure</span>
                    <div className="flex items-center gap-2">
                      <Progress value={85} className="w-20" />
                      <span className="text-sm font-medium">85%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Call to Action</span>
                    <div className="flex items-center gap-2">
                      <Progress value={75} className="w-20" />
                      <span className="text-sm font-medium">75%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">SEO Keywords</span>
                    <div className="flex items-center gap-2">
                      <Progress value={95} className="w-20" />
                      <span className="text-sm font-medium">95%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Improvement Suggestions</CardTitle>
                <CardDescription>AI-powered recommendations to boost engagement</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-red-800">Add a Call to Action</p>
                      <p className="text-sm text-red-600">End your story with a question or request for engagement</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-yellow-800">Optimize Timing</p>
                      <p className="text-sm text-yellow-600">Post between 8-10 AM for maximum visibility</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-green-800">Great Hook!</p>
                      <p className="text-sm text-green-600">Your opening statistic is attention-grabbing</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Action Buttons */}
      <div className="p-6 bg-gray-50 border-t">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Clock className="h-4 w-4" />
            Last saved: 2 minutes ago
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline">Save Draft</Button>
            <Button>Publish to LinkedIn</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
