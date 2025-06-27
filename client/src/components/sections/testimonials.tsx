import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Mario",
    role: "Nurse",
    nationality: "Filipino",
    image: "",
    content: "Coming from the Gulf country as a nurse, Oyster Employment made my UK journey seamless. Their support from visa assistance to finding the perfect hospital placement was exceptional. I'm now working in my dream role!"
  },
  {
    name: "Adebayo",
    role: "Civil Engineer",
    nationality: "Nigerian",
    image: "",
    content: "From Nigeria to the UK, Oyster Employment made my engineering career transition smooth and successful. Their team understood my aspirations and connected me with an excellent engineering firm. Truly grateful!"
  },
  {
    name: "Zoya",
    role: "Midwife",
    nationality: "Pakistani",
    image: "",
    content: "Coming from Pakistan as a midwife, I was excited but nervous about working in the UK healthcare system. Oyster Employment made the transition seamless, helping with registration and finding the perfect maternity unit. Their support was invaluable throughout my journey."
  },
  {
    name: "Nidhi",
    role: "Web Developer & IT Assistant",
    nationality: "Indian",
    image: "",
    content: "Excellent recruitment agency to land your dream job. I would absolutely recommend it. Plus they provide learning resources as well!"
  },
  {
    name: "Rosa",
    role: "Nurse",
    nationality: "Filipina",
    image: "",
    content: "As a Filipina nurse, I was nervous about working in the UK. Oyster Employment guided me through everything - from exam preparation to airport welcome. They truly care about their candidates' success. Highly recommended!"
  },
  {
    name: "Raj",
    role: "Chef",
    nationality: "Indian",
    image: "",
    content: "Coming from Mumbai, I was uncertain about relocating to the UK for work. Oyster Employment not only found me a great chef position but also helped with accommodation and settling in. Outstanding service!"
  },
  {
    name: "Saba",
    role: "Healthcare Assistant",
    nationality: "Pakistani",
    image: "",
    content: "As a health carer, I found the UK job market challenging to navigate. Oyster Employment provided incredible support, from documentation to placement. I'm now happily working in a top healthcare facility."
  },
  {
    name: "Michael",
    role: "Data Analyst",
    nationality: "Indian",
    image: "",
    content: "Professional service with genuine care for finding the right fit. They understood my career goals and matched me perfectly with a tech company that values innovation."
  },
  {
    name: "Priya",
    role: "Nurse",
    nationality: "Indian",
    image: "",
    content: "Being from India, I was worried about the visa process and finding a good nursing role in the UK. Oyster Employment handled everything professionally and found me a perfect position that matches my skills and career goals."
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
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-gray-600 text-sm">{testimonial.role}</div>
                      <div className="text-primary text-xs font-medium">{testimonial.nationality}</div>
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
