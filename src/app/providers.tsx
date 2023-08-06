'use client'

import { AuthProvider } from "@/contexts/Auth/AuthProvider"

export function Providers({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <AuthProvider>{children}</AuthProvider>
  )
}