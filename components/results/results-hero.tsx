import { Search } from "lucide-react"

export default function ResultsHero() {
    return (
        <section className="bg-gradient-to-r from-primary to-red-600 py-16 md:py-20 relative overflow-hidden">
            {/* Elementos decorativos */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow-300/20 rounded-full -ml-24 -mb-24 blur-3xl" />

            {/* Patrón de billetes de lotería en el fondo */}
            <div className="absolute inset-0 opacity-10 z-0">
                <div className="absolute inset-0 bg-[url('/images/ticket-pattern.png')] bg-repeat opacity-20" />
            </div>

            <div className="max-w-[1200px] mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Resultados de Loterías</h1>
                    <p className="text-white/90 text-lg md:text-xl mb-8">
                        Consulta los últimos resultados de todas las loterías de Colombia. Información actualizada al instante.
                    </p>

                    {/* Búsqueda rápida */}
                    <div className="bg-white/10 backdrop-blur-sm p-1 rounded-full max-w-xl mx-auto">
                        <div className="flex items-center bg-white rounded-full overflow-hidden shadow-lg">
                            <input
                                type="text"
                                placeholder="Buscar por número o sorteo..."
                                className="flex-1 py-3 px-6 outline-none text-gray-700"
                            />
                            <button className="bg-primary hover:bg-primary/90 text-white p-3 px-6 flex items-center font-medium">
                                <Search className="w-5 h-5 mr-2" />
                                Buscar
                            </button>
                        </div>
                    </div>

                    {/* Estadísticas */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                            <div className="text-3xl font-bold text-white">+500</div>
                            <div className="text-white/80 text-sm">Sorteos realizados</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                            <div className="text-3xl font-bold text-white">$1.2B</div>
                            <div className="text-white/80 text-sm">En premios entregados</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                            <div className="text-3xl font-bold text-white">+1000</div>
                            <div className="text-white/80 text-sm">Ganadores</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                            <div className="text-3xl font-bold text-white">24/7</div>
                            <div className="text-white/80 text-sm">Consulta disponible</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
