import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Star, Users, Target, BookOpen, Award, Globe, GraduationCap } from "lucide-react";

export default function Learning() {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Language Learning Excellence
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

        {/* Why Oyster WALS Section */}
        <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Why Choose Oyster WALS?</h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Oyster Worldwide Employment & Learning Services (WALS) stands out for exceptional results and comprehensive support.
              </p>
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
                  href="/#contact" 
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
                href="/#contact" 
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