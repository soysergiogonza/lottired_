import { Card, CardContent } from "@/components/ui/card"
import { CreditCard, Smartphone, Landmark, Wallet } from "lucide-react"

export default function PaymentMethods() {
  const methods = [
    {
      icon: <CreditCard className="h-8 w-8" />,
      name: "Tarjetas de Crédito",
      description: "Visa, Mastercard, American Express",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      name: "Pagos Móviles",
      description: "Nequi, Daviplata",
    },
    {
      icon: <Landmark className="h-8 w-8" />,
      name: "Transferencias Bancarias",
      description: "PSE, Transferencias directas",
    },
    {
      icon: <Wallet className="h-8 w-8" />,
      name: "Efectivo",
      description: "Efecty, Baloto, Corresponsales",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
      {methods.map((method, index) => (
        <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
          <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
            <div className="rounded-full bg-primary/10 p-3 text-primary">{method.icon}</div>
            <h3 className="text-lg font-bold">{method.name}</h3>
            <p className="text-sm text-gray-500">{method.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
