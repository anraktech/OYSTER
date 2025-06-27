import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Nidhi Ghodele",
    role: "Web Developer & IT Assistant",
    nationality: "Indian",
    image: "https://oysteremployment.com/wp-content/uploads/2024/02/website.jpeg",
    content: "Excellent recruitment agency to land your dream job. I would absolutely recommend it. Plus they provide learning resources as well!"
  },
  {
    name: "Maria Santos",
    role: "Registered Nurse",
    nationality: "Filipino",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    content: "Coming from the Gulf country as a nurse, Oyster Employment made my UK journey seamless. Their support from visa assistance to finding the perfect hospital placement was exceptional. I'm now working in my dream role!"
  },
  {
    name: "Rosa Dela Cruz",
    role: "Registered Nurse",
    nationality: "Filipino",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    content: "As a Filipino nurse, I was nervous about working in the UK. Oyster Employment guided me through everything - from exam preparation to airport welcome. They truly care about their candidates' success. Highly recommended!"
  },
  {
    name: "Priya Sharma",
    role: "Software Developer",
    nationality: "Indian",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    content: "Being from India, I was worried about the visa process and finding a good IT role in the UK. Oyster Employment handled everything professionally and found me a perfect position that matches my skills and career goals."
  },
  {
    name: "Adebayo Johnson",
    role: "Civil Engineer",
    nationality: "Nigerian",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    content: "From Nigeria to the UK, Oyster Employment made my engineering career transition smooth and successful. Their team understood my aspirations and connected me with an excellent engineering firm. Truly grateful!"
  },
  {
    name: "Fatima Okafor",
    role: "Healthcare Assistant",
    nationality: "Nigerian",
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    content: "As a Nigerian healthcare professional, I found the UK job market challenging to navigate. Oyster Employment provided incredible support, from documentation to placement. I'm now happily working in a top healthcare facility."
  },
  {
    name: "Raj Patel",
    role: "Data Analyst",
    nationality: "Indian",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    content: "Coming from Mumbai, I was uncertain about relocating to the UK for work. Oyster Employment not only found me a great data analyst position but also helped with accommodation and settling in. Outstanding service!"
  },
  {
    name: "Michael Chen",
    role: "Software Engineer",
    nationality: "Malaysian",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    content: "Professional service with genuine care for finding the right fit. They understood my career goals and matched me perfectly with a tech company that values innovation."
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600">Hear from professionals worldwide who found their dream jobs through Oyster Employment</p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="bg-white rounded-2xl shadow-lg p-8 border-0 h-full">
                  <CardContent className="p-0 flex flex-col h-full">
                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6 flex-grow">"{testimonial.content}"</p>
                    <div className="flex items-center">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="ml-4">
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-gray-600 text-sm">{testimonial.role}</div>
                        <div className="text-primary text-xs font-medium">{testimonial.nationality}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        {/* Mobile navigation dots */}
        <div className="flex justify-center mt-8 md:hidden">
          <div className="flex space-x-2">
            {Array.from({ length: Math.ceil(testimonials.length / 1) }).map((_, index) => (
              <div key={index} className="w-2 h-2 bg-gray-300 rounded-full"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
