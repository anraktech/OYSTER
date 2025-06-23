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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What are Cookies?</h2>
              <p className="mb-6">
                Cookies are small files that a site or its service provider transfers to your computer's hard drive through 
                your Web browser (if you allow) that enables the site's or service provider's systems to recognize your browser 
                and capture and remember certain information. For instance, we use cookies to remember and process your activity with us.
              </p>

              <p className="mb-6">
                They are also used to help us understand preferences based on previous or current activities which enables us 
                to provide you with improved services. We also use cookies to compile aggregate data about site traffic and 
                site interaction so that we can offer better site experiences and tools in the future.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Cookies</h2>
              <p className="mb-6">
                We use cookies for a variety of reasons detailed below. Unfortunately, in most cases there are no industry 
                standard options for disabling cookies without disabling the functionality and features they add to this site. 
                It is recommended that you leave on all cookies, if you are not sure whether you need them or not in case, 
                they are used to provide a service that you use.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">The Cookies We Set</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Forms Related Cookies</h3>
              <p className="mb-6">
                When you submit data through a form such as those found on contact pages, candidate applications, or comment 
                forms cookies may be set to remember your user details for future correspondence.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Site Preference Cookies</h3>
              <p className="mb-6">
                In order to provide you with a great experience on this site we provide the functionality to set your preferences 
                for how this site runs when you use it. In order to remember your preferences, we need to set up cookies so 
                that information can be called whenever you interact with a page is affected by your preferences.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Third Party Cookies</h2>
              <p className="mb-6">
                It is not our intention to utilise third party cookies for advertising third party products nor do we intend 
                to use third party cookies generally. However, in some cases we shall be using third party cookies such as 
                Google Analytics to help us understand how you use the site and ways, we can improve your experience. These 
                cookies may track things such as how long you spend on the site and the pages that you visit so we can continue 
                to produce engaging content.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <p className="mb-0 text-sm">
                  <strong>Note:</strong> This Cookie Policy is effective from 31st May 2023.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}