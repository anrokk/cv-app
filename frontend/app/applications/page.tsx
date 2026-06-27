import Link from "next/link"
import { redirect } from "next/navigation"

import { AppShell } from "@/components/app-shell"
import { Button } from "@/components/ui/button"
import { getCurrentUser } from "@/lib/server/auth"

export default async function Page() {
  const user = await getCurrentUser()

  if (!user) {
    redirect("/login")
  }

  return (
    <AppShell breadcrumbPage="Applications">
      <main className="flex flex-1 flex-col gap-6 p-4 md:p-8">
        <div className="max-w-3xl">
          <h1 className="text-2xl font-semibold tracking-tight">
            Applications
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Saved job-specific application packages will appear here once the
            application workflow is added.
          </p>
        </div>

        <section className="max-w-3xl rounded-2xl border bg-background p-6 shadow-xs">
          <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-medium">No applications yet</h2>
              <p className="text-sm text-muted-foreground">
                The next product step is saving a job description and creating
                the first tailored application package.
              </p>
            </div>
            <Button asChild variant="outline">
              <Link href="/dashboard">Back to dashboard</Link>
            </Button>
          </div>
        </section>
      </main>
    </AppShell>
  )
}
