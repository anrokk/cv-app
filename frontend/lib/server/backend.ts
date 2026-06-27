import { headers } from "next/headers"

const defaultBackendUrl = "http://localhost:8080"

function getBackendUrl() {
  return (process.env.BACKEND_URL ?? defaultBackendUrl).replace(/\/$/, "")
}

export async function backendFetch(path: string, init?: RequestInit) {
  const requestHeaders = await headers()
  const cookie = requestHeaders.get("cookie")
  const backendHeaders = new Headers(init?.headers)

  if (cookie) {
    backendHeaders.set("cookie", cookie)
  }

  return fetch(`${getBackendUrl()}${path}`, {
    ...init,
    headers: backendHeaders,
    cache: init?.cache ?? "no-store",
  })
}
