"use client"

import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase/client"
import { useAuth } from "@/providers/auth-provider"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function AddFamilyMember() {
  const { user } = useAuth()
  const router = useRouter()

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    otherName: "",
    dob: "",
    relationship: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [loadingUser, setLoadingUser] = useState(true)

  // Wait for user to load
  useEffect(() => {
    if (user) setLoadingUser(false)
  }, [user])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!user) {
      setError("Loading user info, please wait...")
      return
    }

    const { firstName, lastName, relationship, otherName, dob } = form

    if (!firstName || !lastName || !relationship) {
      setError("Please fill in First Name, Last Name, and Relationship.")
      return
    }

    setIsLoading(true)

    const { error: dbError } = await supabase.from("family_members").insert([
      {
        user_id: user.id, // ✅ guaranteed to exist now
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

    router.push("/dashboard/family-tree")
  }

  if (loadingUser) return <p className="p-6">Loading user information...</p>

  return (
    <div className="max-w-lg mx-auto p-8 bg-white rounded-xl shadow mt-12">
      <h1 className="text-2xl font-bold text-center mb-6">Add Family Member</h1>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-2 rounded mb-4">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">First Name</label>
            <input
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              type="text"
              placeholder="John"
              className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Last Name</label>
            <input
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              type="text"
              placeholder="Doe"
              className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-primary"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Other Name</label>
          <input
            name="otherName"
            value={form.otherName}
            onChange={handleChange}
            type="text"
            placeholder="Optional"
            className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Date of Birth</label>
          <input
            name="dob"
            value={form.dob}
            onChange={handleChange}
            type="date"
            className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Relationship</label>
          <select
            name="relationship"
            value={form.relationship}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-primary"
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

        <Button type="submit" className="w-full mt-2" disabled={isLoading}>
          {isLoading ? "Adding..." : "Add Member"}
        </Button>
      </form>
    </div>
  )
}
