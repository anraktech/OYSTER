import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Privacy Policy</h1>
          
          <Card className="bg-white shadow-lg">
            <CardContent className="p-8 prose prose-gray max-w-none">
              <p className="mb-6">
                Oyster Worldwide Employment & Learning Services Ltd is the data controller and is a company registered in England and Wales, United Kingdom. Registered address: Certacs House 10-12 Westgate Skelmersdale WN8 8AZ.
              </p>

              <p className="mb-6">
                Hereinafter, Oyster Worldwide Employment & Learning Services Ltd will be referred to as "We" or "Us". This privacy policy is in accordance with the "UK General Data Protection Regulation (UK GDPR)" tailored by the Data Protection Act 2018.
              </p>

              <p className="mb-8">
                This Privacy Policy describes what personal information we collect from you and how we process it when you use our website. Our aim is to fulfil your right to be informed about your personal data and ensure its protection.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Personal Information We Collect From You</h2>
              <p className="mb-4">We collect personal information from your visits to our website, which includes but is not limited to:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Traffic data, location data, IP address, and online activity via cookies</li>
                <li>Contact information provided via forms</li>
                <li>Details from applications and communication history</li>
              </ul>
              <p className="mb-6">
                <strong>Note:</strong> Fields marked with an asterisk (*) in our forms are required for us to respond to your request.
              </p>

              <p className="mb-8">
                We collect certain information, including your IP address and browsing behaviour, through cookies. This "website usage" data is used to improve our services, understand site traffic, and enhance your experience. For non-essential cookies (e.g., analytics), processing is based on your explicit consent. For full details, refer to our Cookie Policy.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">What is Classed as Personal Information?</h2>
              <p className="mb-4">Examples of personal information include:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Name, Gender, Date of Birth, Address, Telephone Number, Email Address</li>
                <li>Nationality, Photographs</li>
                <li>Identification documents (e.g., right to work)</li>
                <li>Financial and employment-related information</li>
              </ul>
              <p className="mb-8">Information provided by third parties acting on your behalf is also considered personal information.</p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Sensitive Personal Information (SPI)</h2>
              <p className="mb-4">
                SPI includes racial or ethnic origin, political/religious beliefs, union membership, health, genetics, sex life, and judicial data. We only process SPI when a specific legal basis under UK GDPR applies:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Your explicit consent</li>
                <li>Necessary for legal claims or compliance</li>
              </ul>
              <p className="mb-8">We will inform you of the specific legal basis at the point of data collection.</p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Personal Information</h2>
              <p className="mb-4">We process your personal data to:</p>
              <ul className="list-disc pl-6 mb-8">
                <li>Provide our services</li>
                <li>Fulfil contractual obligations</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Respond to your queries</li>
                <li>Improve and customise content and website usability</li>
                <li>Perform analytics and enhance user experience</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclosures of Your Personal Information</h2>
              <p className="mb-4">We may disclose your personal information:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>To fulfil legal obligations</li>
                <li>As part of a business asset transfer</li>
                <li>To law enforcement or regulatory authorities as required</li>
                <li>To third-party providers such as Google Analytics (for site analytics)</li>
              </ul>
              <p className="mb-8">
                In addition to the disclosures above, we may share certain data (e.g., anonymised IPs, usage statistics) with third-party analytics providers for improving site performance. See our Cookie Policy for full details.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Legal Rights</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Access your personal data</li>
                <li>Request correction or completion</li>
                <li>Request erasure in certain circumstances</li>
                <li>Restrict processing in certain situations</li>
                <li>Object to processing</li>
                <li>Request data portability</li>
              </ul>
              <p className="mb-4">We respond to requests within one month. Please contact us at:</p>
              <p className="mb-8">
                <strong>Oyster Worldwide Employment & Learning Services Ltd</strong><br />
                Certacs House, 10-12 Westgate, Skelmersdale, WN8 8AZ<br />
                Email: info@oysteremployment.com
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Complain</h2>
              <p className="mb-4">For concerns or complaints:</p>
              <p className="mb-4">Email: info@oysteremployment.com<br />We aim to respond within 10 days.</p>
              <p className="mb-8">
                You may also contact the Information Commissioner's Office:<br />
                ICO, Wycliffe House, Water Lane, Wilmslow, Cheshire SK9 5AF<br />
                Helpline: 0303 123 1113<br />
                Website: <a href="https://www.ico.org.uk" className="text-primary hover:underline">https://www.ico.org.uk</a>
              </p>

              <p className="text-sm text-gray-600 text-center">
                <strong>Updated: 1st July 2025</strong>
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}