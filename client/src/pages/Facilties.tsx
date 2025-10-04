import { useState } from "react";
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Cta from '@/components/Cta';
import BreadCrumb from '@/components/BreadCrumb';
import { AccessibilityFeatures } from '@/components/AccessibilityFeatures';

// FacilitiesCard Component
const FacilitiesCard = ({ title, description, imageUrl, category }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const truncated = description.length > 150 ? description.slice(0, 150) + "..." : description;

  return (
    <div className="break-inside-avoid bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl mb-6">
      <div className="relative h-64 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        {category && (
          <span className="absolute top-4 left-4 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
            {category}
          </span>
        )}
      </div>

      <div className="p-6 flex flex-col">
        <h3 className="text-xl font-semibold mb-3 text-primary">{title}</h3>
        <p className="text-gray-600 text-sm whitespace-pre-line">
          {isExpanded ? description : truncated}
        </p>
        {description.length > 150 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-4 inline-block text-primary font-medium hover:underline"
          >
            {isExpanded ? "Read Less ↑" : "Read More ↓"}
          </button>
        )}
      </div>
    </div>
  );
};

// Example cardData
const cardData = [
  {
    title: "ATM",
    description: "The HDFC Bank ATM at PIET is a valuable asset for the community, providing convenient cash withdrawals for students, faculty, staff, and residents. Its 24/7 availability allows for easy account access and transactions, helping individuals manage their finances effectively. Located at the main entrance of PIET, it offers convenient banking services to the community. Overall, the ATM plays a vital role in meeting financial needs and enhancing convenience for all.",
    imageUrl: "https://www.piet.poornima.org/images/facilities/atm.png",
    category: "Utility"
  },
  {
    title: "Auditorium",
    description: "The PIET's Auditorium, also known as the Arbuda Convention Centre, is a versatile event venue designed to cater to various gatherings. With a seating capacity of up to 480 persons, it is ideal for conferences, seminars, symposiums and cultural events. Equipped with state-of-the-art audio-visual systems, comfortable seating, ample parking, and an adaptable layout, it ensures a seamless and immersive experience for both presenters and attendees. The elegant ambiance adds a touch of sophistication to any event held at the auditorium.",
    imageUrl: "https://www.piet.poornima.org/images/facilities/audi.png",
    category: "Events"
  },
  {
    title: "Cafeteria",
    description: "The cafeteria at Poornima Institute of Engineering Technology is more than just a place to eat; it's a hub for socializing and building community. Students study together over coffee, faculty discuss research projects, and friends catch up over delicious food. The menu caters to diverse tastes, offering traditional Indian dishes and continental cuisine. The food is made with top-quality ingredients and strict hygiene standards. Snacks, drinks, and juices are also available throughout the day. The cafeteria's convenient location on campus makes it a popular spot for students and faculty to relax and unwind. The friendly staff adds to the welcoming atmosphere, always ready to help with a smile.",
    imageUrl: "https://www.piet.poornima.org/images/facilities/cafeteria.png",
    category: "Food"
  },
  {
    title: "Library",
    description: "PIET's library serves as an extensive repository of knowledge, equipped with advanced KOHA and TCS-iON systems, containing a collection of more than 29,000 physical books and 41,000 electronic resources. The facility offers comfortable study spaces, up-to-date computer software, and convenient remote access to materials, catering to a wide range of educational requirements. The library is accessible throughout the day to accommodate the needs of students, as well as teaching and non-teaching staff.",
    imageUrl: "https://www.piet.poornima.org/images/facilities/library.png",
    category: "Academic"
  },
  {
    title: "Disable Friendly Campus",
    description: "The campus of Poornima Institute of Engineering and Technology has been meticulously designed to ensure complete accessibility for individuals with disabilities. This includes a dedicated lab with assistive tools and technologies, accessible restrooms, ramps, and a range of wheelchairs. These facilities are aimed at facilitating smooth movement and fostering an inclusive learning environment for everyone.",
    imageUrl: "https://www.piet.poornima.org/images/facilities/disable.png",
    category: "Accessibility"
  },
    {
        title: "Amphitheater",
    description: "The Amphitheater at PIET is an open-air theatre located on the second floor of the admin block, with a seating capacity of 1000 people. It provides a versatile space for a wide range of activities, including cultural events, performances, seminars, and student gatherings, making it an integral part of campus life.",
    imageUrl: "https://www.piet.poornima.org/images/facilities/gym.png",
    category: "Events"
    },

  {
    title: "Generator BackUp and UPS Supply",
    description: "The Poornima Institute of Engineering and Technology ensures an uninterrupted power supply through the use of a reliable generator backup and UPS system. This allows students and faculty to focus on their studies and research without any interruptions. This dedication to investing in infrastructure demonstrates the institute's commitment to providing a high-quality learning and working environment for all individuals involved.",
    imageUrl: "https://www.piet.poornima.org/images/facilities/generator.png",
    category: "Infrastructure"
  },
  {
    title: "Gymnasium",
    description: "The gymnasium at PIET serves as a central point for promoting physical fitness, well-being, and fostering a sense of community. Equipped with cutting-edge facilities, expert guidance from trained professionals, and a wide range of fitness programs, the gymnasium is dedicated to helping individuals reach their fitness objectives and lead a wholesome life.",
    imageUrl: "https://www.piet.poornima.org/images/facilities/gym.png",
    category: "Fitness"
  },
  {
    title: "Hostel and Mess",
    description: "Poornima Institute of Engineering and Technology provides separate hostel facilities for male and female students, ensuring a secure and comfortable living environment. The well-furnished rooms are supervised by attentive hostel wardens, and students receive four nutritious meals daily, including breakfast, lunch, a mid-day snack, and dinner with fresh fruits and vegetables. The hostel also offers recreational areas and sports facilities to enhance the overall experience.",
    imageUrl: "https://www.piet.poornima.org/images/facilities/hostel.png",
    category: "Accommodation"
  },
  {
    title: "ICT Classrooms",
    description: "The educational facilities at PIET are furnished with advanced ICT resources such as smart boards, high-speed internet, and projectors. These contemporary amenities enrich the learning experience by facilitating interactive and captivating teaching sessions, fostering a dynamic and efficient learning environment.",
    imageUrl: "https://www.piet.poornima.org/images/facilities/ict.png",
    category: "Academic"
  },
  {
    title: "Indoor Games",
    description: "Poornima Institute of Engineering and Technology recognizes the importance of recreational activities in promoting holistic development among its students. By providing dedicated areas for indoor games such as table tennis, carrom, chess, foosball, and billiards, the institute offers students the opportunity to unwind, socialize, and improve their cognitive skills and hand-eye coordination during class breaks. These recreational activities not only provide entertainment but also contribute to the overall well-being and growth of the students.",
    imageUrl: "https://www.piet.poornima.org/images/facilities/indoor.png",
    category: "Sports"
  },
  {
    title: "Laboratories",
    description: "The Poornima Institute of Engineering and Technology offers a hands-on learning experience through its state-of-the-art laboratories and computer labs, which boast a grand total of 630 computers. These cutting-edge facilities are meticulously designed with the most up-to-date hardware and software configurations, enabling students to delve into programming, software development, and simulation-based experiments. By engaging in these activities, students are able to enhance their technical skills and gain valuable practical knowledge.",
    imageUrl: "https://www.piet.poornima.org/images/facilities/labs.png",
    category: "Academic"
  },
  {
    title: "Laundry",
    description: "The laundry service provided by Poornima Institute of Engineering and Technology is dedicated to meeting the needs of its students. Understanding the hectic schedules and time constraints that students encounter, the institute ensures that the laundry requirements are met promptly and effectively. By offering next-day service, students can conveniently drop off their soiled clothes at the on-campus laundry facility and anticipate them to be washed and ironed by the next day. This efficient service enables students to have clean and well-pressed clothes on hand for their day-to-day tasks.",
    imageUrl: "https://www.piet.poornima.org/images/facilities/labs.png",
    category: "Utility"
  },
  {
    title: "Medical Facility",
    description: "Poornima Institute of Engineering and Technology prioritizes student and faculty well-being by offering essential medical services. The college has a medical room with a doctor and ambulance on standby for emergencies. These facilities cater to healthcare needs, ensuring regular check-ups and immediate attention. The college recognizes the importance of providing comprehensive medical facilities on campus for the overall well-being and academic success of students. With two medical rooms, doctors, nurses, and a well-equipped facility, the college offers comprehensive healthcare services for physical and mental health needs.",
    imageUrl: "https://www.piet.poornima.org/images/facilities/medical.png",
    category: "Health"
  },
  {
    title: "Outdoor Games",
    description: "The Poornima Institute of Engineering and Technology provides a range of outdoor sports facilities, encompassing cricket, volleyball, basketball, and kabaddi. These sports are supported by dedicated courts and fields within the campus, fostering physical fitness, teamwork, and sportsmanship among the students. This commitment to providing comprehensive sporting opportunities contributes to a holistic educational experience.",
    imageUrl: "https://www.piet.poornima.org/images/facilities/outdoor.JPG",
    category: "Sports"
  },
  {
    title: "Parking",
    description: "PIET Campus provides ample parking facilities for both cars and motorcycles, ensuring convenient access for students and faculty. The campus includes designated parking areas on-site, as well as additional spaces outside, to accommodate the transportation needs of the college community. This feature not only improves convenience but also ensures accessibility for all individuals.",
    imageUrl: "https://www.piet.poornima.org/images/facilities/parking.png",
    category: "Infrastructure"
  },
  {
    title: "PIET AICTE IDEA Lab",
    description: "AICTE has recently introduced a program aimed at establishing an IDEA lab with a substantial funding of Rs. 55 Lakh. This initiative has garnered significant interest, with over 200 institutions from across India applying for the opportunity. Poornima Institute of Engineering & Technology has been selected as one of the recipients, making it the sole institute in Rajasthan to achieve this remarkable feat. The IDEA Lab offers facilities like reverse engineering, rapid prototyping, and 3D printing, nurturing ideas and innovation.",
    imageUrl: "https://www.piet.poornima.org/images/facilities/idea1.png",
    category: "Innovation"
  },
  {
    title: "Rain Water Harvesting",
    description: "Poornima Institute of Engineering and Technology has successfully integrated a rainwater harvesting system to collect and preserve rainwater for multiple purposes, including landscaping, irrigation, and recharging groundwater. This endeavor exemplifies the college's dedication to environmental responsibility and its efforts towards sustainability and water conservation.",
    imageUrl: "https://www.piet.poornima.org/images/facilities/rainwater.png",
    category: "Sustainability"
  },
  {
    title: "Student’s Cooperative Store",
    description: "Poornima Institute of Engineering and Technology provides a student cooperative store offering essential items and stationery, making it convenient for students and faculty to obtain their daily necessities.",
    imageUrl: "https://www.piet.poornima.org/images/facilities/store.png",
    category: "Utility"
  },
  {
    title: "Transport Facility",
    description: "Poornima Institute of Engineering and Technology in Jaipur provides a dependable transportation service through a fleet of buses covering the city. This service ensures convenient and reliable transportation for students, faculty, and staff following designated routes.",
    imageUrl: "https://www.piet.poornima.org/images/facilities/store.png",
    category: "Transport"
  },
  {
    title: "Versatile Event Spaces on Campus",
    description: "Poornima Institute of Engineering and Technology boasts three conference rooms, four seminar halls, and one board room. These multifunctional spaces accommodate diverse co-curricular and extra-curricular activities such as FDPs, training programs, seminars, and workshops.",
    imageUrl: "https://www.piet.poornima.org/images/facilities/versatile.png",
    category: "Events"
  }
];


const Facilities = () => {
  return (
    <div>
      <AccessibilityFeatures />
      <Header />
      <BreadCrumb
        title="Facilities"
        description="Discover who we are and what makes Poornima Institute a center of excellence."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Facilities', isCurrent: true },
        ]}
      />

      {/* Facilities Cards Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 p-4 container mx-auto">
        {cardData.map((card, index) => (
          <FacilitiesCard
            key={index}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
            category={card.category}
          />
        ))}
      </div>

      <Cta />
      <Footer />
    </div>
  );
};

export default Facilities;
