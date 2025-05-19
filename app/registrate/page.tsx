import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Registrate() {
  return (
    <div className="container py-12 flex flex-col items-center animate-fade-in-up">
      <div className="w-full md:w-1/3 bg-white rounded-2xl shadow-xl p-8 space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2 text-center">Regístrate</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Nombre completo</label>
            <Input placeholder="Tu nombre" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Correo electrónico</label>
            <Input type="email" placeholder="tucorreo@ejemplo.com" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Contraseña</label>
            <Input type="password" placeholder="********" />
          </div>
          <Button size="lg" className="w-full bg-primary hover:bg-primary/90">Crear cuenta</Button>
        </form>
      </div>
    </div>
  )
} 