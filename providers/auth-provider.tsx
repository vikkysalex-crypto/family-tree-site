"use client"   // ✅ Must be at the very top

import { createContext, useContext } from "react"
import { supabase } from "@/lib/supabase/client"

export const AuthContext = createContext<any>({})

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const register = async (
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    otherName?: string,
    dob?: string,
    nationality?: string,
    phone?: string
  ) => {
    // 1️⃣ Sign up with Supabase Auth
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) throw error

    const authId = data.user?.id
    if (!authId) throw new Error("User ID not found after signup")

    // 2️⃣ Insert into 'users' table
    const { error: dbError } = await supabase.from("users").insert({
      auth_id: authId,
      first_name: firstName,
      last_name: lastName,
      other_name: otherName || null,
      email,
      phone: phone || null,
      nationality: nationality || null,
      dob: dob || null,
    })

    if (dbError) throw dbError

    return data.user
  }

  const login = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) throw error
    return data.user
  }

  const logout = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  }

  const value = { register, login, logout }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
