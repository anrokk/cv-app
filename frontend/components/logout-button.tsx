"use client"

import { useRouter } from "next/navigation"
import { LogOutIcon } from "lucide-react"

import { SidebarMenuButton } from "@/components/ui/sidebar"

export function LogoutButton() {
  const router = useRouter()

  async function handleLogout() {
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
      })
    } finally {
      router.push("/login")
      router.refresh()
    }
  }

  return (
    <SidebarMenuButton type="button" onClick={handleLogout}>
      <LogOutIcon />
      <span>Logout</span>
    </SidebarMenuButton>
  )
}
