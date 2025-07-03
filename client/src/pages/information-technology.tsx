import React from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Laptop, Users, Target, CheckCircle, BookOpen, Plane, Home, FileText, Award, Code, Database, Shield, Smartphone } from "lucide-react";

const itSpecialties = [
  {
    icon: Code,
    title: "Software Development",
    description: "Full-stack developers, frontend/backend specialists, and software architects"
  },
  {
    icon: Database,
    title: "Data & Analytics",
    description: "Data scientists, database administrators, and business intelligence experts"
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Security analysts, ethical hackers, and information security specialists"
  },
  {
    icon: Smartphone,
    title: "Mobile & Cloud",
    description: "Mobile app developers, cloud architects, and DevOps engineers"
  }
];

const services = [
  {
    icon: BookOpen,
    title: "Complete Technical Guidance",
    description: "Step-by-step support for overseas IT candidates from application to employment"
  },
  {
    icon: Plane,
    title: "UK Airport Welcome",
    description: "Personal welcome service at UK airports for international IT professionals"
  },
  {
    icon: Home,
    title: "Accommodation Support",
    description: "Professional assistance in finding suitable accommodation upon arrival"
  }
];

export default function InformationTechnology() {
  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToContact = () => {
    window.location.href = '/contact';
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
                <h1 className="text-5xl font-bold mb-6">Unleashing IT Innovation Potential</h1>
                <p className="text-xl text-blue-100 mb-8">
                  We recognize the unmatched potential within the Information Technology sector. Not every professional comprehends the true value of their education and expertise - we're here to unlock that potential.
                </p>
                <Button 
                  onClick={scrollToContact}
                  className="bg-accent text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-500 transition-all transform hover:scale-105"
                >
                  <Laptop className="mr-2 h-5 w-5" />
                  Advance Your IT Career
                </Button>
              </div>
              <div className="mt-12 lg:mt-0">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="IT professionals collaborating on innovative technology solutions" 
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Vision */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <div className="mb-12 lg:mb-0">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Modern software development team working on cutting-edge technology" 
                  className="rounded-2xl shadow-xl w-full"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-8">Beyond Codes and Algorithms</h2>
                <div className="space-y-6 text-gray-600">
                  <p className="text-lg">
                    The IT industry is more than just a realm of codes and algorithms; it's a dynamic landscape where innovation, creativity, and problem-solving converge to shape the future of technology and business.
                  </p>
                  <p>
                    Some talented individuals find themselves in roles that don't fully utilize their IT qualifications. We believe that passion and proficiency in the IT domain deserve the perfect platform for growth and impact.
                  </p>
                  <p>
                    Our commitment extends beyond simply filling positions - we're dedicated to connecting skilled IT professionals with opportunities that match their technical expertise and career aspirations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* IT Specialties */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">IT Specialties We Excel In</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From software development to cybersecurity, we connect talented IT professionals with organizations that value technological innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {itSpecialties.map((specialty, index) => {
                const IconComponent = specialty.icon;
                return (
                  <Card key={index} className="bg-white border-0 shadow-lg text-center p-6 h-full">
                    <CardContent className="p-0 flex flex-col h-full">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <IconComponent className="h-8 w-8 text-green-600" />
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
                    Are you dissatisfied with slow service and recruitment agencies' inability to find quality IT candidates? This frustration is common when agencies don't understand the critical aspects of recruiting technical team members.
                  </p>
                  <p>
                    Finding candidates with the right technical skills is challenging, but dealing with those who lack necessary skills and proper professional attitude is even more difficult. We're here to fill these gaps.
                  </p>
                  <p>
                    We can resolve many of your recruitment challenges and locate qualified, skilled, and motivated IT professionals for your organization.
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
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="IT team analyzing data and developing innovative solutions" 
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
                Comprehensive support services for IT professionals seeking employment opportunities in the UK technology sector.
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Commitment to IT Excellence</h2>
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
                    We are committed to delivering qualified and experienced IT candidates who meet the specific demands of employers. Our passion lies in making a meaningful impact on the growth of both employers and candidates through our dedicated and hardworking team.
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
                    Our duty involves aligning candidates with roles that match their potential and adhere to job requirements. This commitment stems from our passion to contribute significantly to the growth of both employers and candidates in the dynamic IT sector.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Innovation Focus */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-8">Driving Innovation Forward</h2>
                <div className="space-y-6 text-gray-600">
                  <p className="text-lg">
                    In today's rapidly evolving technological landscape, we understand that IT professionals need more than just technical skills - they need the right platform to innovate, grow, and make meaningful contributions.
                  </p>
                  <p>
                    Whether you're a seasoned software architect or an emerging cybersecurity specialist, we connect you with organizations that value innovation, continuous learning, and technological advancement.
                  </p>
                  <p>
                    Our extensive network includes startups, established tech companies, and organizations undergoing digital transformation - all seeking talented IT professionals who can drive their technology initiatives forward.
                  </p>
                </div>
              </div>
              <div className="mt-12 lg:mt-0">
                <img 
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Innovative technology workspace with modern development tools" 
                  className="rounded-2xl shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 gradient-bg text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Code Your Future Success?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join the IT professionals who have found their ideal roles in innovative companies through our specialized technology recruitment services and comprehensive support system.
            </p>
            <Button 
              onClick={scrollToContact}
              className="bg-accent text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-500 transition-all transform hover:scale-105"
            >
              <Award className="mr-2 h-5 w-5" />
              Launch Your IT Career
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}