import { Button } from "@/components/ui/button"
import { Sparkles, ArrowRight } from "lucide-react"

export default function LotteryBanner() {
  return (
    <div className="relative w-full overflow-hidden rounded-lg shadow-xl">
      {/* Fondo del banner con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 z-0" />

      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow-300/20 rounded-full -ml-24 -mb-24 blur-3xl" />

      {/* Patrón de billetes de lotería en el fondo */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="absolute inset-0 bg-[url('/images/ticket-pattern.png')] bg-repeat opacity-20" />
      </div>

      {/* Contenido del banner */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-8 items-center">
        <div className="space-y-4 text-white">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-400 text-orange-900 font-medium text-sm mb-2">
            <Sparkles className="h-4 w-4 mr-1" />
            ¡Gran Sorteo Especial!
          </div>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            ¡Tu Oportunidad de Ganar <span className="text-yellow-300">$1,000 Millones</span> te Espera!
          </h2>

          <p className="text-white/90 text-lg max-w-md">
            No dejes pasar esta oportunidad única. Compra tu billete hoy y cambia tu vida para siempre con el sorteo
            extraordinario.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-orange-900 font-bold">
              Comprar Ahora <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              Ver Detalles
            </Button>
          </div>

          <p className="text-xs text-white/70 pt-2">
            *Sorteo válido hasta el 30 de mayo de 2024. Consulta términos y condiciones.
          </p>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Imagen de billete de lotería con efectos */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full max-w-[280px] transform rotate-12 hover:rotate-0 transition-transform duration-500">
                <div className="absolute inset-0 bg-white rounded-lg shadow-2xl transform -rotate-6 scale-95" />
                <div className="absolute inset-0 bg-yellow-50 rounded-lg shadow-xl transform -rotate-3 scale-97" />
                <div className="relative bg-white rounded-lg shadow-lg p-4 border-2 border-yellow-500">
                  <div className="flex justify-between items-center mb-3">
                    <div className="text-orange-600 font-bold text-lg">LOTTIRED</div>
                    <div className="text-gray-700 font-medium">Serie: 001</div>
                  </div>

                  <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-md p-3 mb-3">
                    <div className="text-center text-5xl font-bold text-orange-600 tracking-widest">7777</div>
                    <div className="text-center text-xs text-gray-600 mt-1">NÚMERO DE LA SUERTE</div>
                  </div>

                  <div className="bg-yellow-400 text-orange-900 rounded-md p-2 text-center font-bold">
                    PREMIO MAYOR: $1,000,000,000
                  </div>

                  <div className="mt-3 text-xs text-gray-500 text-center">Sorteo Extraordinario • 30/05/2024</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
