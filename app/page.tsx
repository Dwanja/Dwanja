import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight, BarChart, FileText, Search, Zap } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <FileText className="h-6 w-6" />
          <span className="sr-only">LinkedIn Sales Story Builder</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#benefits">
            Benefits
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#pricing">
            Pricing
          </Link>
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
                  Create compelling, data-driven stories for LinkedIn posts and articles. Boost your sales with persuasive content.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Features
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader>
                  <FileText className="h-6 w-6 mb-2" />
                  <CardTitle>Story Templates</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Pre-designed templates for different types of sales stories.</CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <BarChart className="h-6 w-6 mb-2" />
                  <CardTitle>Data Visualization</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Create impactful visuals that support your story using CRM data.</CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Zap className="h-6 w-6 mb-2" />
                  <CardTitle>Objection-Addressing Prompts</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Weave responses to common objections into your narrative.</CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Search className="h-6 w-6 mb-2" />
                  <CardTitle>SEO Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Ensure your stories are optimized for LinkedIn's algorithm and search engines.</CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="benefits" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Benefits
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center space-y-2">
                <FileText className="h-12 w-12 mb-4" />
                <h3 className="text-xl font-bold">Engaging Content</h3>
                <p className="text-gray-500 dark:text-gray-400">Create more engaging and persuasive content on LinkedIn.</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <Zap className="h-12 w-12 mb-4" />
                <h3 className="text-xl font-bold">Proactive Objection Handling</h3>
                <p className="text-gray-500 dark:text-gray-400">Address objections proactively through storytelling.</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <BarChart className="h-12 w-12 mb-4" />
                <h3 className="text-xl font-bold">Improved Quality</h3>
                <p className="text-gray-500 dark:text-gray-400">Enhance the overall quality and effectiveness of your LinkedIn posts and articles.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="cta" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Boost Your LinkedIn Sales?
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Start creating compelling sales stories today and see the difference in your engagement and conversions.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Get Started Now</Button>
                <Button variant="outline">
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

