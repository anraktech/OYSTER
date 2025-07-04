import React, { useState } from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Globe, CheckCircle, BookOpen, Plane, Home, FileText, Award, Target, ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const requirements = [
  {
    title: "OET (Occupational English Test)",
    description: "English language proficiency exam designed specifically for medical professionals seeking UK opportunities",
    fullDescription: "The OET is now officially recognized by the Nursing and Midwifery Council (NMC) as of November 1, 2017, and by the General Medical Council (GMC) as of February 6, 2018. This exam is tailored for healthcare professionals and reflects real workplace scenarios.",
    requirements: [
      "Grade B in Reading, Listening, and Speaking",
      "Grade C+ or higher in Writing",
      "Officially recognized by NMC and GMC",
      "Designed specifically for healthcare contexts"
    ],
    color: "bg-blue-50 border-blue-200",
    icon: "📋"
  },
  {
    title: "IELTS (International English Language Testing System)",
    description: "One of the world's most widely used English language exams for higher education and international migration",
    fullDescription: "IELTS Academic or General Training is the suggested exam for healthcare professionals wanting to relocate to the UK and work for UK-based healthcare providers like the NHS. Scores range from 1-9 for each section, with your total band score determined by the average.",
    requirements: [
      "Overall score of 7.0",
      "7.0 in Reading, Speaking, and Listening",
      "6.5 in Writing",
      "Full or half band scores available (e.g., 5.0, 5.5, 6.0, 6.5)"
    ],
    color: "bg-green-50 border-green-200",
    icon: "🌍"
  }
];

const faqData = [
  {
    question: "Do I need to be from an English-speaking country to work in UK healthcare?",
    answer: "Not necessarily. For enrollment in UK Healthcare programs, you must either be from an English-speaking nation OR pass an approved English language exam like OET or IELTS. The language exam score requirements vary slightly based on the specific position you're seeking."
  },
  {
    question: "What's the difference between OET and IELTS for healthcare professionals?",
    answer: "OET is specifically designed for medical professionals and uses healthcare-related scenarios and vocabulary. IELTS is a general English proficiency test used worldwide. Both are accepted by UK healthcare regulatory bodies, so you can choose the one that best suits your preparation style."
  },
  {
    question: "When were OET scores officially recognized in the UK?",
    answer: "The Nursing and Midwifery Council (NMC) officially recognized OET on November 1, 2017, and the General Medical Council (GMC) recognized it on February 6, 2018. This recognition applies to nurses and doctors educated and trained worldwide."
  },
  {
    question: "Can I choose between IELTS Academic and General Training?",
    answer: "Yes, both IELTS Academic and General Training are accepted for UK healthcare employment. However, IELTS Academic is often preferred as it's specifically designed for academic and professional contexts."
  },
  {
    question: "What if I don't meet the exact score requirements?",
    answer: "Language requirements are set by regulatory bodies and employers for patient safety. If you don't meet the requirements initially, we can guide you to IELTS and OET preparation courses through our partner providers to help you achieve the necessary scores."
  },
  {
    question: "How long are my OET/IELTS scores valid?",
    answer: "Both OET and IELTS scores are typically valid for 2 years from the test date. However, some employers or regulatory bodies may have specific validity requirements, so it's best to check with the relevant authority."
  },
  {
    question: "Do you provide reimbursement for exam fees?",
    answer: "We could offer reimbursement for IELTS/OET exam fees and NMC registration fees (including CBT & OSCE) after placement for qualifying candidates. This is part of our comprehensive support package for healthcare professionals."
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
    description: "IELTS/OET exam fees and NMC registration (CBT & OSCE) reimbursement after placement"
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

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg">
      <button
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-gray-900">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function HealthSector() {
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
                <h1 className="text-5xl font-bold mb-6">Join Health Sector Proudly</h1>
                <p className="text-xl text-blue-100 mb-8">"Care" means "Comprehensive Harmonious Relation" - We provide quality employment solutions in the UK health sector through our dedicated local and international professionals.</p>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Current Opportunities in Health Sector</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                UK healthcare providers are in immediate need of qualified professionals. We can assist you in meeting requirements and finding employment solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <Card className="bg-white border-0 shadow-lg text-center p-6">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Nurses and Midwives</h3>
                  <p className="text-gray-600">Registered and specialised nurses and midwives across all departments</p>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg text-center p-6">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Health Carers</h3>
                  <p className="text-gray-600">Support staff for various healthcare settings</p>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg text-center p-6">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Specialists</h3>
                  <p className="text-gray-600">Any Medical Professionals</p>
                </CardContent>
              </Card>

              
            </div>

            <div className="bg-primary/10 p-8 rounded-2xl border-l-4 border-primary">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Are You Ready to Make a Difference?</h3>
              <p className="text-gray-700 mb-4">If you're motivated, compassionate, and have good English skills, we can unlock your potential through our partners, who offering IELTS and OET courses to meet English language requirements.</p>
            </div>
          </div>
        </section>

        {/* OET Preparation */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Occupational English Test (OET)</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Specialised English language preparation for healthcare professionals seeking UK registration.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">OET for Doctors & Nurses</h3>
                  <p className="text-gray-700 mb-6">
                    Doctors and Nurses preparing for the OET study medical language at higher level. This course involves learning a wide range of medical terms and vocabulary, improving grammatical accuracy, and improving specific functional language skills, such as the ability to reassure, explain, show sensitivity and manage distress.
                  </p>
                  <p className="text-gray-700 mb-6">
                    Preparing for the OET strengthens the language skills needed by those Doctors required to take a PLAB for GMC or Nurses preparing CBT and OSCE test for NMC Registration.
                  </p>
                  
                  <div className="bg-blue-50 p-6 rounded-lg mb-6">
                    <h4 className="font-bold text-gray-900 mb-3">How difficult is Grade B?</h4>
                    <p className="text-gray-700 text-sm">
                      Grade B is the most commonly required Grade by regulatory bodies such as NMC and GMC in the UK. This is advanced level, equivalent to C1 in the Common European Framework or 7 in the Academic IELTS test. It is attainable but requires training on language skills and test techniques. Achieving Grade B strongly suggests that a medical/nursing professional has the right language skills to function safely and effectively in an English-speaking environment.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">The OET Preparation through Oyster WALS</h3>
                  <p className="text-gray-700 mb-6">In collaboration with UK based medical educational partner, Our partners have designed an OET preparation programme for Doctors and Nurses. Before commencement of the course, an OET candidate's level of English is assessed to determine the right course based on their learning requirement.</p>
                  <p className="text-gray-700 mb-6">
                    A strong language foundation is built by providing continuous, expert tutorials; regular progress tests; and thorough preparation for the test.
                  </p>

                  <div className="space-y-4">
                    <h4 className="font-bold text-gray-900">Medical English Course Structure</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {[
                        "Comprehensive medical terminology",
                        "Multiple practical scenarios – animated videos, dialogues, role plays",
                        "Extensive vocabulary practice",
                        "Functional language – reassuring, explaining, instructing, etc",
                        "Pronunciation and intonation practice",
                        "Grammar and writing skills practice"
                      ].map((item, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h4 className="font-bold text-gray-900 mb-4">Fees and Charges</h4>
                <p className="text-gray-700">
                  Fees and charges are very competitive when matched with the international market price for the same level of courses. The fees are calculated based on the assessments made upon candidate's registration and vary accordingly learning requirements.
                </p>
              </div>

              <div className="bg-yellow-50 rounded-2xl border-2 border-yellow-200 p-8">
                <h4 className="font-bold text-gray-900 mb-4">Disclaimer</h4>
                <p className="text-gray-700 text-sm">
                  Oyster Worldwide Employment & Learning Services is an independent company, provide help and assistance to all candidates with language courses requirement and others who require assistance registering with NMC, UK. We are not affiliated with any Registration or Nursing Regularity Body in the United Kingdom.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <a 
                href="/learning" 
                className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Start Learning
              </a>
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
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-3">{req.icon}</span>
                      <h3 className="text-2xl font-bold text-gray-900">{req.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{req.description}</p>
                    <p className="text-gray-700 mb-6 text-sm">{req.fullDescription}</p>
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

            <div className="mt-8 p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded-lg">
              <div className="flex items-start">
                <HelpCircle className="h-6 w-6 text-yellow-600 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Important Note</h4>
                  <p className="text-gray-700 mb-3">Language exam score requirements may vary slightly based on the specific position you're seeking. For the latest updates regarding NMC UK & GMC UK requirements, please check their official websites or contact us for personalised guidance.</p>
                  <p className="text-gray-700">
                    Please click for any upcoming updates in regards with{' '}
                    <a 
                      href="https://www.nmc.org.uk/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline font-medium"
                    >
                      NMC
                    </a>
                    {' '}&{' '}
                    <a 
                      href="https://www.gmc-uk.org/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline font-medium"
                    >
                      GMC
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">
                Common questions about English language requirements for UK healthcare professionals
              </p>
            </div>

            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>

            <div className="mt-12 text-center">
              <Card className="bg-primary/10 border-primary/20">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
                  <p className="text-gray-700 mb-6">
                    Our experienced team is here to provide personalized guidance for your specific situation.
                  </p>
                  <Button 
                    onClick={scrollToContact}
                    className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Contact Our Experts
                  </Button>
                </CardContent>
              </Card>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Commitment to Health Sector</h2>
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
            <h2 className="text-4xl font-bold mb-6">Are You Ready to Start Your Career in Health Sector?</h2>
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