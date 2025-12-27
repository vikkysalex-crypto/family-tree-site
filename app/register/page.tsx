"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Eye, EyeOff, CheckCircle2, XCircle } from "lucide-react"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { supabase } from "@/lib/supabase/client"

export default function Register() {
  const router = useRouter()

  const [email, setEmail] = useState("")
  const [confirmEmail, setConfirmEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [dob, setDob] = useState("")
  const [nationality, setNationality] = useState("")
  const [phone, setPhone] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  // Password strength indicators
  const [passwordStrength, setPasswordStrength] = useState({
    hasLength: false,
    hasUpperCase: false,
    hasLowerCase: false,
    hasNumber: false,
    hasSpecialChar: false,
  })

  // Redirect if already logged in
  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession()

      if (session) {
        router.push("/dashboard")
      }
    }
    checkSession()
  }, [router])

  // Check password strength
  useEffect(() => {
    setPasswordStrength({
      hasLength: password.length >= 8,
      hasUpperCase: /[A-Z]/.test(password),
      hasLowerCase: /[a-z]/.test(password),
      hasNumber: /[0-9]/.test(password),
      hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    })
  }, [password])

  // Validate phone number format
  const validatePhone = (phone: string): boolean => {
    // Basic international phone format validation
    const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/
    return phone === "" || phoneRegex.test(phone.replace(/\s/g, ""))
  }

  // Validate date of birth
  const validateDOB = (dob: string): boolean => {
    const selectedDate = new Date(dob)
    const today = new Date()
    const minDate = new Date()
    minDate.setFullYear(today.getFullYear() - 120) // Max 120 years old

    const age = today.getFullYear() - selectedDate.getFullYear()
    
    return selectedDate <= today && selectedDate >= minDate && age >= 13
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    // Email validation
    if (email !== confirmEmail) {
      setError("Email addresses do not match")
      return
    }

    // Password validation
    if (password !== confirmPassword) {
      setError("Passwords do not match")
      return
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters")
      return
    }

    // Check password strength
    const strengthCount = Object.values(passwordStrength).filter(Boolean).length
    if (strengthCount < 4) {
      setError("Password must contain at least uppercase, lowercase, number, and be 8+ characters")
      return
    }

    // Phone validation
    if (phone && !validatePhone(phone)) {
      setError("Please enter a valid phone number")
      return
    }

    // DOB validation
    if (!validateDOB(dob)) {
      setError("Please enter a valid date of birth (must be 13+ years old)")
      return
    }

    // Sanitize inputs
    const sanitizedFirstName = firstName.trim()
    const sanitizedLastName = lastName.trim()
    const sanitizedNationality = nationality.trim()

    if (!sanitizedFirstName || !sanitizedLastName) {
      setError("First name and last name are required")
      return
    }

    setIsLoading(true)

    try {
      // 1️⃣ Sign up with Supabase Auth
      const { data, error: signUpError } = await supabase.auth.signUp({
        email: email.toLowerCase().trim(),
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      })

      if (signUpError) {
        // Handle specific error cases
        if (signUpError.message.includes("already registered")) {
          throw new Error("This email is already registered. Please try logging in instead.")
        }
        throw signUpError
      }

      const authId = data.user?.id
      if (!authId) throw new Error("Registration failed. Please try again.")

      // 2️⃣ Insert into users table
      const { error: dbError } = await supabase.from("users").insert({
        auth_id: authId,
        first_name: sanitizedFirstName,
        last_name: sanitizedLastName,
        email: email.toLowerCase().trim(),
        dob: dob || null,
        nationality: sanitizedNationality || null,
        phone: phone.trim() || null,
      })

      if (dbError) {
        console.error("Database error:", dbError)
        throw new Error("Account created but profile setup failed. Please contact support.")
      }

      // Show success modal
      setShowSuccessModal(true)
    } catch (err: any) {
      setError(err.message || "Registration failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  // Success Modal Component
  const SuccessModal = () => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-background rounded-lg shadow-2xl max-w-md w-full p-6 space-y-4 animate-in fade-in zoom-in duration-300">
        <div className="flex justify-center">
          <div className="bg-green-100 rounded-full p-3">
            <CheckCircle2 className="w-12 h-12 text-green-600" />
          </div>
        </div>
        
        <h2 className="text-2xl font-bold text-center text-foreground">
          Account Created Successfully! 🎉
        </h2>
        
        <div className="space-y-3 text-foreground/80">
          <p className="text-center">
            Welcome to FamilyTree, <span className="font-semibold">{firstName}</span>!
          </p>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-2">
            <p className="font-medium text-blue-900 flex items-center gap-2">
              📧 Please Verify Your Email
            </p>
            <p className="text-sm text-blue-800">
              We've sent a verification link to:
            </p>
            <p className="text-sm font-mono bg-white px-3 py-2 rounded border border-blue-200 text-blue-900">
              {email}
            </p>
            <p className="text-sm text-blue-800">
              Click the link in the email to activate your account and start building your family tree.
            </p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
            <p className="text-xs text-amber-800">
              <strong>Note:</strong> Check your spam folder if you don't see the email within 5 minutes.
            </p>
          </div>
        </div>

        <Button
          onClick={() => router.push("/login")}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          Go to Login
        </Button>
      </div>
    </div>
  )

  return (
    <>
      <Header />
      <main className="pt-16 min-h-screen bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Create Your Account
              </h1>
              <p className="text-foreground/60">
                Join FamilyTree and start preserving your legacy today
              </p>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-red-700">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                    First Name *
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="John"
                    required
                    maxLength={50}
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                    Last Name *
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Doe"
                    required
                    maxLength={50}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="dob" className="block text-sm font-medium text-foreground mb-2">
                  Date of Birth *
                </label>
                <input
                  id="dob"
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  max={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <p className="text-xs text-foreground/50 mt-1">You must be 13 or older to register</p>
              </div>

              <div>
                <label htmlFor="nationality" className="block text-sm font-medium text-foreground mb-2">
                  Nationality *
                </label>
                <input
                  id="nationality"
                  type="text"
                  value={nationality}
                  onChange={(e) => setNationality(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="e.g. Nigeria"
                  required
                  maxLength={50}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="+234 801 234 5678"
                  maxLength={20}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address *
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="confirmEmail" className="block text-sm font-medium text-foreground mb-2">
                  Confirm Email Address *
                </label>
                <input
                  id="confirmEmail"
                  type="email"
                  value={confirmEmail}
                  onChange={(e) => setConfirmEmail(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="you@example.com"
                  required
                />
                {confirmEmail && email !== confirmEmail && (
                  <p className="text-xs text-red-600 mt-1">Emails do not match</p>
                )}
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-foreground mb-2">
                  Password *
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 pr-12 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/50 hover:text-foreground transition-colors"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                
                {password && (
                  <div className="mt-2 space-y-1">
                    <p className="text-xs font-medium text-foreground/70">Password strength:</p>
                    <div className="space-y-1">
                      {[
                        { key: 'hasLength', label: 'At least 8 characters' },
                        { key: 'hasUpperCase', label: 'One uppercase letter' },
                        { key: 'hasLowerCase', label: 'One lowercase letter' },
                        { key: 'hasNumber', label: 'One number' },
                        { key: 'hasSpecialChar', label: 'One special character (!@#$...)' },
                      ].map(({ key, label }) => (
                        <div key={key} className="flex items-center gap-2 text-xs">
                          {passwordStrength[key as keyof typeof passwordStrength] ? (
                            <CheckCircle2 className="w-3 h-3 text-green-600" />
                          ) : (
                            <XCircle className="w-3 h-3 text-red-400" />
                          )}
                          <span className={passwordStrength[key as keyof typeof passwordStrength] ? "text-green-700" : "text-foreground/50"}>
                            {label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-foreground mb-2">
                  Confirm Password *
                </label>
                <div className="relative">
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-4 py-2 pr-12 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/50 hover:text-foreground transition-colors"
                    aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {confirmPassword && password !== confirmPassword && (
                  <p className="text-xs text-red-600 mt-1">Passwords do not match</p>
                )}
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Creating Account...
                    </span>
                  ) : (
                    "Create Account"
                  )}
                </Button>
              </div>
            </form>

            <div className="border-t border-border pt-6 text-center text-sm text-foreground/60">
              <p>
                Already have an account?{" "}
                <Link href="/login" className="text-primary hover:underline font-medium">
                  Sign in
                </Link>
              </p>
            </div>

            <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
              <p className="text-sm text-foreground/70">
                By creating an account, you agree to our{" "}
                <Link href="/terms" className="text-primary hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />

      {/* Success Modal */}
      {showSuccessModal && <SuccessModal />}
    </>
  )
}