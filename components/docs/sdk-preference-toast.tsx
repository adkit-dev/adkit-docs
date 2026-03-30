"use client"

import { Check, X } from "lucide-react"
import { toast } from "sonner"
import { JavaScriptIcon, ReactIcon } from "@/components/icons/sdk-icons"

interface SDKPreferenceToastProps {
  sdk: "js" | "react"
  onSave: () => void
  onDismiss: () => void
  toastId: string | number
}

export function SDKPreferenceToast({ sdk, onSave, onDismiss, toastId }: SDKPreferenceToastProps) {
  const sdkName = sdk === "js" ? "JavaScript" : "React"
  const Icon = sdk === "js" ? JavaScriptIcon : ReactIcon

  const handleSave = () => {
    onSave()
    toast.dismiss(toastId)
    setTimeout(() => {
      showSDKSavedToast(sdk)
    }, 150)
  }

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 rounded-xl border border-border bg-card p-4 shadow-xl">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted">
            <Icon className="h-5 w-5" />
          </div>
          <div className="flex flex-col gap-0.5">
            <p className="text-sm font-semibold text-foreground">
              Save {sdkName} SDK as default?
            </p>
            <p className="text-xs text-muted-foreground">
              We'll remember your preference across all pages.
            </p>
          </div>
        </div>
        <button
          onClick={() => {
            onDismiss()
            toast.dismiss(toastId)
          }}
          className="shrink-0 rounded-md p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
      <div className="flex items-center justify-end gap-2">
        <button
          onClick={() => {
            onDismiss()
            toast.dismiss(toastId)
          }}
          className="rounded-lg px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          Not now
        </button>
        <button
          onClick={handleSave}
          className="rounded-lg bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Save
        </button>
      </div>
    </div>
  )
}

export function showSDKPreferenceToast(
  sdk: "js" | "react",
  onSave: () => void,
  onDismiss: () => void
) {
  const toastId = toast.custom(
    (id) => (
      <SDKPreferenceToast
        sdk={sdk}
        onSave={onSave}
        onDismiss={onDismiss}
        toastId={id}
      />
    ),
    {
      duration: 10000,
      position: "bottom-right",
    }
  )
  return toastId
}

export function showSDKSavedToast(sdk: "js" | "react") {
  const sdkName = sdk === "js" ? "JavaScript" : "React"

  toast.custom(
    () => (
      <div className="flex items-center gap-3 rounded-xl border border-primary/30 bg-card p-4 shadow-xl w-full max-w-sm">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary">
          <Check className="h-4 w-4 text-primary-foreground" strokeWidth={3} />
        </div>
        <p className="text-sm font-medium text-foreground whitespace-nowrap">
          {sdkName} has been saved as your default SDK.
        </p>
      </div>
    ),
    {
      duration: 3000,
      position: "bottom-right",
    }
  )
}
