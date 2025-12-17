// "use client"

// import { useState } from "react"
// import { supabase } from "@/lib/supabase/client"
// import { useAuth } from "@/providers/auth-provider"
// import { useRouter } from "next/navigation"
// import { Button } from "@/components/ui/button"

// export default function AddFamilyMember() {
//   const { user } = useAuth()
//   const router = useRouter()

//   const [form, setForm] = useState({
//     firstName: "",
//     lastName: "",
//     otherName: "",
//     dob: "",
//     relationship: "",
//   })

//   const [isLoading, setIsLoading] = useState(false)
//   const [error, setError] = useState("")

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     setForm({ ...form, [e.target.name]: e.target.value })
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setError("")

//     if (!user?.id) {
//       setError("Authentication error. Please refresh the page.")
//       return
//     }

//     const { firstName, lastName, relationship, otherName, dob } = form

//     if (!firstName || !lastName || !relationship) {
//       setError("First name, last name, and relationship are required.")
//       return
//     }

//     setIsLoading(true)

//     const { error: dbError } = await supabase
//       .from("family_members")
//       .insert({
//         user_id: user.id,
//         first_name: firstName,
//         last_name: lastName,
//         other_name: otherName || null,
//         dob: dob || null,
//         relationship,
//       })

//     setIsLoading(false)

//     if (dbError) {
//       setError(dbError.message)
//       return
//     }

//     router.push("/dashboard/family-tree")
//   }

//   return (
//     <div className="max-w-xl mx-auto mt-14 p-8 bg-white rounded-2xl shadow-sm">
//       <h1 className="text-2xl font-semibold mb-6 text-center">
//         Add Family Member
//       </h1>

//       {error && (
//         <div className="mb-4 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
//           {error}
//         </div>
//       )}

//       <form onSubmit={handleSubmit} className="space-y-5">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <input
//             name="firstName"
//             placeholder="First name"
//             value={form.firstName}
//             onChange={handleChange}
//             className="w-full rounded-lg border px-4 py-3 focus:ring-2 focus:ring-primary"
//             required
//           />

//           <input
//             name="lastName"
//             placeholder="Last name"
//             value={form.lastName}
//             onChange={handleChange}
//             className="w-full rounded-lg border px-4 py-3 focus:ring-2 focus:ring-primary"
//             required
//           />
//         </div>

//         <input
//           name="otherName"
//           placeholder="Other name (optional)"
//           value={form.otherName}
//           onChange={handleChange}
//           className="w-full rounded-lg border px-4 py-3 focus:ring-2 focus:ring-primary"
//         />

//         <input
//           type="date"
//           name="dob"
//           value={form.dob}
//           onChange={handleChange}
//           className="w-full rounded-lg border px-4 py-3 focus:ring-2 focus:ring-primary"
//         />

//         <select
//           name="relationship"
//           value={form.relationship}
//           onChange={handleChange}
//           className="w-full rounded-lg border px-4 py-3 focus:ring-2 focus:ring-primary"
//           required
//         >
//           <option value="">Select relationship</option>
//           <option value="father">Father</option>
//           <option value="mother">Mother</option>
//           <option value="grandparent">Grandparent</option>
//           <option value="child">Child</option>
//           <option value="sibling">Sibling</option>
//         </select>

//         <Button
//           type="submit"
//           className="w-full py-3 text-base"
//           disabled={isLoading}
//         >
//           {isLoading ? "Saving..." : "Add Family Member"}
//         </Button>
//       </form>
//     </div>
//   )
// }





"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"

type FamilyMember = {
  id: string
  first_name: string
  last_name: string
  other_name: string | null
  dob: string | null
  relationship: string
}

export default function FamilyTreePage() {
  const [userId, setUserId] = useState<string | null>(null)
  const [members, setMembers] = useState<FamilyMember[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    otherName: "",
    dob: "",
    relationship: "",
  })

  /* ---------------- LOAD AUTH USER ---------------- */
  useEffect(() => {
    const loadUser = async () => {
      const { data } = await supabase.auth.getSession()

      if (data.session?.user) {
        setUserId(data.session.user.id)
        fetchMembers(data.session.user.id)
      }
    }

    loadUser()
  }, [])

  /* ---------------- FETCH FAMILY MEMBERS ---------------- */
  const fetchMembers = async (uid: string) => {
    const { data, error } = await supabase
      .from("family_members")
      .select("*")
      .eq("user_id", uid)
      .order("created_at", { ascending: false })

    if (!error && data) {
      setMembers(data)
    }
  }

  /* ---------------- HANDLE FORM INPUT ---------------- */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  /* ---------------- SUBMIT ---------------- */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!userId) {
      setError("Please wait, loading user...")
      return
    }

    const { firstName, lastName, relationship, otherName, dob } = form

    if (!firstName || !lastName || !relationship) {
      setError("First name, last name, and relationship are required.")
      return
    }

    setLoading(true)

    const { error } = await supabase.from("family_members").insert({
      user_id: userId,
      first_name: firstName,
      last_name: lastName,
      other_name: otherName || null,
      dob: dob || null,
      relationship,
    })

    setLoading(false)

    if (error) {
      setError(error.message)
      return
    }

    // Reset form
    setForm({
      firstName: "",
      lastName: "",
      otherName: "",
      dob: "",
      relationship: "",
    })

    // Refresh list
    fetchMembers(userId)
  }

  return (
    <div className="max-w-5xl mx-auto mt-14 px-4">
      {/* ================= ADD FORM ================= */}
      <div className="bg-white p-8 rounded-2xl shadow-sm mb-10">
        <h1 className="text-2xl font-semibold mb-6 text-center">
          Add Family Member
        </h1>

        {error && (
          <div className="mb-4 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="firstName"
              placeholder="First name"
              value={form.firstName}
              onChange={handleChange}
              className="w-full rounded-lg border px-4 py-3"
              required
            />

            <input
              name="lastName"
              placeholder="Last name"
              value={form.lastName}
              onChange={handleChange}
              className="w-full rounded-lg border px-4 py-3"
              required
            />
          </div>

          <input
            name="otherName"
            placeholder="Other name (optional)"
            value={form.otherName}
            onChange={handleChange}
            className="w-full rounded-lg border px-4 py-3"
          />

          <input
            type="date"
            name="dob"
            value={form.dob}
            onChange={handleChange}
            className="w-full rounded-lg border px-4 py-3"
          />

          <select
            name="relationship"
            value={form.relationship}
            onChange={handleChange}
            className="w-full rounded-lg border px-4 py-3"
            required
          >
            <option value="">Select relationship</option>
            <option value="father">Father</option>
            <option value="mother">Mother</option>
            <option value="grandparent">Grandparent</option>
            <option value="child">Child</option>
            <option value="sibling">Sibling</option>
          </select>

          <Button
            type="submit"
            className="w-full py-3"
            disabled={loading || !userId}
          >
            {!userId
              ? "Loading user..."
              : loading
              ? "Saving..."
              : "Add Family Member"}
          </Button>
        </form>
      </div>

      {/* ================= DISPLAY MEMBERS ================= */}
      <div>
        <h2 className="text-xl font-semibold mb-4">
          Your Family Members
        </h2>

        {members.length === 0 && (
          <p className="text-gray-500">
            No family members added yet.
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {members.map((member) => (
            <div
              key={member.id}
              className="rounded-xl border bg-white p-5 shadow-sm"
            >
              <h3 className="font-semibold text-lg">
                {member.first_name}{" "}
                {member.other_name && member.other_name + " "}
                {member.last_name}
              </h3>

              <p className="text-sm text-gray-600 capitalize">
                {member.relationship}
              </p>

              {member.dob && (
                <p className="text-sm text-gray-500 mt-1">
                  DOB: {member.dob}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
