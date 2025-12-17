module.exports = [
"[project]/lib/supabase/client.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-ssr] (ecmascript) <locals>");
;
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(("TURBOPACK compile-time value", "https://wjvowwfjnmadmgruclls.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indqdm93d2Zqbm1hZG1ncnVjbGxzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU5MjY5MDYsImV4cCI6MjA4MTUwMjkwNn0.eahfvsiOh_-HFB5YcrhNLycUOVtasUb11lNLY4lx0Wk"));
}),
"[project]/app/register/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RegisterPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase/client.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function RegisterPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [surname, setSurname] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [firstName, setFirstName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [confirmPassword, setConfirmPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleRegister = async (e)=>{
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        setLoading(true);
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.signUp({
            email,
            password,
            options: {
                data: {
                    surname,
                    first_name: firstName
                }
            }
        });
        setLoading(false);
        if (error) {
            alert(error.message);
        } else {
            alert('Check your email to verify your account');
            router.push('/login');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleRegister,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "submit",
            disabled: loading,
            children: loading ? 'Creating account...' : 'Create account'
        }, void 0, false, {
            fileName: "[project]/app/register/page.tsx",
            lineNumber: 51,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/register/page.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
} // "use client"
 // import type React from "react"
 // import Header from "@/components/header"
 // import Footer from "@/components/footer"
 // import { Button } from "@/components/ui/button"
 // import { useAuth } from "@/providers/auth-provider"
 // import { useRouter } from "next/navigation"
 // import Link from "next/link"
 // import { useState, useEffect } from "react"
 // export default function Register() {
 //   const [email, setEmail] = useState("")
 //   const [password, setPassword] = useState("")
 //   const [confirmPassword, setConfirmPassword] = useState("")
 //   const [firstName, setFirstName] = useState("")
 //   const [lastName, setLastName] = useState("")
 //   const [isLoading, setIsLoading] = useState(false)
 //   const [error, setError] = useState("")
 //   const { register, user } = useAuth()
 //   const router = useRouter()
 //   useEffect(() => {
 //     if (user) {
 //       router.push("/dashboard")
 //     }
 //   }, [user, router])
 //   const handleSubmit = async (e: React.FormEvent) => {
 //     e.preventDefault()
 //     setError("")
 //     if (password !== confirmPassword) {
 //       setError("Passwords do not match")
 //       return
 //     }
 //     if (password.length < 6) {
 //       setError("Password must be at least 6 characters")
 //       return
 //     }
 //     setIsLoading(true)
 //     try {
 //       await register(email, password, `${firstName} ${lastName}`)
 //       router.push("/dashboard")
 //     } catch (err) {
 //       setError(err instanceof Error ? err.message : "Registration failed")
 //     } finally {
 //       setIsLoading(false)
 //     }
 //   }
 //   return (
 //     <>
 //       <Header />
 //       <main className="pt-16 min-h-screen bg-gradient-to-b from-primary/5 to-background">
 //         <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-20">
 //           <div className="space-y-8">
 //             <div className="text-center">
 //               <h1 className="text-3xl font-bold text-foreground mb-2">Create Your Account</h1>
 //               <p className="text-foreground/60">Join FamilyTree and start preserving your legacy today</p>
 //             </div>
 //             {error && (
 //               <div className="bg-red-50 border border-red-200 rounded-lg p-4">
 //                 <p className="text-sm text-red-700">{error}</p>
 //               </div>
 //             )}
 //             <form onSubmit={handleSubmit} className="space-y-4">
 //               <div className="grid md:grid-cols-2 gap-4">
 //                 <div>
 //                   <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
 //                     First Name
 //                   </label>
 //                   <input
 //                     id="firstName"
 //                     type="text"
 //                     value={firstName}
 //                     onChange={(e) => setFirstName(e.target.value)}
 //                     className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
 //                     placeholder="John"
 //                     required
 //                   />
 //                 </div>
 //                 <div>
 //                   <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
 //                     Last Name
 //                   </label>
 //                   <input
 //                     id="lastName"
 //                     type="text"
 //                     value={lastName}
 //                     onChange={(e) => setLastName(e.target.value)}
 //                     className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
 //                     placeholder="Doe"
 //                     required
 //                   />
 //                 </div>
 //               </div>
 //               <div>
 //                 <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
 //                   Email Address
 //                 </label>
 //                 <input
 //                   id="email"
 //                   type="email"
 //                   value={email}
 //                   onChange={(e) => setEmail(e.target.value)}
 //                   className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
 //                   placeholder="you@example.com"
 //                   required
 //                 />
 //               </div>
 //               <div>
 //                 <label htmlFor="password" className="block text-sm font-medium text-foreground mb-2">
 //                   Password
 //                 </label>
 //                 <input
 //                   id="password"
 //                   type="password"
 //                   value={password}
 //                   onChange={(e) => setPassword(e.target.value)}
 //                   className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
 //                   placeholder="••••••••"
 //                   required
 //                 />
 //               </div>
 //               <div>
 //                 <label htmlFor="confirmPassword" className="block text-sm font-medium text-foreground mb-2">
 //                   Confirm Password
 //                 </label>
 //                 <input
 //                   id="confirmPassword"
 //                   type="password"
 //                   value={confirmPassword}
 //                   onChange={(e) => setConfirmPassword(e.target.value)}
 //                   className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
 //                   placeholder="••••••••"
 //                   required
 //                 />
 //               </div>
 //               <div className="pt-2">
 //                 <Button
 //                   type="submit"
 //                   disabled={isLoading}
 //                   className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
 //                 >
 //                   {isLoading ? "Creating Account..." : "Create Account"}
 //                 </Button>
 //               </div>
 //             </form>
 //             <div className="border-t border-border pt-6 text-center text-sm text-foreground/60">
 //               <p>
 //                 Already have an account?{" "}
 //                 <Link href="/login" className="text-primary hover:underline font-medium">
 //                   Sign in
 //                 </Link>
 //               </p>
 //             </div>
 //             <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
 //               <p className="text-sm text-foreground/70">
 //                 By creating an account, you agree to our{" "}
 //                 <Link href="/terms" className="text-primary hover:underline">
 //                   Terms of Service
 //                 </Link>{" "}
 //                 and{" "}
 //                 <Link href="/privacy" className="text-primary hover:underline">
 //                   Privacy Policy
 //                 </Link>
 //               </p>
 //             </div>
 //           </div>
 //         </div>
 //       </main>
 //       <Footer />
 //     </>
 //   )
 // }
}),
];

//# sourceMappingURL=_05afe394._.js.map