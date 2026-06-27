"use client"

import { type FormEvent, useState } from "react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import type { CurrentUser } from "@/types/auth/user"

type AccountSettingsFormProps = {
  user: CurrentUser
}

async function getErrorMessage(response: Response) {
  try {
    const body = (await response.json()) as { message?: string }
    return body.message || "Unable to update account details."
  } catch {
    return "Unable to update account details."
  }
}

export function AccountSettingsForm({ user }: AccountSettingsFormProps) {
  const router = useRouter()
  const [fullName, setFullName] = useState(user.fullName ?? "")
  const [email, setEmail] = useState(user.email)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [isSaving, setIsSaving] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError("")
    setSuccess("")
    setIsSaving(true)

    try {
      const response = await fetch("/api/auth/me", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          fullName: fullName.trim() || null,
          email: email.trim(),
        }),
      })

      if (!response.ok) {
        throw new Error(await getErrorMessage(response))
      }

      setSuccess("Account details updated.")
      router.refresh()
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Unable to update account details."
      )
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="full-name">Full name</FieldLabel>
          <Input
            id="full-name"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            disabled={isSaving}
            maxLength={120}
            placeholder="Ada Lovelace"
          />
          <FieldDescription>
            This name is shown in your account menu.
          </FieldDescription>
        </Field>

        <Field data-invalid={!!error}>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            disabled={isSaving}
            aria-invalid={!!error}
            required
          />
          <FieldDescription>
            You will use this email to sign in.
          </FieldDescription>
        </Field>

        {(error || success) && (
          <Field data-invalid={!!error}>
            {error ? (
              <FieldError>{error}</FieldError>
            ) : (
              <FieldDescription>{success}</FieldDescription>
            )}
          </Field>
        )}

        <Field>
          <Button type="submit" disabled={isSaving || !email.trim()}>
            {isSaving ? "Saving..." : "Save changes"}
          </Button>
        </Field>
      </FieldGroup>
    </form>
  )
}
