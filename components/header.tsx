import Link from "next/link"
import { ShoppingCart } from "lucide-react"

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/jugar", label: "Jugar" },
  { href: "/resultados", label: "Resultados" },
  { href: "/como-jugar", label: "¿Cómo Jugar?" },
  { href: "/faq", label: "Preguntas Frecuentes" },
  { href: "/politicas", label: "Políticas" },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl text-orange-600">Lottired</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-gray-700 hover:text-orange-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <Link href="/entrar" className="px-3 py-1 rounded-md text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors">
            Entrar
          </Link>
          <Link href="/registrate" className="px-3 py-1 rounded-md text-sm font-medium bg-orange-500 text-white hover:bg-orange-600 transition-colors">
            Regístrate
          </Link>
          <Link href="/carrito" className="ml-2 relative flex items-center justify-center p-2 rounded-full hover:bg-orange-100 transition-colors">
            <ShoppingCart className="w-6 h-6 text-orange-600" />
            {/* Aquí podrías agregar un badge con la cantidad de items en el carrito */}
          </Link>
        </div>
      </div>
    </header>
  )
} 