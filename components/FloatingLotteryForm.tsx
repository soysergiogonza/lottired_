"use client";
import { useState } from "react";
import LotteryNumberForm from "@/components/lottery-number-form";

export default function FloatingLotteryForm() {
  const [showForm, setShowForm] = useState(true);
  return (
    <>
      {/* Desktop */}
      <div className="fixed bottom-6 right-6 z-50 hidden md:block">
        {showForm && (
          <div className="relative w-[380px] max-w-[90vw]">
            <button onClick={() => setShowForm(false)} className="absolute -top-3 -right-3 bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg z-10">×</button>
            <LotteryNumberForm />
          </div>
        )}
      </div>
      {/* Mobile */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        {!showForm ? (
          <button onClick={() => setShowForm(true)} className="bg-primary text-white font-bold px-6 py-3 rounded-full shadow-lg text-lg">Consultar número</button>
        ) : (
          <div className="relative w-[95vw] max-w-xs">
            <button onClick={() => setShowForm(false)} className="absolute -top-3 -right-3 bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg z-10">×</button>
            <LotteryNumberForm />
          </div>
        )}
      </div>
    </>
  );
} 