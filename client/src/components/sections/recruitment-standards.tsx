import { CheckCircle, Target, Users } from "lucide-react";

export default function RecruitmentStandards() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Recruitment Standards</h2>
            <div className="space-y-6 text-gray-600">
              <p className="text-lg">
                Many recruitment agencies struggle with slow service and finding quality candidates. This frustration is common when agencies don't truly understand the critical aspects of recruiting key team members.
              </p>
              <p>
                Finding candidates with the right skills is challenging, but dealing with those who lack necessary skills and have poor attitudes is even more difficult. <strong>We're here to bridge that gap.</strong>
              </p>
              <p>
                The good news is that we can resolve many of your recruitment challenges and connect you with qualified, skilled, and motivated candidates.
              </p>
              <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary">
                <p className="font-semibold text-primary">
                  "We are determined and confident in our ability to deliver what you need. Our commitment to quality service aligns with Oyster's policy of 'work together and grow together.'"
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 lg:mt-0">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Professional recruitment team reviewing candidates" 
              className="rounded-2xl shadow-xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}