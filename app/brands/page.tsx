import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Chatbot } from "@/components/chatbot"
import { brandCategories } from "@/lib/data/brands"
import { Sparkles, Award, Shield, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BrandsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white via-blue-50 to-blue-100">
      <Header />

      <main className="flex-1 pt-28 pb-24">
        <div className="container mx-auto px-4">

          {/* HERO HEADER SECTION */}
          <div className="text-center mb-16 animate-fade-in relative">
            {/* Floating decorative elements */}
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl -z-10"></div>
            <div className="absolute top-20 right-1/4 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl -z-10"></div>
            
            <div className="inline-flex items-center gap-2 bg-blue-100/80 backdrop-blur-sm px-6 py-2 rounded-full mb-6 border border-blue-200">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-700">Industry-Leading Partnerships</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 text-transparent bg-clip-text">
                World-Class
              </span>
              <br />
              <span className="text-gray-800">Brands We Trust</span>
            </h1>

            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-24 h-1 bg-gradient-to-r from-transparent to-blue-500 rounded-full"></div>
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="w-24 h-1 bg-gradient-to-l from-transparent to-blue-500 rounded-full"></div>
            </div>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
              We've partnered with the world's most trusted industrial brands to deliver 
              cutting-edge automation, control systems, and power solutions that drive 
              <span className="font-semibold text-blue-600"> innovation and excellence</span>.
            </p>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { icon: Award, label: "Premium Brands", value: "50+" },
                { icon: Shield, label: "Years Experience", value: "25+" },
                { icon: TrendingUp, label: "Success Rate", value: "99.8%" },
                { icon: Sparkles, label: "Global Partners", value: "15+" }
              ].map((stat, i) => (
                <div key={i} className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-blue-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <stat.icon className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* BRAND SECTIONS */}
          <div className="space-y-32 mt-24">
            {brandCategories.map((category, index) => (
              <div
                key={index}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Category Header */}
                <div className="relative text-center mb-16">
                  <div className="inline-block relative">
                    <h2 className="text-4xl md:text-5xl font-black text-gray-800 px-8 py-4 relative z-10 bg-gradient-to-r from-white via-white to-white rounded-2xl shadow-lg border border-blue-200/50">
                      <span className="bg-gradient-to-r from-blue-600 to-blue-500 text-transparent bg-clip-text">
                        {category.category}
                      </span>
                    </h2>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-2 bg-blue-500/20 blur-lg rounded-full"></div>
                  </div>
                  
                  {category.description && (
                    <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
                      {category.description}
                    </p>
                  )}
                </div>

                {/* Grid of Brand Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                  {category.brands.map((brand, idx) => (
                    <Card
                      key={idx}
                      className="
                        group cursor-pointer border-2 border-blue-200/50
                        hover:border-blue-400 transition-all duration-500
                        bg-white/90 backdrop-blur-xl
                        shadow-lg hover:shadow-2xl
                        hover:-translate-y-3 rounded-3xl
                        relative overflow-hidden
                      "
                    >
                      {/* Gradient overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-600/0 group-hover:from-blue-500/5 group-hover:to-blue-600/5 transition-all duration-500"></div>
                      
                      {/* Corner accent */}
                      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      <CardContent className="p-6 flex flex-col items-center justify-center h-40 md:h-48 relative z-10">
                        {/* Brand Name - Beautiful Typography */}
                        <div className="text-center w-full">
                          <h3 className="text-xl md:text-2xl font-black text-gray-800 group-hover:text-blue-600 transition-colors mb-2 tracking-tight leading-tight">
                            {brand.name}
                          </h3>
                          
                          {/* Decorative underline */}
                          <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100"></div>
                          
                          {/* Brand specialty/description */}
                          {brand.specialty && (
                            <p className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors line-clamp-2 mt-3 px-2">
                              {brand.specialty}
                            </p>
                          )}
                        </div>

                        {/* Animated bottom accent bar */}
                        <div className="
                          absolute bottom-0 left-0 right-0 h-1.5 
                          bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600
                          transform scale-x-0 group-hover:scale-x-100 
                          transition-transform duration-500 origin-center
                          rounded-full
                        "></div>

                        {/* Shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA SECTION */}
          <div className="mt-32 text-center">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-12 md:p-16 shadow-2xl relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
              </div>

              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                  Ready to Get Started?
                </h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Let's discuss how our premium brand partnerships can elevate your industrial automation projects.
                </p>
                <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 text-lg px-10 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
      <WhatsAppButton />
      <Chatbot />
    </div>
  )
}