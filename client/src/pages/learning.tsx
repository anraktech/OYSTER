import React from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Star, Users, Target, BookOpen, Award, Globe, GraduationCap } from "lucide-react";

export default function Learning() {
  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse-slow"></div>
            <div className="absolute top-32 right-20 w-24 h-24 bg-gradient-to-r from-accent/20 to-orange-400/20 rounded-full blur-lg animate-float-delayed"></div>
            <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-md animate-float"></div>
            <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-r from-pink-400/20 to-red-400/20 rounded-full blur-lg animate-pulse-delayed"></div>
            
            {/* Floating geometric shapes */}
            <div className="absolute top-1/4 left-1/2 w-6 h-6 bg-white/20 rotate-45 animate-spin-slow"></div>
            <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-accent/30 rounded-full animate-float-slow"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Language Learning
              </span>
              <br />
              <span className="bg-gradient-to-r from-accent to-orange-400 bg-clip-text text-transparent">
                Excellence
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Master IELTS and OET with expert guidance. Unlock your global career opportunities through specialized English language training.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/#contact" 
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition-colors shadow-lg"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Start Your Journey
              </a>
              <a 
                href="#programs" 
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
              >
                Explore Programs
              </a>
            </div>
          </div>
        </section>

        {/* Why It's Important Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Language Proficiency is Essential</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                For healthcare professionals and students aiming to study, work, or register abroad—language proficiency is not optional, it's mandatory.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                      <Globe className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">IELTS Requirements</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    A high score (typically 7.0+) is essential for academic or professional pathways, including higher education or immigration processes in English-speaking countries.
                  </p>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm text-gray-600 font-medium">
                      Failure to achieve these standards may delay registration, block immigration, or limit access to better job and study opportunities.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mr-4">
                      <Award className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">OET Requirements</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Grade B is required by regulatory bodies like NMC (Nursing and Midwifery Council) and GMC (General Medical Council) in the UK for nurses and doctors.
                  </p>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm text-gray-600 font-medium">
                      Equivalent to IELTS 7 or CEFR C1 level and directly linked to safety and communication standards in healthcare.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Program Value Section */}
        <section id="programs" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-400 rounded-full mb-6">
                <Star className="h-8 w-8 text-yellow-600" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Value of Our Programme</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These courses offer exceptional, targeted training with multiple benefits designed for your success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Tailored Learning Paths",
                  description: "Based on pre-assessments to match your specific needs",
                  icon: Target
                },
                {
                  title: "Full Module Coverage",
                  description: "Complete coverage of all test modules including medical English for OET",
                  icon: BookOpen
                },
                {
                  title: "Personalised Feedback",
                  description: "Individual performance analysis and improvement recommendations",
                  icon: Users
                },
                {
                  title: "Expert Trainers",
                  description: "Access to actual or former examiners with proven expertise",
                  icon: Award
                },
                {
                  title: "Flexible Learning",
                  description: "Combination of self-study, mentoring, and live coaching",
                  icon: GraduationCap
                },
                {
                  title: "Higher Success Rates",
                  description: "Proven track record of students achieving required scores",
                  icon: CheckCircle
                }
              ].map((benefit, index) => (
                <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Programme Impact</h3>
                <p className="text-gray-700 mb-6">
                  This value translates into higher success rates, greater confidence, and faster progression toward your academic or professional goals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-400 rounded-full mb-6">
                <Globe className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Transformative Impact</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The impact of completing a structured IELTS or OET preparation course is profound and life-changing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <Target className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Higher Test Scores</h3>
                    <p className="text-gray-700">Most candidates reach the required level within fewer attempts, saving time and money.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Career Advancement</h3>
                    <p className="text-gray-700">Helps doctors and nurses secure positions abroad, especially in the UK healthcare system.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <Award className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Licensing Success</h3>
                    <p className="text-gray-700">Supports NMC/GMC registration, PLAB/CBT/OSCE preparation with confidence.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Improved Language Proficiency</h3>
                <p className="text-gray-700 mb-6">
                  Boosts confidence and fluency in real medical or academic environments, preparing you for real-world success.
                </p>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <p className="text-primary font-bold text-lg mb-2">Investment in Your Future</p>
                  <p className="text-gray-600">
                    This is an investment in your future that unlocks global opportunities and opens doors to international career success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* Course Structure Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Course Structure</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our expertly designed curriculum covers all aspects of IELTS and OET preparation with structured learning modules.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* IELTS Course */}
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 shadow-xl">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Globe className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">IELTS Preparation</h3>
                    <p className="text-blue-600 font-medium">International English Language Testing System</p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-4">Core Modules</h4>
                      <div className="space-y-3">
                        {[
                          "Listening Skills Development",
                          "Reading Comprehension Strategies",
                          "Writing Task 1 & 2 Mastery",
                          "Speaking Confidence Building",
                          "Grammar & Vocabulary Enhancement",
                          "Test-Taking Strategies & Time Management"
                        ].map((module, index) => (
                          <div key={index} className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{module}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h4 className="font-bold text-gray-900 mb-3">Course Features</h4>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li>• 40+ hours of structured learning</li>
                        <li>• Practice tests with detailed feedback</li>
                        <li>• Individual speaking sessions</li>
                        <li>• Weekly progress assessments</li>
                        <li>• Study materials and resources included</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* OET Course */}
              <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 shadow-xl">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">OET Preparation</h3>
                    <p className="text-green-600 font-medium">Occupational English Test for Healthcare</p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-4">Specialized Modules</h4>
                      <div className="space-y-3">
                        {[
                          "Medical Terminology & Vocabulary",
                          "Healthcare Communication Skills",
                          "Patient Interaction Scenarios",
                          "Medical Writing & Documentation",
                          "Listening in Clinical Context",
                          "Speaking for Healthcare Professionals"
                        ].map((module, index) => (
                          <div key={index} className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{module}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h4 className="font-bold text-gray-900 mb-3">Course Features</h4>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li>• Healthcare-focused content delivery</li>
                        <li>• Role-play exercises with medical scenarios</li>
                        <li>• Grade B achievement guarantee program</li>
                        <li>• NMC/GMC registration support</li>
                        <li>• Continuous assessment and feedback</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Learning Methodology Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Learning Methodology</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A comprehensive approach combining traditional learning with modern interactive techniques.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Assessment",
                  description: "Initial evaluation to determine your current proficiency level and learning needs",
                  icon: Target,
                  color: "blue"
                },
                {
                  step: "02", 
                  title: "Personalized Plan",
                  description: "Customized study plan tailored to your goals and timeline requirements",
                  icon: BookOpen,
                  color: "green"
                },
                {
                  step: "03",
                  title: "Interactive Learning",
                  description: "Engaging lessons with multimedia content, practice exercises, and real scenarios",
                  icon: Users,
                  color: "purple"
                },
                {
                  step: "04",
                  title: "Continuous Support",
                  description: "Regular feedback, progress tracking, and expert guidance throughout your journey",
                  icon: Award,
                  color: "orange"
                }
              ].map((method, index) => (
                <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all text-center">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 bg-${method.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <method.icon className={`h-8 w-8 text-${method.color}-600`} />
                    </div>
                    <div className={`text-3xl font-bold text-${method.color}-600 mb-2`}>{method.step}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{method.title}</h3>
                    <p className="text-gray-600 text-sm">{method.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Course Schedule & Pricing */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Course Options & Schedule</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Flexible learning options designed to fit your schedule and learning preferences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Intensive Course */}
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 shadow-xl">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Intensive Course</h3>
                  <p className="text-gray-600 mb-6">Fast-track preparation for quick results</p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-medium">4-6 weeks</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Classes:</span>
                      <span className="font-medium">5 days/week</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Hours:</span>
                      <span className="font-medium">3 hours/day</span>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <p className="text-sm text-gray-600 mb-4">Perfect for urgent requirements</p>
                    <a 
                      href="/contact" 
                      className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors"
                    >
                      Enquire Now
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Regular Course */}
              <Card className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 shadow-xl transform scale-105">
                <CardContent className="p-8 text-center">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold">POPULAR</span>
                  </div>
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <BookOpen className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Regular Course</h3>
                  <p className="text-gray-600 mb-6">Comprehensive preparation with flexibility</p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-medium">8-12 weeks</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Classes:</span>
                      <span className="font-medium">3 days/week</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Hours:</span>
                      <span className="font-medium">2 hours/day</span>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <p className="text-sm text-gray-600 mb-4">Most comprehensive option</p>
                    <a 
                      href="/contact" 
                      className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-colors"
                    >
                      Enquire Now
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Weekend Course */}
              <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200 shadow-xl">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Weekend Course</h3>
                  <p className="text-gray-600 mb-6">Perfect for working professionals</p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-medium">12-16 weeks</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Classes:</span>
                      <span className="font-medium">Weekends only</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Hours:</span>
                      <span className="font-medium">4 hours/day</span>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <p className="text-sm text-gray-600 mb-4">Flexible for busy schedules</p>
                    <a 
                      href="/contact" 
                      className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 transition-colors"
                    >
                      Enquire Now
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Competitive Pricing</h3>
                <p className="text-gray-700 mb-6">
                  Our fees are very competitive when matched with the international market price for the same level of courses. 
                  The fees are calculated based on the assessments made upon candidate's registration and vary according to learning requirements.
                </p>
                <a 
                  href="/contact" 
                  className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-colors shadow-lg"
                >
                  <BookOpen className="mr-2 h-5 w-5" />
                  Get Custom Quote
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Oyster WALS Section */}
        <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Why Choose Oyster WELS?</h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">Oyster Worldwide Employment & Learning Services (WELS) stands out for exceptional results and comprehensive support.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Medical Education Partners",
                  description: "Experienced and medically focused educational partners, especially in OET preparation",
                  icon: Award
                },
                {
                  title: "Customised Course Structure",
                  description: "Tailored specifically for doctors and nurses with healthcare-focused content",
                  icon: Target
                },
                {
                  title: "Practical Learning",
                  description: "Real-world learning through scenarios, role plays, and video coaching",
                  icon: Users
                },
                {
                  title: "Progress Testing",
                  description: "Regular progress testing to ensure continuous improvement and readiness",
                  icon: CheckCircle
                },
                {
                  title: "Expert Access",
                  description: "Direct access to IELTS and OET experts, including former examiners",
                  icon: GraduationCap
                },
                {
                  title: "End-to-End Support",
                  description: "Supportive admin and mentoring team for complete guidance throughout your journey",
                  icon: BookOpen
                }
              ].map((feature, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-blue-100">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">Your Trusted Partner</h3>
                <p className="text-blue-100 mb-8">
                  Partnering with Oyster WALS means joining a trusted, results-driven pathway for success in English proficiency exams.
                </p>
                <a 
                  href="/contact" 
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition-colors shadow-lg"
                >
                  <BookOpen className="mr-2 h-5 w-5" />
                  Get Started Today
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Begin Your Learning Journey?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Take the first step towards achieving your English proficiency goals. Contact us today to learn more about our IELTS and OET preparation programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-colors shadow-lg"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Contact Us Today
              </a>
              <a 
                href="/health-sector#oet" 
                className="inline-flex items-center px-8 py-4 bg-white text-primary border-2 border-primary font-semibold rounded-full hover:bg-primary/5 transition-colors"
              >
                Learn More About OET
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}