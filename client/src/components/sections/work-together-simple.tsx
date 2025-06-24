import { Heart } from "lucide-react";

export default function WorkTogetherSimple() {
  return (
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
        <div className="text-center">
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
      </div>
    </section>
  );
}