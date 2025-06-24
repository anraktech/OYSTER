import { Button } from "@/components/ui/button";
import { UserPlus, Handshake } from "lucide-react";

export default function CTA() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 gradient-bg text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to work together?</h2>
        <p className="text-xl text-blue-100 mb-8">Join professionals who have found their dream jobs through Oyster Employment</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={scrollToContact}
            className="bg-accent text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-500 transition-all transform hover:scale-105"
          >
            <UserPlus className="mr-2 h-5 w-5" />
            Register as Candidate
          </Button>
          <Button 
            onClick={scrollToContact}
            variant="outline"
            className="border-2 border-white bg-transparent text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-primary transition-all"
          >
            <Handshake className="mr-2 h-5 w-5" />
            Hire Through Us
          </Button>
        </div>
      </div>
    </section>
  );
}
