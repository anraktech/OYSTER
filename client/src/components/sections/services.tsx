import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Cog, Laptop, Coffee, BookOpen, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const services = [
  {
    icon: Heart,
    title: "Health Sector",
    description: "Connecting healthcare professionals with leading medical institutions and healthcare organizations.",
    color: "text-red-600",
    bgColor: "bg-red-100",
    link: "/health-sector"
  },
  {
    icon: BookOpen,
    title: "Learning",
    description: "Comprehensive IELTS and OET preparation courses to help professionals achieve their language requirements.",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    link: "/learning"
  },
  {
    icon: Laptop,
    title: "Information Technology",
    description: "Matching IT professionals with innovative tech companies and digital transformation projects.",
    color: "text-green-600",
    bgColor: "bg-green-100",
    link: "/information-technology"
  },
  {
    icon: Cog,
    title: "Engineering",
    description: "Placing skilled engineers in cutting-edge projects across various engineering disciplines.",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    link: "/engineering"
  },
  {
    icon: Coffee,
    title: "Hospitality",
    description: "Connecting hospitality professionals with premier hotels, restaurants, and tourism companies.",
    color: "text-yellow-600",
    bgColor: "bg-yellow-100",
    link: "/hospitality"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Specialized Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide recruitment solutions across diversified sectors, ensuring the right talent meets the right opportunity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card key={service.title} className="service-card bg-white rounded-2xl shadow-lg p-8 text-center border-0">
                <CardContent className="p-0">
                  <div className={`w-16 h-16 ${service.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <IconComponent className={`h-8 w-8 ${service.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  {service.link ? (
                    <Link href={service.link}>
                      <Button 
                        variant="ghost" 
                        className="text-primary font-semibold hover:text-blue-700 transition-colors p-0"
                      >
                        Learn More <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </Link>
                  ) : (
                    <Button 
                      variant="ghost" 
                      className="text-primary font-semibold hover:text-blue-700 transition-colors p-0"
                    >
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
