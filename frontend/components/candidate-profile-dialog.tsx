"use client"

import { type FormEvent, useState } from "react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import type {
  CandidateProfile,
  CandidateProfilePayload,
} from "@/types/profile/candidate-profile"

type CandidateProfileDialogProps = {
  profile: CandidateProfile | null
}

const emptyProfile: CandidateProfilePayload = {
  introduction: "",
  baseCvText: "",
  targetRoles: "",
  careerStage: "",
  strongSkills: "",
  comfortableSkills: "",
  familiarSkills: "",
  doNotOversellSkills: "",
}

function toFormState(
  profile: CandidateProfile | null
): CandidateProfilePayload {
  if (!profile) {
    return emptyProfile
  }

  return {
    introduction: profile.introduction,
    baseCvText: profile.baseCvText,
    targetRoles: profile.targetRoles ?? "",
    careerStage: profile.careerStage ?? "",
    strongSkills: profile.strongSkills ?? "",
    comfortableSkills: profile.comfortableSkills ?? "",
    familiarSkills: profile.familiarSkills ?? "",
    doNotOversellSkills: profile.doNotOversellSkills ?? "",
  }
}

function normalizePayload(
  profile: CandidateProfilePayload
): CandidateProfilePayload {
  return {
    introduction: profile.introduction.trim(),
    baseCvText: profile.baseCvText.trim(),
    targetRoles: profile.targetRoles?.trim() || null,
    careerStage: profile.careerStage?.trim() || null,
    strongSkills: profile.strongSkills?.trim() || null,
    comfortableSkills: profile.comfortableSkills?.trim() || null,
    familiarSkills: profile.familiarSkills?.trim() || null,
    doNotOversellSkills: profile.doNotOversellSkills?.trim() || null,
  }
}

async function getErrorMessage(response: Response) {
  try {
    const body = (await response.json()) as { message?: string }
    return body.message || "Unable to save profile."
  } catch {
    return "Unable to save profile."
  }
}

export function CandidateProfileDialog({
  profile,
}: CandidateProfileDialogProps) {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState<CandidateProfilePayload>(() =>
    toFormState(profile)
  )
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [isSaving, setIsSaving] = useState(false)

  function handleOpenChange(nextOpen: boolean) {
    if (nextOpen) {
      setForm(toFormState(profile))
      setError("")
      setSuccess("")
    }

    setOpen(nextOpen)
  }

  function updateField(
    field: keyof CandidateProfilePayload,
    value: string
  ) {
    setForm((current) => ({ ...current, [field]: value }))
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError("")
    setSuccess("")
    setIsSaving(true)

    try {
      const response = await fetch("/api/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(normalizePayload(form)),
      })

      if (!response.ok) {
        throw new Error(await getErrorMessage(response))
      }

      setSuccess("Profile saved.")
      toast.success("Profile saved.")
      router.refresh()
      window.setTimeout(() => setOpen(false), 400)
    } catch (error) {
      setError(error instanceof Error ? error.message : "Unable to save profile.")
    } finally {
      setIsSaving(false)
    }
  }

  const hasProfile = !!profile
  const requiredFieldsMissing =
    !form.introduction.trim() || !form.baseCvText.trim()

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button>{hasProfile ? "Edit profile" : "Create profile"}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Tell us what the CV cannot say alone</DialogTitle>
          <DialogDescription>
            This context keeps future CV edits and cover letters specific,
            honest, and recognizably yours.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="no-scrollbar max-h-[70vh] overflow-y-auto pr-1">
            <FieldGroup>
              <Field data-invalid={!!error && !form.introduction.trim()}>
                <FieldLabel htmlFor="introduction">Introduction</FieldLabel>
                <Textarea
                  id="introduction"
                  value={form.introduction}
                  onChange={(event) =>
                    updateField("introduction", event.target.value)
                  }
                  disabled={isSaving}
                  aria-invalid={!!error && !form.introduction.trim()}
                  required
                  placeholder="Where are you in your career, what kind of roles are you looking for, and how do you want to come across?"
                />
                <FieldDescription>
                  Use your own words. This is the source for non-generic cover
                  letters later.
                </FieldDescription>
              </Field>

              <Field data-invalid={!!error && !form.baseCvText.trim()}>
                <FieldLabel htmlFor="base-cv-text">Current CV text</FieldLabel>
                <Textarea
                  id="base-cv-text"
                  className="min-h-48"
                  value={form.baseCvText}
                  onChange={(event) =>
                    updateField("baseCvText", event.target.value)
                  }
                  disabled={isSaving}
                  aria-invalid={!!error && !form.baseCvText.trim()}
                  required
                  placeholder="Paste the current version of your CV here."
                />
                <FieldDescription>
                  Future tailoring should trace claims back to this text and
                  your profile.
                </FieldDescription>
              </Field>

              <Field>
                <FieldLabel htmlFor="target-roles">Target roles</FieldLabel>
                <Textarea
                  id="target-roles"
                  value={form.targetRoles ?? ""}
                  onChange={(event) =>
                    updateField("targetRoles", event.target.value)
                  }
                  disabled={isSaving}
                  placeholder="Frontend developer, full-stack roles, junior Java roles..."
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="career-stage">Career stage</FieldLabel>
                <Input
                  id="career-stage"
                  value={form.careerStage ?? ""}
                  onChange={(event) =>
                    updateField("careerStage", event.target.value)
                  }
                  disabled={isSaving}
                  placeholder="Junior, recent graduate, career switcher..."
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="strong-skills">Strong skills</FieldLabel>
                <Textarea
                  id="strong-skills"
                  value={form.strongSkills ?? ""}
                  onChange={(event) =>
                    updateField("strongSkills", event.target.value)
                  }
                  disabled={isSaving}
                  placeholder="Skills you are comfortable claiming strongly."
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="comfortable-skills">
                  Comfortable skills
                </FieldLabel>
                <Textarea
                  id="comfortable-skills"
                  value={form.comfortableSkills ?? ""}
                  onChange={(event) =>
                    updateField("comfortableSkills", event.target.value)
                  }
                  disabled={isSaving}
                  placeholder="Skills you can work with, but would not oversell."
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="familiar-skills">
                  Familiar skills
                </FieldLabel>
                <Textarea
                  id="familiar-skills"
                  value={form.familiarSkills ?? ""}
                  onChange={(event) =>
                    updateField("familiarSkills", event.target.value)
                  }
                  disabled={isSaving}
                  placeholder="Technologies you have touched or understand at a basic level."
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="do-not-oversell">
                  Do not oversell
                </FieldLabel>
                <Textarea
                  id="do-not-oversell"
                  value={form.doNotOversellSkills ?? ""}
                  onChange={(event) =>
                    updateField("doNotOversellSkills", event.target.value)
                  }
                  disabled={isSaving}
                  placeholder="Skills, seniority, or experience you do not want the app to exaggerate."
                />
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
            </FieldGroup>
          </div>

          <DialogFooter>
            <Button type="submit" disabled={isSaving || requiredFieldsMissing}>
              {isSaving ? "Saving..." : "Save profile"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
