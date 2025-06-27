import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Coffee, Users, Target, CheckCircle, BookOpen, Plane, Home, FileText, Award, ChefHat, Hotel, Calendar } from "lucide-react";

const hospitalitySpecialties = [
  {
    icon: ChefHat,
    title: "Culinary Professionals",
    description: "Chefs, sous chefs, kitchen managers, and culinary specialists"
  },
  {
    icon: Hotel,
    title: "Hotel Management",
    description: "Hotel operations, guest services, and hospitality management"
  },
  {
    icon: Calendar,
    title: "Event Planning",
    description: "Event coordinators, wedding planners, and conference organizers"
  },
  {
    icon: Coffee,
    title: "Food & Beverage",
    description: "Restaurant management, catering, and beverage service professionals"
  }
];

const services = [
  {
    icon: BookOpen,
    title: "Complete Journey Support",
    description: "Step-by-step guidance for international candidates from start to finish"
  },
  {
    icon: Plane,
    title: "UK Airport Welcome",
    description: "Personal welcome service at UK airports for hospitality professionals"
  },
  {
    icon: Home,
    title: "Accommodation Assistance",
    description: "Professional support in securing suitable accommodation upon arrival"
  }
];

export default function Hospitality() {
  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="gradient-bg text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <h1 className="text-5xl font-bold mb-6">Creating Exceptional Hospitality Experiences</h1>
                <p className="text-xl text-blue-100 mb-8">
                  We recognize the vast potential within the hospitality industry. Many talented professionals find themselves in roles that underutilize their hospitality qualifications - we're here to change that.
                </p>
                <Button 
                  onClick={scrollToContact}
                  className="bg-accent text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-500 transition-all transform hover:scale-105"
                >
                  <Coffee className="mr-2 h-5 w-5" />
                  Start Your Hospitality Journey
                </Button>
              </div>
              <div className="mt-12 lg:mt-0">
                <img 
                  src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Elegant hotel reception desk with professional service" 
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Philosophy */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <div className="mb-12 lg:mb-0">
                <img 
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Professional hospitality service with elegant room service setup" 
                  className="rounded-2xl shadow-xl w-full"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-8">More Than Service - It's Experience</h2>
                <div className="space-y-6 text-gray-600">
                  <p className="text-lg">
                    Hospitality is more than just a service industry; it's an immersive experience where customer satisfaction, attention to detail, and genuine care converge to create memorable moments.
                  </p>
                  <p>
                    We believe that passion and proficiency in hospitality deserve the ideal platform for growth and impact. Not every professional realizes the true value of their skills and expertise in this dynamic sector.
                  </p>
                  <p>
                    Our commitment extends beyond simply filling positions - we're dedicated to connecting skilled hospitality professionals with tailored opportunities that match their expertise and ambitions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hospitality Specialties */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Hospitality Specialties We Excel In</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From culinary arts to event management, we connect talented hospitality professionals with establishments that value excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {hospitalitySpecialties.map((specialty, index) => {
                const IconComponent = specialty.icon;
                return (
                  <Card key={index} className="bg-white border-0 shadow-lg text-center p-6 h-full">
                    <CardContent className="p-0 flex flex-col h-full">
                      <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <IconComponent className="h-8 w-8 text-yellow-600" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-4">{specialty.title}</h3>
                      <p className="text-gray-600 flex-grow">{specialty.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Our Recruitment Standards */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Recruitment Standards</h2>
                <div className="space-y-6 text-gray-600">
                  <p className="text-lg">
                    Are you dissatisfied with slow service and recruitment agencies' inability to find quality hospitality candidates? This frustration is common when agencies don't grasp the critical aspects of recruiting hospitality team members.
                  </p>
                  <p>
                    Finding candidates with the right hospitality skills is challenging, but dealing with those who lack necessary skills and proper service attitude is even more difficult. We're here to fill these gaps.
                  </p>
                  <p>
                    We can address many of your recruitment challenges and locate qualified, skilled, and motivated hospitality professionals for your establishment.
                  </p>
                  <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary">
                    <p className="font-semibold text-primary">
                      "We are determined and confident in delivering what you need. Our commitment aligns with Oyster's policy of 'work together and grow together.'"
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-12 lg:mt-0">
                <img 
                  src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Hotel reception providing excellent customer service" 
                  className="rounded-2xl shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* What We Provide */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Provide</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive support services especially designed for international hospitality professionals seeking UK opportunities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card key={index} className="bg-white border-0 shadow-lg text-center p-8 h-full">
                    <CardContent className="p-0 flex flex-col h-full">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <IconComponent className="h-8 w-8 text-primary" />
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

        {/* Our Commitments */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Commitment to Hospitality Excellence</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-blue-50 border-0 p-8">
                <CardContent className="p-0">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">To Employers</h3>
                  </div>
                  <p className="text-gray-700">
                    We're devoted to finding adept hospitality professionals who precisely fit your establishment's needs. Passionate about fostering growth for both employers and candidates, our team strives for meaningful impact and lasting success in the hospitality sector.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-green-50 border-0 p-8">
                <CardContent className="p-0">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">To Candidates</h3>
                  </div>
                  <p className="text-gray-700">
                    We're committed to matching candidates with roles that align with their potential and meet job criteria. Our dedication stems from a passion for fostering growth for both employers and candidates together in the dynamic hospitality industry.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Enhance Your Hospitality Career?</h2>
            <p className="text-lg text-gray-600 mb-8">
              If your organization seeks consistency in quality, efficiency, and productivity in hospitality employment solutions, we'd be delighted to discuss how we can serve as your reliable and trusted partner.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="bg-white border-0 shadow-lg p-6">
                <CardContent className="p-0 text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                  <p className="text-gray-600">01695363923</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-0 shadow-lg p-6">
                <CardContent className="p-0 text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-600">info@oysteremployment.com</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 gradient-bg text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Let's Work Together to Create Excellence</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join the hospitality professionals who have found their perfect roles through our specialized recruitment services and comprehensive support system.
            </p>
            <Button 
              onClick={scrollToContact}
              className="bg-accent text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-500 transition-all transform hover:scale-105"
            >
              <Award className="mr-2 h-5 w-5" />
              Begin Your Hospitality Journey
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}