"use client"

import { companyInfo } from "@/lib/data/company"

export function WhatsAppButton() {
  const handleClick = () => {
    const message = encodeURIComponent("Hi, I'm interested in your products and services.")
    window.open(`https://wa.me/${companyInfo.contact.whatsapp.replace("+", "")}?text=${message}`, "_blank")
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 px-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in"
      aria-label="Chat on WhatsApp"
    >
      <span className="font-medium">Chat on WhatsApp</span>
    </button>
  )
}