"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabase/client"
import { useAuth } from "@/providers/auth-provider"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function AddFamilyMember() {
  const { user } = useAuth()
  const router = useRouter()

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [otherName, setOtherName] = useState("")
  const [dob, setDob] = useState("")
  const [relationship, setRelationship] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!user) {
      setError("You must be logged in")
      return
    }

    if (!firstName || !lastName || !relationship) {
      setError("First Name, Last Name and Relationship are required")
      return
    }

    setIsLoading(true)

    const { error: dbError } = await supabase.from("family_members").insert([
      {
        user_id: user.id,
        first_name: firstName,
        last_name: lastName,
        other_name: otherName || null,
        dob: dob || null,
        relationship,
      },
    ])

    setIsLoading(false)

    if (dbError) {
      setError(dbError.message)
      return
    }

    alert("Family member added successfully!")
    router.push("/dashboard/family-tree")
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow mt-10">
      <h1 className="text-2xl font-bold mb-4">Add Family Member</h1>

      {error && <p className="text-red-600 mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Other Name</label>
          <input
            type="text"
            value={otherName}
            onChange={(e) => setOtherName(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Date of Birth</label>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Relationship</label>
          <select
            value={relationship}
            onChange={(e) => setRelationship(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            required
          >
            <option value="">Select relationship</option>
            <option value="father">Father</option>
            <option value="mother">Mother</option>
            <option value="grandparent">Grandparent</option>
            <option value="child">Child</option>
            <option value="sibling">Sibling</option>
          </select>
        </div>

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Adding..." : "Add Member"}
        </Button>
      </form>
    </div>
  )
}
