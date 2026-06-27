import { backendFetch } from "@/lib/server/backend"
import type { CandidateProfile } from "@/types/profile/candidate-profile"

export async function getCandidateProfile(): Promise<CandidateProfile | null> {
  const response = await backendFetch("/api/profile").catch(() => null)

  if (!response || response.status === 404) {
    return null
  }

  if (!response.ok) {
    return null
  }

  return response.json()
}
