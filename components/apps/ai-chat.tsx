"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Send, Sparkles, ThumbsUp, ThumbsDown, RotateCcw } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Message {
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

const quickPrompts = [
  "Build an e-commerce platform",
  "Create a SaaS dashboard",
  "Design a mobile app",
  "Set up a data analytics pipeline",
  "Build a real-time chat app",
  "Create a content management system",
]

export function AIChat({
  onToolRecommend,
  userTier,
}: {
  onToolRecommend: (tool: any) => void
  userTier: string
}) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi! I'm your Stack Assistant. I help you discover the perfect tech stack for your projects.\n\nTell me about what you're building:\n• What problem are you solving?\n• Who is your target user?\n• What features do you need?\n• Any preferences or constraints?",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [conversationCount, setConversationCount] = useState(0)

  const tierLimits = {
    free: 10,
    pro: 100,
    enterprise: Number.POSITIVE_INFINITY,
  }

  const limit = tierLimits[userTier as keyof typeof tierLimits] || 10

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  const handleSend = async () => {
    if (!input.trim() || isLoading) return

    if (conversationCount >= limit) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `You've reached your ${userTier} tier limit of ${limit} conversations per day. Upgrade to Pro for 100 conversations or Enterprise for unlimited access.`,
          timestamp: new Date(),
        },
      ])
      return
    }

    const userMessage: Message = {
      role: "user",
      content: input,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)
    setConversationCount((prev) => prev + 1)

    // Simulate AI response (in production, this would call your AI API)
    setTimeout(() => {
      const aiResponse: Message = {
        role: "assistant",
        content: generateMockResponse(input),
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, aiResponse])
      setIsLoading(false)
    }, 2000)
  }

  const handleQuickPrompt = (prompt: string) => {
    setInput(prompt)
  }

  const generateMockResponse = (query: string) => {
    return `**Understanding Summary**
Based on your requirements, you're building a modern web application. Let me recommend a solid tech stack.

**Recommended Tech Stack**

🎨 **Frontend:**
• **React** - Component-based architecture, large ecosystem
• **Tailwind CSS** - Rapid UI development with utility classes
• **Next.js** - Server-side rendering and routing

⚙️ **Backend:**
• **Node.js** - JavaScript runtime for scalability
• **Express** - Minimal and flexible web framework
• **PostgreSQL** - Reliable relational database

☁️ **Infrastructure:**
• **Vercel** - Easy deployment and hosting
• **Supabase** - Backend-as-a-service with auth

**Implementation Roadmap:**
1. Set up Next.js project (1-2 days)
2. Design UI with Tailwind (3-5 days)
3. Build API routes (5-7 days)
4. Integrate database (2-3 days)
5. Deploy and test (1-2 days)

**Complexity & Cost Estimate:**
• Development Time: 2-3 weeks
• Team Size: 2-3 developers
• Monthly Cost: $50-100
• Difficulty: Intermediate

Would you like me to explain any of these choices or suggest alternatives?`
  }

  return (
    <div className="space-y-4">
      {/* Quick Prompts */}
      {messages.length === 1 && (
        <div className="flex flex-wrap gap-2">
          {quickPrompts.map((prompt) => (
            <Button
              key={prompt}
              variant="outline"
              size="sm"
              onClick={() => handleQuickPrompt(prompt)}
              className="text-xs"
            >
              {prompt}
            </Button>
          ))}
        </div>
      )}

      {/* Messages */}
      <ScrollArea className="h-[400px] pr-4" ref={scrollRef}>
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
              <Card
                className={`max-w-[80%] p-4 ${
                  message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                }`}
              >
                <div className="whitespace-pre-wrap text-sm">{message.content}</div>
                {message.role === "assistant" && index > 0 && (
                  <div className="flex gap-2 mt-3 pt-3 border-t border-border/50">
                    <Button size="sm" variant="ghost" className="h-7 text-xs">
                      <ThumbsUp className="h-3 w-3 mr-1" />
                      Helpful
                    </Button>
                    <Button size="sm" variant="ghost" className="h-7 text-xs">
                      <ThumbsDown className="h-3 w-3 mr-1" />
                      Not helpful
                    </Button>
                    <Button size="sm" variant="ghost" className="h-7 text-xs">
                      <RotateCcw className="h-3 w-3 mr-1" />
                      Regenerate
                    </Button>
                  </div>
                )}
              </Card>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <Card className="max-w-[80%] p-4 bg-muted">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 animate-pulse" />
                  <span className="text-sm">Thinking...</span>
                </div>
              </Card>
            </div>
          )}
        </div>
      </ScrollArea>

      {/* Input */}
      <div className="flex gap-2">
        <Textarea
          placeholder="Describe your project needs..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault()
              handleSend()
            }
          }}
          className="min-h-[80px]"
        />
        <Button onClick={handleSend} disabled={!input.trim() || isLoading} className="self-end">
          <Send className="h-4 w-4" />
        </Button>
      </div>

      {/* Usage indicator */}
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>
          {conversationCount} / {limit === Number.POSITIVE_INFINITY ? "∞" : limit} conversations today
        </span>
        {userTier === "free" && (
          <Button variant="link" size="sm" className="h-auto p-0 text-xs">
            Upgrade for more
          </Button>
        )}
      </div>
    </div>
  )
}
