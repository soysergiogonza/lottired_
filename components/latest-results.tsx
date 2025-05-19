"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LatestResults() {

  const results = {
    medellin: {
      name: "Lotería de Medellín",
      logo: "/images/medellin-logo.png",
      lastDraw: "4580 - 10/05/2024",
      winningNumber: "2525",
      series: "001",
      prize: "$1,000,000,000",
    },
    bogota: {
      name: "Lotería de Bogotá",
      logo: "/images/bogota-logo.png",
      lastDraw: "2789 - 09/05/2024",
      winningNumber: "8743",
      series: "156",
      prize: "$800,000,000",
    },
    boyaca: {
      name: "Lotería de Boyacá",
      logo: "/images/boyaca-logo.png",
      lastDraw: "4789 - 11/05/2024",
      winningNumber: "1234",
      series: "089",
      prize: "$1,200,000,000",
    },
    cruz: {
      name: "Lotería Cruz Roja",
      logo: "/images/cruz-logo.png",
      lastDraw: "2987 - 07/05/2024",
      winningNumber: "5678",
      series: "123",
      prize: "$750,000,000",
    },
  }

  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Últimos Resultados</h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Consulta los últimos resultados de las loterías más populares
          </p>
        </div>

        <div className="mt-8 mx-auto max-w-4xl">
          <Tabs defaultValue="medellin" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="medellin">Medellín</TabsTrigger>
              <TabsTrigger value="bogota">Bogotá</TabsTrigger>
              <TabsTrigger value="boyaca">Boyacá</TabsTrigger>
              <TabsTrigger value="cruz">Cruz Roja</TabsTrigger>
            </TabsList>
            {Object.entries(results).map(([key, lottery]) => (
              <TabsContent key={key} value={key}>
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle>{lottery.name}</CardTitle>
                      <div className="h-12 w-12 relative">
                        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                          <span className="text-xs">Logo</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500">Sorteo: {lottery.lastDraw}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Número Ganador</p>
                        <p className="text-3xl font-bold text-primary">{lottery.winningNumber}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Serie</p>
                        <p className="text-3xl font-bold text-primary">{lottery.series}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Premio Mayor</p>
                        <p className="text-2xl font-bold text-green-600">{lottery.prize}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}
