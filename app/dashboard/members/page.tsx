"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface Member {
  id: string
  name: string
  relationship: string
  email?: string
  status: "verified" | "pending" | "invited"
}

export default function MembersPage() {
  const [members, setMembers] = useState<Member[]>([
    {
      id: "1",
      name: "John Doe",
      relationship: "Self",
      email: "john@example.com",
      status: "verified",
    },
    {
      id: "2",
      name: "Jane Doe",
      relationship: "Mother",
      email: "jane@example.com",
      status: "invited",
    },
  ])
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState<"all" | "verified" | "pending" | "invited">("all")

  const filteredMembers = members.filter((member) => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === "all" || member.status === filterStatus
    return matchesSearch && matchesStatus
  })

  const statusConfig = {
    verified: { bg: "bg-green-50", border: "border-green-200", text: "text-green-700", label: "Verified" },
    pending: { bg: "bg-yellow-50", border: "border-yellow-200", text: "text-yellow-700", label: "Pending" },
    invited: { bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-700", label: "Invited" },
  }

  return (
    <div className="p-4 lg:p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-1">Family Members</h1>
          <p className="text-foreground/60">Manage and invite family members</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Invite Member</Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-card border border-border rounded-lg p-6">
          <p className="text-sm text-foreground/60 font-medium mb-1">Total Members</p>
          <p className="text-3xl font-bold text-foreground">{members.length}</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-6">
          <p className="text-sm text-foreground/60 font-medium mb-1">Verified</p>
          <p className="text-3xl font-bold text-green-600">{members.filter((m) => m.status === "verified").length}</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-6">
          <p className="text-sm text-foreground/60 font-medium mb-1">Pending Invites</p>
          <p className="text-3xl font-bold text-blue-600">{members.filter((m) => m.status === "invited").length}</p>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-card border border-border rounded-lg p-6 mb-6">
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Search Members</label>
            <input
              type="text"
              placeholder="Search by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Filter by Status</label>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value as any)}
              className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="all">All Members</option>
              <option value="verified">Verified</option>
              <option value="invited">Invited</option>
            </select>
          </div>
        </div>
      </div>

      {/* Members List */}
      <div className="space-y-3">
        {filteredMembers.length > 0 ? (
          filteredMembers.map((member) => {
            const config = statusConfig[member.status]
            return (
              <div
                key={member.id}
                className={`${config.bg} border ${config.border} rounded-lg p-4 flex items-center justify-between`}
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold">
                    {member.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-foreground">{member.name}</p>
                    <p className="text-sm text-foreground/60">{member.relationship}</p>
                    {member.email && <p className="text-xs text-foreground/50">{member.email}</p>}
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className={`${config.text} text-xs font-medium px-3 py-1 rounded-full bg-white/50`}>
                    {config.label}
                  </span>
                  <div className="flex gap-2">
                    {member.status === "invited" && (
                      <>
                        <Button variant="outline" size="sm">
                          Resend
                        </Button>
                      </>
                    )}
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                    <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700 bg-transparent">
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
            )
          })
        ) : (
          <div className="text-center py-12 bg-card border border-border rounded-lg">
            <p className="text-foreground/60">No members found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  )
}
