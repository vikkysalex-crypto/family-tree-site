"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { supabase } from "@/lib/supabase/client" // <-- ensure this is your supabase client
import { useAuth } from "@/providers/auth-provider"

export default function DashboardNav() {
  const [isOpen, setIsOpen] = useState(false)
  const { user } = useAuth() // keep user info
  const router = useRouter()

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut()
    if (!error) {
      router.push("/login") // redirect after logout
    } else {
      console.error("Logout error:", error.message)
    }
  }

  const navItems = [
    { href: "/dashboard", label: "Dashboard", icon: "📊" },
    { href: "/dashboard/profile", label: "My Profile", icon: "👤" },
    { href: "/dashboard/family-tree", label: "Family Tree", icon: "🌳" },
    { href: "/dashboard/members", label: "Family Members", icon: "👨‍👩‍👧‍👦" },
    { href: "/dashboard/settings", label: "Settings", icon: "⚙️" },
  ]

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-primary text-primary-foreground rounded-lg"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Sidebar */}
      <nav
        className={`
          fixed lg:relative z-40 w-64 h-screen bg-accent/5 border-r border-border
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          pt-4 lg:pt-0 lg:flex lg:flex-col
        `}
      >
        {/* Logo/Header */}
        <div className="hidden lg:flex items-center justify-between px-6 py-4 border-b border-border">
          <h1 className="text-xl font-bold text-foreground">FamilyTree</h1>
        </div>

        {/* Mobile Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="lg:hidden absolute top-4 right-4 p-2 text-foreground/60 hover:text-foreground"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Navigation Items */}
        <div className="flex-1 px-4 py-6 space-y-2 lg:px-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-4 py-2 rounded-lg text-foreground/70 hover:text-foreground hover:bg-primary/10 transition-colors"
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          ))}
        </div>

        {/* User Info & Logout */}
        <div className="border-t border-border px-4 py-6 lg:px-6 space-y-4">
          <div className="bg-primary/10 rounded-lg p-3 border border-primary/20">
            <p className="text-xs text-foreground/60 font-medium">Logged in as</p>
            <p className="text-sm font-semibold text-foreground truncate">{user?.name}</p>
            <p className="text-xs text-foreground/50 truncate">{user?.email}</p>
          </div>
          <Button onClick={handleLogout} variant="outline" className="w-full bg-transparent">
            Sign Out
          </Button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {isOpen && <div onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black/50 z-30 lg:hidden" />}
    </>
  )
}
