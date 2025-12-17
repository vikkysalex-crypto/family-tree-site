module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/dashboard/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/dashboard/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/dashboard/family-tree/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

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
}),
"[project]/app/dashboard/family-tree/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/dashboard/family-tree/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f78e0b47._.js.map