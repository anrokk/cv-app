import { backendFetch } from "@/lib/server/backend"
import type { CurrentUser } from "@/types/auth/user"

export async function getCurrentUser(): Promise<CurrentUser | null> {
  const response = await backendFetch("/api/auth/me").catch(() => null)

  if (!response?.ok) {
    return null
  }

  return response.json()
}
