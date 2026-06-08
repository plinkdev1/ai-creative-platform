"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Globe, Menu, X } from "lucide-react"
import { useAuth } from "@/lib/auth-context"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Header() {
  const [isDark, setIsDark] = useState(false)
  const [language, setLanguage] = useState("English")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { user } = useAuth()

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle("dark")
  }

  const languages = ["English", "Español", "Français", "Deutsch", "Português", "日本語", "中文"]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-orange-500 to-pink-600" />
          <span className="text-xl font-bold">Sapphari</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="#features"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/resources"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Resources
          </Link>
          <Link
            href="/community"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Community
          </Link>
          <Link
            href="/docs"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Documentation
          </Link>
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4">
          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <Globe className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={language === lang ? "bg-accent" : ""}
                >
                  {lang}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Theme Toggle */}
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="hidden md:flex">
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          {/* Login/Dashboard Button */}
          <Button asChild className="hidden md:flex">
            <Link href={user ? "/dashboard" : "/login"}>{user ? "Go to Dashboard" : "Login to Dashboard"}</Link>
          </Button>

          {/* Mobile Menu Toggle */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container flex flex-col space-y-4 px-4 py-6">
            <Link
              href="#features"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/resources"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Resources
            </Link>
            <Link
              href="/community"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Community
            </Link>
            <Link
              href="/docs"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Documentation
            </Link>
            <div className="flex items-center space-x-2 pt-4 border-t border-border">
              <Button variant="outline" size="sm" onClick={toggleTheme} className="flex-1 bg-transparent">
                {isDark ? "Light" : "Dark"} Mode
              </Button>
              <Button asChild size="sm" className="flex-1">
                <Link href={user ? "/dashboard" : "/login"}>{user ? "Dashboard" : "Login"}</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
