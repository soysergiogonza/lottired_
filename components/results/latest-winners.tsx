import { Card, CardContent } from "@/components/ui/card"
import { Trophy, MapPin, Calendar } from "lucide-react"

// Datos simulados de ganadores
const winnersData = [
    {
        id: 1,
        name: "Carlos Rodríguez",
        location: "Medellín, Antioquia",
        lottery: "Lotería de Medellín",
        prize: "$1,000,000,000",
        date: "10/05/2024",
        number: "2525",
        series: "001",
        testimonial: "Nunca pensé que ganaría el premio mayor. ¡Esto cambiará mi vida por completo!",
    },
    {
        id: 2,
        name: "María González",
        location: "Bogotá, Cundinamarca",
        lottery: "Lotería de Bogotá",
        prize: "$800,000,000",
        date: "09/05/2024",
        number: "8743",
        series: "156",
        testimonial: "Llevo años jugando a la lotería y por fin mi perseverancia ha dado frutos.",
    },
    {
        id: 3,
        name: "Juan Pérez",
        location: "Tunja, Boyacá",
        lottery: "Lotería de Boyacá",
        prize: "$1,200,000,000",
        date: "11/05/2024",
        number: "1234",
        series: "089",
        testimonial: "Compré el billete por impulso y resultó ser el ganador. ¡Qué suerte la mía!",
    },
]

export default function LatestWinners() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold flex items-center">
                    <Trophy className="mr-2 h-5 w-5 text-yellow-500" />
                    Últimos Ganadores
                </h2>
            </div>

            <div className="grid gap-6">
                {winnersData.map((winner) => (
                    <Card key={winner.id} className="border-0 shadow-md overflow-hidden">
                        <CardContent className="p-0">
                            <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
                                {/* Información del ganador */}
                                <div className="md:col-span-3 p-6 bg-primary text-white flex flex-col justify-center">
                                    <h3 className="font-bold text-xl mb-1">{winner.name}</h3>
                                    <p className="text-white/80 text-sm flex items-center">
                                        <MapPin className="h-3 w-3 mr-1" /> {winner.location}
                                    </p>
                                    <div className="mt-4 pt-4 border-t border-white/20">
                                        <p className="text-sm text-white/80">Premio</p>
                                        <p className="text-2xl font-bold">{winner.prize}</p>
                                    </div>
                                </div>

                                {/* Detalles del premio */}
                                <div className="md:col-span-9 p-6">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                        <div>
                                            <h4 className="font-bold text-lg">{winner.lottery}</h4>
                                            <p className="text-sm text-gray-500 flex items-center">
                                                <Calendar className="h-3 w-3 mr-1" /> {winner.date}
                                            </p>
                                        </div>
                                        <div className="mt-2 md:mt-0 flex items-center space-x-4">
                                            <div className="text-center">
                                                <p className="text-xs text-gray-500">Número</p>
                                                <p className="text-lg font-bold text-primary">{winner.number}</p>
                                            </div>
                                            <div className="text-center">
                                                <p className="text-xs text-gray-500">Serie</p>
                                                <p className="text-lg font-bold text-primary">{winner.series}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <p className="italic text-gray-600">{winner.testimonial}</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Sección de inspiración */}
            <Card className="border-0 shadow-md overflow-hidden bg-gradient-to-r from-yellow-50 to-orange-50">
                <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="md:w-1/2">
                            <h3 className="text-xl font-bold mb-2">¿Quieres ser el próximo ganador?</h3>
                            <p className="text-gray-600 mb-4">
                                Cada semana entregamos millones en premios. Compra tu billete hoy y prepárate para cambiar tu vida.
                            </p>
                            <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-medium inline-flex items-center">
                                Comprar Ahora
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="ml-2"
                                >
                                    <path d="M5 12h14"></path>
                                    <path d="m12 5 7 7-7 7"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="md:w-1/2 flex justify-center">
                            <div className="relative w-64 h-64">
                                <div className="absolute inset-0 bg-yellow-300 rounded-full opacity-20"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Trophy className="h-24 w-24 text-yellow-500" />
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
