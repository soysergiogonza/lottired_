"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"
import { cn } from "@/lib/utils"

export default function LotteryNumberForm(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <Card
      {...props}
      className={cn(
        "w-full max-w-md shadow-2xl border-2 border-primary/30 bg-white/95 backdrop-blur-md rounded-2xl animate-fade-in-up",
        props.className
      )}
    >
      <CardHeader className="bg-gradient-to-r from-primary to-orange-400 text-white rounded-t-2xl shadow-md">
        <CardTitle className="text-center text-2xl font-bold tracking-tight">¿Tu número es ganador?</CardTitle>
      </CardHeader>
      <CardContent className="pt-8 pb-2">
        {/* Espacio para feedback visual (éxito/error) */}
        {/* <div className="mb-4 text-center text-green-600 font-semibold">¡Felicidades, tu número es ganador!</div> */}
        <form className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-primary">Lotería</label>
            <Select>
              <SelectTrigger className="w-full border-2 border-primary/30 focus:border-primary focus:ring-2 focus:ring-primary/30 rounded-lg">
                <SelectValue placeholder="Selecciona una lotería" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nacional">Lotería Nacional</SelectItem>
                <SelectItem value="primitiva">La Primitiva</SelectItem>
                <SelectItem value="euromillones">Euromillones</SelectItem>
                <SelectItem value="bonoloto">Bonoloto</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-primary">Sorteo</label>
            <Select>
              <SelectTrigger className="w-full border-2 border-primary/30 focus:border-primary focus:ring-2 focus:ring-primary/30 rounded-lg">
                <SelectValue placeholder="Selecciona un sorteo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ultimo">Último sorteo</SelectItem>
                <SelectItem value="viernes">Viernes 10/05/2025</SelectItem>
                <SelectItem value="anterior">Viernes 03/05/2025</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-primary">Número</label>
              <Input
                placeholder="Ej: 2525"
                className="border-2 border-primary/30 focus:border-primary focus:ring-2 focus:ring-primary/30 rounded-lg"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-primary">Serie</label>
              <Input
                placeholder="Ej: 001"
                className="border-2 border-primary/30 focus:border-primary focus:ring-2 focus:ring-primary/30 rounded-lg"
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col gap-2 justify-center pb-8 px-4">
        <Button
          className="w-full bg-primary hover:bg-primary/90 text-lg font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 animate-pulse"
        >
          <Search className="mr-2 h-5 w-5 animate-spin-slow" /> CONSULTAR
        </Button>
        {/* <div className="text-xs text-gray-400 text-center mt-2">Consulta válida solo para sorteos oficiales.</div> */}
      </CardFooter>
    </Card>
  )
}
