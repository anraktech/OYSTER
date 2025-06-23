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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Terms and Conditions of Your Use of This Website</h2>
              
              <p className="mb-6">
                We are <strong>Oyster Worldwide Employment Services Ltd</strong>. A company incorporated and registered under 
                the laws of England and Wales of Certacs House, 10-12 Westgate, Skelmersdale, Lancashire, WN8 8AZ hereinafter 
                referred to as (we our or us). The terms (you and your) refer to you, as the user or viewer of this website. 
                These terms and conditions of use (Terms) apply to your use of the website and by continuing to use this website 
                you are confirming that you accept the terms set out below.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to the Terms and Additional Terms</h2>
              <p className="mb-4">
                We may change these terms from time to time. We will post the updated terms on the website and they will take 
                effect immediately.
              </p>
              <p className="mb-6">
                Your ongoing use of the website after these terms have been changed will be treated as your acceptance of the 
                updated terms, so you should check these Terms regularly.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Content</h2>
              <p className="mb-4">
                We shall not be under any duty to check the accuracy of the Content, and do not guarantee the usefulness, 
                preciseness, completeness or relevance of the Content and/or that such Content is up to date. We expressly 
                exclude any and all liability for errors or omissions with respect to the Content and the Website, save to 
                the extent that such liability arises from our fraud or fraudulent misrepresentation or any death or personal 
                injury that arises due to our negligence.
              </p>

              <p className="mb-4">
                We do not warrant that the Website, its Content or the server that makes it available are error or virus free 
                or free of other harmful components or that your use of the Website will be uninterrupted.
              </p>

              <p className="mb-4">
                The Website may provide hyperlinks to other websites which are not owned by us. The content of those websites 
                is not controlled by us. Therefore, we cannot accept responsibility for the content, materials (including goods 
                or services) or practices featured on those websites.
              </p>

              <p className="mb-6">
                By providing hyperlinks to other websites does not mean that we have endorsed the content nor do we warrant 
                that those websites are free of viruses or other such items of a destructive nature.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Personal Information</h2>
              <p className="mb-6">
                The use of personal information is governed by our Privacy Policy. You can read our 
                <a href="/privacy-policy" className="text-primary hover:underline"> Privacy Policy here</a>.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
              <p className="mb-4">These terms and your access to the Website are subject to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>If you are resident within the United Kingdom, the relevant law, and the relevant United Kingdom Courts will have exclusive jurisdiction.</li>
                <li>If you are not resident within the United Kingdom, then English Law will apply and the English Courts will have exclusive jurisdiction.</li>
              </ul>
              <p className="mb-6">
                You further agree that we shall still be allowed to apply for injunctive relief (or any other such types of 
                temporary relief or legal remedy) in any jurisdiction.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contacting Us</h2>
              <p className="mb-6">
                Should you have any questions or comments regarding these Terms, then please do not hesitate to contact us 
                via our privacy email 
                <a href="mailto:privacy@oysteremployment.com" className="text-primary hover:underline"> privacy@oysteremployment.com</a>.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}