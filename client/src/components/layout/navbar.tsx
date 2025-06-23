import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link, useLocation } from "wouter";
import logoImage from "@assets/IMG-20231112-WA0033-1_1750675315071.jpg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <img 
              src={logoImage} 
              alt="Oyster Worldwide Employment & Learning Services" 
              className="h-12 w-auto"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link 
                href="/"
                className={`px-3 py-2 text-sm font-medium transition-colors ${location === '/' ? 'text-primary' : 'text-gray-600 hover:text-primary'}`}
              >
                Home
              </Link>
              <Link 
                href="/about"
                className={`px-3 py-2 text-sm font-medium transition-colors ${location === '/about' ? 'text-primary' : 'text-gray-600 hover:text-primary'}`}
              >
                About
              </Link>
              <Link 
                href="/health-sector"
                className={`px-3 py-2 text-sm font-medium transition-colors ${location === '/health-sector' ? 'text-primary' : 'text-gray-600 hover:text-primary'}`}
              >
                Health Sector
              </Link>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-600 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-gray-600 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Testimonials
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Get Started
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  <Link 
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className={`text-left px-3 py-2 text-lg font-medium transition-colors ${location === '/' ? 'text-primary' : 'text-gray-600 hover:text-primary'}`}
                  >
                    Home
                  </Link>
                  <Link 
                    href="/about"
                    onClick={() => setIsOpen(false)}
                    className={`text-left px-3 py-2 text-lg font-medium transition-colors ${location === '/about' ? 'text-primary' : 'text-gray-600 hover:text-primary'}`}
                  >
                    About
                  </Link>
                  <Link 
                    href="/health-sector"
                    onClick={() => setIsOpen(false)}
                    className={`text-left px-3 py-2 text-lg font-medium transition-colors ${location === '/health-sector' ? 'text-primary' : 'text-gray-600 hover:text-primary'}`}
                  >
                    Health Sector
                  </Link>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="text-left text-gray-600 hover:text-primary px-3 py-2 text-lg font-medium transition-colors"
                  >
                    Services
                  </button>
                  <button 
                    onClick={() => scrollToSection('testimonials')}
                    className="text-left text-gray-600 hover:text-primary px-3 py-2 text-lg font-medium transition-colors"
                  >
                    Testimonials
                  </button>
                  <Button 
                    onClick={() => scrollToSection('contact')}
                    className="bg-primary text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition-colors w-full"
                  >
                    Get Started
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
