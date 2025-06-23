import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User } from "lucide-react";
import covidCar1 from "@assets/FB_IMG_1653609776431-268x268_1750680872021.jpg";
import covidCar2 from "@assets/FB_IMG_1653609784456-268x268_1750680872021.jpg";
import covidCar3 from "@assets/FB_IMG_1653609795265-268x268_1750680872024.jpg";
import covidCar4 from "@assets/Screenshot_20220527-083642_Photos-268x268_1750680872025.jpg";
import covidCar5 from "@assets/Screenshot_20220527-083713_Photos-1-268x268_1750680872025.jpg";
import covidCar6 from "@assets/Screenshot_20220527-083709_Photos-268x268_1750680872026.jpg";

export default function News() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Latest News</h1>
          
          <Card className="bg-white shadow-lg mb-8">
            <CardContent className="p-8">
              <div className="flex items-center mb-6 text-gray-600">
                <Calendar className="h-5 w-5 mr-2" />
                <span className="mr-4">May 27, 2022</span>
                <User className="h-5 w-5 mr-2" />
                <span>Oyster Employment Team</span>
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-6">COVID-19 CAMPAIGN</h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 mb-6">
                  As a loyal citizen of this land, Kamran feels that if you could contribute your vibrant role to the welfare/good things of your community, you should take initiative because you will be setting a good example for others to follow. In taking this initiative, Kamran's Inspiring COVID-19 Campaign Spreads Hope and Awareness.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
                  <img src={covidCar1} alt="COVID-19 awareness campaign car with educational stickers" className="rounded-lg shadow-md w-full h-48 object-cover" />
                  <img src={covidCar2} alt="Car displaying COVID-19 safety messages and prevention tips" className="rounded-lg shadow-md w-full h-48 object-cover" />
                  <img src={covidCar3} alt="Mobile awareness campaign with colorful COVID-19 information stickers" className="rounded-lg shadow-md w-full h-48 object-cover" />
                </div>

                <p className="text-gray-700 mb-6">
                  In the challenging year of 2020, when the world grappled with the unprecedented challenges brought about by the COVID-19 pandemic, individuals around the globe stepped up to make a difference in their communities. One such inspiring initiative was spearheaded by Kamran, who devised a unique and attention-grabbing campaign to raise awareness about COVID-19. In an effort to spread crucial information and encourage safety measures, Kamran adorned his car with eye-catching awareness stickers that transformed his vehicle into a mobile billboard of hope and information.
                </p>

                <p className="text-gray-700 mb-6">
                  Kamran collaborated with a local design composer to create a set of visually appealing and informative stickers. Each sticker carried essential messages about COVID-19 prevention, including reminders about wearing masks, practicing social distancing, and maintaining proper hygiene. The vibrant and catchy designs were intended to capture the attention of onlookers and serve as a memorable reminder of the importance of collective responsibility during these challenging times.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
                  <img src={covidCar4} alt="Kamran promoting COVID-19 awareness through his decorated vehicle" className="rounded-lg shadow-md w-full h-48 object-cover" />
                  <img src={covidCar5} alt="Community engagement through mobile COVID-19 awareness campaign" className="rounded-lg shadow-md w-full h-48 object-cover" />
                  <img src={covidCar6} alt="Spreading hope and awareness across UK communities during pandemic" className="rounded-lg shadow-md w-full h-48 object-cover" />
                </div>

                <p className="text-gray-700 mb-6">
                  With his car transformed into a rolling canvas of awareness, Kamran hit the maximum areas of the United Kingdom, embarking on a mission to spread hope and information. From busy city centers to residential areas, his vehicle became a symbol of unity and resilience in the face of adversity.
                </p>

                <p className="text-gray-700 mb-6">
                  The impact of Kamran's COVID-19 awareness campaign was immediate and far-reaching. Pedestrians, fellow motorists, and passersby couldn't help but notice the vibrant stickers that adorned his car. Social media played a crucial role in amplifying the campaign's reach, as pictures and videos of the mobile awareness initiative went viral, inspiring others to take similar action in their communities. One of the most remarkable aspects of Kamran's campaign was its ability to engage people of all ages and backgrounds.
                </p>

                <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary my-8">
                  <p className="text-gray-800 font-medium">
                    "In the midst of a global crisis, Kamran's innovative COVID-19 awareness campaign served as a shining example of how individuals can make a positive impact in their communities."
                  </p>
                </div>

                <p className="text-gray-700 mb-6">
                  In the midst of a global crisis, Kamran's innovative COVID-19 awareness campaign served as a shining example of how individuals can make a positive impact in their communities. By turning his car into a moving billboard of information and hope, Kamran demonstrated the power of creativity and community spirit in the face of adversity. His campaign serves as a reminder that even the smallest actions can contribute to a collective effort to overcome challenges and emerge stronger on the other side.
                </p>

                <p className="text-gray-700">
                  This inspiring initiative reflects the values that drive us at Oyster Employment - community spirit, innovation, and making a positive difference. We're proud to share stories that showcase the incredible impact individuals can have when they take initiative to help others.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <p className="text-gray-600">More news and updates coming soon. Stay connected with Oyster Employment for the latest stories and developments.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}