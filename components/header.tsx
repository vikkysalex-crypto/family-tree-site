"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b border-border">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">FT</span>
          </div>
          <span className="font-bold text-lg hidden sm:inline">FamilyTree</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#how-it-works" className="text-sm text-foreground/70 hover:text-foreground transition">
            How It Works
          </Link>
          <Link href="#features" className="text-sm text-foreground/70 hover:text-foreground transition">
            Features
          </Link>
          <Link href="/about" className="text-sm text-foreground/70 hover:text-foreground transition">
            About
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/register">Register</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 hover:bg-muted rounded-lg transition">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-4 space-y-3">
            <Link
              href="#how-it-works"
              className="block text-sm text-foreground/70 hover:text-foreground transition py-2"
            >
              How It Works
            </Link>
            <Link href="#features" className="block text-sm text-foreground/70 hover:text-foreground transition py-2">
              Features
            </Link>
            <Link href="/about" className="block text-sm text-foreground/70 hover:text-foreground transition py-2">
              About
            </Link>
            <div className="flex gap-2 pt-4">
              <Button variant="ghost" size="sm" asChild className="flex-1">
                <Link href="/login">Login</Link>
              </Button>
              <Button size="sm" asChild className="flex-1">
                <Link href="/register">Register</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
