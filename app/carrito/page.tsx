import { ShoppingCart, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Carrito() {
  return (
    <div className="container py-12 flex flex-col items-center animate-fade-in-up">
      <div className="w-full md:w-2/3 bg-white rounded-2xl shadow-xl p-8 space-y-8">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2 text-center flex items-center justify-center gap-2">
          <ShoppingCart size={32} /> Carrito
        </h1>
        {/* Ejemplo de item en el carrito */}
        <div className="space-y-4">
          <div className="flex items-center justify-between bg-primary/5 rounded-lg p-4 shadow">
            <div>
              <div className="font-semibold">Lotería Nacional - Sorteo Viernes</div>
              <div className="text-sm text-gray-500">Número: 2525 | Serie: 001</div>
            </div>
            <Button variant="destructive" size="icon">
              <Trash2 />
            </Button>
          </div>
        </div>
        <div className="flex justify-end">
          <Button size="lg" className="bg-primary hover:bg-primary/90">Finalizar compra</Button>
        </div>
      </div>
    </div>
  )
} 