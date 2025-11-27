"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface FamilyMember {
  id: string
  name: string
  relationship: string
  generation: number
}

export default function FamilyTreePage() {
  const [members, setMembers] = useState<FamilyMember[]>([
    {
      id: "1",
      name: "You",
      relationship: "Self",
      generation: 0,
    },
  ])
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="p-4 lg:p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-1">Family Tree</h1>
          <p className="text-foreground/60">Visualize your family lineage up to 2 generations</p>
        </div>
        <Button onClick={() => setShowModal(true)} className="bg-primary hover:bg-primary/90 text-primary-foreground">
          Add Family Member
        </Button>
      </div>

      {/* Tree Visualization */}
      <div className="bg-card border border-border rounded-lg p-8 mb-8">
        <div className="flex flex-col items-center gap-8">
          {/* Generation 0 - Self */}
          <div className="text-center">
            <div className="inline-block bg-gradient-to-br from-primary to-accent text-primary-foreground rounded-lg px-6 py-4 font-semibold">
              You
            </div>
          </div>

          {/* Connector Line */}
          <div className="w-1 h-12 bg-border"></div>

          {/* Generation 1 - Parents */}
          <div className="w-full">
            <div className="text-sm font-semibold text-foreground/60 mb-4 text-center">Parents</div>
            <div className="flex justify-center gap-8 flex-wrap">
              <div className="bg-accent/20 border border-accent/40 rounded-lg px-6 py-4 text-center min-w-48">
                <div className="font-semibold text-foreground mb-1">Add Parent</div>
                <p className="text-sm text-foreground/60">Click to add your parent</p>
              </div>
              <div className="bg-accent/20 border border-accent/40 rounded-lg px-6 py-4 text-center min-w-48">
                <div className="font-semibold text-foreground mb-1">Add Parent</div>
                <p className="text-sm text-foreground/60">Click to add your parent</p>
              </div>
            </div>
          </div>

          {/* Connector Line */}
          <div className="w-1 h-12 bg-border"></div>

          {/* Generation 2 - Grandparents */}
          <div className="w-full">
            <div className="text-sm font-semibold text-foreground/60 mb-4 text-center">
              Grandparents (Paternal & Maternal)
            </div>
            <div className="flex justify-center gap-4 flex-wrap">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-accent/10 border border-accent/30 rounded-lg px-4 py-3 text-center min-w-40">
                  <div className="text-xs font-semibold text-foreground/50">Add Grandparent</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-900">
            Your family tree shows up to 2 generations above you. Add family members to build out your complete lineage.
          </p>
        </div>
      </div>

      {/* Members List */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h2 className="text-xl font-bold text-foreground mb-4">Family Members ({members.length})</h2>
        <div className="space-y-3">
          {members.map((member) => (
            <div
              key={member.id}
              className="flex items-center justify-between p-4 bg-background rounded-lg border border-border hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold">
                  {member.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{member.name}</p>
                  <p className="text-sm text-foreground/60">{member.relationship}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  Edit
                </Button>
                <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700 bg-transparent">
                  Remove
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Member Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-card border border-border rounded-lg p-8 max-w-md w-full space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Add Family Member</h2>
              <p className="text-sm text-foreground/60">Add a new person to your family tree</p>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Relationship</label>
                <select className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>Select relationship...</option>
                  <option>Parent</option>
                  <option>Grandparent</option>
                  <option>Sibling</option>
                  <option>Aunt/Uncle</option>
                  <option>Cousin</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Birth Date</label>
                <input
                  type="date"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="flex gap-4 pt-4">
                <Button onClick={() => setShowModal(false)} variant="outline" className="flex-1">
                  Cancel
                </Button>
                <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">Add Member</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
