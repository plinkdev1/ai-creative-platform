"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const glossaryTerms = [
  {
    term: "API",
    definition: "Application Programming Interface - A set of protocols and tools for building software applications",
    category: "Development",
    relatedTerms: ["REST", "GraphQL", "Webhook"],
  },
  {
    term: "OAuth",
    definition:
      "Open Authorization - An open standard for access delegation commonly used for token-based authentication",
    category: "Security",
    relatedTerms: ["Authentication", "JWT", "SSO"],
  },
  {
    term: "Webhook",
    definition: "A method of augmenting or altering the behavior of a web application with custom callbacks",
    category: "Development",
    relatedTerms: ["API", "Event-driven", "Integration"],
  },
  {
    term: "SSO",
    definition:
      "Single Sign-On - An authentication scheme that allows users to log in with a single ID to multiple systems",
    category: "Security",
    relatedTerms: ["OAuth", "SAML", "Authentication"],
  },
  {
    term: "REST",
    definition: "Representational State Transfer - An architectural style for designing networked applications",
    category: "Development",
    relatedTerms: ["API", "HTTP", "JSON"],
  },
  {
    term: "GraphQL",
    definition: "A query language for APIs and a runtime for executing those queries with your existing data",
    category: "Development",
    relatedTerms: ["API", "REST", "Query"],
  },
  {
    term: "JWT",
    definition:
      "JSON Web Token - A compact, URL-safe means of representing claims to be transferred between two parties",
    category: "Security",
    relatedTerms: ["OAuth", "Authentication", "Token"],
  },
  {
    term: "CI/CD",
    definition:
      "Continuous Integration/Continuous Deployment - Practices that enable frequent code changes to be reliably released",
    category: "DevOps",
    relatedTerms: ["Pipeline", "Automation", "Testing"],
  },
  {
    term: "Microservices",
    definition: "An architectural style that structures an application as a collection of loosely coupled services",
    category: "Architecture",
    relatedTerms: ["API", "Distributed Systems", "Containers"],
  },
  {
    term: "Serverless",
    definition: "A cloud computing execution model where the cloud provider manages the infrastructure",
    category: "Cloud",
    relatedTerms: ["Lambda", "Functions", "Cloud"],
  },
  {
    term: "Container",
    definition: "A lightweight, standalone package that includes everything needed to run a piece of software",
    category: "DevOps",
    relatedTerms: ["Docker", "Kubernetes", "Microservices"],
  },
  {
    term: "Version Control",
    definition: "A system that records changes to files over time so you can recall specific versions later",
    category: "Development",
    relatedTerms: ["Git", "GitHub", "Repository"],
  },
  {
    term: "Agile",
    definition: "An iterative approach to project management and software development",
    category: "Methodology",
    relatedTerms: ["Scrum", "Sprint", "Kanban"],
  },
  {
    term: "UI/UX",
    definition: "User Interface/User Experience - The design and interaction aspects of digital products",
    category: "Design",
    relatedTerms: ["Wireframe", "Prototype", "Usability"],
  },
  {
    term: "Responsive Design",
    definition: "An approach to web design that makes web pages render well on various devices and screen sizes",
    category: "Design",
    relatedTerms: ["Mobile-first", "Breakpoints", "Flexbox"],
  },
]

const categories = ["All", ...Array.from(new Set(glossaryTerms.map((term) => term.category)))]

export default function GlossaryPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredTerms = glossaryTerms.filter((term) => {
    const matchesSearch =
      term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
      term.definition.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "All" || term.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Platform Glossary</h1>
            <p className="text-lg text-muted-foreground">Your comprehensive guide to technical terms and concepts</p>
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search terms..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 text-base"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Results Count */}
          <div className="text-sm text-muted-foreground">
            Showing {filteredTerms.length} of {glossaryTerms.length} terms
          </div>

          {/* Terms List */}
          <div className="space-y-4">
            {filteredTerms.map((term, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-2xl">{term.term}</CardTitle>
                      <Badge variant="secondary">{term.category}</Badge>
                    </div>
                    <Button variant="ghost" size="icon" asChild>
                      <a
                        href={`https://www.google.com/search?q=${encodeURIComponent(term.term)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base">{term.definition}</CardDescription>
                  {term.relatedTerms.length > 0 && (
                    <div>
                      <p className="text-sm font-medium mb-2">Related Terms:</p>
                      <div className="flex flex-wrap gap-2">
                        {term.relatedTerms.map((related, idx) => (
                          <Badge key={idx} variant="outline" className="cursor-pointer hover:bg-accent">
                            {related}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No Results */}
          {filteredTerms.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No terms found matching your search</p>
              <Button
                variant="link"
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("All")
                }}
              >
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
