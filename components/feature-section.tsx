import { Card, CardContent } from "@/components/ui/card"
import type { ReactNode } from "react"

interface FeatureSectionProps {
  icon: ReactNode
  title: string
  description: string
}

export default function FeatureSection({ icon, title, description }: FeatureSectionProps) {
  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
      <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
        <div className="rounded-full bg-primary/10 p-3">{icon}</div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-500">{description}</p>
      </CardContent>
    </Card>
  )
}
