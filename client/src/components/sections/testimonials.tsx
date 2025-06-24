import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Nidhi Ghodele",
    role: "Web Developer & IT Assistant",
    image: "https://oysteremployment.com/wp-content/uploads/2024/02/website.jpeg",
    content: "Excellent recruitment agency to land your dream job. I would absolutely recommend it. Plus they provide learning resources as well!"
  },
  {
    name: "Maria Santos",
    role: "Registered Nurse",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    content: "Coming from the Philippines as a nurse, Oyster Employment made my UK journey seamless. Their support from visa assistance to finding the perfect hospital placement was exceptional. I'm now working in my dream role!"
  },
  {
    name: "Rosa Dela Cruz",
    role: "Registered Nurse",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    content: "As a Filipino nurse, I was nervous about working in the UK. Oyster Employment guided me through everything - from exam preparation to airport welcome. They truly care about their candidates' success. Highly recommended!"
  },
  {
    name: "Michael Chen",
    role: "Software Engineer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    content: "Professional service with genuine care for finding the right fit. They understood my career goals and matched me perfectly."
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600">Hear from professionals who found their dream jobs through Oyster Employment</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="bg-white rounded-2xl shadow-lg p-8 border-0">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-6">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
