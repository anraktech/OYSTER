import { Button } from "@/components/ui/button";
import { Search, Building } from "lucide-react";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="gradient-bg text-white py-20 lg:py-32 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Circles */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-accent/20 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/15 rounded-full animate-float-slow"></div>
        <div className="absolute top-1/2 right-10 w-8 h-8 bg-accent/30 rounded-full animate-float"></div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-20 right-1/3 w-14 h-14 bg-white/8 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-32 right-1/4 w-10 h-10 bg-accent/15 rotate-12 animate-pulse-slow"></div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/2 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-gradient-to-r from-accent/20 to-orange-400/20 rounded-full blur-lg animate-float-delayed"></div>
        
        {/* Animated Lines */}
        <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent animate-pulse"></div>
        <div className="absolute top-16 right-1/4 w-px h-24 bg-gradient-to-b from-transparent via-accent/30 to-transparent animate-pulse-delayed"></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="lg:col-span-7">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Find Your Dream Career Today
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100 animate-slide-up">
              We create opportunities and unlock success in specialized fields, connecting talented professionals with their perfect roles across Health, Engineering, IT, and Hospitality sectors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                className="bg-accent text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-500 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Search className="mr-2 h-5 w-5" />
                Find Jobs
              </Button>
              <Button 
                onClick={scrollToContact}
                variant="outline"
                className="border-2 border-white bg-transparent text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-primary transition-all shadow-lg hover:shadow-xl backdrop-blur-sm"
              >
                <Building className="mr-2 h-5 w-5" />
                Hire Talent
              </Button>
            </div>
          </div>
          <div className="lg:col-span-5 mt-12 lg:mt-0 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-blue-400/20 rounded-2xl blur-2xl transform scale-110 animate-pulse-slow"></div>
            <img 
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Professional recruitment team discussing strategy" 
              className="rounded-2xl shadow-2xl w-full animate-slide-up relative z-10 hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
