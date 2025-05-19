import { MousePointerClick, CreditCard, CheckCircle, ArrowRight } from "lucide-react"

const steps = [
  {
    icon: <MousePointerClick size={40} className="text-white" />,
    title: "Selecciona tu Lotería",
    desc: "Elige la lotería y el sorteo en el que deseas participar.",
    color: "from-orange-400 to-pink-500"
  },
  {
    icon: <CreditCard size={40} className="text-white" />,
    title: "Compra tu Boleto",
    desc: "Realiza el pago de forma segura y recibe tu boleto digital.",
    color: "from-pink-500 to-purple-500"
  },
  {
    icon: <CheckCircle size={40} className="text-white" />,
    title: "¡Espera el Sorteo!",
    desc: "Consulta los resultados y descubre si eres ganador.",
    color: "from-purple-500 to-indigo-500"
  }
]

export default function ComoJugar() {
  return (
    <div className="container py-16 flex flex-col items-center animate-fade-in-up">
      <h1 className="text-4xl font-extrabold text-center mb-4 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
        ¿Cómo Jugar Online?
      </h1>
      <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl">
        Participar en la lotería online es fácil, rápido y seguro. Sigue estos pasos y ¡prepárate para ganar!
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full">
        {steps.map((step, idx) => (
          <div
            key={step.title}
            className={`relative flex flex-col items-center bg-gradient-to-br ${step.color} rounded-2xl shadow-xl p-8 w-full max-w-xs transition-transform hover:scale-105`}
          >
            <div className="mb-4">{step.icon}</div>
            <h2 className="text-xl font-bold text-white mb-2">{step.title}</h2>
            <p className="text-white/90 text-center">{step.desc}</p>
            {idx < steps.length - 1 && (
              <ArrowRight className="absolute -right-8 top-1/2 -translate-y-1/2 text-orange-400 hidden md:block" size={36} />
            )}
          </div>
        ))}
      </div>
      {/* Tips o ventajas */}
      <div className="mt-16 w-full max-w-2xl bg-orange-50 rounded-xl p-8 shadow flex flex-col items-center gap-4">
        <span className="text-2xl font-bold text-orange-500">💡 Tips para jugar seguro</span>
        <ul className="text-gray-700 text-base list-disc pl-6 space-y-2">
          <li>Verifica siempre tu correo tras la compra.</li>
          <li>Guarda tu boleto digital en un lugar seguro.</li>
          <li>Consulta los resultados en la sección oficial.</li>
        </ul>
      </div>
    </div>
  )
} 