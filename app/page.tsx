import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle2, Settings, Zap, Cpu, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Chatbot } from "@/components/chatbot"
import { HeroVideo } from "@/components/hero-video"

export default function Home() {
  const keyCapabilities = [
    {
      title: "Factory Automation",
      icon: <Settings className="h-10 w-10 text-primary" />,
      description: "Complete automation solutions for manufacturing lines and industrial processes.",
    },
    {
      title: "Electrical Control Panels",
      icon: <Zap className="h-10 w-10 text-primary" />,
      description: "Custom designed MCC, PCC, APFC, and VFD panels for power distribution.",
    },
    {
      title: "Special Purpose Machines",
      icon: <Cpu className="h-10 w-10 text-primary" />,
      description: "Tailored SPM solutions for specific manufacturing requirements and efficiency.",
    },
    {
      title: "Engineering & Support",
      icon: <Wrench className="h-10 w-10 text-primary" />,
      description: "Expert installation, commissioning, and 24/7 maintenance support services.",
    },
  ]

  const whyChooseUs = [
    "10+ years engineering experience",
    "High-quality components",
    "Expert automation professionals",
    "PLC, SCADA, HMI, VFD, Servo programming",
    "PAN India installation & support",
  ]

  // Create array of 10 logo filenames
  const brandLogos = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    filename: `${i + 1}.png`,
    alt: `Brand Logo ${i + 1}`
  }))

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 pt-16">
          {/* Hero Section */}
        <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden bg-gray-900 text-white">
          <HeroVideo />
          <div className="absolute inset-0 bg-black/60 z-10" />

          <div className="container mx-auto px-4 relative z-20 text-center md:text-left">
            <div className="max-w-3xl animate-fade-in">
...
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Powering Industries With <span className="text-primary">Automation</span>, Control & Engineering
                Excellence
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                Manufacturer, Supplier & System Integrator for Factory Automation, Electrical Panels & Special Purpose
                Machines.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 rounded-full"
                >
                  <Link href="/products">View Products</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6 rounded-full bg-transparent"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Capabilities Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Key Capabilities</h2>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Delivering comprehensive industrial solutions with precision engineering and advanced technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {keyCapabilities.map((cap, index) => (
                <Card
                  key={index}
                  className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                >
                  <CardContent className="p-8 text-center flex flex-col items-center h-full">
                    <div className="mb-6 p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                      {cap.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{cap.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{cap.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2 relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/industrial-engineer-working-on-panel.jpg" alt="Engineering Excellence" fill className="object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                  <p className="text-white text-xl font-bold">Excellence in Every Project</p>
                </div>
              </div>

              <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose A V Tech?</h2>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  We combine technical expertise with industry experience to deliver solutions that drive efficiency and
                  productivity. Our commitment to quality and support sets us apart.
                </p>

                <div className="space-y-4">
                  {whyChooseUs.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-primary/30 transition-colors"
                    >
                      <div className="bg-primary/10 p-2 rounded-full shrink-0">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-gray-800 font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <Button
                  asChild
                  className="mt-10 bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg"
                >
                  <Link href="/about">
                    Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Logos Carousel */}
         {/* Brand Logos Carousel */}
        {/* Brand Logos Carousel */}
        {/* Brand Logos Carousel */}
          {/* Brand Logos Carousel */}
          <section className="py-16 bg-gray-50 overflow-hidden">
          <div className="container mx-auto px-4 mb-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Trusted Brands We Work With</h2>
          </div>

          <div className="relative w-full overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] cursor-grab active:cursor-grabbing">
            <div className="flex whitespace-nowrap animate-[scroll_10s_linear_infinite] md:animate-[scroll_20s_linear_infinite]">
              {/* First set of logos */}
              <div className="flex gap-8 md:gap-12 px-4 md:px-6 items-center">
                {brandLogos.map((logo) => (
                  <div
                    key={`brand-1-${logo.id}`}
                    className="flex flex-col items-center justify-center w-24 md:w-32 h-16 md:h-20 flex-shrink-0"
                  >
                    <Image
                      src={`/logos/${logo.filename}`}
                      alt={logo.alt}
                      width={160}
                      height={96}
                      className="max-h-16 md:max-h-20 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
              {/* Duplicate set for seamless scrolling */}
              <div className="flex gap-8 md:gap-12 px-4 md:px-6 items-center">
                {brandLogos.map((logo) => (
                  <div
                    key={`brand-2-${logo.id}`}
                    className="flex flex-col items-center justify-center w-24 md:w-32 h-16 md:h-20 flex-shrink-0"
                  >
                    <Image
                      src={`/logos/${logo.filename}`}
                      alt={logo.alt}
                      width={160}
                      height={96}
                      className="max-h-16 md:max-h-20 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
              {/* Third set for extra smooth scrolling on mobile */}
              <div className="flex gap-8 md:gap-12 px-4 md:px-6 items-center md:hidden">
                {brandLogos.map((logo) => (
                  <div
                    key={`brand-3-${logo.id}`}
                    className="flex flex-col items-center justify-center w-24 h-16 flex-shrink-0"
                  >
                    <Image
                      src={`/logos/${logo.filename}`}
                      alt={logo.alt}
                      width={160}
                      height={96}
                      className="max-h-16 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 bg-primary text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Optimize Your Industrial Processes?</h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Contact us today for a consultation on automation solutions tailored to your specific needs.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 text-lg px-10 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
      <Chatbot />
    </div>
  )
}