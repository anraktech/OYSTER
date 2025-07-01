import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";

export default function TermsConditions() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Terms and Conditions</h1>
          
          <Card className="bg-white shadow-lg">
            <CardContent className="p-8 prose prose-gray max-w-none">
              <p className="mb-8">
                These terms apply to your use of the website operated by Oyster Worldwide Employment Services Ltd ("we", "our", or "us"). By using this website, you accept these terms.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to the Terms</h2>
              <p className="mb-8">
                We may revise these terms at any time. Updated terms will take effect upon posting. For significant updates, we may notify you via email or a website notice.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Content Disclaimer</h2>
              <p className="mb-8">
                We are not responsible for errors, omissions, or the usefulness of content. We do not guarantee uninterrupted, error-free, or virus-free access. External links are provided without endorsement or responsibility.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy and Cookie Policies</h2>
              <p className="mb-8">
                Your data is managed under our Privacy Policy and Cookie Policy. Please review these documents to understand how we handle your personal information.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
              <p className="mb-8">
                If you reside in the UK, UK law applies and UK courts have jurisdiction. If outside the UK, English law and courts apply.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contacting Us</h2>
              <p className="mb-8">
                Questions regarding these Terms can be sent to: 
                <a href="mailto:privacy@oysteremployment.com" className="text-primary hover:underline"> privacy@oysteremployment.com</a>
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