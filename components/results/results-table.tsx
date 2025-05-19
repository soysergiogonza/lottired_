"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { RappiButton } from "@/components/ui/button-rappi"
import { Download, ChevronLeft, ChevronRight, Award, Calendar, Clock } from "lucide-react"

// Datos simulados de resultados
const resultsData = [
    {
        id: 1,
        lottery: "Lotería de Medellín",
        draw: "4580",
        date: "10/05/2024",
        time: "10:30 PM",
        winningNumber: "2525",
        series: "001",
        jackpot: "$1,000,000,000",
    },
    {
        id: 2,
        lottery: "Lotería de Bogotá",
        draw: "2789",
        date: "09/05/2024",
        time: "10:00 PM",
        winningNumber: "8743",
        series: "156",
        jackpot: "$800,000,000",
    },
    {
        id: 3,
        lottery: "Lotería de Boyacá",
        draw: "4789",
        date: "11/05/2024",
        time: "10:30 PM",
        winningNumber: "1234",
        series: "089",
        jackpot: "$1,200,000,000",
    },
    {
        id: 4,
        lottery: "Lotería Cruz Roja",
        draw: "2987",
        date: "07/05/2024",
        time: "10:00 PM",
        winningNumber: "5678",
        series: "123",
        jackpot: "$750,000,000",
    },
    {
        id: 5,
        lottery: "Lotería del Cauca",
        draw: "2456",
        date: "04/05/2024",
        time: "10:30 PM",
        winningNumber: "9876",
        series: "234",
        jackpot: "$500,000,000",
    },
]

export default function ResultsTable() {
    const [currentPage, setCurrentPage] = useState(1)
    const resultsPerPage = 5
    const totalPages = Math.ceil(resultsData.length / resultsPerPage)

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    }

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">Resultados encontrados</h2>
                <RappiButton variant="outline" size="sm" className="text-sm">
                    <Download className="mr-2 h-4 w-4" /> Exportar
                </RappiButton>
            </div>

            <div className="grid gap-4">
                {resultsData.map((result) => (
                    <Card key={result.id} className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <CardContent className="p-0">
                            <div className="grid grid-cols-1 md:grid-cols-12 items-center">
                                {/* Información de la lotería */}
                                <div className="md:col-span-3 p-4 md:p-6 bg-gray-50 md:h-full flex flex-col justify-center">
                                    <h3 className="font-bold text-lg">{result.lottery}</h3>
                                    <p className="text-sm text-gray-500">Sorteo #{result.draw}</p>
                                    <div className="flex items-center mt-2 text-xs text-gray-500">
                                        <Calendar className="h-3 w-3 mr-1" />
                                        {result.date}
                                        <Clock className="h-3 w-3 ml-3 mr-1" />
                                        {result.time}
                                    </div>
                                </div>

                                {/* Número ganador y serie */}
                                <div className="md:col-span-5 p-4 md:p-6 flex flex-col md:flex-row items-center justify-center gap-6">
                                    <div className="text-center">
                                        <p className="text-xs text-gray-500 mb-1">Número Ganador</p>
                                        <div className="bg-primary/10 rounded-lg px-4 py-2">
                                            <p className="text-3xl font-bold text-primary">{result.winningNumber}</p>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-xs text-gray-500 mb-1">Serie</p>
                                        <div className="bg-primary/10 rounded-lg px-4 py-2">
                                            <p className="text-3xl font-bold text-primary">{result.series}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Premio mayor */}
                                <div className="md:col-span-2 p-4 md:p-6 text-center">
                                    <p className="text-xs text-gray-500 mb-1 flex items-center justify-center">
                                        <Award className="h-3 w-3 mr-1" /> Premio Mayor
                                    </p>
                                    <p className="text-xl font-bold text-green-600">{result.jackpot}</p>
                                </div>

                                {/* Acciones */}
                                <div className="md:col-span-2 p-4 md:p-6 flex flex-col gap-2">
                                    <RappiButton variant="default" size="sm" className="w-full">
                                        Ver Detalles
                                    </RappiButton>
                                    <RappiButton variant="outline" size="sm" className="w-full">
                                        Verificar
                                    </RappiButton>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Paginación */}
            <div className="flex justify-between items-center pt-4">
                <div className="text-sm text-gray-500">
                    Mostrando {(currentPage - 1) * resultsPerPage + 1} -{" "}
                    {Math.min(currentPage * resultsPerPage, resultsData.length)} de {resultsData.length} resultados
                </div>
                <div className="flex items-center space-x-2">
                    <RappiButton
                        variant="outline"
                        size="sm"
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                        className="h-8 w-8 p-0"
                    >
                        <ChevronLeft className="h-4 w-4" />
                    </RappiButton>
                    <span className="text-sm">
            Página {currentPage} de {totalPages}
          </span>
                    <RappiButton
                        variant="outline"
                        size="sm"
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        className="h-8 w-8 p-0"
                    >
                        <ChevronRight className="h-4 w-4" />
                    </RappiButton>
                </div>
            </div>
        </div>
    )
}
