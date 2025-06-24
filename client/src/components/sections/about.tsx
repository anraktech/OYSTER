import { Check } from "lucide-react";

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
  );
}
