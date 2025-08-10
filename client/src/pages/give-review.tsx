import { useState, useEffect } from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Star, Heart, CheckCircle } from "lucide-react";

export default function GiveReview() {
  const [rating, setRating] = useState(5);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [form, setForm] = useState({
    name: "",
    role: "",
    nationality: "",
    review: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setForm({ name: "", role: "", nationality: "", review: "" });
        setRating(5);
      }, 3000);
    }, 1500);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`h-8 w-8 cursor-pointer transition-all duration-200 ${
            i <= (hoveredRating || rating)
              ? "text-yellow-400 fill-yellow-400"
              : "text-gray-300"
          }`}
          onMouseEnter={() => setHoveredRating(i)}
          onMouseLeave={() => setHoveredRating(0)}
          onClick={() => setRating(i)}
        />
      );
    }
    return stars;
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="py-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 shadow-xl">
              <CardContent className="p-12">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h1>
                <p className="text-lg text-gray-700 mb-4">
                  Your review has been submitted successfully and will appear on our testimonials section.
                </p>
                <p className="text-gray-600">
                  We truly appreciate your feedback and the time you took to share your experience with Oyster Employment.
                </p>
                <div className="flex justify-center mt-6">
                  {[...Array(rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-blue-800 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-yellow-400/20 rounded-full blur-lg animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-white/15 rounded-full blur-lg animate-pulse delay-1000"></div>
          <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-yellow-400/10 rounded-full blur-md animate-bounce delay-500"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="h-16 w-16 text-yellow-400 mx-auto mb-6 animate-pulse" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Share Your Experience
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Your feedback helps us improve and inspires others to trust in our services. 
            We'd love to hear about your journey with Oyster Employment.
          </p>
        </div>
      </section>

      {/* Review Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-white shadow-2xl border-0 rounded-3xl overflow-hidden">
            <CardContent className="p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Rate Your Experience</h2>
                <p className="text-gray-600">How would you rate our service?</p>
              </div>

              {/* Star Rating */}
              <div className="flex justify-center mb-8">
                <div className="flex space-x-1">
                  {renderStars()}
                </div>
              </div>

              <div className="text-center mb-8">
                <p className="text-lg font-medium text-gray-700">
                  {rating === 5 && "Excellent! ⭐"}
                  {rating === 4 && "Very Good! 👍"}
                  {rating === 3 && "Good 👌"}
                  {rating === 2 && "Fair 😐"}
                  {rating === 1 && "Poor 😞"}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="mt-1 border-gray-300 focus:border-primary focus:ring-primary"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="nationality" className="text-sm font-medium text-gray-700">
                      Nationality *
                    </Label>
                    <Input
                      id="nationality"
                      type="text"
                      required
                      value={form.nationality}
                      onChange={(e) => setForm({ ...form, nationality: e.target.value })}
                      className="mt-1 border-gray-300 focus:border-primary focus:ring-primary"
                      placeholder="e.g. Indian, Pakistani, Nigerian"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="role" className="text-sm font-medium text-gray-700">
                    Your Role/Profession *
                  </Label>
                  <Input
                    id="role"
                    type="text"
                    required
                    value={form.role}
                    onChange={(e) => setForm({ ...form, role: e.target.value })}
                    className="mt-1 border-gray-300 focus:border-primary focus:ring-primary"
                    placeholder="e.g. Nurse, Engineer, Software Developer"
                  />
                </div>

                <div>
                  <Label htmlFor="review" className="text-sm font-medium text-gray-700">
                    Your Review *
                  </Label>
                  <Textarea
                    id="review"
                    required
                    value={form.review}
                    onChange={(e) => setForm({ ...form, review: e.target.value })}
                    className="mt-1 border-gray-300 focus:border-primary focus:ring-primary"
                    rows={6}
                    placeholder="Share your experience with Oyster Employment. How did we help you achieve your career goals?"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting || !form.name || !form.role || !form.nationality || !form.review}
                  className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 text-lg shadow-lg"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Submitting Review...
                    </div>
                  ) : (
                    "Submit Review"
                  )}
                </Button>
              </form>

              <div className="mt-8 text-center">
                <p className="text-sm text-gray-500">
                  Your review will be publicly displayed on our testimonials section to help others learn about our services.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}