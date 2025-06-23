import { Card, CardContent } from "@/components/ui/card";
import { Plane, Home, MapPin } from "lucide-react";

const services = [
  {
    icon: MapPin,
    title: "Complete Journey Guidance",
    description: "Step-by-step comprehensive support for overseas candidates from the initial application through to successful employment placement.",
    color: "text-blue-600",
    bgColor: "bg-blue-100"
  },
  {
    icon: Plane,
    title: "UK Airport Welcome Service",
    description: "Personal meet-and-greet service at UK airports to ensure a smooth transition and welcome to your new career destination.",
    color: "text-green-600",
    bgColor: "bg-green-100"
  },
  {
    icon: Home,
    title: "Accommodation Assistance",
    description: "Professional support in finding and securing suitable accommodation upon your arrival, making your transition seamless.",
    color: "text-purple-600",
    bgColor: "bg-purple-100"
  }
];

export default function OurServicesDetailed() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Provide</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive support services designed to make your employment journey smooth and successful from start to finish.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card key={service.title} className="service-card bg-white rounded-2xl shadow-lg p-8 text-center border-0 h-full">
                <CardContent className="p-0 flex flex-col h-full">
                  <div className={`w-16 h-16 ${service.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <IconComponent className={`h-8 w-8 ${service.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 flex-grow">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}