import { Check, Users, Target, Globe, Heart } from "lucide-react";

const features = [
  {
    title: "End-to-End Support",
    description: "Complete guidance from application to employment, including UK airport welcome and accommodation assistance."
  },
  {
    title: "Right Person, Right Job",
    description: "Our commitment to matching qualified candidates with suitable positions ensures long-term success."
  },
  {
    title: "Transparent Process",
    description: "Clear communication and honest approach throughout the recruitment journey."
  },
  {
    title: "Global Reach",
    description: "Facilitating employment opportunities across the United Kingdom and worldwide."
  }
];

export default function About() {
  return (
    <>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-12 lg:mb-0">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Diverse workplace professionals collaborating" 
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Why Choose Oyster Employment?</h2>
              
              <div className="space-y-6">
                {features.map((feature) => (
                  <div key={feature.title} className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Together Grow Together Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse-slow"></div>
          <div className="absolute top-32 right-20 w-24 h-24 bg-gradient-to-r from-accent/20 to-orange-400/20 rounded-full blur-lg animate-float-delayed"></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-md animate-float"></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-r from-pink-400/20 to-red-400/20 rounded-full blur-lg animate-pulse-delayed"></div>
          
          {/* Floating geometric shapes */}
          <div className="absolute top-1/4 left-1/2 w-6 h-6 bg-primary/20 rotate-45 animate-spin-slow"></div>
          <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-accent/30 rounded-full animate-float-slow"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-primary to-blue-600 rounded-full mb-8">
              <Heart className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Work Together
              </span>
              <br />
              <span className="bg-gradient-to-r from-accent to-orange-500 bg-clip-text text-transparent">
                Grow Together
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our company tagline reflects our core philosophy - building partnerships that foster mutual success and sustainable growth. We believe that when we work together with dedication and trust, we all grow together towards achieving greater heights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-100/50 backdrop-blur-sm">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Collaborative Partnership</h3>
              <p className="text-gray-600">Building strong relationships with clients and candidates based on trust, transparency, and mutual respect.</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl border border-green-100/50 backdrop-blur-sm">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Shared Success</h3>
              <p className="text-gray-600">Your achievements are our achievements. We celebrate every milestone and success story together.</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl border border-orange-100/50 backdrop-blur-sm">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Global Growth</h3>
              <p className="text-gray-600">Expanding opportunities worldwide while maintaining our commitment to quality and excellence.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
