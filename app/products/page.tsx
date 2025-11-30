"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight, Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Chatbot } from "@/components/chatbot"
import { products, type Product } from "@/lib/data/products"

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Products</h1>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              High-quality industrial automation panels and special purpose machines designed for reliability and
              efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card
                key={product.id}
                className="group overflow-hidden border-gray-200 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <Button
                      onClick={() => setSelectedProduct(product)}
                      className="w-full bg-white text-primary hover:bg-gray-100"
                    >
                      View Details
                    </Button>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                    {product.name}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex-1">
                  <p className="text-gray-600 line-clamp-3">{product.shortDescription}</p>
                </CardContent>

                <CardFooter className="border-t border-gray-100 pt-4">
                  <Button
                    onClick={() => setSelectedProduct(product)}
                    variant="ghost"
                    className="w-full justify-between text-primary hover:text-primary hover:bg-primary/5 group/btn"
                  >
                    View Details
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>

      {/* Product Popup Modal */}
  {/* Product Popup Modal */}
  <Dialog open={!!selectedProduct} onOpenChange={(open) => !open && setSelectedProduct(null)}>
        {/* Changed max-w-4xl to max-w-6xl for a wider, horizontal rectangle */}
        <DialogContent className="max-w-6xl w-[95vw] max-h-[90vh] overflow-hidden p-0 gap-0 flex flex-col md:flex-row bg-white">
          
          <div className="absolute top-0 right-0 z-20 flex justify-end p-4 pointer-events-none">
            <DialogClose className="bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors shadow-sm pointer-events-auto border border-gray-100">
              <X className="h-5 w-5 text-gray-500" />
              <span className="sr-only">Close</span>
            </DialogClose>
          </div>

          {selectedProduct && (
            <div className="flex flex-col md:flex-row w-full h-full overflow-hidden">
              
              {/* Image Section - Changed width to 1/2 and used object-contain */}
              <div className="w-full md:w-1/2 relative h-64 md:h-auto bg-gray-50 border-b md:border-b-0 md:border-r border-gray-100 flex items-center justify-center p-6">
                <Image
                  src={selectedProduct.image || "/placeholder.svg"}
                  alt={selectedProduct.name}
                  fill
                  // 'object-contain' ensures the WHOLE image is seen without cropping
                  className="object-contain p-4" 
                />
              </div>

              {/* Content Section - Changed width to 1/2 */}
              <div className="w-full md:w-1/2 bg-white overflow-y-auto max-h-[60vh] md:max-h-[85vh]">
                <div className="p-6 md:p-10">
                  <DialogHeader className="mb-6">
                    <DialogTitle className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 pr-8">
                      {selectedProduct.name}
                    </DialogTitle>
                    <DialogDescription className="text-base text-gray-600">
                      {selectedProduct.fullDescription}
                    </DialogDescription>
                  </DialogHeader>

                  <div className="space-y-8">
                    {/* Features */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <div className="w-1 h-6 bg-primary rounded-full"></div>
                        Key Features
                      </h3>
                      <ul className="grid grid-cols-1 gap-3">
                        {selectedProduct.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-gray-600 bg-gray-50 p-2 rounded-lg">
                            <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Applications */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <div className="w-1 h-6 bg-primary rounded-full"></div>
                        Applications
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProduct.applications.map((app, idx) => (
                          <Badge key={idx} variant="secondary" className="px-3 py-1 bg-gray-100 text-gray-700 hover:bg-gray-200 text-sm">
                            {app}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Compatible Brands */}
                    {selectedProduct.compatibleBrands && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                          <div className="w-1 h-6 bg-primary rounded-full"></div>
                          Compatible Brands
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedProduct.compatibleBrands.map((brand, idx) => (
                            <Badge key={idx} variant="outline" className="px-3 py-1 border-primary/30 text-primary text-sm">
                              {brand}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="pt-6 border-t border-gray-100 sticky bottom-0 bg-white pb-2">
                      <Button
                        className="w-50 bg-primary hover:bg-primary/90 text-white h-12 text-sm shadow-lg shadow-primary/20"
                        onClick={() => {
                          const message = encodeURIComponent(
                            `Hi, I'm interested in ${selectedProduct.name}. Can you provide more details?`,
                          )
                          window.open(`https://wa.me/919595912555?text=${message}`, "_blank")
                        }}
                      >
                        Enquire Now via WhatsApp
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
      <WhatsAppButton />
      <Chatbot />
    </div>
  )
}
