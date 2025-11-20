"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
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
      {/* Top Bar - Hidden on mobile when scrolled */}
      <div
        className={cn(
          "container mx-auto px-4 mb-2 hidden md:flex justify-between items-center text-sm text-gray-600 transition-all duration-300",
          isScrolled ? "h-0 opacity-0 overflow-hidden mb-0" : "h-auto opacity-100",
        )}
      >
        <div className="flex items-center gap-6">
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
        <div className="flex items-center gap-4">
          <span>ISO 9001:2015 Certified</span>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary text-white p-2 rounded-lg font-bold text-xl group-hover:bg-primary/90 transition-colors">
              AV
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl leading-none text-gray-900">A V TECH</span>
              <span className="text-[10px] text-gray-500 font-medium tracking-wider">AUTOMATION SYSTEMS</span>
            </div>
          </Link>

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
