import { redirect } from "next/navigation"

import { AppShell } from "@/components/app-shell"
import { CandidateProfileDialog } from "@/components/candidate-profile-dialog"
import { getCurrentUser } from "@/lib/server/auth"
import { getCandidateProfile } from "@/lib/server/profile"

export default async function Page() {
  const user = await getCurrentUser()

  if (!user) {
    redirect("/login")
  }

  const profile = await getCandidateProfile()

  return (
    <AppShell breadcrumbPage="Candidate profile">
      <main className="flex flex-1 flex-col gap-6 p-4 md:p-8">
        <div className="max-w-3xl">
          <h1 className="text-2xl font-semibold tracking-tight">
            Candidate context
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Start by saving the context future CV edits and cover letters should
            use. This keeps generated wording grounded in your real experience.
          </p>
        </div>
        <section className="max-w-3xl rounded-2xl border bg-background p-6 shadow-xs">
          <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-medium">
                {profile ? "Profile ready" : "Profile required"}
              </h2>
              <p className="text-sm text-muted-foreground">
                {profile
                  ? "Your candidate context is saved. You can update it whenever your CV, goals, or skill confidence changes."
                  : "Create your candidate profile before tailoring applications. The app will use it as the source of truth later."}
              </p>
            </div>
            <CandidateProfileDialog profile={profile} />
          </div>
          {profile && (
            <div className="mt-6 grid gap-4 border-t pt-6 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <h3 className="text-sm font-medium">Career stage</h3>
                <p className="text-sm text-muted-foreground">
                  {profile.careerStage || "Not specified"}
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-sm font-medium">Target roles</h3>
                <p className="text-sm text-muted-foreground">
                  {profile.targetRoles || "Not specified"}
                </p>
              </div>
            </div>
          )}
        </section>
      </main>
    </AppShell>
  )
}
