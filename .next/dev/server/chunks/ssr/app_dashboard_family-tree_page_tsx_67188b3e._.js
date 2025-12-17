module.exports = [
"[project]/app/dashboard/family-tree/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

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
__turbopack_context__.s([
    "default",
    ()=>FamilyTreePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase/client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function FamilyTreePage() {
    const [userId, setUserId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [members, setMembers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        firstName: "",
        lastName: "",
        otherName: "",
        dob: "",
        relationship: ""
    });
    /* ---------------- LOAD AUTH USER ---------------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const loadUser = async ()=>{
            const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.getSession();
            if (data.session?.user) {
                setUserId(data.session.user.id);
                fetchMembers(data.session.user.id);
            }
        };
        loadUser();
    }, []);
    /* ---------------- FETCH FAMILY MEMBERS ---------------- */ const fetchMembers = async (uid)=>{
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("family_members").select("*").eq("user_id", uid).order("created_at", {
            ascending: false
        });
        if (!error && data) {
            setMembers(data);
        }
    };
    /* ---------------- HANDLE FORM INPUT ---------------- */ const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };
    /* ---------------- SUBMIT ---------------- */ const handleSubmit = async (e)=>{
        e.preventDefault();
        setError("");
        if (!userId) {
            setError("Please wait, loading user...");
            return;
        }
        const { firstName, lastName, relationship, otherName, dob } = form;
        if (!firstName || !lastName || !relationship) {
            setError("First name, last name, and relationship are required.");
            return;
        }
        setLoading(true);
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("family_members").insert({
            user_id: userId,
            first_name: firstName,
            last_name: lastName,
            other_name: otherName || null,
            dob: dob || null,
            relationship
        });
        setLoading(false);
        if (error) {
            setError(error.message);
            return;
        }
        // Reset form
        setForm({
            firstName: "",
            lastName: "",
            otherName: "",
            dob: "",
            relationship: ""
        });
        // Refresh list
        fetchMembers(userId);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-5xl mx-auto mt-14 px-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white p-8 rounded-2xl shadow-sm mb-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-semibold mb-6 text-center",
                        children: "Add Family Member"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/family-tree/page.tsx",
                        lineNumber: 264,
                        columnNumber: 9
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/family-tree/page.tsx",
                        lineNumber: 269,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        className: "space-y-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        name: "firstName",
                                        placeholder: "First name",
                                        value: form.firstName,
                                        onChange: handleChange,
                                        className: "w-full rounded-lg border px-4 py-3",
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/family-tree/page.tsx",
                                        lineNumber: 276,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        name: "lastName",
                                        placeholder: "Last name",
                                        value: form.lastName,
                                        onChange: handleChange,
                                        className: "w-full rounded-lg border px-4 py-3",
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/family-tree/page.tsx",
                                        lineNumber: 285,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/family-tree/page.tsx",
                                lineNumber: 275,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                name: "otherName",
                                placeholder: "Other name (optional)",
                                value: form.otherName,
                                onChange: handleChange,
                                className: "w-full rounded-lg border px-4 py-3"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/family-tree/page.tsx",
                                lineNumber: 295,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "date",
                                name: "dob",
                                value: form.dob,
                                onChange: handleChange,
                                className: "w-full rounded-lg border px-4 py-3"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/family-tree/page.tsx",
                                lineNumber: 303,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                name: "relationship",
                                value: form.relationship,
                                onChange: handleChange,
                                className: "w-full rounded-lg border px-4 py-3",
                                required: true,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "Select relationship"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/family-tree/page.tsx",
                                        lineNumber: 318,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "father",
                                        children: "Father"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/family-tree/page.tsx",
                                        lineNumber: 319,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "mother",
                                        children: "Mother"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/family-tree/page.tsx",
                                        lineNumber: 320,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "grandparent",
                                        children: "Grandparent"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/family-tree/page.tsx",
                                        lineNumber: 321,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "child",
                                        children: "Child"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/family-tree/page.tsx",
                                        lineNumber: 322,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "sibling",
                                        children: "Sibling"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/family-tree/page.tsx",
                                        lineNumber: 323,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/family-tree/page.tsx",
                                lineNumber: 311,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                type: "submit",
                                className: "w-full py-3",
                                disabled: loading || !userId,
                                children: !userId ? "Loading user..." : loading ? "Saving..." : "Add Family Member"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/family-tree/page.tsx",
                                lineNumber: 326,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/family-tree/page.tsx",
                        lineNumber: 274,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/family-tree/page.tsx",
                lineNumber: 263,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-semibold mb-4",
                        children: "Your Family Members"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/family-tree/page.tsx",
                        lineNumber: 342,
                        columnNumber: 9
                    }, this),
                    members.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-500",
                        children: "No family members added yet."
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/family-tree/page.tsx",
                        lineNumber: 347,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                        children: members.map((member)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-xl border bg-white p-5 shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-semibold text-lg",
                                        children: [
                                            member.first_name,
                                            " ",
                                            member.other_name && member.other_name + " ",
                                            member.last_name
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/family-tree/page.tsx",
                                        lineNumber: 358,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-600 capitalize",
                                        children: member.relationship
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/family-tree/page.tsx",
                                        lineNumber: 364,
                                        columnNumber: 15
                                    }, this),
                                    member.dob && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-500 mt-1",
                                        children: [
                                            "DOB: ",
                                            member.dob
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/family-tree/page.tsx",
                                        lineNumber: 369,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, member.id, true, {
                                fileName: "[project]/app/dashboard/family-tree/page.tsx",
                                lineNumber: 354,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/family-tree/page.tsx",
                        lineNumber: 352,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/family-tree/page.tsx",
                lineNumber: 341,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/dashboard/family-tree/page.tsx",
        lineNumber: 261,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=app_dashboard_family-tree_page_tsx_67188b3e._.js.map