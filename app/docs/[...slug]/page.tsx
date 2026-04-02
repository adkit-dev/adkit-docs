import { redirect } from "next/navigation"

export default async function DocPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params
  redirect("/" + slug.join("/"))
}
