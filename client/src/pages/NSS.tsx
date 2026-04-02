import React from 'react'
import LazyImage from '@/components/LazyImage'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Cta from '@/components/Cta'
import BreadCrumb from '@/components/BreadCrumb'
import OverviewSection from '@/components/OverviewSection'
import Checklist from '@/components/Checklist'
import InfoCard from '@/components/InfoCard'
import GallerySection from '@/components/GallerySection'
import ImageGallery from '@/components/ImageGallery'
import DynamicTable from '@/components/DynamicTable '
import NssCoreTeamsSection from "@/components/NssCoreTeamsSection";
import { AccessibilityFeatures } from '@/components/AccessibilityFeatures'
const points = [
    'First, regular NSS activities during which volunteers devote 120 hours per year for various community service initiatives.',
    'Second, special camping programs where volunteers work with adopted villages or urban siums for seven days, addressing specific community challenges.',
];

const objectivePoints = [
    'To understand and connect with our community',
    'To identify the needs and problems of the community and involve ourselves in problem-solving',
    'To develop among ourselves a sense of social and Civic Responsibilities.',
    'To utilize our knowledge in finding practical solutions to community problems',
    'To develop competence required for group living and sharing responsibilities',
]
const objectiveContent = (
    <Checklist items={objectivePoints} />
);

const imageItems = [
    {
        title: "",
        imageUrl: "https://www.piet.poornima.org/images/media-1.jpg",
    },
    {
        title: "",
        imageUrl: "https://www.piet.poornima.org/images/media-2.jpg",
    },
    {
        title: "",
        imageUrl: "https://www.piet.poornima.org/images/media-3.jpg",
    },
    {
        title: "",
        imageUrl: "https://www.piet.poornima.org/images/media-4.jpg",
    },
    {
        title: "",
        imageUrl: "https://www.piet.poornima.org/images/media-5.jpg",
    },
    {
        title: "",
        imageUrl: "https://www.piet.poornima.org/images/media-6.jpg",
    },
    {
        title: "Receiving Award of excellence",
        imageUrl: "images/chapters/nss/activities/25nss1.jpeg",
    },
    {
        title: "Natya Manchana for Social Transformation",
        imageUrl: "images/chapters/nss/activities/25nss2.jpeg",
    },
    {
        title: "Nari Adamya Samman",
        imageUrl: "images/chapters/nss/activities/25nss3.jpeg",
    },
    {
        title: "Certificate of Appreciation for Outstanding Contribution",
        imageUrl: "images/chapters/nss/activities/25nss4.jpeg",
    },
    {
        title: "Community Service Day",
        imageUrl: "images/chapters/nss/activities/25nss5.jpeg",
    },
    {
        title: "Special 7 Day Camp - Inauguration and Environmental Consciousness",
        imageUrl: "images/chapters/nss/activities/25nss6.jpeg",
    },



];


const activityColumns = [
    { label: 'S.N.', key: 'sno' },
    { label: 'Activity', key: 'activity' },
    { label: 'Date', key: 'date' },
    { label: 'No. of Attendees', key: 'attendees' },
    { label: 'Venue', key: 'venue' },
];

const activityData = [
    { sno: 1, activity: 'World AIDS Day', date: '10/12/2025', time: '10:20AM-12:20PM', attendees: '60+', venue: 'PIET JAIPUR' },
    { sno: 2, activity: 'Run for Viksit Rajasthan', date: '12/12/2024', time: '7:00AM-3:30PM', attendees: '57+', venue: 'Amar Jawan Jyoti (Janpath), Jaipur' },
    { sno: 3, activity: 'Health Check-Up Camp', date: '13/12/2024', time: '10:20AM-3:20PM', attendees: '200+', venue: 'PIET JAIPUR' },
    { sno: 4, activity: 'NSS Inaugural and Orientation Ceremony', date: '24/12/2024', time: '10:45AM–12:25PM', attendees: '150+', venue: 'Seminar PIET' },
    { sno: 5, activity: 'National Youth Day: Debate Competition', date: '12/01/2025', time: '1:00PM-2:00PM', attendees: '75+', venue: '003 block A' },
    { sno: 6, activity: '76th Republic Day Celebration', date: '26/01/2025', time: '8:50AM-12:30PM', attendees: '300+', venue: 'Administrative Block' },
    { sno: 7, activity: 'CSAY 1.0 Cyber Security Awareness', date: '31/01/2025', time: '10:00AM-12:00PM', attendees: '500+', venue: 'SM Seth Auditorium, PIET' },
    { sno: 8, activity: 'Awareness Regarding Financial Security', date: '15/02/2025', time: '12:00PM-3:20PM', attendees: '100+', venue: 'Seminar Hall' },
    { sno: 9, activity: 'Rise Mental Health Awareness Program', date: '15/02/2025', time: '8:30AM-6:00PM', attendees: '600+', venue: 'PIET JAIPUR' },
    { sno: 10, activity: 'Special 7 Day Camp - Inauguration and Environmental Consciousness', date: '25/02/2025', time: '9:00AM-3:30PM', attendees: '150+', venue: 'Seminar Hall' },
    { sno: 10, activity: 'Special 7 Day Camp - Sports and Fitness or Social Inclusion', date: '26/02/2025', time: '9:00AM-3:30PM', attendees: '-', venue: 'Volleyball court' },
    { sno: 10, activity: 'Special 7 Day Camp - Cultural Expression for Social Transformation', date: '27/02/2025', time: '9:00AM-3:30PM', attendees: '-', venue: 'PIET JAIPUR' },
    { sno: 10, activity: 'Special 7 Day Camp - Visual Arts for Social Commentary', date: '28/02/2025', time: '9:00AM-3:30PM', attendees: '-', venue: 'PIET JAIPUR' },
    { sno: 10, activity: 'Special 7 Day Camp - Nukkad Natak', date: '01/03/2025', time: '9:00AM-3:30PM', attendees: '-', venue: 'PIET JAIPUR' },
    { sno: 10, activity: 'Special 7 Day Camp - Educational Outreach', date: '02/03/2025', time: '9:30AM-3:00PM', attendees: '100+', venue: 'Ashawala Village' },
    { sno: 10, activity: 'Special 7 Day Camp - Health Equity and Concluding Reflections', date: '03/03/2025', time: '9:30AM-3:00PM', attendees: '100+', venue: 'Ashawala Village' },
    { sno: 11, activity: 'International Woman’s Day', date: '08/03/2025', time: '8:30AM-3:20PM', attendees: '40+', venue: 'PIET JAIPUR' },
    { sno: 12, activity: 'Blood Donation Day', date: '10/03/2025', time: '8:30AM-3:20PM', attendees: '700+', venue: 'PIET JAIPUR' },
    { sno: 13, activity: 'Old Age Home Visit', date: '20/03/2024', time: '12:00PM-3:20PM', attendees: '250+', venue: 'Old Age Home' },
    { sno: 11, activity: 'Awareness Session on UTI', date: '03/04/2025', time: '', attendees: '', venue: 'PIET JAIPUR' },
{ sno: 14, activity: 'World Health Day with Pioneering Cancer Awareness Initiative', date: '07/04/2025', time: '', attendees: '', venue: 'PIET JAIPUR' },
{ sno: 15, activity: 'World Earth Day Poster Making Competition', date: '22/04/2025', time: '', attendees: '', venue: 'PIET JAIPUR' },
{ sno: 16, activity: 'Session on Scope of Business in Rural Areas', date: '05/05/2025', time: '', attendees: '', venue: 'PIET JAIPUR' },
{ sno: 17, activity: 'World Environment Day', date: '05/06/2025', time: '', attendees: '', venue: 'PIET JAIPUR' },
{ sno: 18, activity: 'International Yoga Day', date: '21/06/2025', time: '', attendees: '', venue: 'PIET JAIPUR' },
{ sno: 19, activity: 'Free Health Checkup Camp', date: '06/07/2025', attendees: '50+', venue: 'PIET JAIPUR' },
{ sno: 20, activity: 'Life Saving Skills Training Program', date: '02/08/2025', attendees: '25+', venue: 'PIET JAIPUR' },
{ sno: 21, activity: 'HIV/AIDS Awareness "Red Run Marathon - 2025"', date: '08/08/2025', attendees: '40+', venue: 'PIET JAIPUR' },
{ sno: 22, activity: '79th Independence Day', date: '15/08/2025', attendees: '40+', venue: 'PIET JAIPUR' },
{ sno: 23, activity: 'Independence Day Celebration at Ramchandrpura Govt School', date: '15/08/2025', attendees: '200+', venue: 'PIET JAIPUR' },
{ sno: 24, activity: 'Yoga Session', date: '26/08/2025', attendees: '50+', venue: 'PIET JAIPUR' },
{ sno: 25, activity: 'NSS Orientation and Awareness Session on IKS', date: '03/09/2025', attendees: '200+', venue: 'PIET JAIPUR' },
{ sno: 26, activity: 'Student Outreach Activity', date: '06/09/2025', attendees: '150+', venue: 'PIET JAIPUR' },
{ sno: 27, activity: 'One Day UNICEF Training "Mental Health Awareness"', date: '12/09/2025', attendees: '', venue: 'PIET JAIPUR' },
{ sno: 28, activity: 'Expression Wall Activity for Emotional Well Being', date: '17/09/2025', attendees: '35+', venue: 'PIET JAIPUR' },
{ sno: 29, activity: 'Box Story Telling for Soundness of Mind', date: '19/09/2025', attendees: '15+', venue: 'PIET JAIPUR' },
{ sno: 30, activity: 'Vox Pop Activity for Mental Stability', date: '20/09/2025', attendees: '15+', venue: 'PIET JAIPUR' },
{ sno: 31, activity: 'Online Survey for Mental Wellness', date: '21/09/2025', attendees: '35+', venue: 'PIET JAIPUR' },
{ sno: 32, activity: 'Debate Competition for Psychological State of Students', date: '22/09/2025', attendees: '30+', venue: 'PIET JAIPUR' },
{ sno: 33, activity: 'Poster Making Competition Mental Health', date: '23/09/2025', attendees: '15+', venue: 'PIET JAIPUR' },
{ sno: 34, activity: 'NSS Day & II Unit Inauguration', date: '24/09/2025', attendees: '200+', venue: 'PIET JAIPUR' },
{ sno: 35, activity: 'Swachhta Pakhwada', date: '30/09/2025', attendees: '30+', venue: 'PIET JAIPUR' },
{ sno: 36, activity: 'Blood Donation Camp', date: '08/10/2025', attendees: '40+', venue: 'PIET JAIPUR' },
{ sno: 37, activity: 'Diya Decoration', date: '15/10/2025', attendees: '15+', venue: 'PIET JAIPUR' },
{ sno: 38, activity: 'Old Age Home Visit', date: '17/10/2025', attendees: '45+', venue: 'PIET JAIPUR' },
{ sno: 39, activity: 'Road Safety Training', date: '04/11/2025', attendees: '50+', venue: 'PIET JAIPUR' },
{ sno: 40, activity: 'Experience Sharing Workshop & Feedback Session on Man Darpan Initiative', date: '14/11/2025', attendees: '15+', venue: 'PIET JAIPUR' },
{ sno: 41, activity: "Children's Day Celebration", date: '15/11/2025', attendees: '55+', venue: 'PIET JAIPUR' },
{ sno: 42, activity: "International Men's Day Celebration", date: '19/11/2025', attendees: '25+', venue: 'PIET JAIPUR' },
{ sno: 43, activity: 'Volunteering & Enhancing Sports Initiative "Khelo India University Games 2025"', date: '24/11/2025', attendees: '50+', venue: 'PIET JAIPUR' },
{ sno: 44, activity: 'Training Session on Government Initiative & "My Bharat" Portal', date: '29/09/2025', attendees: '15+', venue: 'PIET JAIPUR' },
{ sno: 45, activity: 'Seven Days Special Camp', date: '28/11/2025', attendees: '45+', venue: 'PIET JAIPUR' },
{ sno: 46, activity: 'Closing Ceremony of Seven Days Camp & Admya Nari Ratan Samman Samroh 2025', date: '07/12/2025', attendees: '40+', venue: 'PIET JAIPUR' },
{ sno: 47, activity: 'Awareness Session on the Sexual Harassment of Women at Workplace (POSH Act)', date: '17/12/2025', attendees: '35+', venue: 'PIET JAIPUR' },
{ sno: 48, activity: 'Veer Baal Diwas Celebration', date: '26/12/2025', attendees: '40+', venue: 'PIET JAIPUR' },
{ sno: 49, activity: 'Visit & Showcasing the Power of Youth by Indian Army Parade', date: '15/01/2026', attendees: '50+', venue: 'PIET JAIPUR' },
{ sno: 50, activity: 'Marathon "Run For Swadeshi"', date: '12/01/2026', attendees: '60+', venue: 'PIET JAIPUR' },
{ sno: 51, activity: 'Rajasthan Digifest × TiE Global Summit 2026', date: '05/01/2026 - 06/01/2026', attendees: '40+', venue: 'PIET JAIPUR' },
{ sno: 52, activity: 'Republic Day Celebration', date: '26/01/2026', attendees: '200+', venue: 'PIET JAIPUR' },
];






const NSS = () => {
    return (
        <div>
            <AccessibilityFeatures />
            <Header />
            <BreadCrumb
                title="PIET - National Service Scheme"
                description="Discover who we are and what makes Poornima Institute a center of excellence."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    {
                        label: 'PIET - National Service Scheme', isCurrent: true
                    },
                ]}
            />
            <OverviewSection
                title="Introduction"
                subtitle="An Insight into PIET"
                reverse={false}
                image={{
                    src: "https://www.piet.poornima.org/images/nss-1.png",
                    alt: "Deptartment of Applied Sciences",
                    caption: "Accredited with Grade 'A' by NAAC",
                }}
            >
                <p className="text-gray-700 text-justify">
                    The National Service Scheme, popularly known as NSS, was launched in 1969 with 
                    one primary motto: <b> "Not Me, But You".</b> This simple yet powerful phrase
                     encapsulates the essence of our mission to instil the spirit of selfless 
                     service in our youth.
                </p>
                <br />
                <p className="text-gray-700 text-justify">
                    The National Service Scheme (NSS), a flagship program of the Ministry of Youth
                     Affairs and Sports, Government of India, has allotted ONE UNIT to Poornima
                      Institute of Engineering & Technology, Jaipur. The allotment was made on 28th
                       August 2024, and it is an honor to be a part of this prestigious program.
                </p>
                <br />
                <p>
                    The scheme operates with two fundamental approaches:
                </p>


                <Checklist items={points} />


                <br />

            </OverviewSection>
            
            {/* 🔷 NSS STRUCTURE */}
      <section className="bg-white py-16">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">
          Our NSS Wings
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">

          {/* Unit 1 */}
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-primary mb-3">
              NSS Unit I
            </h3>
            <p className="text-gray-600 text-justify">
              NSS Unit I actively engages students in community service,
              awareness programs, health initiatives, and educational outreach
              activities aimed at creating a positive social impact.
            </p>
          </div>

          {/* Unit 2 */}
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-primary mb-3">
              NSS Unit II
            </h3>
            <p className="text-gray-600 text-justify">
              NSS Unit II encourages participation in social welfare programs,
              environmental drives, leadership-building activities, and
              community-centered initiatives for holistic student development.
            </p>
          </div>

          {/* Red Ribbon Club */}
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition border border-red-400">
            <h3 className="text-xl font-semibold text-red-600 mb-3">
              Red Ribbon Club
            </h3>
            <p className="text-gray-600 text-justify">
              The Red Ribbon Club promotes awareness on HIV/AIDS prevention,
              health education, blood donation, and youth well-being while
              encouraging responsible and informed lifestyle choices.
            </p>
          </div>

        </div>
      </section>

      <section className="bg-gray-50 py-16">
  <div className="max-w-7xl mx-auto px-4">

    {/* Heading */}
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-primary mb-2">
        Objectives
      </h2>
      <div className="w-20 h-1 bg-secondary mx-auto"></div>
    </div>

    <div className="grid md:grid-cols-2 gap-10">

      {/* NSS Objectives Card */}
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-100">
        <h3 className="text-2xl font-semibold mb-6 text-primary flex items-center gap-2">
          <span className="text-3xl">🎯</span> NSS Objectives
        </h3>

        <ul className="space-y-4 text-gray-700">
          <li className="flex items-start gap-3">
            <span className="text-primary text-lg">✔</span>
            To understand and connect with our community
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary text-lg">✔</span>
            To identify community needs and actively contribute to problem-solving
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary text-lg">✔</span>
            To develop a strong sense of social and civic responsibility
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary text-lg">✔</span>
            To apply knowledge for practical community solutions
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary text-lg">✔</span>
            To build teamwork, leadership, and responsibility-sharing skills
          </li>
        </ul>
      </div>

      {/* Red Ribbon Club Card */}
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border border-red-100">
        <h3 className="text-2xl font-semibold mb-6 text-red-600 flex items-center gap-2">
          <span className="text-3xl">❤️</span> Red Ribbon Club Objectives
        </h3>

        <ul className="space-y-4 text-gray-700">
          <li className="flex items-start gap-3">
            <span className="text-red-500 text-lg">✔</span>
            Spread awareness about HIV/AIDS and its prevention
          </li>
          <li className="flex items-start gap-3">
            <span className="text-red-500 text-lg">✔</span>
            Promote voluntary blood donation among youth
          </li>
          <li className="flex items-start gap-3">
            <span className="text-red-500 text-lg">✔</span>
            Encourage healthy and responsible lifestyle practices
          </li>
          <li className="flex items-start gap-3">
            <span className="text-red-500 text-lg">✔</span>
            Eliminate stigma and discrimination related to HIV/AIDS
          </li>
          <li className="flex items-start gap-3">
            <span className="text-red-500 text-lg">✔</span>
            Conduct awareness campaigns and health initiatives
          </li>
          <li className="flex items-start gap-3">
            <span className="text-red-500 text-lg">✔</span>
            Develop leadership and community service skills
          </li>
        </ul>
      </div>

    </div>
  </div>
</section>


            <section className="container py-12 mx-auto">
                <NssCoreTeamsSection />
            </section>


            <section className="container py-12 mx-auto">
                <h2 className="text-3xl text-primary font-bold mb-8 text-center">Media Coverage</h2>
                <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                {/* cards with galler options */}
                <ImageGallery items={imageItems} />

            </section>

            <div className="container mt-10 mx-auto py-8">
                <h2 className="text-3xl text-primary font-bold mb-8 text-center"> Key Activities of PIET-NSS</h2>
                <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                <DynamicTable columns={activityColumns} data={activityData} />

            </div>
            <Cta />
            <Footer />
        </div>
    )
}

export default NSS
