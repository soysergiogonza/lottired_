import { X, Minus, Plus } from "lucide-react"
import { RappiButton } from "@/components/ui/button-rappi"

// Datos simulados de productos en el carrito
const cartItems = [
    {
        id: 1,
        name: "Lotería de Medellín",
        description: "Sorteo #4580",
        price: 5000,
        image: "/images/lottery-ticket-1.png",
        quantity: 1,
    },
    {
        id: 2,
        name: "Lotería de Bogotá",
        description: "Sorteo #2789",
        price: 5000,
        image: "/images/lottery-ticket-2.png",
        quantity: 1,
    },
]

export default function CartDropdown() {
    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

    return (
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="p-4 border-b border-gray-100">
                <h3 className="font-montserrat font-bold text-lg">Tu carrito</h3>
            </div>

            {cartItems.length === 0 ? (
                <div className="p-4 text-center">
                    <p className="text-gray-500">Tu carrito está vacío</p>
                </div>
            ) : (
                <div>
                    <div className="max-h-[300px] overflow-y-auto p-3">
                        {cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-xl transition-colors mb-2"
                            >
                                <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                                    <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary font-bold">
                                        {item.id}
                                    </div>
                                </div>

                                <div className="flex-grow">
                                    <h4 className="font-medium text-sm">{item.name}</h4>
                                    <p className="text-xs text-gray-500">{item.description}</p>
                                </div>

                                <div className="flex items-center gap-1">
                                    <button className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200">
                                        <Minus className="w-3 h-3" />
                                    </button>
                                    <span className="w-6 text-center text-sm">{item.quantity}</span>
                                    <button className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200">
                                        <Plus className="w-3 h-3" />
                                    </button>
                                </div>

                                <div className="flex flex-col items-end">
                                    <span className="font-medium text-sm">${item.price.toLocaleString()}</span>
                                    <button className="text-gray-400 hover:text-gray-700">
                                        <X className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="border-t border-gray-100 p-4">
                        <div className="flex justify-between mb-4">
                            <span className="text-gray-500">Subtotal</span>
                            <span className="font-medium">${subtotal.toLocaleString()}</span>
                        </div>

                        <RappiButton variant="default" className="w-full">
                            Ir a pagar
                        </RappiButton>

                        <button className="mt-2 w-full text-sm text-gray-500 hover:text-primary underline">Seguir comprando</button>
                    </div>
                </div>
            )}
        </div>
    )
}
