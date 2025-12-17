"use client"

import { ReactNode } from "react"
import { AuthProvider } from "@/providers/auth-provider"

export default function Providers({ children }: { children: ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>
}
