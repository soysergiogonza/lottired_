"use client"

import { useState, useEffect, useRef } from "react"
import LotteryNumberForm from "@/components/lottery-number-form"

// Definición de los slides con imágenes de Unsplash
const slides = [
  {
    id: 1,
    title: "Juega a la lotería <span class='text-orange-500'>online</span> de forma fácil y segura",
    description: "Compra tus números favoritos de lotería desde la comodidad de tu hogar. 100% seguro, 100% en línea.",
    buttonText: "Jugar Ahora",
    secondaryButtonText: "Ver Resultados",
    // Imagen de billetes de lotería/dinero
    bgImage: "https://images.unsplash.com/photo-1518544801976-3e159b142a05?q=80&w=2070&auto=format&fit=crop",
    overlayOpacity: "bg-black/40", // Overlay más oscuro para mejorar legibilidad
    credit: "Foto por Pepi Stojanovski en Unsplash",
  },
  {
    id: 2,
    title: "Sorteo Extraordinario <span class='text-orange-500'>$1,500 Millones</span>",
    description: "No pierdas la oportunidad de cambiar tu vida con nuestro sorteo especial de este mes.",
    buttonText: "Comprar Ticket",
    secondaryButtonText: "Más Información",
    // Imagen de celebración/éxito
    bgImage: "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=2070&auto=format&fit=crop",
    overlayOpacity: "bg-black/50",
    credit: "Foto por Keenan Constance en Unsplash",
  },
  {
    id: 3,
    title: "Nuevos Premios <span class='text-orange-500'>Semanales</span>",
    description: "Ahora con más oportunidades de ganar. Sorteos todos los viernes con premios garantizados.",
    buttonText: "Participar",
    secondaryButtonText: "Ver Calendario",
    // Imagen de persona celebrando/ganando
    bgImage: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=2070&auto=format&fit=crop",
    overlayOpacity: "bg-black/45",
    credit: "Foto por Japheth Mast en Unsplash",
  },
]

function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState(() => {
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;
    return distance > 0 ? distance : 0;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      setTimeLeft(distance > 0 ? distance : 0);
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  return { hours, minutes, seconds, isFinished: timeLeft <= 0 };
}

function StickyCountdown({ countdown }: { countdown: { hours: number, minutes: number, seconds: number, isFinished: boolean } }) {
  // Sticky en la parte superior al hacer scroll
  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center items-center pointer-events-none">
      <div className="flex items-center gap-4 bg-white/90 shadow-lg rounded-b-2xl px-6 py-2 mt-2 pointer-events-auto border border-primary/20 animate-fade-in-up">
        <div className="flex flex-col items-center">
          <span className="text-xs font-semibold text-primary">Próximo sorteo en:</span>
          <span className="text-2xl md:text-3xl font-extrabold text-primary tracking-widest">
            {String(countdown.hours).padStart(2, '0')}:{String(countdown.minutes).padStart(2, '0')}:{String(countdown.seconds).padStart(2, '0')}
          </span>
        </div>
        <button className="bg-primary text-white font-bold px-5 py-2 rounded-full shadow hover:scale-105 transition-transform text-base md:text-lg">
          Comprar ticket
        </button>
      </div>
    </div>
  )
}

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoplay] = useState(true)
  const [showSticky, setShowSticky] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  // Próximo sorteo: viernes a las 23:00 (ejemplo)
  const nextDraw = new Date();
  nextDraw.setDate(nextDraw.getDate() + ((5 - nextDraw.getDay() + 7) % 7)); // próximo viernes
  nextDraw.setHours(23, 0, 0, 0);
  const countdown = useCountdown(nextDraw);

  // Mostrar sticky cuando el Hero ya no está visible
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setShowSticky(rect.bottom < 60); // 60px del top
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Función para cambiar al siguiente slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  // Efecto para el autoplay
  useEffect(() => {
    let interval: NodeJS.Timeout

    if (autoplay) {
      interval = setInterval(() => {
        nextSlide()
      }, 5000)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [autoplay, currentSlide])

  return (
    <>
      {showSticky && <StickyCountdown countdown={countdown} />}
      <section ref={heroRef} className="relative w-full overflow-hidden bg-gradient-to-br from-primary/5 to-white min-h-[480px] flex flex-col justify-center items-center">
        <div className="container relative z-10 px-4 md:px-6 py-8 md:py-12 lg:py-20">
          <div className="grid gap-6 lg:grid-cols-12 lg:gap-12 items-center">
            {/* Contador grande (6 columnas en desktop) */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center w-full mb-8 lg:mb-0">
              <span className="text-lg md:text-2xl font-semibold text-primary bg-white/80 px-6 py-2 rounded-full shadow animate-fade-in-up mb-2">
                Próximo sorteo en
              </span>
              <div className="flex gap-2 text-5xl md:text-7xl font-extrabold text-primary bg-white/90 px-10 py-4 rounded-full shadow">
                {String(countdown.hours).padStart(2, '0')}:
                {String(countdown.minutes).padStart(2, '0')}:
                {String(countdown.seconds).padStart(2, '0')}
              </div>
              {countdown.isFinished && (
                <span className="text-base text-red-500 mt-2">¡El sorteo está en curso!</span>
              )}
            </div>
            {/* Formulario de consulta (6 columnas en desktop) */}
            <div className="lg:col-span-6 w-full max-w-[500px] mx-auto lg:mx-0">
              <div className="sticky top-24">
                <div className="bg-white/90 rounded-2xl shadow-2xl p-6 md:p-8 border border-gray-200 animate-fade-in-up">
                  <LotteryNumberForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
