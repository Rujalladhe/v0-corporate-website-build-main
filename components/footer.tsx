import Link from "next/link"
import { Phone, Mail, MapPin,  } from "lucide-react"
import { companyInfo } from "@/lib/data/company"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-primary text-white p-2 rounded-lg font-bold text-xl">AV</div>
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-none">A V TECH</span>
                <span className="text-[10px] text-gray-400 font-medium tracking-wider">AUTOMATION SYSTEMS</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">{companyInfo.description}</p>
            <div className="flex gap-4">
           
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-l-4 border-primary pl-3">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Our Products
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/brands" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Brands We Work With
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-l-4 border-primary pl-3">Our Products</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/products?category=panels"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  Electrical Control Panels
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=automation"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  PLC Automation Panels
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=spm"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  Special Purpose Machines
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=vfd"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  VFD & Servo Systems
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=scada"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  SCADA Systems
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-l-4 border-primary pl-3">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  {companyInfo.addresses.office.line1}, {companyInfo.addresses.office.line2},{" "}
                  {companyInfo.addresses.office.city} - {companyInfo.addresses.office.pincode}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a
                  href={`tel:${companyInfo.contact.phone}`}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {companyInfo.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a
                  href={`mailto:${companyInfo.contact.emails[0]}`}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {companyInfo.contact.emails[0]}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} A V Tech. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
          
          </div>
        </div>
      </div>
    </footer>
  )
}
