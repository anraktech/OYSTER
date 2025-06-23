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
    <section id="home" className="gradient-bg text-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                className="bg-accent text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-500 transition-all transform hover:scale-105"
              >
                <Search className="mr-2 h-5 w-5" />
                Find Jobs
              </Button>
              <Button 
                onClick={scrollToContact}
                variant="outline"
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-primary transition-all"
              >
                <Building className="mr-2 h-5 w-5" />
                Hire Talent
              </Button>
            </div>
          </div>
          <div className="lg:col-span-5 mt-12 lg:mt-0">
            <img 
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Professional recruitment team discussing strategy" 
              className="rounded-2xl shadow-2xl w-full animate-slide-up"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
