
import ResultsHero from "@/components/results/results-hero"
import ResultsFilter from "@/components/results/results-filter"
import ResultsTable from "@/components/results/results-table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export default function ResultsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <ResultsHero />

        {/* Contenido principal */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-[1200px] mx-auto px-4 md:px-6">
            <div className="mb-8">
              <Tabs defaultValue="buscar" className="w-full">
                <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-8 bg-white rounded-full p-1">
                  <TabsTrigger
                    value="buscar"
                    className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-white"
                  >
                    Buscar Resultados
                  </TabsTrigger>
                  <TabsTrigger
                    value="calendario"
                    className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-white"
                  >
                    Calendario
                  </TabsTrigger>
                  <TabsTrigger
                    value="ganadores"
                    className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-white"
                  >
                    Ganadores
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="buscar" className="space-y-8">
                  <ResultsFilter />
                  <ResultsTable />
                </TabsContent>

                {/* <TabsContent value="ganadores" className="space-y-8">
                  <LatestWinners />
                </TabsContent> */}
              </Tabs>
            </div>

            {/* Información adicional */}
            <div>
            <Card className="shadow-xl border-0">
              <CardHeader className="bg-gradient-to-r from-orange-400 to-amber-500 text-white rounded-t-lg">
                <CardTitle className="text-center text-xl">¡Consultar si tu número es el ganador!</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 pb-2">
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">SELECCIONA LOTERÍA:</label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecciona una lotería" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="nacional">Lotería Nacional</SelectItem>
                        <SelectItem value="primitiva">La Primitiva</SelectItem>
                        <SelectItem value="euromillones">Euromillones</SelectItem>
                        <SelectItem value="bonoloto">Bonoloto</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">SELECCIONA SORTEO:</label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecciona un sorteo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ultimo">Último sorteo</SelectItem>
                        <SelectItem value="viernes">Viernes 10/05/2025</SelectItem>
                        <SelectItem value="anterior">Viernes 03/05/2025</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">NÚMERO:</label>
                      <Input placeholder="Ej: 2525" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">SERIE:</label>
                      <Input placeholder="Ej: 001" />
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-center pb-6">
                <Button className="w-full bg-orange-500 hover:bg-orange-600">
                  <Search className="mr-2 h-4 w-4" /> CONSULTAR
                </Button>
              </CardFooter>
            </Card>

            <div className="flex justify-center mt-6 gap-2">
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              <div className="w-2 h-2 rounded-full bg-orange-500"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            </div>
          </div>
          </div>
        </section>
      </main>

      {/* Footer se incluiría aquí */}
    </div>
  )
}
