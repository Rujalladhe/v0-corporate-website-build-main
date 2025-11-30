"use client"

import { useState, useRef, useEffect } from "react"
import { MessageSquare, X, Send, Bot, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { companyInfo } from "@/lib/data/company"
import { products } from "@/lib/data/products"
import { services } from "@/lib/data/s"

interface Message {
  id: string
  role: "user" | "bot"
  content: string
  timestamp: Date
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "bot",
      content:
        "Hello! 👋 I am the A V Tech Assistant.\n\nYou can ask me about:\n1️⃣ Products\n2️⃣ Services\n3️⃣ Contact Information\n4️⃣ Company Details\n\nOr type a product number like 1, 2, 3 to get full details instantly.",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, isOpen])

  // Quick Reply Buttons (ALWAYS STICKY)
  const quickReplies = [
    { label: "Products", value: "products" },
    { label: "Services", value: "services" },
    { label: "Contact", value: "contact" },
   
  ]

  const sendQuickReply = (value: string) => {
    setInputValue(value)
    handleSendMessage(value)
  }

  const handleSendMessage = async (manualText?: string) => {
    const text = manualText || inputValue
    if (!text.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: text,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    setTimeout(() => {
      const botResponse = generateResponse(text)
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "bot",
          content: botResponse,
          timestamp: new Date(),
        },
      ])
      setIsTyping(false)
    }, 700)
  }

  // -------------------------------------------------------------------
  // ⭐ AI-LIKE RESPONSE ENGINE
  // -------------------------------------------------------------------
  const generateResponse = (query: string): string => {
    const lower = query.toLowerCase().trim()

    // Safe companyInfo values
    const phone = companyInfo?.contact?.phone ?? "Not available"
    const email = companyInfo?.contact?.emails?.[0] ?? "Not available"
    
    // Format office address
    const officeAddr = companyInfo?.addresses?.office
    const office = officeAddr 
      ? `${officeAddr.line1}, ${officeAddr.line2}, ${officeAddr.city} - ${officeAddr.pincode}`
      : "Office address not available"
    
    // Format factory/works address
    const factoryAddr = companyInfo?.addresses?.works
    const factory = factoryAddr
      ? `${factoryAddr.line1}, ${factoryAddr.line2}, ${factoryAddr.city} - ${factoryAddr.pincode}`
      : "Factory address not available"

    // -------------------------------------------------------------
    // 1) NUMBER-BASED ACCESS (Products or Services)
    // Check services first if number is within services range, then products
    // -------------------------------------------------------------
    if (/^\d+$/.test(lower)) {
      const num = parseInt(lower)
      const index = num - 1
      
      // Check services first if number is within services range (1 to services.length)
      if (num >= 1 && num <= services.length && services[index]) {
        const s = services[index]
        return `🛠 **${s.name}**\n\n${s.description}`
      }
      
      // Then check products
      if (num >= 1 && num <= products.length && products[index]) {
        const p = products[index]
        return `🟦 **${p.name}**\n\n${p.fullDescription}\n\n**Features:**\n• ${p.features.join(
          "\n• "
        )}\n\n**Applications:**\n• ${p.applications.join("\n• ")}`
      }
      
      // If number doesn't match anything
      return `I couldn't find item number ${lower}. Please ask for "products" or "services" to see the list, then type the number.`
    }

    // -------------------------------------------------------------
    // 2) PRODUCT NAME MATCH (fuzzy)
    // -------------------------------------------------------------
    const productMatch = products.find(
      (p) =>
        lower.includes(p.name.toLowerCase()) ||
        lower.includes(p.name.toLowerCase().split(" ")[0])
    )

    if (productMatch) {
      return `🟦 **${productMatch.name}**\n\n${productMatch.fullDescription}\n\n**Features:**\n• ${productMatch.features.join(
        "\n• "
      )}\n\n**Applications:**\n• ${productMatch.applications.join("\n• ")}`
    }

    // Show product list
    if (lower.includes("product") || lower.includes("panel")) {
      return (
        "Here are our products:\n\n" +
        products.map((p, i) => `${i + 1}. ${p.name}`).join("\n") +
        "\n\nType a number like **1** to get details."
      )
    }

    // -------------------------------------------------------------
    // 3) SERVICE MATCH (fuzzy)
    // -------------------------------------------------------------
    const serviceMatch = services.find(
      (s) =>
        lower.includes(s.name.toLowerCase()) ||
        lower.split(" ").some((w) => s.name.toLowerCase().includes(w))
    )

    if (serviceMatch) {
      return `🛠 **${serviceMatch.name}**\n\n${serviceMatch.description}`
    }

    // Show services list
    if (lower.includes("service") || lower.includes("support")) {
      return (
        "Here are our services:\n\n" +
        services.map((s, i) => `${i + 1}. ${s.name}`).join("\n") +
        "\n\nType a number like **1**, **2**, **3** to get full details, or type the service name."
      )
    }

    // -------------------------------------------------------------
    // 4) CONTACT DETAILS
    // -------------------------------------------------------------
    if (
      lower.includes("contact") ||
      lower.includes("email") ||
      lower.includes("phone") ||
      lower.includes("address") ||
      lower.includes("location")
    ) {
      return `📍 **A V Tech Contact Information**\n\n**Phone:** ${phone}\n**Email:** ${email}\n\n**Office Address:**\n${office}\n\n**Factory Address:**\n${factory}`
    }

    // -------------------------------------------------------------
    // 5) ABOUT COMPANY
    // -------------------------------------------------------------
    if (lower.includes("about") || lower.includes("company")) {
      const aboutInfo = companyInfo.about
      if (aboutInfo) {
        return `${aboutInfo.intro}\n\n${aboutInfo.details}\n\n**Expertise:**\n• ${aboutInfo.expertise.join("\n• ")}`
      }
      return "A V Tech is a leading manufacturer and system integrator for factory automation, electrical panels, and SPM machines."
    }

    // -------------------------------------------------------------
    // 6) DEFAULT AI-LIKE SUGGESTION RESPONSE
    // -------------------------------------------------------------
    return (
      "I'm here to assist you! 😊\nTry asking about:\n\n" +
      "• Products (type: **products**)\n" +
      "• Services (type: **services**)\n" +
      "• Contact (type: **contact**)\n" +
      "• About the company (type: **about**)\n\n" +
      "You can also type a product number like **1**, **2**, **3** for details."
    )
  }

  // -------------------------------------------------------------------
  // COMPONENT UI
  // -------------------------------------------------------------------
  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-24 right-6 bg-primary text-white p-3 rounded-full shadow-lg hover:scale-105 transition-all z-50",
          isOpen ? "hidden" : "flex"
        )}
      >
        <MessageSquare className="h-6 w-6" />
      </button>

      {/* Chat Window */}
      <div
        className={cn(
          "fixed bottom-24 right-6 w-80 md:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col transition-all z-50",
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none"
        )}
        style={{ maxHeight: "520px" }}
      >
        {/* Header */}
        <div className="bg-primary p-4 text-white flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Bot className="h-5 w-5" />
            <h3 className="font-bold text-sm">A V Tech Assistant</h3>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 bg-gray-50">
          <div className="space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={cn("flex gap-2", msg.role === "user" ? "ml-auto flex-row-reverse" : "")}
              >
                <div
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center",
                    msg.role === "user" ? "bg-gray-200" : "bg-primary/10 text-primary"
                  )}
                >
                  {msg.role === "user" ? <User /> : <Bot />}
                </div>

                <div
                  className={cn(
                    "p-3 rounded-2xl text-sm shadow-sm whitespace-pre-line",
                    msg.role === "user"
                      ? "bg-primary text-white rounded-tr-none"
                      : "bg-white border border-gray-200 rounded-tl-none"
                  )}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2 items-center">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Bot className="text-primary" />
                </div>
                <div className="bg-white p-3 border rounded-2xl flex gap-1">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150" />
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-300" />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Sticky Quick Replies */}
        <div className="p-2 bg-white border-t flex gap-2 sticky bottom-0">
          {quickReplies.map((q) => (
            <Button
              key={q.value}
              onClick={() => sendQuickReply(q.value)}
              className="whitespace-nowrap text-sm bg-secondary border"
              variant="outline"
            >
              {q.label}
            </Button>
          ))}
        </div>

        {/* Input */}
        <div className="p-3 bg-white border-t">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleSendMessage()
            }}
            className="flex gap-2"
          >
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask me anything..."
            />
            <Button type="submit" size="icon" className="bg-primary">
              <Send />
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
