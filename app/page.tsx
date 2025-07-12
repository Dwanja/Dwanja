"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight, BarChart, FileText, Search, Zap, Target, TrendingUp, Users } from "lucide-react"
import { InteractiveDashboard } from "@/components/interactive-dashboard"

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState("features")

  const handleTabClick = (tab: string) => {
    setActiveTab(tab)
    const element = document.getElementById(tab)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center sticky top-0 bg-white/80 backdrop-blur-md border-b z-50">
        <Link className="flex items-center justify-center" href="#">
          <FileText className="h-6 w-6" />
          <span className="sr-only">LinkedIn Sales Story Builder</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <button
            className={`text-sm font-medium hover:underline underline-offset-4 transition-colors ${
              activeTab === "features" ? "text-blue-600 underline" : "text-gray-600"
            }`}
            onClick={() => handleTabClick("features")}
          >
            Features
          </button>
          <button
            className={`text-sm font-medium hover:underline underline-offset-4 transition-colors ${
              activeTab === "benefits" ? "text-blue-600 underline" : "text-gray-600"
            }`}
            onClick={() => handleTabClick("benefits")}
          >
            Benefits
          </button>
          <button
            className={`text-sm font-medium hover:underline underline-offset-4 transition-colors ${
              activeTab === "pricing" ? "text-blue-600 underline" : "text-gray-600"
            }`}
            onClick={() => handleTabClick("pricing")}
          >
            Pricing
          </button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  LinkedIn Sales Story Builder
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Create compelling, data-driven stories for LinkedIn posts and articles. Boost your sales with
                  persuasive content.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Dashboard Demo */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-8">
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Try It Live</h2>
                <p className="text-gray-500 max-w-[600px]">
                  Experience our intuitive story builder in action. Create, preview, and optimize your LinkedIn stories
                  in real-time.
                </p>
              </div>
              <div className="w-full">
                <InteractiveDashboard />
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Features</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <FileText className="h-6 w-6 mb-2 text-blue-600" />
                  <CardTitle>Story Templates</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Pre-designed templates for different types of sales stories.</CardDescription>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <BarChart className="h-6 w-6 mb-2 text-green-600" />
                  <CardTitle>Data Visualization</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Create impactful visuals that support your story using CRM data.</CardDescription>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Zap className="h-6 w-6 mb-2 text-yellow-600" />
                  <CardTitle>Objection-Addressing Prompts</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Weave responses to common objections into your narrative.</CardDescription>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Search className="h-6 w-6 mb-2 text-purple-600" />
                  <CardTitle>SEO Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Ensure your stories are optimized for LinkedIn's algorithm and search engines.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="benefits" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Benefits</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <FileText className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold">Engaging Content</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Create more engaging and persuasive content on LinkedIn.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-green-100 rounded-full">
                  <Target className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">Proactive Objection Handling</h3>
                <p className="text-gray-500 dark:text-gray-400">Address objections proactively through storytelling.</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-purple-100 rounded-full">
                  <TrendingUp className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold">Improved Quality</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Enhance the overall quality and effectiveness of your LinkedIn posts and articles.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Pricing</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
              <Card className="relative">
                <CardHeader>
                  <CardTitle className="text-center">Starter</CardTitle>
                  <div className="text-center">
                    <span className="text-3xl font-bold">$29</span>
                    <span className="text-gray-500">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <Users className="h-4 w-4 mr-2 text-green-600" />
                      Up to 10 stories per month
                    </li>
                    <li className="flex items-center">
                      <FileText className="h-4 w-4 mr-2 text-green-600" />
                      Basic templates
                    </li>
                    <li className="flex items-center">
                      <BarChart className="h-4 w-4 mr-2 text-green-600" />
                      Basic analytics
                    </li>
                  </ul>
                  <Button className="w-full">Get Started</Button>
                </CardContent>
              </Card>

              <Card className="relative border-blue-500 border-2">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Most Popular
                  </span>
                </div>
                <CardHeader>
                  <CardTitle className="text-center">Professional</CardTitle>
                  <div className="text-center">
                    <span className="text-3xl font-bold">$79</span>
                    <span className="text-gray-500">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <Users className="h-4 w-4 mr-2 text-green-600" />
                      Unlimited stories
                    </li>
                    <li className="flex items-center">
                      <FileText className="h-4 w-4 mr-2 text-green-600" />
                      Premium templates
                    </li>
                    <li className="flex items-center">
                      <BarChart className="h-4 w-4 mr-2 text-green-600" />
                      Advanced analytics
                    </li>
                    <li className="flex items-center">
                      <Zap className="h-4 w-4 mr-2 text-green-600" />
                      AI-powered suggestions
                    </li>
                  </ul>
                  <Button className="w-full">Get Started</Button>
                </CardContent>
              </Card>

              <Card className="relative">
                <CardHeader>
                  <CardTitle className="text-center">Enterprise</CardTitle>
                  <div className="text-center">
                    <span className="text-3xl font-bold">$199</span>
                    <span className="text-gray-500">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <Users className="h-4 w-4 mr-2 text-green-600" />
                      Team collaboration
                    </li>
                    <li className="flex items-center">
                      <FileText className="h-4 w-4 mr-2 text-green-600" />
                      Custom templates
                    </li>
                    <li className="flex items-center">
                      <BarChart className="h-4 w-4 mr-2 text-green-600" />
                      White-label options
                    </li>
                    <li className="flex items-center">
                      <Zap className="h-4 w-4 mr-2 text-green-600" />
                      Priority support
                    </li>
                  </ul>
                  <Button className="w-full">Contact Sales</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="cta" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Boost Your LinkedIn Sales?
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Start creating compelling sales stories today and see the difference in your engagement and
                  conversions.
                </p>
              </div>
              <div className="space-x-4">
                <Button size="lg">Get Started Now</Button>
                <Button variant="outline" size="lg">
                  Schedule a Demo
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2023 LinkedIn Sales Story Builder. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
