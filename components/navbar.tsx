"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone } from "lucide-react"
import { RappiButton } from "./ui/button-rappi"
import CartButton from "./cart/cart-button"
import { AnimatePresence, motion } from "framer-motion"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  // Detectar cambios en el tamaño de la ventana
  useEffect(() => {
    const checkIfMobile = () => {
      // Cerrar el menú automáticamente si cambiamos a desktop
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    // Comprobar al cargar
    checkIfMobile()

    // Añadir event listener para resize
    window.addEventListener("resize", checkIfMobile)

    // Cleanup
    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [isMenuOpen])

  // Controlar el scroll del body cuando el menú está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden")
    } else {
      document.body.classList.remove("overflow-hidden")
    }

    // Cleanup
    return () => {
      document.body.classList.remove("overflow-hidden")
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo y navegación principal */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center mr-10" onClick={closeMenu}>
              <span className="text-2xl font-bold text-primary">LOTTIRED</span>
            </Link>

            {/* Navegación desktop (visible en md y superior) */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className={`text-sm font-medium hover:text-primary transition-colors ${
                  pathname === "/"
                    ? "text-primary relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-0.5 after:bg-primary after:rounded-full"
                    : "text-gray-900"
                }`}
              >
                Inicio
              </Link>
              <Link
                href="/jugar"
                className={`text-sm font-medium hover:text-primary transition-colors ${
                  pathname === "/jugar"
                    ? "text-primary relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-0.5 after:bg-primary after:rounded-full"
                    : "text-gray-900"
                }`}
              >
                Jugar
              </Link>
              <Link
                href="/resultados"
                className={`text-sm font-medium hover:text-primary transition-colors ${
                  pathname === "/resultados"
                    ? "text-primary relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-0.5 after:bg-primary after:rounded-full"
                    : "text-gray-900"
                }`}
              >
                Resultados
              </Link>
              <Link
                href="/como-jugar"
                className={`text-sm font-medium hover:text-primary transition-colors ${
                  pathname === "/como-jugar"
                    ? "text-primary relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-0.5 after:bg-primary after:rounded-full"
                    : "text-gray-900"
                }`}
              >
                ¿Cómo Jugar?
              </Link>
            </nav>
          </div>

          {/* Botones de acción y menú móvil */}
          <div className="flex items-center space-x-4">
            {/* Botones de acción (visibles en desktop) */}
            <div className="hidden md:flex items-center space-x-3">
              <RappiButton variant="ghost" size="sm" className="text-gray-900 hover:bg-gray-100">
                Entrar
              </RappiButton>
              <RappiButton variant="default" size="sm">
                Regístrate
              </RappiButton>
            </div>

            {/* Botón de carrito (visible en todas las resoluciones) */}
            <CartButton />

            {/* Botón de menú móvil (visible solo en móvil) */}
            <button
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100"
              onClick={toggleMenu}
              aria-label="Menú"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Overlay para cerrar el menú al hacer clic fuera */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>

      {/* Contenido del menú móvil */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            className="fixed top-16 inset-x-0 bottom-0 bg-white z-40 md:hidden overflow-y-auto"
          >
            <div className="max-w-[1200px] mx-auto px-4 py-6 space-y-6">
              {/* Enlaces de navegación móvil */}
              <nav className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className={`text-lg font-medium hover:text-primary transition-colors py-2 ${
                    pathname === "/" ? "text-primary" : "text-gray-900"
                  }`}
                  onClick={closeMenu}
                >
                  Inicio
                </Link>
                <Link
                  href="/jugar"
                  className={`text-lg font-medium hover:text-primary transition-colors py-2 ${
                    pathname === "/jugar" ? "text-primary" : "text-gray-900"
                  }`}
                  onClick={closeMenu}
                >
                  Jugar
                </Link>
                <Link
                  href="/resultados"
                  className={`text-lg font-medium hover:text-primary transition-colors py-2 ${
                    pathname === "/resultados" ? "text-primary" : "text-gray-900"
                  }`}
                  onClick={closeMenu}
                >
                  Resultados
                </Link>
                <Link
                  href="/como-jugar"
                  className={`text-lg font-medium hover:text-primary transition-colors py-2 ${
                    pathname === "/como-jugar" ? "text-primary" : "text-gray-900"
                  }`}
                  onClick={closeMenu}
                >
                  ¿Cómo Jugar?
                </Link>
                <Link
                  href="/preguntas-frecuentes"
                  className={`text-lg font-medium hover:text-primary transition-colors py-2 ${
                    pathname === "/preguntas-frecuentes" ? "text-primary" : "text-gray-900"
                  }`}
                  onClick={closeMenu}
                >
                  Preguntas Frecuentes
                </Link>
              </nav>

              {/* Separador */}
              <div className="border-t border-gray-100 pt-4"></div>

              {/* Botones de acción móvil */}
              <div className="grid grid-cols-2 gap-4">
                <RappiButton variant="ghost" className="text-gray-900 hover:bg-gray-100 w-full border border-gray-200">
                  Entrar
                </RappiButton>
                <RappiButton variant="default" className="w-full">
                  Regístrate
                </RappiButton>
              </div>

              {/* Información de contacto */}
              <div className="pt-4 text-sm text-gray-500">
                <p className="mb-2">¿Necesitas ayuda?</p>
                <p className="flex items-center">
                  <Phone className="mr-2 h-4 w-4" />
                  +57 (4) 123 4567
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
