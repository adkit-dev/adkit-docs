"use client"

import { useState, useEffect, useCallback } from "react"

type SDK = "js" | "react"

const STORAGE_KEY = "adkit-preferred-sdk"
const PROMPTED_KEY = "adkit-sdk-preference-prompted"

export function useSDKPreference() {
  const [sdk, setSDKState] = useState<SDK>("js")
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasBeenPrompted, setHasBeenPrompted] = useState(false)
  const [hasSavedPreference, setHasSavedPreference] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as SDK | null
    const prompted = localStorage.getItem(PROMPTED_KEY) === "true"
    
    if (stored === "js" || stored === "react") {
      setSDKState(stored)
      setHasSavedPreference(true)
    }
    setHasBeenPrompted(prompted)
    setIsLoaded(true)
  }, [])

  const setSDK = useCallback((value: SDK) => {
    setSDKState(value)
  }, [])

  const savePreference = useCallback((value: SDK) => {
    localStorage.setItem(STORAGE_KEY, value)
    localStorage.setItem(PROMPTED_KEY, "true")
    setHasSavedPreference(true)
    setHasBeenPrompted(true)
  }, [])

  const dismissPrompt = useCallback(() => {
    localStorage.setItem(PROMPTED_KEY, "true")
    setHasBeenPrompted(true)
  }, [])

  const shouldPrompt = isLoaded && !hasBeenPrompted && !hasSavedPreference

  return {
    sdk,
    setSDK,
    isLoaded,
    shouldPrompt,
    hasSavedPreference,
    savePreference,
    dismissPrompt,
  }
}
