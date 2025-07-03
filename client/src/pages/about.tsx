import React from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Star, Users, Globe } from "lucide-react";
import WorkTogetherSimple from "@/components/sections/work-together-simple";

const values = [
  {
    icon: Heart,
    title: "Honesty & Integrity",
    description: "Built on trust and transparency in every interaction with our clients and candidates.",
    color: "text-red-600",
    bgColor: "bg-red-50"
  },
  {
    icon: Users,
    title: "Diversity & Inclusion",
    description: "Our diverse, hard-working team is our main strength, bringing varied perspectives and expertise.",
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    icon: Star,
    title: "Long-term Relationships",
    description: "We believe in building productive, lasting partnerships with our respected clients and candidates.",
    color: "text-yellow-600",
    bgColor: "bg-yellow-50"
  },
  {
    icon: Globe,
    title: "Global Commitment",
    description: "Dedicated to making a positive contribution through quality employment services worldwide.",
    color: "text-green-600",
    bgColor: "bg-green-50"
  }
];

export default function About() {
  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <WorkTogetherSimple />

        {/* Our Story */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Story</h2>
                <div className="space-y-6 text-gray-600">
                  <p className="text-lg">
                    Not every business exists solely to make money - we exist to build a respected reputation through meaningful contribution. This business involves genuine care and personal experience, as we've been living in the United Kingdom for many years.
                  </p>
                  <p>
                    We're passionate about contributing 100% of our productive efforts to this country. This vision came from the heart during the peak of Covid-19, born from personal experiences and deep feelings about helping others navigate their career journeys.
                  </p>
                  <p>
                    Our commitment goes beyond simple placement - we're dedicated to creating opportunities that transform lives and build stronger communities through meaningful employment.
                  </p>
                </div>
              </div>
              <div className="mt-12 lg:mt-0">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Team collaboration and growth" 
                  className="rounded-2xl shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {/* Mission */}
              <Card className="bg-white border-0 shadow-lg h-full">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                  </div>
                  <p className="text-gray-600">
                    To be the most trusted and reliable employment solutions provider. We endeavor to match our clients' requirements with skilled and qualified candidates, providing consistently effective services that contribute to mutual growth.
                  </p>
                </CardContent>
              </Card>

              {/* Vision */}
              <Card className="bg-white border-0 shadow-lg h-full">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-4">
                      <Eye className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                  </div>
                  <p className="text-gray-600">
                    To become the most well-respected and reliable employment services partnership in every recruitment situation through our commitment to transparency, innovation, and consistently positive contribution to clients and candidates worldwide.
                  </p>
                </CardContent>
              </Card>

              {/* Values Preview */}
              <Card className="bg-primary text-white border-0 shadow-lg h-full">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">Our Values</h3>
                  </div>
                  <p className="text-blue-100">
                    Built on honesty, integrity, and trust. Diversity is our team's main strength. We believe in long-term, productive relationships with our respected clients and candidates.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Detailed Values */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => {
                const IconComponent = value.icon;
                return (
                  <Card key={value.title} className={`${value.bgColor} border-0`}>
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className={`h-6 w-6 ${value.color}`} />
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">{value.title}</h4>
                      <p className="text-sm text-gray-700">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why We're Unique */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <div className="mb-12 lg:mb-0">
                <img 
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Unique approach to recruitment" 
                  className="rounded-2xl shadow-xl w-full"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-8">Why We're Unique</h2>
                <div className="space-y-6 text-gray-600">
                  <p className="text-lg">
                    Our uniqueness lies in making life easier for both clients and candidates through our bespoke process. We're highly committed to placing the right person in the right role.
                  </p>
                  <p>
                    We're determined to arrange the most productive services for all types of recruitment - both UK-based and international. This dedication sets us apart in the employment services industry.
                  </p>
                  <p>
                    Our professional approach to caring for our clients and candidates ensures exceptional service delivery at every touchpoint.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why We're Different */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-8">Why We're Different</h2>
                <div className="space-y-6 text-gray-600">
                  <p className="text-lg">
                    We're proud to have many skilled, well-qualified, and experienced candidates registered on our portal across various fields - both locally and internationally.
                  </p>
                  <p>
                    These professionals are actively seeking roles that match their skills while providing growth potential. We're committed to fulfilling our clients' requirements with reliable, qualified, and experienced professionals who are eager to develop their careers.
                  </p>
                  <p>
                    Our extensive network and personalized approach ensure we can match the right talent with the right opportunity, creating successful partnerships that benefit everyone involved.
                  </p>
                </div>
              </div>
              <div className="mt-12 lg:mt-0">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Diverse team of professionals" 
                  className="rounded-2xl shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 gradient-bg text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Work Together?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join us in our mission to create meaningful employment opportunities that foster growth for everyone involved.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                  window.location.href = '/';
                }
              }}
              className="bg-accent text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-500 transition-all transform hover:scale-105"
            >
              Get in Touch
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}