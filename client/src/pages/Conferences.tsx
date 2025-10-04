import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Cta from '@/components/Cta';
import BreadCrumb from '@/components/BreadCrumb';
import DynamicTable from '@/components/DynamicTable ';
import { AccessibilityFeatures } from '@/components/AccessibilityFeatures';

const conferenceColumns = [
    { label: 'S. No', key: 'sno' },
    { label: 'Title of the proceedings of the conference', key: 'title' },
    { label: 'Name of the conference', key: 'name' },
    { label: 'Date of Conference', key: 'date' },
    { label: 'National / International', key: 'type' },
    { label: 'Year of publication', key: 'year' },
    { label: 'Link to Proceedings', key: 'link' }
];

const conferenceData = [

    {
  sno: 1,
  title: 'International Conference on Intelligent Systems Using Semiconductors for Robotics and IoT',
  name: 'ICISRI-2024',
  date: '29-30 November 2024',
  type: 'International',
  year: '2024',
  link: (
    <a
      href="NA"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:underline"
    >
      NA
    </a>
  ),
},
{
  sno: 2,
  title: 'International Conference on Information Management and Machine Intelligence',
  name: 'ICIMMI-2024',
  date: '23-24 December 2024',
  type: 'International',
  year: '2024',
  link: (
    <a
      href="https://dl.acm.org/doi/proceedings/10.1145/3745812"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:underline"
    >
      ICIMMI-2024
    </a>
  ),
},
{
  sno: 3,
  title: 'International Conference on Recent Advances in Artificial Intelligence, Computer Vision & Smart Systems',
  name: 'ICRACS-2025',
  date: '16-17 April 2025',
  type: 'International',
  year: '2025',
  link: (
    <a
      href="NA"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:underline"
    >
      NA
    </a>
  ),
},
{
  sno: 4,
  title: 'International Conference on Sustainable & Intelligent Computing in Science and Technology',
  name: 'ICSICST-2025',
  date: '16-17 May 2025',
  type: 'International',
  year: '2025',
  link: (
    <a
      href="NA"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:underline"
    >
      NA
    </a>
  ),
},
{
  sno: 5,
  title: 'International Conference on Networked Computing and Data Analytics',
  name: 'ICNCDA-2025',
  date: '23-24 May 2025',
  type: 'International',
  year: '2025',
  link: (
    <a
      href="NA"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:underline"
    >
      NA
    </a>
  ),
},


  {
    sno: 6,
    title: 'International Conference on Smart Innovations for Society',
    name: 'ICSIS- 2024',
    date: '24-25 April 2024',
    type: 'International',
    year: '2024',
    link: (
      <a
        href="https://www.taylorfrancis.com/books/edit/10.1201/9781003598152/recent-advances-sciences-engineering-information-technology-management-dinesh-goyal-bhanu-pratap-sandeep-gupta-saurabh-raj-rekha-rani-agrawal-indra-kishor"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        ICSIS-2024 (IJTE)
      </a>
    ),
  },
  {
    sno: 7,
    title: 'International Conference on Intelligent Systems & Computing',
    name: 'ICISC- 2024',
    date: '24-25 April 2024',
    type: 'International',
    year: '2024',
    link: (
      <a
        href="https://www.taylorfrancis.com/books/edit/10.1201/9781003598152/recent-advances-sciences-engineering-information-technology-management-dinesh-goyal-bhanu-pratap-sandeep-gupta-saurabh-raj-rekha-rani-agrawal-indra-kishor"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        ICISC-2024 (IJTE)
      </a>
    ),
  },
  {
    sno: 8,
    title:
      'International Conference on Recent Advances in Artificial intelligence, Computer Vision & Smart Systems',
    name: 'ICRACS 2024',
    date: '24-25 April 2024',
    type: 'International',
    year: '2024',
    link: (
      <a
        href="http://www.isteonline.in/Datafiles/cms//Special%20Issues//Spl%20issue%201%20June%202024%20for%20web%20uploading.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        ICRACS 2024 (IJTE)
      </a>
    ),
  },
  {
    sno: 9,
    title: 'International Conference on Information Management and Machine Intelligence',
    name: 'ICIMMI 2023',
    date: '14-16 December 2023',
    type: 'International',
    year: '2023',
    link: (
      <a
        href="https://dl.acm.org/doi/proceedings/10.1145/3647444"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        ICIMMI-2023 (ACM-NY)
      </a>
    ),
  },
  {
    sno: 10,
    title: 'International Conference on Mathematics, Modeling and Statistics',
    name: 'ICMMS 2023',
    date: '1-2 September 2023',
    type: 'International',
    year: '2023',
    link: (
      <a
        href="https://tarupublications.com/doi/10.47974/JIM-27-2-Foreword"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        ICMMS-2023 (Taru Publication)
      </a>
    ),
  },
  {
    sno: 11,
    title:
      'International Conference on Research Trends of ICT Using Digital Libraries with Human Values & Ethics',
    name: 'ICIDLHV 2023',
    date: '10-11 February 2023',
    type: 'International',
    year: '2023',
    link: (
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        ICIDLHV 2023 (STM Publication)
      </a>
    ),
  },
  {
    sno: 12,
    title: 'International Conference on Information Management and Machine Intelligence',
    name: 'ICIMMI 2022',
    date: '23-24 December 2022',
    type: 'International',
    year: '2023',
    link: (
      <a
        href="https://dl.acm.org/doi/proceedings/10.1145/3590837"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        ICIMMI 2022 (ACM NY)
      </a>
    ),
  },
  {
    sno: 13,
    title: 'International Conference on Smart Innovations for Society',
    name: 'ICSIS 2022',
    date: '6-7 May 2022',
    type: 'International',
    year: '2023',
    link: (
      <a
        href="https://pubs.aip.org/aip/acp/article-abstract/2782/1/010001/2896526/Preface-Proceedings-of-5th-International?redirectedFrom=PDF"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        ICSIS 2022 (AIP Proceeding)
      </a>
    ),
  },
  {
    sno: 14,
    title: 'International Conference on Intelligent Systems and Computation',
    name: 'ICISC 2022',
    date: '6-7 May 2022',
    type: 'International',
    year: '2023',
    link: (
      <a
        href="https://pubs.aip.org/aip/acp/article-abstract/2782/1/010001/2896526/Preface-Proceedings-of-5th-International?redirectedFrom=PDF"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        ICISC-2022 (AIP Proceeding)
      </a>
    ),
  },
  {
    sno: 15,
    title: 'International Conference on Information Management and Machine Intelligence',
    name: 'ICIMMI-2021',
    date: '23-24 December 2021',
    type: 'International',
    year: '2022',
    link: (
      <a
        href="https://link.springer.com/book/10.1007/978-981-19-2065-3"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        ICIMMI-2021 (Springer Nature)
      </a>
    ),
  },
  {
    sno: 16,
    title: 'International Conference on Post-Covid Challenges on Life and Livelihood',
    name: 'ICPCC 2021',
    date: '5-6 March 2021',
    type: 'International',
    year: '2021',
    link: (
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        ICPCC 2021 (STM Publication)
      </a>
    ),
  },
  {
    sno: 17,
    title: 'International Conference on Smart Innovations for Society 2021',
    name: 'ICSIS 2021',
    date: '20-21 August 2021',
    type: 'International',
    year: '2021',
    link: (
      <a
        href="https://iopscience.iop.org/issue/1938-5862/107/1"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        ICSIS 2021 (ECS Transactions)
      </a>
    ),
  },
  {
    sno: 18,
    title: 'International Conference on Intelligent System & Computation 2021',
    name: 'ICISC 2021',
    date: '20-21 August 2021',
    type: 'International',
    year: '2021',
    link: (
      <a
        href="https://iopscience.iop.org/issue/1938-5862/107/1"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover: underline"
      >
        ICISC 2021 (ECS Transactions)
      </a>
    ),
  },
  {
    sno: 19,
    title: 'International Conference on Information Management and Machine Intelligence',
    name: 'ICIMMI-2020',
    date: '24-25 July 2020',
    type: 'International',
    year: '2021',
    link: (
      <a
        href="https://link.springer.com/book/10.1007/978-981-15-9689-6"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        ICIMMI-2020 (Springer Nature)
      </a>
    ),
  },
  {
    sno: 20,
    title:
      'Proceedings of Second International Conference on Smart Energy and Communication',
    name: 'ICSEC-2020',
    date: '20-21 March 2020',
    type: 'International',
    year: '2020',
    link: (
      <a
        href="https://link.springer.com/book/10.1007/978-981-15-6707-0"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        ICSEC-2020 (Springer Nature)
      </a>
    ),
  },
  {
    sno: 21,
    title: 'International Conference on Smart Innovations for Society 2020',
    name: 'ICSIS 2020',
    date: '20-21 March 2020',
    type: 'International',
    year: '2020',
    link: (
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        ICSIS 2020
      </a>
    ),
  },
  {
    sno: 22,
    title: 'International Conference on Intelligent Systems & Computation 2020',
    name: 'ICISC 2020',
    date: '20-21 March 2020',
    type: 'International',
    year: '2020',
    link: (
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        ICISC 2020
      </a>
    ),
  },
  {
    sno: 23,
    title:
      'Information Management and Machine Intelligence: Proceedings of ICIMMI',
    name: 'ICIMMI-2019',
    date: '14-15 December 2019',
    type: 'International',
    year: '2020',
    link: (
      <a
        href="https://link.springer.com/book/10.1007/978-981-15-4936-6"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        ICIMMI-2019 (Springer Nature)
      </a>
    ),
  },
  {
    sno: 24,
    title: 'International Conference on Smart Innovations for Society 2019',
    name: 'ICSIS 2019',
    date: '6-7 April 2019',
    type: 'International',
    year: '2019',
    link: (
      <a
        href="https://www.jetir.org/papers/JETIRBW06009.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        ICSIS 2019 (JETIR)
      </a>
    ),
  },
  {
    sno: 25,
    title: 'International Conference on Smart Computation and Technology',
    name: 'ICSCT 2019',
    date: '6-7 April 2019',
    type: 'International',
    year: '2019',
    link: (
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        ICSCT 2019 (UGC Care)
      </a>
    ),
  },
  {
    sno: 26,
    title: 'International Conference on Smart infrastructure and Environment',
    name: 'ICSIE 2019',
    date: '6-7 April 2019',
    type: 'International',
    year: '2019',
    link: (
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        ICSIE 2019 (UGC Care)
      </a>
    ),
  },
  {
    sno: 27,
    title: 'International Conference on Smart Energy and Communication',
    name: 'ICSEC 2019',
    date: '6-7 April 2019',
    type: 'International',
    year: '2019',
    link: (
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        ICSEC 2019 (UGC Care)
      </a>
    ),
  },
];


const Conferences = () => {
    return (
        <div>
            <AccessibilityFeatures />
            <Header />
            <BreadCrumb
                title="Conferences Organised"
                description="Explore the various national and international conferences organized at PIET."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Conferences', isCurrent: true },
                ]}
            />

            <div className="container mt-10 mx-auto my-10">
                <h2 className="text-3xl text-primary font-bold mb-8 text-center">
                    Conferences Organised
                </h2>
                <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                <DynamicTable columns={conferenceColumns} data={conferenceData} />
            </div>

            <Cta />
            <Footer />
        </div>
    );
};

export default Conferences;
