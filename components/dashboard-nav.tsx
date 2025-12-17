"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { supabase } from "@/lib/supabase/client"
import { useAuth } from "@/providers/auth-provider"

export default function DashboardNav() {
  const [isOpen, setIsOpen] = useState(false)
  const { user } = useAuth()
  const router = useRouter()

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut()

    if (error) {
      console.error("Logout error:", error.message)
      return
    }

    router.push("/login")
  }

  const navItems = [
    { href: "/dashboard", label: "Dashboard", icon: "📊" },
    { href: "/dashboard/profile", label: "My Profile", icon: "👤" },
    { href: "/dashboard/family-tree", label: "Family Tree", icon: "🌳" },
    { href: "/dashboard/members", label: "Family Members", icon: "👨‍👩‍👧‍👦" },
    { href: "/dashboard/settings", label: "Settings", icon: "⚙️" },
  ]

  const displayName =
    user?.user_metadata?.full_name ||
    user?.email?.split("@")[0] ||
    "User"

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-primary text-primary-foreground rounded-lg shadow"
        aria-label="Open menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Sidebar */}
      <nav
        className={`
          fixed lg:relative z-40 w-64 h-screen
          bg-background border-r border-border
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          flex flex-col
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <h1 className="text-lg font-bold">FamilyTree</h1>

          {/* Mobile Close */}
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden text-muted-foreground hover:text-foreground"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <div className="flex-1 px-4 py-6 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-4 py-2 rounded-lg
                         text-sm font-medium text-muted-foreground
                         hover:text-foreground hover:bg-primary/10
                         transition-colors"
            >
              <span className="text-lg">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </div>

        {/* User Info */}
        <div className="border-t border-border px-4 py-6 space-y-4">
          <div className="rounded-lg border border-primary/20 bg-primary/10 p-3">
            <p className="text-xs text-muted-foreground">Logged in as</p>
            <p className="text-sm font-semibold truncate">{displayName}</p>
            <p className="text-xs text-muted-foreground truncate">
              {user?.email}
            </p>
          </div>

          <Button
            onClick={handleLogout}
            variant="outline"
            className="w-full"
          >
            Sign Out
          </Button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
        />
      )}
    </>
  )
}
