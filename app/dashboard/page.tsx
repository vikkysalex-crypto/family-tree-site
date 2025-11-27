"use client"
import { useAuth } from "@/providers/auth-provider"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Dashboard() {
  const { user } = useAuth()

  const stats = [
    { label: "Family Members", value: "0", icon: "👥", href: "/dashboard/members" },
    { label: "Generations", value: "2", icon: "📈", href: "/dashboard/family-tree" },
    { label: "Photos", value: "0", icon: "📸", href: "/dashboard/profile" },
    { label: "Documents", value: "0", icon: "📄", href: "/dashboard/profile" },
  ]

  return (
    <div className="p-4 lg:p-8">
      {/* Welcome Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-foreground mb-2">Welcome, {user?.name?.split(" ")[0]}!</h1>
        <p className="text-foreground/60">Your family tree awaits. Start building your legacy today.</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <Link key={stat.label} href={stat.href}>
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer h-full">
              <div className="flex items-start justify-between mb-4">
                <div className="text-3xl">{stat.icon}</div>
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
              <p className="text-sm text-foreground/60">{stat.label}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Getting Started Section */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-4">Get Started with Your Family Tree</h2>
        <p className="text-foreground/70 mb-6">Follow these steps to begin documenting your family history:</p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
              1
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Complete Your Profile</h3>
              <p className="text-sm text-foreground/60">Add your personal details and profile picture</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
              2
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Add Family Members</h3>
              <p className="text-sm text-foreground/60">Invite relatives and build your tree</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
              3
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Upload Photos & Documents</h3>
              <p className="text-sm text-foreground/60">Preserve memories and records</p>
            </div>
          </div>
        </div>

        <Link href="/dashboard/profile" className="inline-block mt-6">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Complete Your Profile Now</Button>
        </Link>
      </div>

      {/* Recent Activity */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h2 className="text-xl font-bold text-foreground mb-4">Recent Activity</h2>
        <div className="text-center py-8 text-foreground/60">
          <p>No recent activity yet. Start by completing your profile!</p>
        </div>
      </div>
    </div>
  )
}
