"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Chatbot } from "@/components/chatbot"
import { companyInfo } from "@/lib/data/company"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send the data to a server
    // For now, we'll open WhatsApp with the message
    const message = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nSubject: ${formData.subject}\nMessage: ${formData.message}`,
    )
    window.open(`https://wa.me/${companyInfo.contact.whatsapp.replace("+", "")}?text=${message}`, "_blank")
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with us for any queries regarding our products and services. We are here to help!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Contact Form */}
            <div className="animate-slide-in">
              <Card className="border-none shadow-xl bg-white">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-700">
                          Full Name
                        </label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          placeholder="+91 98765 43210"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        placeholder="Product Enquiry"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-gray-700">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your requirements..."
                        className="min-h-[150px]"
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg">
                      Send Message <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-8 animate-fade-in">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 flex items-start gap-6">
                  <div className="bg-primary/10 p-4 rounded-full text-primary shrink-0">
                    <MapPin className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Our Locations</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Office:</h4>
                        <p className="text-gray-600">
                          {companyInfo.addresses.office.line1},<br />
                          {companyInfo.addresses.office.line2},<br />
                          {companyInfo.addresses.office.city} - {companyInfo.addresses.office.pincode}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Factory:</h4>
                        <p className="text-gray-600">
                          {companyInfo.addresses.works.line1},<br />
                          {companyInfo.addresses.works.line2},<br />
                          {companyInfo.addresses.works.city} - {companyInfo.addresses.works.pincode}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 flex items-start gap-6">
                  <div className="bg-primary/10 p-4 rounded-full text-primary shrink-0">
                    <Phone className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
                    <p className="text-gray-600 mb-2">For sales and support inquiries:</p>
                    <a
                      href={`tel:${companyInfo.contact.phone}`}
                      className="text-2xl font-bold text-primary hover:underline"
                    >
                      {companyInfo.contact.phone}
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 flex items-start gap-6">
                  <div className="bg-primary/10 p-4 rounded-full text-primary shrink-0">
                    <Mail className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                    <p className="text-gray-600 mb-2">Send us your requirements:</p>
                    <div className="flex flex-col gap-1">
                      {companyInfo.contact.emails.map((email, idx) => (
                        <a
                          key={idx}
                          href={`mailto:${email}`}
                          className="text-lg font-medium text-gray-800 hover:text-primary transition-colors"
                        >
                          {email}
                        </a>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 flex items-start gap-6">
                  <div className="bg-primary/10 p-4 rounded-full text-primary shrink-0">
                    <Clock className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Working Hours</h3>
                    <p className="text-gray-600">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Map */}
          <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-xl animate-fade-in">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3749.9494080072427!2d73.73449727522816!3d19.968629781428525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDU4JzA3LjEiTiA3M8KwNDQnMTMuNSJF!5e0!3m2!1sen!2sin!4v1763737158187!5m2!1sen!2sin"

              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              

              

            ></iframe>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
      <Chatbot />
    </div>
  )
}
