"use client"

import { useState } from "react"
import { ShoppingBag } from "lucide-react"
import { useClickAway } from "@/hooks/use-click-away"
import { AnimatePresence, motion } from "framer-motion"
import CartDropdown from "@/components/cart/cart-dropdown"

export default function CartButton() {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useClickAway<HTMLDivElement>(() => setIsOpen(false))

  const itemCount = 2 // Este número vendría de tu estado global de carrito

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors relative"
        aria-label="Carrito de compras"
      >
        <ShoppingBag className="w-5 h-5 text-gray-700" />
        {itemCount > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center bg-primary text-white text-xs font-medium rounded-full">
            {itemCount}
          </span>
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 z-50 w-80"
          >
            <CartDropdown />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
