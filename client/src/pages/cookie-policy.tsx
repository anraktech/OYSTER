import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";

export default function CookiePolicy() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Cookie Policy</h1>
          
          <Card className="bg-white shadow-lg">
            <CardContent className="p-8 prose prose-gray max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Cookies?</h2>
              <p className="mb-8">
                Cookies are small files stored on your device to help recognise your browser and improve user experience.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Cookies</h2>
              <p className="mb-4">We use cookies for:</p>
              <ul className="list-disc pl-6 mb-8">
                <li>Website functionality</li>
                <li>Remembering form inputs</li>
                <li>Site preferences</li>
                <li>Analytics (e.g., Google Analytics)</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Consent for Cookies</h2>
              <p className="mb-4">
                We obtain explicit consent before setting non-essential cookies. A cookie banner appears on your first visit with options to:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Accept All</li>
                <li>Reject All</li>
                <li>Customise Preferences</li>
              </ul>
              <p className="mb-8">
                Non-essential cookies (e.g., analytics) are only set with your active consent. Consent can be withdrawn at any time via the "Cookie Preferences" link in our website footer.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Cookies</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Strictly Necessary Cookies</h3>
              <p className="mb-6">Required for website functionality (e.g., form submissions)</p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Preference Cookies</h3>
              <p className="mb-6">Remember your preferences (e.g., language settings)</p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Analytics Cookies</h3>
              <p className="mb-6">Measure website traffic and performance (e.g., Google Analytics)</p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Marketing Cookies</h3>
              <p className="mb-8">Only used if needed, currently not in use</p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Cookies</h2>
              <p className="mb-8">
                We use Google Analytics to understand website usage. These third-party cookies collect anonymised data. Full details are available in our Cookie Policy.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookie Management</h2>
              <p className="mb-4">We provide a consent management tool allowing users to:</p>
              <ul className="list-disc pl-6 mb-8">
                <li>View and categorise cookies</li>
                <li>Toggle cookie categories on/off</li>
                <li>Revoke or change consent anytime</li>
              </ul>

              <p className="text-sm text-gray-600 text-center">
                <strong>Effective Date: 1st July 2025</strong>
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}