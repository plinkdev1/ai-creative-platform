"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  Star,
  Download,
  Sparkles,
  MessageSquare,
  Filter,
  Grid3x3,
  List,
  X,
  ChevronDown,
  ChevronUp,
} from "lucide-react"
import { AIChat } from "@/components/apps/ai-chat"
import { StackBuilder } from "@/components/apps/stack-builder"
import { ToolDetailModal } from "@/components/apps/tool-detail-modal"
import { useAuth } from "@/lib/auth-context"
import { toolsDatabase } from "@/lib/tools-database"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function AppsPage() {
  const { user } = useAuth()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [showFilters, setShowFilters] = useState(false)
  const [showChat, setShowChat] = useState(false)
  const [selectedTool, setSelectedTool] = useState<any>(null)
  const [sortBy, setSortBy] = useState("popular")
  const [categoriesExpanded, setCategoriesExpanded] = useState(false)
  const [pricingFilters, setPricingFilters] = useState<string[]>([])
  const [deploymentFilters, setDeploymentFilters] = useState<string[]>([])
  const [learningCurveFilters, setLearningCurveFilters] = useState<string[]>([])
  const [currentStack, setCurrentStack] = useState<any[]>([])

  const filteredTools = toolsDatabase
    .filter((tool) => {
      const matchesSearch =
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.tags?.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

      const matchesCategory = selectedCategory === "All" || tool.category === selectedCategory

      const matchesPricing = pricingFilters.length === 0 || pricingFilters.includes(tool.pricing)
      const matchesDeployment = deploymentFilters.length === 0 || deploymentFilters.includes(tool.deployment)
      const matchesLearning = learningCurveFilters.length === 0 || learningCurveFilters.includes(tool.learningCurve)

      return matchesSearch && matchesCategory && matchesPricing && matchesDeployment && matchesLearning
    })
    .sort((a, b) => {
      if (sortBy === "popular") return b.rating * b.reviews - a.rating * a.reviews
      if (sortBy === "rating") return b.rating - a.rating
      if (sortBy === "name") return a.name.localeCompare(b.name)
      if (sortBy === "recent") return b.id - a.id
      return 0
    })

  const featuredTools = filteredTools.filter((tool) => tool.featured)
  const regularTools = filteredTools.filter((tool) => !tool.featured)

  const categories = ["All", ...Array.from(new Set(toolsDatabase.map((t) => t.category)))]
  const INITIAL_CATEGORIES_COUNT = 14 // Show first 2 rows (approximately 14 categories)
  const visibleCategories = categoriesExpanded ? categories : categories.slice(0, INITIAL_CATEGORIES_COUNT)
  const hasMoreCategories = categories.length > INITIAL_CATEGORIES_COUNT

  const togglePricingFilter = (value: string) => {
    setPricingFilters((prev) => (prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]))
  }

  const toggleDeploymentFilter = (value: string) => {
    setDeploymentFilters((prev) => (prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]))
  }

  const toggleLearningFilter = (value: string) => {
    setLearningCurveFilters((prev) => (prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]))
  }

  const clearAllFilters = () => {
    setPricingFilters([])
    setDeploymentFilters([])
    setLearningCurveFilters([])
    setSelectedCategory("All")
    setSearchQuery("")
  }

  const addToStack = (tool: any) => {
    if (!currentStack.find((t) => t.id === tool.id)) {
      setCurrentStack([...currentStack, tool])
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold">Apps Intelligence Hub</h1>
          <p className="text-muted-foreground mt-2">
            AI-powered tech stack discovery • {toolsDatabase.length}+ tools and frameworks
          </p>
        </div>
        <Button onClick={() => setShowChat(!showChat)} className="gap-2">
          <MessageSquare className="h-4 w-4" />
          {showChat ? "Hide" : "Ask"} AI Assistant
        </Button>
      </div>

      {showChat && (
        <Card className="border-2 border-primary/20">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  Stack Assistant
                </CardTitle>
                <CardDescription>Your AI-powered tech stack advisor</CardDescription>
              </div>
              <Button variant="ghost" size="sm" onClick={() => setShowChat(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <AIChat onToolRecommend={addToStack} userTier={user?.plan || "free"} />
          </CardContent>
        </Card>
      )}

      {currentStack.length > 0 && (
        <StackBuilder stack={currentStack} onUpdateStack={setCurrentStack} userTier={user?.plan || "free"} />
      )}

      {/* Search and Controls */}
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search 1000+ tools and frameworks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>

        <div className="flex gap-2">
          <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="gap-2">
            <Filter className="h-4 w-4" />
            Filters
            {pricingFilters.length + deploymentFilters.length + learningCurveFilters.length > 0 && (
              <Badge variant="secondary" className="ml-1">
                {pricingFilters.length + deploymentFilters.length + learningCurveFilters.length}
              </Badge>
            )}
          </Button>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[140px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popular">Most Popular</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
              <SelectItem value="name">A-Z</SelectItem>
              <SelectItem value="recent">Recently Added</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex border rounded-md">
            <Button variant={viewMode === "grid" ? "secondary" : "ghost"} size="sm" onClick={() => setViewMode("grid")}>
              <Grid3x3 className="h-4 w-4" />
            </Button>
            <Button variant={viewMode === "list" ? "secondary" : "ghost"} size="sm" onClick={() => setViewMode("list")}>
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex gap-6">
        {showFilters && (
          <Card className="w-64 h-fit">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Filters</CardTitle>
                <Button variant="ghost" size="sm" onClick={clearAllFilters}>
                  Clear
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <ScrollArea className="h-[600px] pr-4">
                {/* Pricing Filters */}
                <div className="space-y-3">
                  <Label className="font-semibold">Pricing</Label>
                  {["Free", "Freemium", "Paid", "Open Source", "Enterprise"].map((option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <Checkbox
                        id={`pricing-${option}`}
                        checked={pricingFilters.includes(option)}
                        onCheckedChange={() => togglePricingFilter(option)}
                      />
                      <label htmlFor={`pricing-${option}`} className="text-sm cursor-pointer">
                        {option}
                      </label>
                    </div>
                  ))}
                </div>

                {/* Deployment Filters */}
                <div className="space-y-3 mt-6">
                  <Label className="font-semibold">Deployment</Label>
                  {["Cloud", "Self-hosted", "Hybrid", "On-premise"].map((option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <Checkbox
                        id={`deployment-${option}`}
                        checked={deploymentFilters.includes(option)}
                        onCheckedChange={() => toggleDeploymentFilter(option)}
                      />
                      <label htmlFor={`deployment-${option}`} className="text-sm cursor-pointer">
                        {option}
                      </label>
                    </div>
                  ))}
                </div>

                {/* Learning Curve Filters */}
                <div className="space-y-3 mt-6">
                  <Label className="font-semibold">Learning Curve</Label>
                  {["Beginner", "Intermediate", "Advanced", "Expert"].map((option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <Checkbox
                        id={`learning-${option}`}
                        checked={learningCurveFilters.includes(option)}
                        onCheckedChange={() => toggleLearningFilter(option)}
                      />
                      <label htmlFor={`learning-${option}`} className="text-sm cursor-pointer">
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        )}

        {/* Main Content */}
        <div className="flex-1 space-y-6">
          {/* Categories */}
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {visibleCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`
                    px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                    ${
                      selectedCategory === category
                        ? "bg-primary text-primary-foreground shadow-md scale-105"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:shadow-sm hover:scale-105"
                    }
                    active:scale-95
                  `}
                >
                  {category}
                </button>
              ))}
            </div>

            {hasMoreCategories && (
              <div className="flex justify-center">
                <Button variant="outline" onClick={() => setCategoriesExpanded(!categoriesExpanded)} className="gap-2">
                  {categoriesExpanded ? (
                    <>
                      Show Less Categories
                      <ChevronUp className="h-4 w-4" />
                    </>
                  ) : (
                    <>
                      Show {categories.length - INITIAL_CATEGORIES_COUNT} More Categories
                      <ChevronDown className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            )}
          </div>

          <div className="space-y-6">
            {/* Stats */}
            <div className="flex gap-4 text-sm">
              <Badge variant="secondary">{filteredTools.length} Tools Found</Badge>
              {featuredTools.length > 0 && (
                <Badge className="bg-gradient-to-r from-orange-500 to-pink-600 text-white">
                  {featuredTools.length} Featured
                </Badge>
              )}
            </div>

            {/* Featured Tools */}
            {featuredTools.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="h-5 w-5 text-orange-500" />
                  <h2 className="text-xl font-semibold">Featured Tools</h2>
                </div>
                <div className={viewMode === "grid" ? "grid gap-4 md:grid-cols-2 lg:grid-cols-3" : "space-y-3"}>
                  {featuredTools.map((tool) => (
                    <ToolCard
                      key={tool.id}
                      tool={tool}
                      viewMode={viewMode}
                      onViewDetails={setSelectedTool}
                      onAddToStack={addToStack}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* All Tools */}
            {regularTools.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold mb-4">
                  {selectedCategory === "All" ? "All Tools" : selectedCategory}
                </h2>
                <div className={viewMode === "grid" ? "grid gap-4 md:grid-cols-2 lg:grid-cols-3" : "space-y-3"}>
                  {regularTools.map((tool) => (
                    <ToolCard
                      key={tool.id}
                      tool={tool}
                      viewMode={viewMode}
                      onViewDetails={setSelectedTool}
                      onAddToStack={addToStack}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* No Results */}
            {filteredTools.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-4">No tools found matching your criteria</p>
                <Button variant="link" onClick={clearAllFilters}>
                  Clear all filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {selectedTool && (
        <ToolDetailModal tool={selectedTool} onClose={() => setSelectedTool(null)} onAddToStack={addToStack} />
      )}
    </div>
  )
}

function ToolCard({
  tool,
  viewMode,
  onViewDetails,
  onAddToStack,
}: {
  tool: any
  viewMode: "grid" | "list"
  onViewDetails: (tool: any) => void
  onAddToStack: (tool: any) => void
}) {
  if (viewMode === "list") {
    return (
      <Card className="hover:shadow-md transition-all">
        <CardContent className="p-4">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-2xl flex-shrink-0">
              {tool.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-semibold truncate">{tool.name}</h3>
                <Badge variant="outline" className="text-xs">
                  {tool.pricing}
                </Badge>
                {tool.featured && (
                  <Badge variant="secondary" className="bg-orange-500/10 text-orange-600 text-xs">
                    Featured
                  </Badge>
                )}
              </div>
              <p className="text-sm text-muted-foreground truncate">{tool.description}</p>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="flex items-center gap-1 text-sm">
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                <span className="font-medium">{tool.rating}</span>
              </div>
              <Button size="sm" variant="outline" onClick={() => onViewDetails(tool)}>
                Details
              </Button>
              <Button size="sm" onClick={() => onAddToStack(tool)}>
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="hover:shadow-lg transition-all group">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
              {tool.icon}
            </div>
            <div>
              <CardTitle className="text-lg">{tool.name}</CardTitle>
              <CardDescription className="text-xs">{tool.developer}</CardDescription>
            </div>
          </div>
          {tool.featured && (
            <Badge variant="secondary" className="bg-orange-500/10 text-orange-600 border-orange-500/20">
              <Sparkles className="h-3 w-3 mr-1" />
              Featured
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-2">{tool.description}</p>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
            <span className="font-medium">{tool.rating}</span>
            <span className="text-muted-foreground">({tool.reviews})</span>
          </div>
          <Badge variant="outline">{tool.pricing}</Badge>
        </div>

        <div className="flex gap-2">
          <Button className="flex-1 bg-transparent" variant="outline" onClick={() => onViewDetails(tool)}>
            View Details
          </Button>
          <Button onClick={() => onAddToStack(tool)}>
            <Download className="mr-2 h-4 w-4" />
            Add
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
