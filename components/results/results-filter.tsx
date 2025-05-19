"use client"

import { useState } from "react"
import { RappiButton } from "@/components/ui/button-rappi"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Search, RefreshCw } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function ResultsFilter() {
    const [lottery, setLottery] = useState("")
    const [year, setYear] = useState("")
    const [month, setMonth] = useState("")

    const handleSearch = () => {
        console.log("Buscando resultados con:", { lottery, year, month })
        // Aquí iría la lógica para buscar resultados
    }

    return (
        <Card className="border-0 shadow-md overflow-hidden">
            <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1 space-y-2">
                        <label htmlFor="lottery" className="text-sm font-medium">
                            Selecciona Lotería
                        </label>
                        <Select value={lottery} onValueChange={setLottery}>
                            <SelectTrigger id="lottery" className="w-full rounded-lg border-gray-200">
                                <SelectValue placeholder="Todas las loterías" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="todas">Todas las loterías</SelectItem>
                                <SelectItem value="medellin">Lotería de Medellín</SelectItem>
                                <SelectItem value="bogota">Lotería de Bogotá</SelectItem>
                                <SelectItem value="boyaca">Lotería de Boyacá</SelectItem>
                                <SelectItem value="cruz-roja">Lotería Cruz Roja</SelectItem>
                                <SelectItem value="cundinamarca">Lotería de Cundinamarca</SelectItem>
                                <SelectItem value="cauca">Lotería del Cauca</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="flex-1 space-y-2">
                        <label htmlFor="year" className="text-sm font-medium">
                            Año
                        </label>
                        <Select value={year} onValueChange={setYear}>
                            <SelectTrigger id="year" className="w-full rounded-lg border-gray-200">
                                <SelectValue placeholder="Selecciona año" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="2024">2024</SelectItem>
                                <SelectItem value="2023">2023</SelectItem>
                                <SelectItem value="2022">2022</SelectItem>
                                <SelectItem value="2021">2021</SelectItem>
                                <SelectItem value="2020">2020</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="flex-1 space-y-2">
                        <label htmlFor="month" className="text-sm font-medium">
                            Mes
                        </label>
                        <Select value={month} onValueChange={setMonth}>
                            <SelectTrigger id="month" className="w-full rounded-lg border-gray-200">
                                <SelectValue placeholder="Selecciona mes" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="todos">Todos los meses</SelectItem>
                                <SelectItem value="01">Enero</SelectItem>
                                <SelectItem value="02">Febrero</SelectItem>
                                <SelectItem value="03">Marzo</SelectItem>
                                <SelectItem value="04">Abril</SelectItem>
                                <SelectItem value="05">Mayo</SelectItem>
                                <SelectItem value="06">Junio</SelectItem>
                                <SelectItem value="07">Julio</SelectItem>
                                <SelectItem value="08">Agosto</SelectItem>
                                <SelectItem value="09">Septiembre</SelectItem>
                                <SelectItem value="10">Octubre</SelectItem>
                                <SelectItem value="11">Noviembre</SelectItem>
                                <SelectItem value="12">Diciembre</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="flex items-end space-x-2">
                        <RappiButton onClick={handleSearch} className="bg-primary hover:bg-primary/90 h-10">
                            <Search className="mr-2 h-4 w-4" /> Buscar
                        </RappiButton>
                        <RappiButton variant="outline" className="h-10">
                            <RefreshCw className="h-4 w-4" />
                        </RappiButton>
                    </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                    <div className="text-sm text-gray-500 flex items-center">
                        <Calendar className="mr-2 h-4 w-4 text-primary" />
                        Resultados actualizados al 15 de mayo de 2024
                    </div>
                    <div className="flex space-x-2">
                        <RappiButton variant="ghost" size="sm" className="text-xs">
                            Últimos 7 días
                        </RappiButton>
                        <RappiButton variant="ghost" size="sm" className="text-xs">
                            Último mes
                        </RappiButton>
                        <RappiButton variant="ghost" size="sm" className="text-xs">
                            Último año
                        </RappiButton>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
