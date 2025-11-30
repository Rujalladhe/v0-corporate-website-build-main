"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { companyInfo } from "@/lib/data/company"
import { cn } from "@/lib/utils"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Services", href: "/services" },
    { name: "Brands", href: "/brands" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-2" : "bg-white py-4",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="h-16 w-20 rounded-xl overflow-hidden bg-white">
              <Image
                src="/logos/WhatsApp%20Image%202025-11-21%20at%2019.45.50_779474a4.jpg"
                alt="A V Tech logo"
                width={80}
                height={64}
                priority
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <span className="sr-only">A V Tech Automation Systems</span>
          </Link>
          
          {/* Contact Info - Hidden on mobile */}
          <div className="hidden lg:flex items-center gap-6 text-sm text-gray-600">
            <a
              href={`tel:${companyInfo.contact.phone}`}
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>{companyInfo.contact.phone}</span>
            </a>
            <a
              href={`mailto:${companyInfo.contact.emails[0]}`}
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>{companyInfo.contact.emails[0]}</span>
            </a>
          </div>

          {/* ISO Certification and Navigation */}
          <div className="flex items-center gap-40 flex-1 justify-end">
            {/* ISO Certification - Hidden on mobile */}
            <div className="hidden lg:flex items-center">
              <span className="text-sm text-gray-600">ISO 9001:2015 Certified</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary relative py-2",
                    pathname === link.href
                      ? "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary"
                      : "text-gray-600",
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Button asChild className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">
                <Link href="/contact">Get Quote</Link>
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-gray-600" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-base font-medium py-2 border-b border-gray-100",
                  pathname === link.href ? "text-primary" : "text-gray-600",
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="w-full mt-2">
              <Link href="/contact">Get Quote</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}