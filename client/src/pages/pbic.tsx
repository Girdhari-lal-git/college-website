import React from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import BreadCrumb from "@/components/BreadCrumb";
import LazyImage from "@/components/LazyImage";
import InfoCard from "@/components/InfoCard";
import Checklist from "@/components/Checklist";
import { AccessibilityFeatures } from "@/components/AccessibilityFeatures";

const presidentInfo = {
    name: "Dr. Ajay Maurya",
    designation: "President, Poornima Business Incubation Centre",
    imageUrl: "/images/pbic/Ajay_Maurya-2025.jpg", // Replace with the actual image URL
    message: (
        <>
           <strong>Dear Students, Startups, and Faculty Members,</strong> <br />
It gives me immense pride to welcome you to the Poornima Business Incubation Centre (PBIC) – a
thriving hub of innovation, creativity, and entrepreneurial spirit. At PBIC, we strongly believe that
ideas have the power to transform lives, industries, and communities. Our mission is to nurture
these ideas by providing a supportive ecosystem where aspiring entrepreneurs can explore,
experiment, and excel.<br />
We are committed to fostering a culture of innovation by bridging the gap between academia and
industry. PBIC offers guidance, mentorship, infrastructure, and resources to students, startups, and
faculty who are passionate about solving real-world problems through technology, creativity, and
entrepreneurship.
For students, PBIC is an opportunity to move beyond textbooks and discover the exciting journey of
converting ideas into impactful ventures. For startups, it is a platform to gain access to mentors,
investors, and networks that can accelerate growth. For faculty members, it provides a space to
channelize research and innovation into meaningful entrepreneurial outcomes. <br />
Together, we aspire to create a community that not only embraces entrepreneurial thinking but also
contributes to nation-building by generating employment, advancing technology, and fostering
sustainable development.
I invite all of you to actively participate, collaborate, and leverage the opportunities at PBIC. Let us
work hand in hand to build an ecosystem that inspires innovation and empowers entrepreneurs of
tomorrow. <br />
With warm regards, <br/>
Prof. (Dr.) Ajay Maurya</>
    ),
};

const objectivePoints = [
    "To create awareness on entrepreneurship among the students.",
    "To inculcate entrepreneurial spirit and culture among the Science and Engineering  graduates",
    "To conduct programs in Entrepreneurship  enabling  skills.",
    "To promote innovation and entrepreneurship .",
];
const elegibilty = [
    "Students & Alumni of Poornima Group",
    "TPoornima Group s R&D partners (sponsors of R&D and consultancy projects)",
    "Poornima Groups partner universities(having R & D collaborations in place) and government agencies associated with Poornima Groups research and innovations.",
    "Permanent staff of Poornima Group",
    "PBIC alumni on selective basis.",
    "Applicants supported under any program managed by PBIC.",
];
const Physical = [
    "Fully furnished Office Space",
    "Shared resources: Meeting rooms, Conference rooms.",
    "Office productivity equipment: Fax, Photocopier, Printer, Scanner, Projector",
    "Lab: PBIC Lab with Equipment and software tools, Facilitation for access to PIET Labs",
];
const Innovation = [
    "PR Registration and examination for the start-ups is also facilitated by PIET-PBIC at no cost.",
    "PBIC helps convert technology ideas & innovations into commercially viable products, processes, and services.",
    "Mentorship by domain experts, successful entrepreneurs, and industry leaders.",
    "Networking opportunities with investors, industry partners, and other startups.",
];
const Utility = ["PElectricity", "Internet", "Water", "Maintenance"];

const annualreports = [
    
    {
        year: "2024-25",
        title: "PBIC Annual Report 2024-25",
        pdfUrl: "https://drive.google.com/file/d/1eJybA6PFFptNNiLL79WQ22wkbA8Ol-0c/view?usp=drive_link",
    },

    {
        year: "2023-24",
        title: "PBIC Annual Report 2023-24",
        pdfUrl: "https://drive.google.com/file/d/1KJGuNyq1jL_VY-LKBe0WkFMrA6CoG_sY/view?usp=drive_link",
    },
    {
        year: "2022-23",
        title: "PBIC Annual Report 2022-23",
        pdfUrl: "https://drive.google.com/file/d/1kIFQXO0OXnSaed7sD377sp-fTneraWJz/view?usp=drive_link",
    },
    {
        year: "2021-22",
        title: "PBIC Annual Report 2021-22",
        pdfUrl: "https://drive.google.com/file/d/17FmdlhkOlHhPlheaGoGueFG1FhqXonIS/view?usp=drive_link",
    },
    {
        year: "2020-21",
        title: "PBIC Annual Report 2020-21",
        pdfUrl: "https://drive.google.com/file/d/1dNdwHMA9DvDgjygc4ibg8YVeqTGLvz7s/view?usp=drive_link",
    },
];

import ImageGallery from "@/components/ImageGallery";
import FacultySwiper from "@/components/FacultySwiper";
import DynamicTable from "@/components/DynamicTable ";
import ReportTimeline from "@/components/ReportTimeline";

const facultyData = [
    {
        imageSrc:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_FZR1-SNQItQMwECGXMp7MYCspr3Fm0R61Q&s",
        name: "Dr. Ajay Maurya	",
        gender: "Male",
        designation: "PBIC Coordinator",
    },
    {
        imageSrc:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_FZR1-SNQItQMwECGXMp7MYCspr3Fm0R61Q&s",
        name: "Mr. Varun Chahar	",
        gender: "Male",
        designation: "PBIC Student Coordinator",
    },
    {
        imageSrc:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_FZR1-SNQItQMwECGXMp7MYCspr3Fm0R61Q&s",
        name: "Mr. Shubham Pratap Singh",
        gender: "Male",
        designation: "PBIC Student Coordinator",
    },
    {
        imageSrc:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_FZR1-SNQItQMwECGXMp7MYCspr3Fm0R61Q&s",
        name: "	Dr. Balwan",
        gender: "Male",
        designation: "PBIC, Campus Coordinator, PIET",
    },
    {
        imageSrc:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_FZR1-SNQItQMwECGXMp7MYCspr3Fm0R61Q&s",
        name: "Dr. Mukesh Chandra",
        gender: "Male",
        designation: "PBIC Campus Coordinator, PIET",
    },
];

const columns = [
    { label: "S.No", key: "sno" },
    { label: "Startup Name", key: "startupName" },
    { label: "Student Name", key: "studentName" },
    { label: "PBIC ID", key: "pbicid" },
    { label: "Year", key: "year" },
];

const startups = [
  {
    sno: 1,
    startupName: "Theta Electronics",
    studentName: "Ajay Saini",
    pbicid: "2018P-1",
    year: 2018
  },
  {
    sno: 2,
    startupName: "RashanBag",
    studentName: "Shubham Khandelwal",
    pbicid: "2018P-2",
    year: 2018
  },
  {
    sno: 3,
    startupName: "Writer's Voice Society",
    studentName: "Ram Kinkar Tripathi",
    pbicid: "2018P-3",
    year: 2018
  },
  {
    sno: 4,
    startupName: "Tinkers Town",
    studentName: "Ravi Suthar",
    pbicid: "2018P-4",
    year: 2018
  },
  {
    sno: 5,
    startupName: "NamasteSir.com",
    studentName: "Nitin Jindal",
    pbicid: "2018P-5",
    year: 2018
  },
  {
    sno: 6,
    startupName: "Regoolur Product and Technologies Pvt Ltd",
    studentName: "Tanya Kumawat",
    pbicid: "2018P12-6",
    year: 2018
  },
  {
    sno: 7,
    startupName: "M/s BreadNButter Tech",
    studentName: "Saksham Saxena",
    pbicid: "2019P10-1",
    year: 2019
  },
  {
    sno: 8,
    startupName: "READINGBOX.IN",
    studentName: "Amit Jangid",
    pbicid: "2019P08-2",
    year: 2019
  },
  {
    sno: 9,
    startupName: "Technobuild Private Limited",
    studentName: "Abhishek Parashar",
    pbicid: "2019P08-3",
    year: 2019
  },
  {
    sno: 10,
    startupName: "Auxicuix Consultancies LLP",
    studentName: "Abhinav Tiwari",
    pbicid: "2020P10-1",
    year: 2020
  },
  {
    sno: 11,
    startupName: "olxtech (Bech Do)",
    studentName: "Yash Saxena",
    pbicid: "2020P11-2",
    year: 2020
  },
  {
    sno: 12,
    startupName: "Digital Darzi",
    studentName: "Himanshu Hingorani",
    pbicid: "2021P01-1",
    year: 2021
  },
  {
    sno: 13,
    startupName: "Book of Youth",
    studentName: "Priyanshi Goyal",
    pbicid: "2021P03-2",
    year: 2021
  },
  {
    sno: 14,
    startupName: "Local Eyes",
    studentName: "Yuvraj Dagur",
    pbicid: "2021P04-3",
    year: 2021
  },
  {
    sno: 15,
    startupName: "The Engineers Cafe",
    studentName: "Amit Jangid",
    pbicid: "2021P06-4",
    year: 2021
  },
  {
    sno: 16,
    startupName: "PIE Star Interactive Studio",
    studentName: "Vikash Sharma",
    pbicid: "2021P11-5",
    year: 2021
  },
  {
    sno: 17,
    startupName: "Kanha Ji Handicrafts",
    studentName: "Gaurav Prajapat",
    pbicid: "2022P08-1",
    year: 2022
  },
  {
    sno: 18,
    startupName: "Rent N Earn",
    studentName: "Ankit Khemani",
    pbicid: "2022P08-2",
    year: 2022
  },
  {
    sno: 19,
    startupName: "Aerophantom",
    studentName: "Rahul Sharma",
    pbicid: "2022P09-3",
    year: 2022
  },
  {
    sno: 20,
    startupName: "CAFTRO",
    studentName: "Sourav Sharma",
    pbicid: "2023P02-1",
    year: 2023
  },
  {
    sno: 21,
    startupName: "REP-X",
    studentName: "Nitesh Sharma",
    pbicid: "2023P02-2",
    year: 2023
  },
  {
    sno: 22,
    startupName: "MOOONTECH",
    studentName: "Jeki Panchal",
    pbicid: "2023P02-3",
    year: 2023
  },
  {
    sno: 23,
    startupName: "Devils Honey",
    studentName: "Abhinav Tiwari",
    pbicid: "2023P02-4",
    year: 2023
  },
  {
    sno: 24,
    startupName: "Bitesfly",
    studentName: "Bhavya Agarwal",
    pbicid: "2023P02-5",
    year: 2023
  },
  {
    sno: 25,
    startupName: "V-gthr",
    studentName: "Dhruv Sharma",
    pbicid: "2023P04-6",
    year: 2023
  },
  {
    sno: 26,
    startupName: "Staqia",
    studentName: "Lakshya Jain",
    pbicid: "2023P10-7",
    year: 2023
  },
  {
    sno: 27,
    startupName: "Comacks",
    studentName: "Arpit Singh",
    pbicid: "2023P10-8",
    year: 2023
  },
  {
    sno: 28,
    startupName: "Teknokrshak",
    studentName: "Rajendra Choudhary",
    pbicid: "2023P10-9",
    year: 2023
  },
  {
    sno: 29,
    startupName: "WEBTECH.IT",
    studentName: "Saurav Singh",
    pbicid: "2024P01-1",
    year: 2024
  },
  {
    sno: 30,
    startupName: "MKG Servicemen",
    studentName: "Dhruv Gupta",
    pbicid: "2024P02-1",
    year: 2024
  },
  {
    sno: 31,
    startupName: "Blinxher",
    studentName: "Sneha Meghnani",
    pbicid: "2024P09-1",
    year: 2024
  },
  {
    sno: 32,
    startupName: "Borrow-Hub",
    studentName: "Anurag Dadhich",
    pbicid: "2024P09-1",
    year: 2024
  },
  {
    sno: 33,
    startupName: "PG-Pyaara Ghar",
    studentName: "Varun Chahar",
    pbicid: "2024P09-2",
    year: 2024
  },
  {
    sno: 34,
    startupName: "Diksha Education",
    studentName: "Koushal Acharya",
    pbicid: "2024P09-3",
    year: 2024
  },
  {
    sno: 35,
    startupName: "NexTech",
    studentName: "Ansh Kumawat",
    pbicid: "2024P10-1",
    year: 2024
  },
  {
    sno: 36,
    startupName: "Krashivv",
    studentName: "Aashika Singhal",
    pbicid: "2024P10-2",
    year: 2024
  },
  {
    sno: 37,
    startupName: "Scribblesslott",
    studentName: "Ayushi Bhardwaj",
    pbicid: "2024P10-3",
    year: 2024
  },
  {
    sno: 38,
    startupName: "Expoliv",
    studentName: "Kartikey Sharma",
    pbicid: "2024P10-4",
    year: 2024
  },
  {
    sno: 39,
    startupName: "Empire Edge Marketing",
    studentName: "Aakash Singh",
    pbicid: "2025P01-1",
    year: 2025
  },
  {
    sno: 40,
    startupName: "Pick Your Price",
    studentName: "Shubham",
    pbicid: "2025P01-2",
    year: 2025
  },
  {
    sno: 41,
    startupName: "Urban Loft",
    studentName: "Jayansh Jaiminee",
    pbicid: "2025P01-3",
    year: 2025
  },
  {
    sno: 42,
    startupName: "Graphic Moron",
    studentName: "Sahaj Jain",
    pbicid: "2025P02-1",
    year: 2025
  },
  {
    sno: 43,
    startupName: "CollabClan",
    studentName: "Ashish Kumar",
    pbicid: "2025P02-2",
    year: 2025
  },
  {
    sno: 44,
    startupName: "WELKIN MEDIA & ENTERTAINMENT",
    studentName: "Manas Joshi",
    pbicid: "2025P02-3",
    year: 2025
  },
  {
    sno: 45,
    startupName: "NOVA",
    studentName: "Ekansh Sharma",
    pbicid: "2025P02-4",
    year: 2025
  },
  {
    sno: 46,
    startupName: "3RE-Tech",
    studentName: "Sujal Tarafdar",
    pbicid: "2025P03-1",
    year: 2025
  },
  {
    sno: 47,
    startupName: "Zapserve",
    studentName: "Akshat Varshney",
    pbicid: "2025P04-1",
    year: 2025
  },
  {
    sno: 48,
    startupName: "Nivi Inc",
    studentName: "Vivek Kumar",
    pbicid: "2025P04-2",
    year: 2025
  },
  {
    sno: 49,
    startupName: "Linkstatic Techno",
    studentName: "Aditya Pareek",
    pbicid: "2025P08-1",
    year: 2025
  },
  {
    sno: 50,
    startupName: "Health Guard",
    studentName: "Tanishq Sharma",
    pbicid: "2025P10-1",
    year: 2025
  },
]; 



const pbic = () => {
    return (
        <div>
            <AccessibilityFeatures />
            <Header />
            <BreadCrumb
                title="Poornima Business Incubation Centre"
                description="Discover who we are and what makes Poornima Institute a center of excellence."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    {
                        label: "Poornima Business Incubation Centre",
                        isCurrent: true,
                    },
                ]}
            />
            <div className="container mx-auto py-10 px-4">
                <LazyImage
                    src="/images/pbic/pbic.jpg"
                    alt={"Poornima Business Incubation Centre"}
                    className="w-full border h-auto border-primary"
                />
                <p className="my-3 text-justify">
                    Poornima Business Incubation Centre (PBIC) is the venture
                    arm of Poornima Institute of Engineering & Technology (PIET)
                    nurtures and fosters incubation of startups. It is an
                    incubation centre for startups whose objectives are to
                    cultivate and promote entrepreneurism among talented youth,
                    students and experienced alike. Anyone with an idea and
                    unflinching determination to give it a shape is an ideal
                    candidate to associate with PBIC. Poornima Business
                    Incubation Centre (PBIC) is set up to promote innovation and
                    entrepreneurship by converting and translating technology
                    ideas and innovation in various disciplines of science and
                    engineering into products, processes and services for
                    commercial exploitation and for the benefit of society. PBIC
                    offers incubation facilities and services to prospective
                    entrepreneurs to their innovative ideas into commercially
                    viable products. PBIC provides certain facilities like
                    physical infrastructure and support systems necessary for
                    business incubation activities, Services such as training or
                    High- speed Internet access, links to higher education
                    resources, accounting and financial management etc. It
                    facilitates networking with professional resources, which
                    include mentors, experts, consultants and advisors for the
                    incubates. PBIC also conducts events like entrepreneurial
                    talk series, workshops, open pitches and seminars to offer a
                    good interface and visibility in the region. Poornima
                    Institute of Engineering & Technology has been supporting
                    the new budding Entrepreneurs since 2014 through a club
                    which was known as E-cell and which is now working in
                    coordination with PBIC.
                </p>
            </div>

                         {/* ADD: President's Message Section */}
            <div className="container mx-auto py-15 px-8">
                <h2 className="text-3xl text-primary font-bold mb-8 text-left">
                    Message from President(PBIC)
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Left: Image and Info */}
                    <div className="text-center md:text-center">
                        <LazyImage
                            src={presidentInfo.imageUrl}
                            alt={presidentInfo.name}
                            className="rounded-full w-90 h-90 mx-auto md:mx-0 object-cover shadow-lw " // Increased size, object-cover, shadow
                        />
                        <h3 className="text-3xl font-bold mt-4 text-primary"> {/* Increased font size */}
                            {presidentInfo.name}
                        </h3>
                        <p className="text-neutral-600 text-lg"> {/* Increased font size and changed color */}
                            {presidentInfo.designation}
                        </p>
                    </div>

                    {/* Right: Message */}
                    <div>
                        <div className="prose lg:prose-lg text-justify">
                            <p>  {presidentInfo.message}</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className=" container mx-auto my-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                <InfoCard
                    title="Objective"
                    iconClass="fas fa-eye"
                    content={<Checklist items={objectivePoints} />}
                />

                <InfoCard
                    title="Eligibility"
                    iconClass="fas fa-eye"
                    content={<Checklist items={elegibilty} />}
                />
            </div>
            <div className="bg-blue-50 border border-primary p-10">
                <div className="container mx-auto border-primary y">
                    <h2 className="text-3xl text-primary font-bold mb-8 text-center">
                        Structure Of PBIC
                    </h2>
                    <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                    <FacultySwiper profiles={facultyData} />
                </div>
            </div>

            <div className="container mt-10 mx-auto  border-primary">
                <h2 className="text-3xl text-primary font-bold mb-8 text-center">
                    Details Of Facilities{" "}
                </h2>
                <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                <LazyImage
                    src="/images/pbic/pbic1.jpg"
                    alt={"Poornima Business Incubation Centre"}
                    className="w-full border h-auto border-primary rounded-sm shadow-sm"
                />
            </div>
            <div className="my-14 p-3 container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Column 1 */}
                    <div>
                        <h2 className="text-2xl font-bold text-primary flex items-center gap-2 mb-4">
                            <i className="fas fa-arrow-right text-secondary"></i>
                            Physical infrastructure:
                        </h2>
                        <Checklist items={Physical} />
                    </div>

                    {/* Column 2 */}
                    <div>
                        <h2 className="text-2xl font-bold text-primary flex items-center gap-2 mb-4">
                            <i className="fas fa-arrow-right text-secondary"></i>
                            Innovation Support
                        </h2>
                        <Checklist items={Innovation} />
                    </div>

                    {/* Column 3 */}
                    <div>
                        <h2 className="text-2xl font-bold text-primary flex items-center gap-2 mb-4">
                            <i className="fas fa-arrow-right text-secondary"></i>
                            Utility
                        </h2>
                        <Checklist items={Utility} />
                    </div>
                </div>
            </div>
            <div className="bg-red-50 border border-red p-10">
                <div className="container mt-10 mx-auto">
                    <h2 className="text-3xl text-primary font-bold mb-8 text-center">
                        List of Startups Registered under PBIC
                    </h2>
                    <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                    <DynamicTable columns={columns} data={startups} />
                </div>
            </div>

           <div className="text-center mx-auto px-4 lg:px-0 relative z-10 my-10 flex items-center justify-center flex-col">
  <h2 className="text-3xl font-heading font-bold text-primary mb-6 leading-tight font-extrabold text-gray-900 pb-2 inline-block">
    PBIC Annual Reports
  </h2>
  <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>


  {/* Table Section */}
<div className="bg-white container mx-auto mt-10 overflow-x-auto p-4 rounded-lg">
  <table className="w-full border border-gray-200 divide-y divide-gray-200 rounded-lg shadow-lg">
    <thead className="bg-gray-100">
      <tr>
        <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">Year</th>
        <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">Title</th>
        <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">Download</th>
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
      {annualreports.map((report, idx) => (
        <tr key={idx} className="hover:bg-gray-50 transition">
          <td className="px-4 py-3 text-md text-gray-800">{report.year}</td>
          <td className="px-4 py-3 text-md text-gray-800">{report.title}</td>
          <td className="px-4 py-3 text-md text-primary">
            <a
              href={report.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary-dark"
            >
              View Report
            </a>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

</div>


            <Cta />
            <Footer />
        </div>
    );
};

export default pbic;
