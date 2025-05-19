import { ShieldCheck, Award, CreditCard, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Jugar() {
  // Ejemplo de loterías
  const lotteries = [
    {
      name: "Lotería del Quindío",
      logo: "/images/quindio-logo.png",
      prize: "$2.000.000.000",
      date: "Jueves, 22 may. 2025, 8:00 p. m.",
      planUrl: "#",
      buyUrl: "#",
      color: "bg-green-600",
      border: "border-green-600",
      cta: "Compra hasta el jueves, 22 may. 2025",
      price: "¡Juega desde $3.000 pesos la fracción!",
    },
    {
      name: "Lotería del Risaralda",
      logo: "/images/risaralda-logo.png",
      prize: "$2.333.333.333",
      date: "Viernes, 23 may. 2025, 8:00 p. m.",
      planUrl: "#",
      buyUrl: "#",
      color: "bg-green-700",
      border: "border-green-700",
      cta: "Compra hasta el viernes, 23 may. 2025",
      price: "¡Juega desde $4.000 pesos la fracción!",
    },
    {
      name: "Lotería del Meta",
      logo: "/images/meta-logo.png",
      prize: "$1.800.000.000",
      date: "Miércoles, 21 may. 2025, 8:05 p. m.",
      planUrl: "#",
      buyUrl: "#",
      color: "bg-black",
      border: "border-black",
      cta: "Compra hasta el miércoles, 21 may. 2025",
      price: "¡Juega desde $4.000 pesos la fracción!",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-white flex flex-col items-center py-12">
      {/* Título y subtítulo */}
      <div className="w-full max-w-5xl mx-auto mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-2">¡Todas las loterías, todos los números!</h2>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Elige entre las 22 loterías que tenemos para ti, conoce su plan de premios y compra el número ganador
        </p>
      </div>
      {/* Grid de cards de loterías */}
      <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
        {lotteries.map((lottery, idx) => (
          <div key={idx} className={`rounded-3xl shadow-xl border-2 ${lottery.border} bg-white flex flex-col overflow-hidden animate-fade-in-up`}>
            <div className="flex flex-col items-center p-4 pb-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={lottery.logo} alt={lottery.name} className="h-12 mb-2" />
              <div className={`w-full text-center text-2xl font-extrabold text-white py-3 rounded-2xl mb-2 ${lottery.color}`}>{lottery.prize}</div>
              <div className="text-gray-700 text-sm mb-2">Juega el {lottery.date}</div>
            </div>
            <div className="flex flex-col gap-2 px-4 pb-4">
              <a href="#" className="text-primary underline text-sm font-medium mb-1">Últimos Resultados</a>
              <a href={lottery.planUrl} className="w-full border rounded-lg py-2 text-center font-semibold text-gray-800 hover:bg-primary/10 transition">Plan de Premios</a>
              <a href={lottery.buyUrl} className="w-full border-2 border-primary text-primary font-bold rounded-lg py-2 text-center hover:bg-primary hover:text-white transition">Jugar Ahora</a>
              <div className="text-xs text-gray-600 text-center mt-1">{lottery.price}</div>
            </div>
            <div className={`text-white text-xs text-center font-semibold py-2 ${lottery.color}`}>{lottery.cta}</div>
          </div>
        ))}
      </div>
      {/* Formulario de compra actual (opcional, puedes dejarlo o moverlo) */}
      <div className="w-full max-w-xl bg-white rounded-3xl shadow-2xl border-2 border-primary/20 p-8 md:p-12 flex flex-col gap-8 animate-fade-in-up">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center text-primary mb-2">Compra tu boleto online</h1>
        <p className="text-center text-gray-600 mb-4">
          Elige tu lotería, selecciona el sorteo y compra tu número favorito de forma 100% segura y digital.
        </p>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-primary mb-1">Lotería</label>
              <Select>
                <SelectTrigger className="w-full border-2 border-primary/30 focus:border-primary focus:ring-2 focus:ring-primary/30 rounded-lg">
                  <SelectValue placeholder="Selecciona una lotería" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="nacional">Lotería Nacional</SelectItem>
                  <SelectItem value="provincial">Lotería Provincial</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-primary mb-1">Sorteo</label>
              <Select>
                <SelectTrigger className="w-full border-2 border-primary/30 focus:border-primary focus:ring-2 focus:ring-primary/30 rounded-lg">
                  <SelectValue placeholder="Selecciona un sorteo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="viernes">Viernes</SelectItem>
                  <SelectItem value="domingo">Domingo</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-primary mb-1">Número</label>
              <Input placeholder="Ej: 2525" className="border-2 border-primary/30 focus:border-primary focus:ring-2 focus:ring-primary/30 rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-primary mb-1">Serie</label>
              <Input placeholder="Ej: 001" className="border-2 border-primary/30 focus:border-primary focus:ring-2 focus:ring-primary/30 rounded-lg" />
            </div>
          </div>
          <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-lg font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 animate-pulse">
            <ArrowRight /> Jugar Ahora
          </Button>
        </form>
        <div className="flex flex-col md:flex-row gap-4 mt-8">
          <div className="flex-1 flex items-center gap-3 bg-primary/10 rounded-xl p-5 shadow-md animate-fade-in-up">
            <ShieldCheck className="text-primary" size={36} />
            <div>
              <div className="font-semibold text-primary text-lg">100% Seguro</div>
              <div className="text-xs text-gray-500">Tus datos y pagos están protegidos</div>
            </div>
          </div>
          <div className="flex-1 flex items-center gap-3 bg-primary/10 rounded-xl p-5 shadow-md animate-fade-in-up delay-100">
            <Award className="text-primary" size={36} />
            <div>
              <div className="font-semibold text-primary text-lg">Premios Oficiales</div>
              <div className="text-xs text-gray-500">Participa en sorteos reales y gana en grande</div>
            </div>
          </div>
          <div className="flex-1 flex items-center gap-3 bg-primary/10 rounded-xl p-5 shadow-md animate-fade-in-up delay-200">
            <CreditCard className="text-primary" size={36} />
            <div>
              <div className="font-semibold text-primary text-lg">Pago Fácil</div>
              <div className="text-xs text-gray-500">Aceptamos tarjetas y métodos digitales</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 text-center text-gray-400 text-xs">
        * Recibirás tu boleto digital por correo electrónico. Consulta términos y condiciones.
      </div>
    </div>
  )
} 