export default function Politicas() {
  return (
    <div className="container py-12 flex flex-col gap-8 items-center animate-fade-in-up">
      <div className="w-full md:w-2/3 bg-white rounded-2xl shadow-xl p-8 space-y-8">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2 text-center">Políticas</h1>
        <div className="space-y-6">
          <div>
            <h2 className="font-semibold text-lg mb-1">Términos y Condiciones</h2>
            <p className="text-gray-600">Al participar en la lotería online aceptas los términos y condiciones establecidos por la plataforma. Consulta los detalles antes de realizar tu compra.</p>
          </div>
          <div>
            <h2 className="font-semibold text-lg mb-1">Política de Privacidad</h2>
            <p className="text-gray-600">Tus datos personales están protegidos y solo se utilizarán para fines relacionados con la gestión de la lotería y la comunicación de resultados.</p>
          </div>
          <div>
            <h2 className="font-semibold text-lg mb-1">Política de Reembolsos</h2>
            <p className="text-gray-600">Consulta las condiciones para solicitar reembolsos en caso de cancelación de sorteos o errores en la compra.</p>
          </div>
        </div>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/ticket-pattern.png" alt="Políticas" className="rounded-xl shadow-lg w-full max-w-2xl mt-6 hidden md:block" />
    </div>
  )
} 