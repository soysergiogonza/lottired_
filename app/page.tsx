import Image from "next/image"
import Link from "next/link"
import { Shield, Award, Gift, ArrowRight } from "lucide-react"
import LatestResults from "@/components/latest-results"
import FeatureSection from "@/components/feature-section"
import PaymentMethods from "@/components/payment-methods"
import LotteryBanner from "@/components/lottery-banner"
import HeroSlider from "@/components/hero-slider"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <main className="flex-1 w-full flex flex-col items-center justify-center m-auto m-0">
        {/* Hero Slider con formulario de consulta */}
        <div className="relative w-full flex flex-col items-center justify-center">
          <HeroSlider />
          <button
            className="absolute bottom-[-32px] left-1/2 -translate-x-1/2 bg-primary text-white font-bold px-8 py-4 rounded-full shadow-lg animate-pulse flex items-center gap-2 text-lg z-20 border-4 border-white hover:scale-105 transition-transform"
            style={{ minWidth: 220 }}
          >
            <ArrowRight className="mr-2" /> Jugar Ahora
          </button>
        </div>

        {/* Separador */}
        <div className="w-full flex justify-center items-center my-12">
          <div className="w-2/3 h-px bg-primary/20" />
        </div>

        {/* Banner promocional */}
        <section className="w-full py-12 md:py-16 flex justify-center items-center">
          <div className="container px-4 md:px-6 flex justify-center items-center">
            <LotteryBanner />
          </div>
        </section>

        {/* Separador */}
        <div className="w-full flex justify-center items-center my-12">
          <div className="w-2/3 h-px bg-primary/20" />
        </div>

        {/* Resultados recientes */}
        <div className="w-full flex justify-center items-center">
          <LatestResults />
        </div>

        {/* Separador */}
        <div className="w-full flex justify-center items-center my-12">
          <div className="w-2/3 h-px bg-primary/20" />
        </div>

        {/* Características */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white flex justify-center items-center">
          <div className="container px-4 md:px-6 flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Jugar en <span className="text-primary">Lottired</span> es muy fácil y{" "}
                  <span className="text-primary">100%</span> en línea
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Compra tus números favoritos, consulta resultados y cobra tus premios sin salir de casa.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
              <FeatureSection
                icon={<Shield className="h-10 w-10 text-primary" />}
                title="Seguro"
                description="Lottired es propiedad de la Lotería de Medellín. Contamos con el respaldo y seguridad de Placetopay - evertec."
              />
              <FeatureSection
                icon={<Award className="h-10 w-10 text-primary" />}
                title="Resultados"
                description="Conoce aquí los resultados de las loterías. Fácil, confiable y en un solo sitio."
              />
              <FeatureSection
                icon={<Gift className="h-10 w-10 text-primary" />}
                title="¡Gana con nosotros!"
                description="¡Juega todas las loterías y todos los números! Estamos disponibles las 24 horas del día los 7 días de la semana."
              />
            </div>
          </div>
        </section>

        {/* Separador */}
        <div className="w-full flex justify-center items-center my-12">
          <div className="w-2/3 h-px bg-primary/20" />
        </div>

        {/* Métodos de pago */}
        <section className="w-full py-12 md:py-24 bg-gray-50 flex justify-center items-center">
          <div className="container px-4 md:px-6 flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                ¡Aceptamos múltiples medios de pago!
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Realiza tus compras de manera segura con tu método de pago preferido
              </p>
            </div>
            <PaymentMethods />
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-gray-100 py-4 flex justify-center items-center">
        <div className="container flex flex-col items-center justify-center gap-2 text-center md:gap-4">
          <Image src="/images/logo.png" alt="Lottired Logo" width={120} height={40} className="h-auto w-auto" />
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
            <Link href="#" className="font-medium text-gray-500 hover:text-gray-900">
              Términos
            </Link>
            <Link href="#" className="font-medium text-gray-500 hover:text-gray-900">
              Privacidad
            </Link>
            <Link href="#" className="font-medium text-gray-500 hover:text-gray-900">
              Contacto
            </Link>
            <Link href="#" className="font-medium text-gray-500 hover:text-gray-900">
              Ayuda
            </Link>
          </nav>
          <div className="flex gap-3 justify-center items-center mt-2">
            {/* Iconos sociales placeholder */}
            <span className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-primary text-lg font-bold">F</span>
            <span className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-primary text-lg font-bold">X</span>
            <span className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-primary text-lg font-bold">I</span>
          </div>
          <div className="text-xs text-gray-500">© 2024 Lottired. Todos los derechos reservados.</div>
        </div>
      </footer>
    </div>
  )
}
