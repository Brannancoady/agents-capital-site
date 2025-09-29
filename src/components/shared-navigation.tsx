"use client"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import {
  Phone,
  Menu,
  Instagram,
  ChevronDown,
  Zap
} from "lucide-react"
interface SharedNavigationProps {
  scrollToSection?: (sectionId: string) => void
}
export default function SharedNavigation({ scrollToSection }: SharedNavigationProps) {
  const handleScrollToSection = (sectionId: string) => {
    if (scrollToSection) {
      scrollToSection(sectionId)
    } else {
      // For pages that don't have these sections, redirect to home with hash
      window.location.href = `/#${sectionId}`
    }
  }
  return (
    <>
      {/* Instagram CTA Banner */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-2 text-sm">
            <Instagram className="h-4 w-4" />
            <span>Follow us on Instagram for daily tips and success stories</span>
            <Link href="https://www.instagram.com/agents.capital" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="sm" className="ml-2 bg-white text-gray-800 hover:bg-gray-100">
                Follow @AgentsCapital
              </Button>
            </Link>
          </div>
        </div>
      </div>
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-normal" style={{ fontFamily: '"Knockout-HTF54-Sumo", sans-serif' }}>
                Agents<span className="font-bold">Capital</span>
              </span>
            </Link>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-sm font-medium hover:text-primary transition-colors">
                    How It Works
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-48">
                  <DropdownMenuItem asChild>
                    <Link href="/commission-advance">Commission Advance</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/pricing">Our Pricing</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link href="/our-business" className="text-sm font-medium hover:text-primary transition-colors">
                Our Business
              </Link>
              <Link href="/help" className="text-sm font-medium hover:text-primary transition-colors">
                Help Centre
              </Link>
              <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
                Contact
              </Link>
              <Link href="/apply">
                <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2">
                  <Zap className="h-4 w-4 mr-2" />
                  Apply Now
                </Button>
              </Link>
              <a href="tel:07368162737">
                <Button variant="outline" size="sm">
                  <Phone className="h-4 w-4 mr-2" />
                  07368162737
                </Button>
              </a>
            </div>
            {/* Mobile Navigation */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Menu className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <div className="flex flex-col space-y-4 mt-8">
                    <Link href="/" className="text-2xl font-normal mb-4" style={{ fontFamily: '"Knockout-HTF54-Sumo", sans-serif' }}>
                      Agents<span className="font-bold">Capital</span>
                    </Link>
                    <div className="space-y-2">
                      <div className="font-medium text-slate-600 text-sm">How It Works</div>
                      <Link href="/commission-advance" className="text-left pl-4 text-lg font-medium hover:text-primary transition-colors py-2 block">
                        Commission Advance
                      </Link>
                      <Link href="/pricing" className="text-left pl-4 text-lg font-medium hover:text-primary transition-colors py-2 block">
                        Our Pricing
                      </Link>
                    </div>
                    <Separator />
                    <Link href="/apply">
                      <Button className="justify-start bg-green-600 hover:bg-green-700 text-white w-full">
                        <Zap className="h-4 w-4 mr-2" />
                        Apply Now
                      </Button>
                    </Link>
                    <Link href="/our-business" className="text-left text-lg font-medium hover:text-primary transition-colors py-2">
                      Our Business
                    </Link>
                    <Link href="/help" className="text-left text-lg font-medium hover:text-primary transition-colors py-2">
                      Help Centre
                    </Link>
                    <Link href="/contact" className="text-left text-lg font-medium hover:text-primary transition-colors py-2">
                      Contact
                    </Link>
                    <Separator />
                    <a href="tel:07368162737">
                      <Button className="justify-start" variant="outline">
                        <Phone className="h-4 w-4 mr-2" />
                        07368162737
                      </Button>
                    </a>
                    <Link href="https://www.instagram.com/agents.capital" target="_blank" rel="noopener noreferrer">
                      <Button className="justify-start bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white">
                        <Instagram className="h-4 w-4 mr-2" />
                        Follow @AgentsCapital
                      </Button>
                    </Link>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}