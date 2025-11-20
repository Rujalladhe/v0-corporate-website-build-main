import Image from "next/image"
import { CheckCircle2, Award, Users, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Chatbot } from "@/components/chatbot"
import { companyInfo } from "@/lib/data/company"

export default function AboutPage() {
  const stats = [
    { icon: <Clock className="h-8 w-8 text-primary" />, value: "10+", label: "Years Experience" },
    { icon: <Users className="h-8 w-8 text-primary" />, value: "500+", label: "Happy Clients" },
    { icon: <Award className="h-8 w-8 text-primary" />, value: "100%", label: "Quality Assurance" },
    { icon: <CheckCircle2 className="h-8 w-8 text-primary" />, value: "24/7", label: "Support" },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 pt-24 pb-20">
        {/* Hero Section */}
        <div className="container mx-auto px-4 mb-20">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Us</h1>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading the way in industrial automation and electrical control solutions with engineering excellence.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 mb-20">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 animate-slide-in">
              <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/pexels-cottonbro-7480240.jpg" alt="A V Tech Team" fill className="object-cover" />
              </div>
            </div>

            <div className="lg:w-1/2 animate-fade-in">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">{companyInfo.about.intro}</p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">{companyInfo.about.details}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {companyInfo.about.expertise.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-gray-800 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gray-50 py-20 mb-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="border-none shadow-none bg-transparent text-center">
                  <CardContent className="p-0 flex flex-col items-center">
                    <div className="mb-4 p-4 bg-white rounded-full shadow-md">{stat.icon}</div>
                    <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Location Info */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-primary shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{companyInfo.addresses.office.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {companyInfo.addresses.office.line1}
                  <br />
                  {companyInfo.addresses.office.line2}
                  <br />
                  {companyInfo.addresses.office.city} - {companyInfo.addresses.office.pincode}
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{companyInfo.addresses.works.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {companyInfo.addresses.works.line1}
                  <br />
                  {companyInfo.addresses.works.line2}
                  <br />
                  {companyInfo.addresses.works.city} - {companyInfo.addresses.works.pincode}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
      <Chatbot />
    </div>
  )
}
