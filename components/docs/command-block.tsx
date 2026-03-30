"use client"

import { CodePreview } from "./code-preview"

interface CommandBlockProps {
  command: string
  // If true, it will parse the command and provide tabs for npm, yarn, pnpm, bun
  isPackageManager?: boolean
}

const packageManagers = ["npm", "yarn", "pnpm", "bun"]

function getCommandForPackageManager(baseCommand: string, pm: string) {
  // Normalize to a base package list
  let packages = ""
  let isInstall = false
  let isExecute = false
  let executeCmd = ""

  if (baseCommand.match(/(npm install|npm i|yarn add|pnpm add|bun add)\s+(.+)/)) {
    isInstall = true
    packages = baseCommand.replace(/^(npm install|npm i|yarn add|pnpm add|bun add)\s+/, "").trim()
  } else if (baseCommand.match(/(npx|yarn dlx|pnpm dlx|bunx)\s+(.+)/)) {
    isExecute = true
    executeCmd = baseCommand.replace(/^(npx|yarn dlx|pnpm dlx|bunx)\s+/, "").trim()
  }

  if (isInstall) {
    if (pm === "npm") return `npm install ${packages}`
    if (pm === "yarn") return `yarn add ${packages}`
    if (pm === "pnpm") return `pnpm add ${packages}`
    if (pm === "bun") return `bun add ${packages}`
  }
  
  if (isExecute) {
    if (pm === "npm") return `npx ${executeCmd}`
    if (pm === "yarn") return `yarn dlx ${executeCmd}`
    if (pm === "pnpm") return `pnpm dlx ${executeCmd}`
    if (pm === "bun") return `bunx ${executeCmd}`
  }

  // Fallback
  return baseCommand
}

export function CommandBlock({ command, isPackageManager = true }: CommandBlockProps) {
  const isNpmCommand = isPackageManager && (command.includes("npm ") || command.includes("npx ") || command.includes("yarn ") || command.includes("pnpm ") || command.includes("bun "))
  
  if (isNpmCommand) {
    const tabs = packageManagers.map(pm => ({
      label: pm,
      language: "bash",
      code: getCommandForPackageManager(command, pm)
    }))
    return <CodePreview tabs={tabs} className="my-6" showLineNumbers={false} />
  }

  return <CodePreview code={command} language="bash" className="my-6" showLineNumbers={false} />
}
