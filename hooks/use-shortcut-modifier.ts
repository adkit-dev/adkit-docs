"use client"

import { useEffect, useState } from "react"

export function useShortcutModifier() {
  const [modifier, setModifier] = useState("Ctrl")

  useEffect(() => {
    const platform =
      navigator.userAgentData?.platform || navigator.platform || navigator.userAgent || ""

    if (/mac|iphone|ipad|ipod/i.test(platform)) {
      setModifier("Cmd")
      return
    }

    setModifier("Ctrl")
  }, [])

  return modifier
}
