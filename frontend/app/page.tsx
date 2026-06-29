import Link from "next/link"
import {
  ArrowRight,
  Check,
  ChevronRight,
  FileText,
  MessageSquareText,
  ShieldCheck,
  Sparkles,
} from "lucide-react"

import { Button } from "@/components/ui/button"

const proofPoints = [
  {
    label: "Role",
    body: "What the posting asks for.",
  },
  {
    label: "Evidence",
    body: "What your CV supports.",
  },
  {
    label: "Draft",
    body: "What you approve.",
  },
]

const features = [
  {
    title: "Evidence first",
    body: "Every suggested claim points back to your CV or notes.",
    icon: ShieldCheck,
  },
  {
    title: "Claim strength",
    body: "Separate what you have done from what you are still learning.",
    icon: MessageSquareText,
  },
  {
    title: "Final review",
    body: "Edit the CV, letter, and notes before anything leaves the desk.",
    icon: FileText,
  },
]

const steps = [
  "Paste the job description.",
  "Mark the claims your CV can support.",
  "Review the CV and letter before export.",
]

const faqs = [
  {
    question: "Does it invent experience?",
    answer:
      "No. Unsupported claims are softened, removed, or flagged before export.",
  },
  {
    question: "Can I edit the generated documents?",
    answer:
      "Yes. The CV and cover letter remain editable until you approve them.",
  },
  {
    question: "Who is this for first?",
    answer:
      "Applicants with a usable CV who want each application to be more specific.",
  },
  {
    question: "What if a requirement is only partly true?",
    answer:
      "Soften it, leave it out, or frame it as learning.",
  },
]

export default function Page() {
  return (
    <main className="min-h-svh w-full max-w-full overflow-x-hidden bg-background text-foreground [--accent-foreground:oklch(0.205_0_0)] [--accent:oklch(0.97_0_0)] [--background:oklch(1_0_0)] [--border:oklch(0.922_0_0)] [--card-foreground:oklch(0.145_0_0)] [--card:oklch(1_0_0)] [--foreground:oklch(0.145_0_0)] [--muted-foreground:oklch(0.44_0_0)] [--muted:oklch(0.97_0_0)] [--primary-foreground:oklch(0.962_0.018_272.314)] [--primary:oklch(0.457_0.24_277.023)] [--ring:oklch(0.708_0_0)] [--secondary-foreground:oklch(0.21_0.006_285.885)] [--secondary:oklch(0.967_0.001_286.375)]">
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-semibold"
          aria-label="TBA home"
        >
          <span className="flex size-6 items-center justify-center rounded-full bg-foreground text-[0.65rem] font-bold text-background">
            T
          </span>
          TBA
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-muted-foreground sm:flex">
          <a className="transition-colors hover:text-foreground" href="#how-it-works">
            How it works
          </a>
          <a className="transition-colors hover:text-foreground" href="#questions">
            Questions
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/login">Sign in</Link>
          </Button>
          <Button className="hidden min-[420px]:inline-flex" size="sm" asChild>
            <Link href="/signup">
              Start
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </header>

      <section className="mx-auto grid w-full max-w-7xl gap-12 overflow-hidden px-5 pb-20 pt-16 sm:px-8 lg:grid-cols-[0.94fr_1.06fr] lg:px-10 lg:pb-28 lg:pt-24">
        <div className="flex min-w-0 max-w-2xl flex-col justify-center">
          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.04] tracking-[-0.03em] text-balance sm:text-6xl sm:leading-[1.02] lg:text-6xl">
            Tailor the application. Keep the truth.
          </h1>
          <p className="mt-6 max-w-[54ch] text-base leading-7 text-muted-foreground sm:text-lg">
            TBA compares your CV with the role, drafts the right version, and shows
            what every claim is based on.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/signup">
                Start tailoring
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#how-it-works">View flow</a>
            </Button>
          </div>
        </div>

        <div className="relative min-h-[430px] w-full max-w-full min-w-0 overflow-hidden rounded-2xl bg-muted">
          <div className="absolute inset-x-[-18%] top-20 h-44 rotate-[-3deg] bg-[radial-gradient(circle_at_18%_40%,oklch(0.78_0.1_277)_0,transparent_28%),radial-gradient(circle_at_50%_62%,oklch(0.93_0.06_92)_0,transparent_34%),radial-gradient(circle_at_80%_42%,oklch(0.76_0.11_260)_0,transparent_25%)] opacity-70 blur-2xl" />
          <div className="absolute inset-x-[-12%] top-36 h-24 rotate-[2deg] bg-[linear-gradient(90deg,transparent,oklch(0.78_0.1_267_/_0.48),oklch(0.94_0.06_93_/_0.56),transparent)] blur-xl" />
          <div className="relative mx-auto mt-20 flex w-[calc(100%-2rem)] max-w-xl min-w-0 flex-col gap-3 overflow-hidden rounded-2xl border border-border bg-background p-4 sm:w-[88%]">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <div className="min-w-0">
                <p className="text-sm font-medium">Tailored package</p>
                <p className="text-xs text-muted-foreground">Product designer, growth team</p>
              </div>
              <span className="shrink-0 rounded-full bg-primary px-2.5 py-1 text-xs font-medium text-primary-foreground">
                Ready
              </span>
            </div>
            <div className="grid gap-3 sm:grid-cols-[1fr_0.82fr]">
              <div className="rounded-xl bg-muted p-4">
                <p className="text-sm font-medium">Evidence</p>
                <div className="mt-4 space-y-3">
                  {["User research", "Figma systems", "SQL analytics"].map((item, index) => (
                    <div key={item} className="flex items-center justify-between gap-4 text-sm">
                      <span>{item}</span>
                      <span className="rounded-full bg-background px-2 py-1 text-xs text-muted-foreground">
                        {index === 0 ? "strong" : index === 1 ? "comfortable" : "familiar"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-xl bg-foreground p-4 text-background">
                <Sparkles className="size-4" aria-hidden="true" />
                <p className="mt-5 text-sm font-medium">Tone check</p>
                <p className="mt-2 text-sm leading-6 text-background/72">
                  Keep collaboration language. Do not imply lead ownership.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              {["CV", "Letter", "Notes"].map((item) => (
                <span key={item} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border">
        <div className="mx-auto grid max-w-7xl divide-y divide-border px-5 sm:px-8 md:grid-cols-3 md:divide-x md:divide-y-0 lg:px-10">
          {proofPoints.map((point) => (
            <div key={point.label} className="py-7 md:px-8 md:first:pl-0 md:last:pr-0">
              <p className="text-sm font-medium">{point.label}</p>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">{point.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-10 lg:py-28">
        <div>
          <h2 className="max-w-xl text-3xl font-semibold leading-tight tracking-[-0.02em] text-balance sm:text-4xl">
            A calm review layer before you send.
          </h2>
          <p className="mt-4 max-w-[46ch] leading-7 text-muted-foreground">
            See the evidence, adjust the tone, then export.
          </p>
        </div>
        <div className="grid gap-4">
          {features.map((feature) => {
            const Icon = feature.icon

            return (
              <article
                key={feature.title}
                className="grid gap-4 rounded-2xl bg-muted p-5 sm:grid-cols-[2.5rem_1fr]"
              >
                <div className="flex size-10 items-center justify-center rounded-xl bg-background">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-base font-semibold">{feature.title}</h3>
                  <p className="mt-2 max-w-[62ch] text-sm leading-6 text-muted-foreground">
                    {feature.body}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section id="how-it-works" className="bg-muted">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-28">
          <div>
            <h2 className="max-w-lg text-3xl font-semibold leading-tight tracking-[-0.02em] text-balance sm:text-4xl">
              Three steps. No template maze.
            </h2>
            <div className="mt-10 space-y-7">
              {steps.map((step, index) => (
                <div key={step} className="grid grid-cols-[2rem_1fr] gap-4">
                  <span className="flex size-8 items-center justify-center rounded-full bg-background text-sm font-medium">
                    {index + 1}
                  </span>
                  <p className="max-w-[56ch] text-sm leading-6 text-muted-foreground">{step}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl bg-background p-4">
            <div className="grid gap-3 sm:grid-cols-[0.82fr_1.18fr]">
              <div className="rounded-xl bg-foreground p-4 text-background">
                <p className="text-sm font-medium">Inputs</p>
                <div className="mt-6 space-y-2 text-sm text-background/72">
                  <p>Current CV</p>
                  <p>Job description</p>
                  <p>Career notes</p>
                </div>
              </div>
              <div className="rounded-xl bg-muted p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Output</p>
                  <ChevronRight className="size-4 text-muted-foreground" aria-hidden="true" />
                </div>
                <div className="mt-5 space-y-3">
                  {["Supported claims", "CV changes", "Letter draft"].map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-xl bg-background px-3 py-3 text-sm">
                      <Check className="size-4 text-primary" aria-hidden="true" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="questions" className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10 lg:py-28">
        <div>
          <h2 className="text-3xl font-semibold leading-tight tracking-[-0.02em] text-balance sm:text-4xl">
            Practical questions.
          </h2>
          <p className="mt-4 max-w-[42ch] leading-7 text-muted-foreground">
            Built for one careful application at a time.
          </p>
        </div>
        <div className="divide-y divide-border border-y border-border">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium">
                {faq.question}
                <span className="grid size-7 shrink-0 place-items-center rounded-full bg-muted text-lg leading-none transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-[66ch] text-sm leading-6 text-muted-foreground">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-5 border-t border-border pt-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold tracking-[-0.02em] text-balance">
              Use the role. Keep your evidence.
            </h2>
            <p className="mt-2 max-w-[44ch] text-sm leading-6 text-muted-foreground">
              Start from one CV and one job description.
            </p>
          </div>
          <Button size="lg" asChild>
            <Link href="/signup">
              Start tailoring
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 text-sm text-muted-foreground sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <p className="font-medium text-foreground">TBA</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a className="hover:text-foreground" href="#">
              Privacy
            </a>
            <a className="hover:text-foreground" href="#">
              Terms
            </a>
            <a className="hover:text-foreground" href="#">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
