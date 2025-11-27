"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

interface User {
  id: string
  email: string
  name: string
}

interface AuthContextType {
  user: User | null
  loading: boolean
  login: (email: string, password: string) => Promise<void>
  register: (email: string, password: string, name: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  // Initialize auth state from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("familytree_user")
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser))
      } catch (error) {
        console.error("Failed to parse stored user:", error)
      }
    }
    setLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    // Mock login - in production, this would call an API
    if (!email || !password) {
      throw new Error("Email and password are required")
    }

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    const mockUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      name: email.split("@")[0],
    }

    setUser(mockUser)
    localStorage.setItem("familytree_user", JSON.stringify(mockUser))
  }

  const register = async (email: string, password: string, name: string) => {
    // Mock register - in production, this would call an API
    if (!email || !password || !name) {
      throw new Error("Email, password, and name are required")
    }

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    const mockUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      name,
    }

    setUser(mockUser)
    localStorage.setItem("familytree_user", JSON.stringify(mockUser))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("familytree_user")
  }

  return <AuthContext.Provider value={{ user, loading, login, register, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
