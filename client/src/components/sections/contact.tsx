import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { MapPin, Phone, Mail, Send, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

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
  const [form, setForm] = useState<ContactForm>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    sector: "",
    message: "",
    agreeToTerms: false
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        sector: "",
        message: "",
        agreeToTerms: false
      });
    },
    onError: (error) => {
      toast({
        title: "Error sending message",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.firstName || !form.lastName || !form.email || !form.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    if (!form.agreeToTerms) {
      toast({
        title: "Please agree to the terms and conditions",
        variant: "destructive",
      });
      return;
    }

    contactMutation.mutate(form);
  };

  const updateForm = (field: keyof ContactForm, value: string | boolean) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          <div className="mb-12 lg:mb-0">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Get in Touch</h2>
            <p className="text-xl text-gray-600 mb-8">Ready to take the next step in your career? Let's discuss how we can help you achieve your goals.</p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">Address</div>
                  <div className="text-gray-600">
                    Certacs House, 10-12 Westgate<br/>
                    Skelmersdale, Lancashire<br/>
                    WN8 8AZ
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">Phone</div>
                  <div className="text-gray-600">+44(0)1695 363923</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">Email</div>
                  <div className="text-gray-600">info@oysteremployment.com</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">Opening Hours</div>
                  <div className="text-gray-600">Monday - Friday (9am - 6pm)</div>
                </div>
              </div>
            </div>
          </div>

          <Card className="bg-gray-50 rounded-2xl p-8 border-0">
            <CardContent className="p-0">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name *</Label>
                    <Input
                      id="firstName"
                      type="text"
                      value={form.firstName}
                      onChange={(e) => updateForm('firstName', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Enter your first name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name *</Label>
                    <Input
                      id="lastName"
                      type="text"
                      value={form.lastName}
                      onChange={(e) => updateForm('lastName', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => updateForm('email', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => updateForm('phone', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <Label htmlFor="sector" className="block text-sm font-medium text-gray-700 mb-2">Sector of Interest</Label>
                  <Select value={form.sector} onValueChange={(value) => updateForm('sector', value)}>
                    <SelectTrigger className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                      <SelectValue placeholder="Select a sector" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="health">Health Sector</SelectItem>
                      <SelectItem value="engineering">Engineering</SelectItem>
                      <SelectItem value="it">Information Technology</SelectItem>
                      <SelectItem value="hospitality">Hospitality</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message *</Label>
                  <Textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => updateForm('message', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Tell us about your career goals or hiring needs..."
                    required
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={form.agreeToTerms}
                    onCheckedChange={(checked) => updateForm('agreeToTerms', checked as boolean)}
                  />
                  <Label htmlFor="terms" className="text-sm text-gray-600">
                    I agree to the <button type="button" className="text-primary hover:underline">Terms and Conditions</button> and <button type="button" className="text-primary hover:underline">Privacy Policy</button>
                  </Label>
                </div>

                <Button 
                  type="submit" 
                  disabled={contactMutation.isPending}
                  className="w-full bg-primary text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  {contactMutation.isPending ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
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
  );
}
