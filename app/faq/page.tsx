export default function FAQ() {
  return (
    <div className="container py-12 flex flex-col gap-8 items-center animate-fade-in-up">
      <div className="w-full md:w-2/3 bg-white rounded-2xl shadow-xl p-8 space-y-8">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2 text-center">Preguntas Frecuentes</h1>
        <div className="space-y-6">
          <div>
            <h2 className="font-semibold text-lg mb-1">¿Cómo compro un boleto?</h2>
            <p className="text-gray-600">Selecciona la lotería, el sorteo y sigue los pasos para realizar el pago de forma segura. Recibirás tu boleto digital por correo electrónico.</p>
          </div>
          <div>
            <h2 className="font-semibold text-lg mb-1">¿Cómo sé si gané?</h2>
            <p className="text-gray-600">Puedes consultar los resultados en la sección &#34;Resultados&#34; o recibirás una notificación si tu número es ganador.</p>
          </div>
          <div>
            <h2 className="font-semibold text-lg mb-1">¿Es seguro comprar online?</h2>
            <p className="text-gray-600">Sí, utilizamos métodos de pago seguros y tus datos están protegidos con tecnología de cifrado.</p>
          </div>
          <div>
            <h2 className="font-semibold text-lg mb-1">¿Puedo jugar desde cualquier lugar?</h2>
            <p className="text-gray-600">Sí, puedes participar desde cualquier dispositivo con acceso a internet.</p>
          </div>
        </div>
      </div>
    </div>
  )
} 