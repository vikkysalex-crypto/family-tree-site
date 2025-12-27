"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Eye, EyeOff, CheckCircle2, XCircle, AlertTriangle } from "lucide-react"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { supabase } from "@/lib/supabase/client"

export default function Login() {
  const router = useRouter()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [showSuccessNotification, setShowSuccessNotification] = useState(false)
  const [showUnverifiedWarning, setShowUnverifiedWarning] = useState(false)
  const [userName, setUserName] = useState("")
  const [loginAttempts, setLoginAttempts] = useState(0)
  const [isLocked, setIsLocked] = useState(false)

  // If user is already logged in, redirect to dashboard
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

  // Handle account lockout (5 failed attempts = 5 minute lockout)
  useEffect(() => {
    if (loginAttempts >= 5) {
      setIsLocked(true)
      setError("Too many failed attempts. Please try again in 5 minutes.")
      
      const timer = setTimeout(() => {
        setIsLocked(false)
        setLoginAttempts(0)
        setError("")
      }, 5 * 60 * 1000) // 5 minutes

      return () => clearTimeout(timer)
    }
  }, [loginAttempts])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (isLocked) {
      setError("Account temporarily locked. Please try again later.")
      return
    }

    setIsLoading(true)

    try {
      // Attempt to sign in
      const { data, error: signInError } = await supabase.auth.signInWithPassword({
        email: email.toLowerCase().trim(),
        password,
      })

      if (signInError) {
        // Increment failed attempts
        setLoginAttempts(prev => prev + 1)
        
        // Generic error message for security
        if (signInError.message.includes("Invalid login credentials")) {
          setError("Invalid email or password. Please try again.")
        } else if (signInError.message.includes("Email not confirmed")) {
          setShowUnverifiedWarning(true)
          setError("Please verify your email before logging in. Check your inbox for the verification link.")
        } else {
          setError("Login failed. Please check your credentials and try again.")
        }
        setIsLoading(false)
        return
      }

      // Check if email is verified
      if (data.user && !data.user.email_confirmed_at) {
        setShowUnverifiedWarning(true)
        setError("Please verify your email before logging in. Check your inbox for the verification link.")
        await supabase.auth.signOut()
        setIsLoading(false)
        return
      }

      // Fetch user details for personalized welcome
      if (data.user) {
        const { data: userData } = await supabase
          .from("users")
          .select("first_name, last_name")
          .eq("auth_id", data.user.id)
          .single()

        if (userData) {
          setUserName(`${userData.first_name} ${userData.last_name}`)
        }
      }

      // Reset failed attempts on successful login
      setLoginAttempts(0)

      // Show success notification
      setShowSuccessNotification(true)

      // Redirect after showing notification
      setTimeout(() => {
        router.push("/dashboard")
      }, 2000)
    } catch (err: any) {
      setError("An unexpected error occurred. Please try again.")
      setIsLoading(false)
    }
  }

  const handleResendVerification = async () => {
    if (!email) {
      setError("Please enter your email address first.")
      return
    }

    try {
      const { error } = await supabase.auth.resend({
        type: 'signup',
        email: email.toLowerCase().trim(),
      })

      if (error) throw error

      alert("Verification email sent! Please check your inbox.")
    } catch (err: any) {
      setError("Failed to resend verification email. Please try again.")
    }
  }

  // Success Notification Component
  const SuccessNotification = () => (
    <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-top-5 fade-in duration-500">
      <div className="bg-green-50 border-2 border-green-500 rounded-lg shadow-2xl p-4 flex items-start gap-3 max-w-md">
        <div className="bg-green-500 rounded-full p-1 flex-shrink-0">
          <CheckCircle2 className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="font-semibold text-green-900">Login Successful! 🎉</h3>
          <p className="text-sm text-green-800 mt-1">
            {userName ? `Welcome back, ${userName}!` : "Welcome back!"} Redirecting to your dashboard...
          </p>
        </div>
      </div>
    </div>
  )

  // Unverified Email Warning Component
  const UnverifiedWarning = () => (
    <div className="bg-amber-50 border-2 border-amber-400 rounded-lg p-4 flex items-start gap-3">
      <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
      <div className="flex-1">
        <h3 className="font-semibold text-amber-900 mb-1">Email Not Verified</h3>
        <p className="text-sm text-amber-800 mb-3">
          You need to verify your email address before you can log in. Check your inbox for the verification link.
        </p>
        <Button
          type="button"
          onClick={handleResendVerification}
          size="sm"
          variant="outline"
          className="border-amber-300 text-amber-800 hover:bg-amber-100"
        >
          Resend Verification Email
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
                Welcome Back
              </h1>
              <p className="text-foreground/60">
                Sign in to access your family tree
              </p>
            </div>

            {error && !showUnverifiedWarning && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm text-red-700">{error}</p>
                  {loginAttempts > 0 && loginAttempts < 5 && (
                    <p className="text-xs text-red-600 mt-1">
                      {5 - loginAttempts} attempts remaining before temporary lockout
                    </p>
                  )}
                </div>
              </div>
            )}

            {showUnverifiedWarning && <UnverifiedWarning />}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="you@example.com"
                  required
                  disabled={isLoading}
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-foreground"
                  >
                    Password
                  </label>
                  <Link
                    href="/forgot-password"
                    className="text-sm text-primary hover:underline"
                  >
                    Forgot?
                  </Link>
                </div>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 pr-12 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="••••••••"
                    required
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/50 hover:text-foreground transition-colors"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    disabled={isLoading}
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-border text-primary focus:ring-2 focus:ring-primary"
                />
                <label htmlFor="remember-me" className="ml-2 text-sm text-foreground/70">
                  Remember me for 30 days
                </label>
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  disabled={isLoading || isLocked}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Signing in...
                    </span>
                  ) : isLocked ? (
                    "Account Locked"
                  ) : (
                    "Sign In"
                  )}
                </Button>
              </div>
            </form>

            <div className="border-t border-border pt-6 text-center text-sm text-foreground/60">
              <p>
                Don&apos;t have an account?{" "}
                <Link
                  href="/register"
                  className="text-primary hover:underline font-medium"
                >
                  Create one
                </Link>
              </p>
            </div>

            <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
              <p className="text-sm text-foreground/70">
                Having trouble signing in?{" "}
                <Link
                  href="/forgot-password"
                  className="text-primary hover:underline"
                >
                  Reset your password
                </Link>
                {" "}or{" "}
                <Link
                  href="/support"
                  className="text-primary hover:underline"
                >
                  contact support
                </Link>
              </p>
            </div>

            {/* Security Notice */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <p className="text-xs text-blue-800">
                🔒 <strong>Security Note:</strong> Your account will be temporarily locked after 5 failed login attempts to protect against unauthorized access.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />

      {/* Success Notification */}
      {showSuccessNotification && <SuccessNotification />}
    </>
  )
}