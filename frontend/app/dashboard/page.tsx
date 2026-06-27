import { redirect } from "next/navigation"

import { AppSidebar } from "@/components/app-sidebar"
import { CandidateProfileDialog } from "@/components/candidate-profile-dialog"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { getCurrentUser } from "@/lib/server/auth"
import { getCandidateProfile } from "@/lib/server/profile"

export default async function Page() {
  const user = await getCurrentUser()

  if (!user) {
    redirect("/login")
  }

  const profile = await getCandidateProfile()

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-vertical:h-4 data-vertical:self-auto"
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Candidate profile</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <main className="flex flex-1 flex-col gap-6 p-4 md:p-8">
          <div className="max-w-3xl">
            <h1 className="text-2xl font-semibold tracking-tight">
              Candidate context
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Start by saving the context future CV edits and cover letters
              should use. This keeps generated wording grounded in your real
              experience.
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
                <div className="flex flex-col gap-1">
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
      </SidebarInset>
    </SidebarProvider>
  )
}
