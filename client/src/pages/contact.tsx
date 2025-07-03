import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { MapPin, Phone, Mail, Send, Clock, Navigation } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  sector: string;
  message: string;
  agreeToTerms: boolean;
}

export default function Contact() {
  const { toast } = useToast();
  
  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [form, setForm] = useState<ContactForm>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    sector: "",
    message: "",
    agreeToTerms: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    if (!form.firstName || !form.lastName || !form.email || !form.message) {
      e.preventDefault();
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    if (!form.agreeToTerms) {
      e.preventDefault();
      toast({
        title: "Please agree to the terms and conditions",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    // Form will be submitted to Formspree automatically
    toast({
      title: "Thank you for your message!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  return (
    <>
      <Navbar />
      <div>
        {/* Hero Section */}
        <section className="pt-20 pb-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
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
                Get in Touch
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Ready to take the next step in your career? Contact us today and let's discuss how we can help you achieve your professional goals.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
                  <p className="text-gray-600 mb-8">
                    We're here to help you take the next step in your career. Get in touch with our team of experts.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Address</h3>
                      <p className="text-gray-600">
                        <a 
                          href="https://www.google.com/maps/place/71-75+Shelton+St,+London+WC2H+9JQ,+UK" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-primary transition-colors"
                        >
                          71-75 Shelton Street<br />
                          Covent Garden, London WC2H 9JQ<br />
                          United Kingdom
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                      <p className="text-gray-600">
                        <a href="tel:+442072407391" className="hover:text-primary transition-colors">
                          +44 (0) 207 240 7391
                        </a>
                        <br />
                        <a href="tel:+447459346514" className="hover:text-primary transition-colors">
                          +44 (0) 745 934 6514
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-600">
                        <a href="mailto:info@oysterworldwide.com" className="hover:text-primary transition-colors">
                          info@oysterworldwide.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Office Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <Card className="bg-white shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                  
                  <form 
                    action="https://formspree.io/f/xpwrbnqk"
                    method="POST"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                          First Name *
                        </Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          type="text"
                          required
                          value={form.firstName}
                          onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                          className="mt-1"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                          Last Name *
                        </Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          type="text"
                          required
                          value={form.lastName}
                          onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                          className="mt-1"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="mt-1"
                        placeholder="Enter your email address"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="mt-1"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div>
                      <Label htmlFor="sector" className="text-sm font-medium text-gray-700">
                        Sector of Interest
                      </Label>
                      <Select value={form.sector} onValueChange={(value) => setForm({ ...form, sector: value })}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select your sector of interest" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="health">Health Sector</SelectItem>
                          <SelectItem value="engineering">Engineering</SelectItem>
                          <SelectItem value="it">Information Technology</SelectItem>
                          <SelectItem value="hospitality">Hospitality</SelectItem>
                          <SelectItem value="learning">Language Learning</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="mt-1"
                        rows={6}
                        placeholder="Tell us about your career goals and how we can help you..."
                      />
                    </div>

                    <div className="flex items-start">
                      <Checkbox
                        id="agreeToTerms"
                        checked={form.agreeToTerms}
                        onCheckedChange={(checked) => setForm({ ...form, agreeToTerms: checked as boolean })}
                        className="mt-1"
                      />
                      <Label htmlFor="agreeToTerms" className="ml-2 text-sm text-gray-600">
                        I agree to the <a href="/terms-conditions" className="text-primary hover:underline">terms and conditions</a> and <a href="/privacy-policy" className="text-primary hover:underline">privacy policy</a> *
                      </Label>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}