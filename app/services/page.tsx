import { Settings, Wrench, Cpu, Activity, Zap, Database, Monitor, Network } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Chatbot } from "@/components/chatbot"
import { services } from "@/lib/data/services"

export default function ServicesPage() {
  const getIcon = (name: string) => {
    if (name.includes("PLC")) return <Cpu className="h-7 w-7" />
    if (name.includes("Servo")) return <Settings className="h-7 w-7" />
    if (name.includes("SCADA")) return <Monitor className="h-7 w-7" />
    if (name.includes("VFD")) return <Zap className="h-7 w-7" />
    if (name.includes("Network")) return <Network className="h-7 w-7" />
    if (name.includes("Data")) return <Database className="h-7 w-7" />
    if (name.includes("Maintenance")) return <Wrench className="h-7 w-7" />
    return <Activity className="h-7 w-7" />
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />

      <main className="flex-1 pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Title */}
          <div className="text-center mb-20 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
              Our Services
            </h1>

            <div className="w-32 h-1.5 bg-primary mx-auto rounded-full my-6"></div>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Premium automation and engineering solutions designed to enhance performance,
              reliability, and efficiency across industries.
            </p>
          </div>

          {/* Service Categories */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            {services.map((serviceCategory, index) => (
              <div
                key={index}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-2 h-10 bg-primary rounded-full shadow-md"></div>
                  <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
                    {serviceCategory.category}
                  </h2>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {serviceCategory.items.map((item, idx) => (
                    <Card
                      key={idx}
                      className="group bg-white border border-gray-200 shadow-sm hover:shadow-xl
                      transition-all duration-300 rounded-2xl hover:-translate-y-2"
                    >
                      <CardContent className="p-6 flex gap-4 items-start">
                        {/* Icon */}
                        <div
                          className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-primary/20
                          text-primary shadow-sm group-hover:scale-110 transition-transform duration-300"
                        >
                          {getIcon(item)}
                        </div>

                        {/* Text */}
                        <div>
                          <h3 className="font-semibold text-gray-900 text-lg mb-1 tracking-tight">
                            {item}
                          </h3>
                          <p className="text-sm text-gray-500">
                            Professional implementation and ongoing support.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
      <Chatbot />
    </div>
  )
}
