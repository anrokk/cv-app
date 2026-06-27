import { redirect } from "next/navigation"

import { AppShell } from "@/components/app-shell"
import { CandidateProfileDialog } from "@/components/candidate-profile-dialog"
import { getCurrentUser } from "@/lib/server/auth"
import { getCandidateProfile } from "@/lib/server/profile"

type ProfileDetailProps = {
  label: string
  value: string | null
}

function ProfileDetail({ label, value }: ProfileDetailProps) {
  return (
    <div className="flex flex-col gap-1 rounded-2xl border bg-background p-4">
      <h2 className="text-sm font-medium">{label}</h2>
      <p className="whitespace-pre-wrap text-sm text-muted-foreground">
        {value || "Not specified"}
      </p>
    </div>
  )
}

export default async function Page() {
  const user = await getCurrentUser()

  if (!user) {
    redirect("/login")
  }

  const profile = await getCandidateProfile()

  return (
    <AppShell breadcrumbPage="Profile" user={user}>
      <main className="flex flex-1 flex-col gap-6 p-4 md:p-8">
        <div className="flex max-w-4xl flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="max-w-2xl">
            <h1 className="text-2xl font-semibold tracking-tight">Profile</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Keep the source context current so future CV edits and cover
              letters stay honest and specific.
            </p>
          </div>
          <CandidateProfileDialog profile={profile} />
        </div>

        {profile ? (
          <section className="grid max-w-4xl gap-4 md:grid-cols-2">
            <ProfileDetail label="Introduction" value={profile.introduction} />
            <ProfileDetail label="Current CV text" value={profile.baseCvText} />
            <ProfileDetail label="Target roles" value={profile.targetRoles} />
            <ProfileDetail label="Career stage" value={profile.careerStage} />
            <ProfileDetail label="Strong skills" value={profile.strongSkills} />
            <ProfileDetail
              label="Comfortable skills"
              value={profile.comfortableSkills}
            />
            <ProfileDetail
              label="Familiar skills"
              value={profile.familiarSkills}
            />
            <ProfileDetail
              label="Do not oversell"
              value={profile.doNotOversellSkills}
            />
          </section>
        ) : (
          <section className="max-w-3xl rounded-2xl border bg-background p-6 shadow-xs">
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-medium">No profile yet</h2>
              <p className="text-sm text-muted-foreground">
                Add your introduction and CV text before tailoring
                applications.
              </p>
            </div>
          </section>
        )}
      </main>
    </AppShell>
  )
}
