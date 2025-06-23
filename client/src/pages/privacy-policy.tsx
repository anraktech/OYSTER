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
              <p className="text-lg mb-6">
                <strong>Oyster Worldwide Employment & Learning Services Ltd</strong> is the data controller and is a company 
                registered in England and Wales, United Kingdom. Registered address: Certacs House 10-12 Westgate Skelmersdale WN8 8AZ.
              </p>
              
              <p className="mb-6">
                Hereinafter Oyster Worldwide Employment & Learning Services will be referred to as "We" or "Us". 
                This privacy policy has been written in accordance with the "UK General Data Protection Regulation UK GDPR" 
                tailored by the Data Protection Act 2018.
              </p>

              <p className="mb-8">
                This Privacy Policy describes what personal information we collect from you and how we process your personal 
                information when you use our website. The purpose of this privacy policy is to fulfill your rights to be 
                informed about your personal data. We are committed to the protection of your personal information that we gather about you.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Personal Information We Collect From You</h2>
              <p className="mb-6">
                We will collect personal information on your visits to our website. This information includes but is not 
                limited to, traffic data, location data, contact information, information provided by you to us through 
                contact forms, and applications.
              </p>

              <p className="mb-6">
                The provision of your personal information via our contact forms and applications is not a contractual nor 
                statutory requirement. However, it should be noted that fields marked with an asterisk (*) are mandatory fields. 
                This is because we need this information in order to respond to your request. Other information provided by 
                you, to us, is at your sole discretion. We will keep records of all contacts made by either party.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">What is Classed as Personal Information?</h3>
              <p className="mb-4">
                For the avoidance of doubt, the following information is generally classed as personal information. 
                The list below is produced for illustrative purposes and cannot be considered as an exhaustive list:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Name, Gender, Date of Birth, Address, Telephone Number, Email Address, Nationality, Images and/or Photographs</li>
                <li>Identification documentation – All documents provided by you to us, proving your identity, right to work and other information legally required</li>
                <li>All financial information provided by you to us</li>
              </ul>

              <p className="mb-6">
                Much of the information processed by us, is information provided to us by you. However, we can receive information 
                about you from someone acting on your behalf who knowingly provides us with your information. In these circumstances, 
                the information provided to us on your behalf is classified as personal information. This Policy also applies to the 
                information about you that we receive from a third party unless specifically covered by such third party's privacy policy.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sensitive Personal Information (SPI)</h3>
              <p className="mb-4">
                There may be instances in which the information that you provide to us or that we collect is considered 
                "Sensitive Personal Information" (SPI) under the privacy laws of some other countries.
              </p>
              <p className="mb-6">
                These laws define the following SPI to mean personal information from which it can be determined or inferred 
                an individual's racial or ethnic origin, political opinions, religious beliefs, or other beliefs of a similar 
                nature, membership of a trade union or professional association, physical or mental health condition, medical 
                treatment, genetic data, and sexual life. Judicial data inclusive of information concerning the commission or 
                alleged commission of a criminal offense. Financial records may form a part of SPI. We will only process SPI 
                to the extent permitted or required by applicable law.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Personal Information</h2>
              <p className="mb-4">Your personal information will be collected and handled by us for the following purposes:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>To provide you with the services you expect from us</li>
                <li>To fulfill contractual obligations to you</li>
                <li>Meet with legal and regulatory requirements</li>
                <li>To respond to your request or questions when you contact us</li>
                <li>To help us create, publish, and improve content most relevant to you</li>
                <li>To ensure that the content provided by our website is presented in the most effective manner for you and your device</li>
                <li>To allow you to participate in interactive features of our website</li>
                <li>To perform analytical research on our prospective clients and candidates</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclosures of Your Personal Information</h2>
              <p className="mb-6">
                We may disclose your personal information. However, all disclosures will be made in line with the relevant law 
                at the time of disclosure.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Business Transfers</h3>
              <p className="mb-6">
                Any personal information collected about you is regarded as a business asset. As such if the business transferred 
                its assets, then your data could be regarded as assets.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Legal Requirements</h3>
              <p className="mb-4">In the event that any of the following apply, we reserve the right to disclose any personal information:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>We are compelled to disclose by law</li>
                <li>Compliance with accounting/tax rules and regulations</li>
                <li>To protect or defend our rights or property in accordance with the relevant laws</li>
                <li>Lawfully requested to do so by a government entity</li>
              </ul>
              <p className="mb-6">Except for the above disclosures, we do not share your personal information with third parties.</p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Legal Rights – Data Protection</h2>
              <p className="mb-4">Under data protection law, you have rights including:</p>
              <ul className="list-disc pl-6 mb-6">
                <li><strong>Your right of access</strong> – You have the right to ask us for copies of your personal information</li>
                <li><strong>Your right to rectification</strong> – You have the right to ask us to rectify personal information you think is inaccurate. You also have the right to ask us to complete information you think is incomplete</li>
                <li><strong>Your right to erasure</strong> – You have the right to ask us to erase your personal information in certain circumstances</li>
                <li><strong>Your right to restriction of processing</strong> – You have the right to ask us to restrict the processing of your personal information in certain circumstances</li>
                <li><strong>Your right to object to processing</strong> – You have the right to object to the processing of your personal information in certain circumstances</li>
                <li><strong>Your right to data portability</strong> – You have the right to ask that we transfer the personal information you gave us to another organization, or to you, in certain circumstances</li>
              </ul>

              <p className="mb-6">
                You are not required to pay any charge for exercising your rights. If you make a request, we have one month to respond to your request.
              </p>

              <p className="mb-6">
                Please contact us at Oyster Worldwide Employment & Learning Services Ltd, Certacs House, 10-12 Westgate, 
                Skelmersdale, WN8 8AZ if you wish to make a request.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Complain</h2>
              <p className="mb-6">
                If you have any concerns about our use of your personal information, you can make a complaint to us at 
                <a href="mailto:info@oysteremployment.com" className="text-primary hover:underline"> info@oysteremployment.com</a>.
              </p>

              <p className="mb-6">
                We will respond to any concerns or complaints within a period of 10 days from receipt of an email raising a concern or a complaint.
              </p>

              <p className="mb-4">
                You can also complain to the Information Commissioner's Office if you are unhappy with how we have used your data.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold mb-3">Information Commissioner's Office</h4>
                <p>Wycliffe House<br/>
                Water Lane<br/>
                Wilmslow<br/>
                Cheshire<br/>
                SK9 5AF</p>
                <p className="mt-3">
                  Helpline number: 0303 123 1113<br/>
                  <a href="https://www.ico.org.uk" className="text-primary hover:underline">https://www.ico.org.uk</a>
                </p>
              </div>

              <p className="text-sm text-gray-600 text-center">
                This Privacy Policy updated on the 1st of January 2024.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}