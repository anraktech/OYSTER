import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Globe, CheckCircle, BookOpen, Plane, Home, FileText, Award, Target } from "lucide-react";

const requirements = [
  {
    title: "OET (Occupational English Test)",
    description: "Specifically designed for healthcare professionals seeking UK employment",
    requirements: [
      "Grade B in Reading, Listening, and Speaking",
      "Grade C+ or higher in Writing",
      "Recognized by NMC (Nov 1, 2017) and GMC (Feb 6, 2018)"
    ],
    color: "bg-blue-50 border-blue-200"
  },
  {
    title: "IELTS (International English Language Testing System)",
    description: "Widely accepted English proficiency test for international healthcare professionals",
    requirements: [
      "Overall score of 7.0",
      "7.0 in Reading, Speaking, and Listening",
      "6.5 in Writing",
      "Academic or General Training accepted"
    ],
    color: "bg-green-50 border-green-200"
  }
];

const services = [
  {
    icon: BookOpen,
    title: "Complete Guidance",
    description: "Step-by-step support from application to employment placement"
  },
  {
    icon: Award,
    title: "Fee Reimbursement",
    description: "IELTS/OET exam fees and NMC registration (CBT & OSCE) reimbursement"
  },
  {
    icon: Plane,
    title: "Airport Welcome",
    description: "Personal meet and greet service at UK airports"
  },
  {
    icon: Home,
    title: "Accommodation Support",
    description: "Assistance in finding suitable accommodation upon arrival"
  }
];

export default function HealthSector() {
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
                <h1 className="text-5xl font-bold mb-6">Join Healthcare Sector Proudly</h1>
                <p className="text-xl text-blue-100 mb-8">
                  "Care" means "Comprehensive Harmonious Relation" - We provide quality employment solutions in the UK health sector through our dedicated local and international candidates.
                </p>
                <Button 
                  onClick={scrollToContact}
                  className="bg-accent text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-500 transition-all transform hover:scale-105"
                >
                  <Heart className="mr-2 h-5 w-5" />
                  Start Your Healthcare Journey
                </Button>
              </div>
              <div className="mt-12 lg:mt-0">
                <img 
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Healthcare professionals working together" 
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission in Healthcare */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <div className="mb-12 lg:mb-0">
                <img 
                  src="https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Healthcare worker providing compassionate care" 
                  className="rounded-2xl shadow-xl w-full"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Healthcare Mission</h2>
                <div className="space-y-6 text-gray-600">
                  <p className="text-lg">
                    Our healthcare mission involves deep emotional feelings from personal experiences during 2020. We're passionate about contributing 100% to the health sector with productive, positive support.
                  </p>
                  <p>
                    This project came from our hearts at the peak of Covid-19, involving personal experiences that drive our commitment to supporting healthcare professionals with passion and dedication.
                  </p>
                  <p>
                    We deliver effective employment solutions through passionate, hardworking, committed permanent and temporary frontline workers - both UK-based and international professionals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Current Opportunities */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Current Healthcare Opportunities</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                UK healthcare providers are in immediate need of qualified professionals. We can assist you in meeting requirements and finding employment solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <Card className="bg-white border-0 shadow-lg text-center p-6">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Nurses</h3>
                  <p className="text-gray-600">Registered and specialized nurses across all departments</p>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg text-center p-6">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Healthcare Assistants</h3>
                  <p className="text-gray-600">Support staff for various healthcare settings</p>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg text-center p-6">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Specialists</h3>
                  <p className="text-gray-600">Medical specialists and consultants</p>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg text-center p-6">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Care Workers</h3>
                  <p className="text-gray-600">Compassionate care professionals</p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-primary/10 p-8 rounded-2xl border-l-4 border-primary">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Are You Ready to Make a Difference?</h3>
              <p className="text-gray-700 mb-4">
                If you're motivated, compassionate, and have good English skills, we can unlock your potential through our partner providers who offer IELTS and OET courses to meet English language requirements.
              </p>
            </div>
          </div>
        </section>

        {/* Language Requirements */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Language Proficiency Requirements</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet the English language requirements for UK healthcare registration and employment.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {requirements.map((req, index) => (
                <Card key={index} className={`border-2 ${req.color}`}>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{req.title}</h3>
                    <p className="text-gray-600 mb-6">{req.description}</p>
                    <div className="space-y-3">
                      {req.requirements.map((requirement, reqIndex) => (
                        <div key={reqIndex} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{requirement}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                For the latest updates regarding NMC UK & GMC UK requirements, please check their official websites.
              </p>
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Provide</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive support services to ensure your successful transition to UK healthcare employment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card key={index} className="bg-white border-0 shadow-lg text-center p-6 h-full">
                    <CardContent className="p-0 flex flex-col h-full">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-4">{service.title}</h3>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Commitment to Healthcare</h2>
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
                    We're committed to providing qualified, experienced, and skilled candidates to meet your demands according to job role requirements. We're passionate about adding positive contribution to the healthcare sector through our honest and hardworking team.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-green-50 border-0 p-8">
                <CardContent className="p-0">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                      <Heart className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">To Candidates</h3>
                  </div>
                  <p className="text-gray-700">
                    Our promise is to create the right opportunities as soon as possible according to your qualifications, skills, and experience. We're committed to our company policy: 'right person for the right job.'
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 gradient-bg text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Healthcare Career in the UK?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of healthcare professionals who have successfully transitioned to meaningful careers in the UK through our comprehensive support system.
            </p>
            <Button 
              onClick={scrollToContact}
              className="bg-accent text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-500 transition-all transform hover:scale-105"
            >
              <FileText className="mr-2 h-5 w-5" />
              Apply Now
            </Button>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-12 bg-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Important Disclaimer</h3>
              <p className="text-gray-700">
                Oyster Worldwide Employment & Learning Services Ltd is an independent company that provides assistance to candidates with language course requirements and NMC registration support. We are not a Registration or Nursing Regulatory Body in the United Kingdom.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}