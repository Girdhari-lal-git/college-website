import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Cta from '../components/Cta';
import BreadCrumb from '../components/BreadCrumb';
import LazyImage from '../components/LazyImage';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import DynamicTable from '../components/DynamicTable '; // Note the space at the end of the import path 
import ProfileMessageSection from '../components/ProfileMessageSection';
import { findPositionOfBar } from 'recharts/types/util/ChartUtils';

const IIC: React.FC = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Innovation', href: '#' },
    { label: 'IIC', isCurrent: true }
  ];

    // IIC Team Data
  const iicteamDocumentData = [
    {
        sno: 1,
        name: 'Dr. Dinesh Goyal',
        designation: 'Director (Teaching)',
        position: 'Head of Institute',
    },
    {
        sno: 2,
        name: 'Dr. Ajay Maurya',
        designation: 'Professor (Teaching)',
        position: 'President',
    },
    {
        sno: 3,
        name: 'Dr. Balwan',
        designation: 'Registrar (Non-Teaching)',
        position: 'Vice President',
    },
    {
        sno: 4,
        name: 'Mr. Vivek Saxena',
        designation: 'Assistant Professor (Teaching)',
        position: 'Convener',
    },
    {
        sno: 5,
        name: 'Ms. Jayshree Surolia',
        designation: 'Assistant Professor (Teaching)',
        position: 'IPR Activity Coordinator',
    },
    {
        sno: 6,
        name: 'Dr. Amit Shrivastava',
        designation: 'Professor (Teaching)',
        position: 'NIRF Coordinator',
    },
    {
        sno: 7,
        name: 'Ms. Samiksha Agarwal',
        designation: 'Assistant Professor (Teaching)',
        position: 'Innovation Activity Coordinator',
    },
    {
        sno: 8,
        name: 'Dr. Shruti Thapar',
        designation: 'Associate Professor (Teaching)',
        position: 'ARIIA Coordinator',
    },
    {
        sno: 9,
        name: 'Ms. Reshma Kala',
        designation: 'Assistant Professor (Teaching)',
        position: 'Social Media Coordinator',
    },
    {
        sno: 10,
        name: 'Ms. Harshika Jha',
        designation: 'Assistant Professor (Teaching)',
        position: 'Start up Activity Coordinator',
    },
    {
        sno: 11,
        name: 'Mr. Indra Kishor',
        designation: 'Assistant Professor (Teaching)',
        position: 'R & D Coordinator',
    },
    {
        sno: 12,
        name: 'Mr. Akhilesh Natani',
        designation: 'Director, Appcino Technologies Pvt. Ltd., Jaipur',
        position: 'External Expert',
    },
    {
        sno: 13,
        name: 'Mr. Puneet Mittal',
        designation: 'Co-Founder & CEO, Pratham Software, Jaipur',
        position: 'Industrialists/ stakeholders',
    },
    {
        sno: 14,
        name: 'Mr. Varun Chahar',
        designation: 'Student',
        position: 'Student Member',
    },
    {
        sno: 15,
        name: 'Mr. Shubham Pratap Singh',
        designation: 'Student',
        position: 'Student Member',
    }
]
;

// IIC Team Table Columns

const iicteamtableColumns = [
    { label: 'S.No', key: 'sno' },
    { label: 'Name', key: 'name' },
    { label: 'Designation', key: 'designation' },
    { label: 'Position', key: 'position' },


];

//iic Resources data
const iicresourceDocumentData = [
    {
        sno: 1,
        name: 'Total No. of IIC Members',
        number: '25',
    },
    {
        sno: 2,
        name: 'Total No. of faculty Mentors from Portal',
        number: '05',
    },
    {
        sno: 3,
        name: 'Incubation Units, If any',
        number: '09',
    },
    {
        sno: 4,
        name: 'Total No. of IAs',
        number: '29',
    },
    {
        sno: 5,
        name: 'Pre-Incubation Units, If any',
        number: '05',
    },
    {
        sno: 6,
        name: 'IP Facilitation Unit, If any',
        number: '10',
    }
]
;

//iic Resources table Columns
const iicresourcetableColumns = [
    { label: 'S.No', key: 'sno' },
    { label: 'Type', key: 'name' },
    { label: 'Number', key: 'number' },
   


];

// IIC Annual Reports Data
const iicreportsDocumentData = [
    {
        sno: 1,
        name: 'Annual Report 2023-24',
        download: (
            <a href="https://drive.google.com/file/d/1soaLlIi4kmeYECqya5Aaz1077ldYgWL8/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download PDF
                </button>
            </a>
        )
    },
    {
        sno: 2,
        name: 'Annual Report 2022-23',
        download: (
            <a href="https://drive.google.com/file/d/1ZmOXAW28n182jbcXIFuVpLx60aTLYJm6/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download PDF
                </button>
            </a>
        )
    },
    {
        sno: 3,
        name: 'Annual Report 2021-22',
        download: (
            <a href="https://drive.google.com/file/d/1qabfAC2dTYbZQrzvv28jVPa_HrfMhRT4/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download PDF
                </button>
            </a>
        )
    },
    {
        sno: 4,
        name: 'Annual Report 2020-21',
        download: (
            <a href="https://drive.google.com/file/d/1wp1vaheZSTe2YgJrb92NvCSlkUEuUUZD/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download PDF
                </button>
            </a>
        )
    }
];

// IIC Annual Reports Table Columns
const iicreportdocumentColumns = [
    { label: 'S.No', key: 'sno' },
    { label: 'Name', key: 'name' },
    { label: 'Download', key: 'download' }
];

// IIC Certificates Data
const iiccertificateDocumentData = [
    {
        sno: 1,
        name: 'Letter of Appreciation 2022-23',
        download: (
            <a href="https://drive.google.com/file/d/1Av03JOJSgljdwjutlsGdXgaLChhFJPsF/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download PDF
                </button>
            </a>
        )
    },
    {
        sno: 2,
        name: 'Letter of Appreciation 2021-22',
        download: (
            <a href="https://drive.google.com/file/d/1Zk8hbwKfKhfViO5C_UH5_qP7pacsSbd1/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download PDF
                </button>
            </a>
        )
    },
    {
        sno: 3,
        name: 'Ratings Certificate 2022-23',
        download: (
            <a href="https://drive.google.com/file/d/1RQneIQptwHiigYtWyAftP70LsjGrA8DZ/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download PDF
                </button>
            </a>
        )
    },
    {
        sno: 4,
        name: 'Ratings Certificate 2021-22',
        download: (
            <a href="https://drive.google.com/file/d/1juhkeF8AMuIeNezI3nZcuyI8qctPJgQv/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download PDF
                </button>
            </a>
        )
    },
    {
        sno: 5,
        name: 'Ratings Certificate 2020-21',
        download: (
            <a href="https://drive.google.com/file/d/1uiqfsOD267GA3ZrSGeSndGrs96tB72p4/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download PDF
                </button>
            </a>
        )
    },
    {
        sno: 6,
        name: 'Ratings Certificate 2019-20',
        download: (
            <a href="https://drive.google.com/file/d/1fQRl6_P1iwd9ezVdPDtXoCRb6fcpV2IQ/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download PDF
                </button>
            </a>
        )
    },
    {
        sno: 7,
        name: 'Ratings Certificate 2018-19',
        download: (
            <a href="https://drive.google.com/file/d/1ewEO4HSm4tZt5BBQlTIYaYcN5mh6PBqu/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download PDF
                </button>
            </a>
        )
    },
    {
        sno: 8,
        name: 'Establisment Certificate',
        download: (
            <a href="https://drive.google.com/file/d/1qF6gKstet03pR-vGlCIIRxGCJIsJr-Fx/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download PDF
                </button>
            </a>
        )
    }
];

// IIC certificates Table Columns
const iiccertificatedocumentColumns = [
    { label: 'S.No', key: 'sno' },
    { label: 'Name', key: 'name' },
    { label: 'Download', key: 'download' }
];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />

      <BreadCrumb
        title="Institution's Innovation Council (IIC)"
        description="Fostering innovation and entrepreneurship at PIET"
        breadcrumbs={breadcrumbItems}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-blue-700">About IIC</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  In the year 2018, the Ministry of Education (MoE) through MoE’s Innovation Cell (MIC) launched the
                   Institution’s Innovation Council (IIC) program in collaboration with AICTE for Higher Educational 
                   Institutions (HEIs) to systematically foster the culture of innovation and start-up ecosystem in 
                   education institutions. Under IIC our Institution has been performing various activities in past
                    years, and had continued to do the same even though the whole year is undergone to the pandemic.
                    </p>
                    <p>
                     PIET -IIC got 3.5 Star Rating allotted by MOE India. The institution is dedicated to conducting 
                     activities related to IP, start-up and innovation during 2019-20 under the IIC flagships. These 
                     activities were appreciated by all stakeholders and thus we got motivated to improve in the last
                      year i.e., 2021-22. In the year 2021-22 IIC of PIET has organized 65 activities to address research
                       & innovation, start-up, internship, IPR etc. 
                       </p>
                       <p>
                       PIET organized a start-up innovation contest to provide a platform for young innovative brains. Along with it, the IIC of PIET also organized 10 
                        sessions to understand the importance of IPR and to convert projects into IP. Council tried to
                         develop and nurture young brains to create new initiatives based on innovation and starting 
                         start-ups. In this session, four IPR, three start-up sessions, two start-up contests and four
                          innovation & research activities and workshops were organized during this year. These activities 
                          also resulted in new start-ups developed by our students and IPR developed by our faculty &
                           students. PIET 28 young innovators also participated in the regional meet of IIC at Amity
                            University Jaipur. We have conducted a National level Project Exhibition and contest 
                            UDHBHAV-2022 in our campus. More than 50 schools and colleges participated.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  In the academic year 2023-24, two SIH were hosted by Poornima-IIC. In the current academic year, 
                  IIC conducted 35 activities in the first and second quarters. We have also participated in a regional 
                  meet at Amity University and got first prize in innovation. 
                  our students also participated Start up submit at JK Lakmipat University Jaipur on 28 Feb 2024.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-blue-700">Objectives</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    To create a vibrant local innovation ecosystem
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    To prepare students for entrepreneurship and innovation
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    To support incubation of new ideas and startups
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    To establish strong networks with industry and academia
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-blue-700">Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-700 mb-2">Innovation Workshops</h4>
                    <p className="text-sm text-gray-600">Regular workshops on design thinking and innovation methodologies</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-700 mb-2">Startup Support</h4>
                    <p className="text-sm text-gray-600">Mentoring and incubation support for student startups</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-700 mb-2">Industry Connect</h4>
                    <p className="text-sm text-gray-600">Connecting students with industry experts and mentors</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-700 mb-2">Innovation Challenges</h4>
                    <p className="text-sm text-gray-600">Organizing hackathons and innovation competitions</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

            

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-bold text-blue-700">Quick Links</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <a href="https://drive.google.com/file/d/1IbZeXAKzPyvGmHNV4Jk_NGy2DrjIF267/view?usp=drive_link" className="block text-blue-600 hover:text-blue-800 transition-colors">Innovation Policy</a>
                  <a href="https://drive.google.com/file/d/1IbZeXAKzPyvGmHNV4Jk_NGy2DrjIF267/view?usp=drive_link" className="block text-blue-600 hover:text-blue-800 transition-colors">Startup Guidelines</a>
                  <a href="https://drive.google.com/file/d/1FJ6mSnaX1arXJKQuojqunD17Mu8XjkBZ/view?usp=drive_link" className="block text-blue-600 hover:text-blue-800 transition-colors">IIC Committee</a>
                  
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-bold text-blue-700">Contact IIC</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Email:</strong> piet.iic@poornima.org</p>
                  <p><strong>Phone:</strong> +91-141-2761001</p>
                  <p><strong>Office:</strong> PBIC, PIET Campus</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

        {/* IIC Team */}

          <div className="container mt-14 mx-auto mb-10">
                <h2 className="text-3xl text-primary font-bold mb-8 text-center">IIC Campus Team</h2>
                <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                <DynamicTable columns={iicteamtableColumns} data={iicteamDocumentData} />
            </div>

            {/* IIC Resources Team */}
          

          <div className="container mt-14 mx-auto mb-10">
                <h2 className="text-3xl text-primary font-bold mb-8 text-center">IIC Campus Resources</h2>
                <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                <DynamicTable columns={iicresourcetableColumns } data={iicresourceDocumentData} />
            </div>

            {/* IIC Annual Reports */}
             <div className="container mt-14 mx-auto mb-10">
                <h2 className="text-3xl text-primary font-bold mb-8 text-center">IIC Annual Reports</h2>
                <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                <DynamicTable columns={iicreportdocumentColumns} data={iicreportsDocumentData} />
            </div>

              {/* IIC Certificates */}
             <div className="container mt-14 mx-auto mb-10">
                <h2 className="text-3xl text-primary font-bold mb-8 text-center">IIC Certificates</h2>
                <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                <DynamicTable columns={iiccertificatedocumentColumns} data={iiccertificateDocumentData} />
            </div>


      <Cta />
      <Footer />
    </div>
  );
};

export default IIC;