"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { JavaScriptIcon, ReactIcon } from "@/components/icons/sdk-icons"
import { useSDKPreference } from "@/hooks/use-sdk-preference"
import { showSDKPreferenceToast } from "./sdk-preference-toast"

interface SDKTabPickerProps {
  value?: "js" | "react"
  onChange?: (value: "js" | "react") => void
}

export function SDKTabPicker({ value: controlledValue, onChange }: SDKTabPickerProps) {
  const {
    sdk: storedSDK,
    setSDK: setStoredSDK,
    isLoaded,
    shouldPrompt,
    savePreference,
    dismissPrompt,
  } = useSDKPreference()

  const value = controlledValue ?? storedSDK
  const hasShownToast = useRef(false)

  useEffect(() => {
    if (isLoaded) {
      onChange?.(storedSDK)
    }
  }, [isLoaded, storedSDK, onChange])

  const tabs = [
    { id: "js" as const, label: "JavaScript SDK", icon: JavaScriptIcon },
    { id: "react" as const, label: "React SDK", icon: ReactIcon },
  ]

  const handleChange = (newValue: "js" | "react") => {
    onChange?.(newValue)
    setStoredSDK(newValue)

    if (shouldPrompt && !hasShownToast.current) {
      hasShownToast.current = true
      
      showSDKPreferenceToast(
        newValue,
        () => savePreference(newValue),
        dismissPrompt
      )
    }
  }

  if (!isLoaded) {
    return (
      <div className="relative mx-auto flex w-fit rounded-full bg-muted/80 p-1.5 border border-border/50">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className="flex items-center gap-2.5 rounded-full px-6 py-3 text-sm font-medium text-muted-foreground"
          >
            <tab.icon className="h-5 w-5 opacity-50" />
            <span className="opacity-50">{tab.label}</span>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="relative mx-auto flex w-fit rounded-full bg-muted/80 p-1.5 border border-border/50">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => handleChange(tab.id)}
          className={cn(
            "relative z-10 flex items-center gap-2.5 rounded-full px-6 py-3 text-sm font-medium transition-colors",
            value === tab.id
              ? "text-foreground"
              : "text-muted-foreground hover:text-foreground/80"
          )}
        >
          {value === tab.id && (
            <motion.div
              layoutId="sdk-tab-indicator"
              className="absolute inset-0 rounded-full bg-background shadow-md border border-border/30"
              transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
            />
          )}
          <tab.icon className="relative z-10 h-5 w-5" />
          <span className="relative z-10">{tab.label}</span>
        </button>
      ))}
    </div>
  )
}
