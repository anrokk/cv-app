import { redirect } from "next/navigation"

import { AccountSettingsForm } from "@/components/account-settings-form"
import { AppShell } from "@/components/app-shell"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { getCurrentUser } from "@/lib/server/auth"

export default async function Page() {
  const user = await getCurrentUser()

  if (!user) {
    redirect("/login")
  }

  return (
    <AppShell breadcrumbPage="Settings" user={user}>
      <main className="flex flex-1 flex-col gap-6 p-4 md:p-8">
        <div className="max-w-3xl">
          <h1 className="text-2xl font-semibold tracking-tight">
            Settings
          </h1>
        </div>

        <Card className="max-w-3xl">
          <CardHeader>
            <CardTitle>Profile settings</CardTitle>
            <CardDescription>
              Your basic account details.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <AccountSettingsForm user={user} />
          </CardContent>
        </Card>
      </main>
    </AppShell>
  )
}
