"use client"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Linkedin
} from "lucide-react"
interface SharedFooterProps {
  scrollToSection?: (sectionId: string) => void
}
export default function SharedFooter({ scrollToSection }: SharedFooterProps) {
  const handleScrollToSection = (sectionId: string) => {
    if (scrollToSection) {
      scrollToSection(sectionId)
    } else {
      // For pages that don't have these sections, redirect to home with hash
      window.location.href = `/#${sectionId}`
    }
  }
  return (
    <footer id="contact" className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-normal" style={{ fontFamily: '"Knockout-HTF54-Sumo", sans-serif' }}>
                Agents<span className="font-bold text-white">Capital</span>
              </span>
            </div>
            <p className="text-slate-300 mb-4">
              Fast, flexible commission advance for UK estate agents and brokerages.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.instagram.com/agents.capital" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="bg-gradient-to-r from-gray-800 to-gray-900 border-0 hover:from-gray-700 hover:to-gray-800">
                  <Instagram className="h-4 w-4 mr-2" />
                  Instagram
                </Button>
              </Link>
              <Button variant="outline" size="sm" className="bg-blue-600 border-0 hover:bg-blue-700">
                <Linkedin className="h-4 w-4 mr-2" />
                Linkedin
              </Button>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">How It Works</h3>
            <ul className="space-y-2 text-slate-300">
              <li><button onClick={() => handleScrollToSection('how-it-works')} className="hover:text-white transition-colors text-left">How It Works</button></li>
              <li><Link href="/commission-advance" className="hover:text-white transition-colors">Commission Advance</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Our Pricing</Link></li>
              <li><button onClick={() => handleScrollToSection('benefits')} className="hover:text-white transition-colors text-left">Benefits</button></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-slate-300">
              <li><Link href="/our-business" className="hover:text-white transition-colors">Our Business</Link></li>
              <li><Link href="/help" className="hover:text-white transition-colors">Help Centre</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/apply" className="hover:text-white transition-colors">Apply Now</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-slate-300">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <a href="tel:07368162737" className="hover:text-green-400 transition-colors">
                  07368162737
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <a href="mailto:Hello@agentscapital.co" className="hover:text-green-400 transition-colors">
                  Hello@agentscapital.co
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-1" />
                <span>Unit 1 Syds Quay, Eel Pie Island<br />Twickenham TW1 3DY</span>
              </div>
            </div>
          </div>
        </div>
        <Separator className="my-8 bg-slate-700" />
        <div className="flex flex-col md:flex-row justify-between items-center text-slate-400">
          <p>&copy; 2024 Agents Capital Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}