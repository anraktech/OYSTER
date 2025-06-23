import { Button } from "@/components/ui/button";
import { Search, Building, Users, TrendingUp, Award, Globe } from "lucide-react";

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
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/5 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-accent/20 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-accent/30 rounded-full animate-bounce" style={{animationDelay: '0.7s'}}></div>
        
        {/* Floating Icons */}
        <div className="absolute top-32 left-1/2 hero-float">
          <Users className="h-8 w-8 text-white/20" />
        </div>
        <div className="absolute bottom-32 right-1/4 hero-float-delayed">
          <TrendingUp className="h-6 w-6 text-accent/40" />
        </div>
        <div className="absolute top-1/2 left-20 hero-float-slow">
          <Award className="h-7 w-7 text-white/25" />
        </div>
        <div className="absolute bottom-40 left-1/3 hero-float-delayed">
          <Globe className="h-5 w-5 text-accent/35" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="lg:col-span-7">
            <div className="hero-fade-up">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Find Your Dream 
                <span className="text-accent block hero-glow"> Career Today</span>
              </h1>
            </div>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100 hero-fade-up-delay leading-relaxed">
              We create opportunities and unlock success in specialized fields, connecting talented professionals with their perfect roles across Health, Engineering, IT, and Hospitality sectors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 hero-fade-up-delay-2">
              <Button 
                onClick={scrollToContact}
                className="bg-accent text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-500 transition-all transform hover:scale-105 hover:shadow-lg group"
              >
                <Search className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                Find Jobs
              </Button>
              <Button 
                onClick={scrollToContact}
                variant="outline"
                className="border-2 border-white bg-transparent text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-primary transition-all hover:shadow-lg group"
              >
                <Building className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                Hire Talent
              </Button>
            </div>
          </div>
          
          <div className="lg:col-span-5 mt-12 lg:mt-0">
            <div className="relative hero-fade-up-delay-3">
              {/* Stats Card */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-500">
                <h3 className="text-2xl font-bold mb-6 text-center text-accent">Our Impact</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between group hover:scale-105 transition-transform">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
                        <TrendingUp className="h-5 w-5 text-green-400" />
                      </div>
                      <span className="text-blue-100">Success Rate</span>
                    </div>
                    <span className="text-accent font-bold text-xl hero-number">98%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
                    <div className="bg-gradient-to-r from-accent to-green-400 h-3 rounded-full hero-progress-bar"></div>
                  </div>
                  
                  <div className="flex items-center justify-between group hover:scale-105 transition-transform">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center mr-3">
                        <Users className="h-5 w-5 text-blue-400" />
                      </div>
                      <span className="text-blue-100">Placements This Year</span>
                    </div>
                    <span className="text-accent font-bold text-xl hero-number">2,500+</span>
                  </div>
                  
                  <div className="flex items-center justify-between group hover:scale-105 transition-transform">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center mr-3">
                        <Building className="h-5 w-5 text-purple-400" />
                      </div>
                      <span className="text-blue-100">Partner Companies</span>
                    </div>
                    <span className="text-accent font-bold text-xl hero-number">150+</span>
                  </div>
                  
                  <div className="flex items-center justify-between group hover:scale-105 transition-transform">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center mr-3">
                        <Globe className="h-5 w-5 text-orange-400" />
                      </div>
                      <span className="text-blue-100">Countries Served</span>
                    </div>
                    <span className="text-accent font-bold text-xl hero-number">25+</span>
                  </div>
                </div>
              </div>

              {/* Floating Achievement Badges */}
              <div className="absolute -top-4 -right-4 bg-accent rounded-full p-3 animate-bounce shadow-lg">
                <Award className="h-6 w-6 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-green-500 rounded-full p-2 animate-pulse shadow-lg">
                <TrendingUp className="h-5 w-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
