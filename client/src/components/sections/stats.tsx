import { Target, Users } from "lucide-react";

export default function Stats() {
  const stats = [
    { 
      number: "4", 
      label: "Specialized Sectors",
      icon: Target,
      description: "Expert recruitment across Health, IT, Engineering & Hospitality"
    },
    { 
      number: "98%", 
      label: "Client Satisfaction",
      icon: Users,
      description: "Proven track record of successful placements and happy clients"
    }
  ];

  return (
    <section className="py-24 gradient-bg text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-accent/20 rounded-full animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white/5 rounded-full animate-float"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Our Impact</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Delivering excellence through specialized expertise and dedicated service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {stats.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <div key={stat.label} className="text-center group">
                <div className="relative">
                  <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8 backdrop-blur-sm border border-white/20 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-12 w-12 text-white" />
                  </div>
                  <div className="absolute inset-0 w-24 h-24 bg-gradient-to-r from-accent/30 to-white/30 rounded-full mx-auto animate-pulse-slow"></div>
                </div>
                <div className="text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-2xl lg:text-3xl font-semibold text-white mb-4">
                  {stat.label}
                </div>
                <div className="text-lg text-blue-100 max-w-sm mx-auto leading-relaxed">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
