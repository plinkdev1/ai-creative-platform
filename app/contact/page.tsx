"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mail, MessageSquare, Phone } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Contact form submitted:", formData)
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="py-20 md:py-32">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-muted-foreground">Have questions? We'd love to hear from you.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 text-center space-y-3">
              <div className="h-12 w-12 mx-auto rounded-full bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center">
                <Mail className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-sm text-muted-foreground">hello@sapphari.com</p>
            </Card>

            <Card className="p-6 text-center space-y-3">
              <div className="h-12 w-12 mx-auto rounded-full bg-pink-100 dark:bg-pink-900/20 flex items-center justify-center">
                <MessageSquare className="h-6 w-6 text-pink-600 dark:text-pink-400" />
              </div>
              <h3 className="font-semibold">Live Chat</h3>
              <p className="text-sm text-muted-foreground">Available 9am-5pm PST</p>
            </Card>

            <Card className="p-6 text-center space-y-3">
              <div className="h-12 w-12 mx-auto rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center">
                <Phone className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="font-semibold">Phone</h3>
              <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
            </Card>
          </div>

          <Card className="p-8 max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
