import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Briefcase, CheckCircle } from "lucide-react";

const commitments = [
  {
    icon: Target,
    title: "Our Primary Objective",
    description: "Making life easier for clients and candidates through our transparent process. We're committed to placing the right person in the right job with productive services for both UK-based and international recruitment.",
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    icon: Briefcase,
    title: "To Employers",
    description: "Our priority is providing qualified candidates that meet your specific job requirements. We're passionate about making a positive difference with our honest, hard-working approach following our 'Right person for the right job' policy.",
    color: "text-green-600",
    bgColor: "bg-green-50"
  },
  {
    icon: Users,
    title: "To Candidates",
    description: "We focus on finding the right opportunities quickly for our registered candidates based on their qualifications, skills, and experience, committed to our 'Work together and grow together' philosophy.",
    color: "text-purple-600",
    bgColor: "bg-purple-50"
  }
];

const servicePromises = [
  "Dedicated to complete client satisfaction with prompt, productive service",
  "User-friendly approach at all levels ensuring excellent value delivery",
  "Meeting all staffing needs to help deliver quality services",
  "Promoting quality assurance culture that enhances your business",
  "Supporting candidates' career development journey and goals",
  "Building lasting professional relationships for future growth",
  "Professional, helpful, friendly, respectful, and supportive service"
];

export default function OurCommitment() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Commitment as an Employment Company</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're dedicated to excellence in every aspect of our recruitment services, ensuring success for both employers and candidates.
          </p>
        </div>

        {/* Main Commitments */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {commitments.map((commitment) => {
            const IconComponent = commitment.icon;
            return (
              <Card key={commitment.title} className={`${commitment.bgColor} border-0 h-full`}>
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4`}>
                      <IconComponent className={`h-6 w-6 ${commitment.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{commitment.title}</h3>
                  </div>
                  <p className="text-gray-700">{commitment.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Service Promises */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Service Promise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {servicePromises.map((promise, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-700">{promise}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 bg-primary/10 rounded-lg border-l-4 border-primary">
            <p className="text-gray-700 italic">
              <strong>Our Customer Service Promise:</strong> "In our customer service, you will find us professional, helpful, friendly, respectful, and supportive throughout your entire journey with us."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}