import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cog, Users, Target, CheckCircle, BookOpen, Plane, Home, FileText, Award, Wrench, Building, Zap } from "lucide-react";

const engineeringSpecialties = [
  {
    icon: Building,
    title: "Civil Engineering",
    description: "Infrastructure, construction, and structural engineering professionals"
  },
  {
    icon: Cog,
    title: "Mechanical Engineering",
    description: "Design, manufacturing, and systems engineering specialists"
  },
  {
    icon: Zap,
    title: "Electrical Engineering",
    description: "Power systems, electronics, and automation engineers"
  },
  {
    icon: Wrench,
    title: "Software Engineering",
    description: "Development, systems architecture, and technical solutions"
  }
];

const services = [
  {
    icon: BookOpen,
    title: "Complete Career Guidance",
    description: "Step-by-step support from application to employment placement for overseas candidates"
  },
  {
    icon: Plane,
    title: "UK Airport Welcome",
    description: "Personal meet and greet service at UK airports for international engineers"
  },
  {
    icon: Home,
    title: "Accommodation Assistance",
    description: "Professional support in finding suitable accommodation upon arrival"
  }
];

export default function Engineering() {
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
                <h1 className="text-5xl font-bold mb-6">Engineering Excellence Awaits</h1>
                <p className="text-xl text-blue-100 mb-8">
                  Not everyone understands the true value of their engineering education. We're passionate about connecting skilled engineers with opportunities that match their expertise and ambitions.
                </p>
                <Button 
                  onClick={scrollToContact}
                  className="bg-accent text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-500 transition-all transform hover:scale-105"
                >
                  <Cog className="mr-2 h-5 w-5" />
                  Advance Your Engineering Career
                </Button>
              </div>
              <div className="mt-12 lg:mt-0">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Engineers collaborating on innovative projects" 
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <div className="mb-12 lg:mb-0">
                <img 
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Modern engineering workspace with advanced technology and collaboration" 
                  className="rounded-2xl shadow-xl w-full"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-8">Recognizing Engineering Value</h2>
                <div className="space-y-6 text-gray-600">
                  <p className="text-lg">
                    Some qualified engineers find themselves working as technical assistants, not realizing their full potential. We understand that companies highly value well-qualified and skilled engineers in their respective sectors.
                  </p>
                  <p>
                    Just as we support skilled professionals across all fields, we're especially passionate about engineers. We're extremely keen to support engineers looking for employment opportunities that match their qualifications and career aspirations.
                  </p>
                  <p>
                    We believe that every engineer deserves to work in a role that utilizes their full potential and contributes meaningfully to innovation and progress.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Engineering Specialties */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Engineering Specialties We Support</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From traditional engineering disciplines to cutting-edge technology fields, we connect talented engineers with their ideal roles.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {engineeringSpecialties.map((specialty, index) => {
                const IconComponent = specialty.icon;
                return (
                  <Card key={index} className="bg-white border-0 shadow-lg text-center p-6 h-full">
                    <CardContent className="p-0 flex flex-col h-full">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <IconComponent className="h-8 w-8 text-blue-600" />
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
                    Many recruitment agencies struggle with slow service and finding quality engineering candidates. This frustration is common when agencies don't understand the critical aspects of recruiting technical team members.
                  </p>
                  <p>
                    Finding candidates with the right technical skills is challenging, but dealing with those who lack necessary skills and proper attitude is even more difficult. We're here to bridge that gap.
                  </p>
                  <p>
                    We can resolve many of your recruitment challenges and locate qualified, skilled, and motivated engineering professionals for your organization.
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
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Engineering team reviewing technical blueprints" 
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
                Comprehensive support services for engineering professionals transitioning to UK employment opportunities.
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Commitment to Engineering Excellence</h2>
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
                    We pledge to deliver diverse skilled engineering candidates who match the specific needs of each role, ensuring the perfect fit for every position. We believe that placing the right individual in the right position benefits both employers and enhances career satisfaction for candidates.
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
                    Our foremost commitment is to understand your individual skills, ambitions, and potential. We guarantee to connect you with opportunities that resonate with your abilities, paving the way for a rewarding career where you can fully unleash your engineering talents.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 gradient-bg text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Engineer Your Future?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join countless engineering professionals who have found their ideal roles through our specialized recruitment services and comprehensive support system.
            </p>
            <Button 
              onClick={scrollToContact}
              className="bg-accent text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-500 transition-all transform hover:scale-105"
            >
              <FileText className="mr-2 h-5 w-5" />
              Launch Your Engineering Career
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}