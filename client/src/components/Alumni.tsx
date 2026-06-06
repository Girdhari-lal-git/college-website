import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BreadCrumb from "@/components/BreadCrumb";
import { AccessibilityFeatures } from './AccessibilityFeatures';
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";



const Alumni = () => {
  return (
    <div>
       <AccessibilityFeatures />
            <Header />
            <BreadCrumb
                title="Poornima Institute Alumni Society (PIAS)"
                description=" Connecting and celebrating Poornima graduates worldwide."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    {
                        label: "Alumni Society",
                        isCurrent: true,
                    },
                ]}
            />

    <div className="min-h-screen bg-gradient-to-br from-[#e8f0ff] to-[#f5f7fb] text-gray-800">
      {/* HERO SLIDER */}
      <section className="w-full overflow-hidden relative shadow-xl">
        <Carousel
          autoPlay
          infiniteLoop
          interval={3500}
          showThumbs={false}
          showStatus={false}
        >
          {[
            "/images/Alumni/meet2.jpg",
            "/images/Alumni/ishita-meet.jpg",
            "/images/Alumni/PIAS1.jpg",
            "/images/Alumni/pias2.jpg",
          ].map((img, i) => (
            <div key={i}>
              <img src={img} className="h-[480px] w-full object-cover" alt="Alumni event" />
            </div>
          ))}
        </Carousel>
      </section>

          <section className="relative mt-12 z-32 px-6">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {[
        { value: "5000+", label: "Alumni Network" },
        { value: "25+", label: "Countries Reached" },
        { value: "100+", label: "Mentorship Sessions" },
        { value: "50+", label: "Events Conducted" },
      ].map((stat, i) => (
        <div
          key={i}
          className="bg-gradient-to-br from-[#002147] to-[#C62828] text-white rounded-2xl p-6 text-center shadow-xl"
        >
          <h3 className="text-4xl font-bold">{stat.value}</h3>
          <p>{stat.label}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* ABOUT PIAS */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="
text-4xl
font-bold
bg-gradient-to-r
from-[#002147]
to-[#C62828]
bg-clip-text
text-transparent
"
        >
          About PIAS
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="leading-relaxed text-gray-700 text-lg text-justify"
        >
          The Poornima Institute Alumni Society (PIAS) serves as a vibrant platform that fosters lifelong connections among graduates of Poornima Institute of Engineering & Technology. Established with the vision of strengthening the bond between alumni, students, and the institution, PIAS has evolved into a dynamic global network of professionals, entrepreneurs, researchers, academicians, and industry leaders.

The society promotes meaningful engagement through mentorship programs, networking opportunities, industry interactions, alumni reunions, technical talks, and collaborative initiatives. By leveraging the collective experience and expertise of its alumni, PIAS contributes significantly to student development, career guidance, institutional growth, and community building.

Today, PIAS proudly connects thousands of alumni across India and around the world, creating a strong ecosystem that inspires excellence, innovation, leadership, and lifelong learning.
        </motion.p>
      </section>

      {/* OBJECTIVES */}
      <section className="bg-white py-20 px-6 shadow-inner">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#002147] mb-6 text-center">Objectives</h2>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-700 text-lg text-justify">
            {[
              "• Foster a lifelong relationship between alumni and the institution.",
              "• Create a strong professional network that facilitates collaboration, knowledge sharing, and career advancement.",
              "• Encourage alumni participation in mentoring, training, internships, and placement support for students.",

"• Recognize and celebrate the achievements and contributions of distinguished alumni.",

"• Promote entrepreneurship, innovation, and industry-academia partnerships through alumni engagement.",

"• Support institutional development initiatives and contribute to the continuous growth of PIET.",

"• Strengthen the sense of belonging and pride among members of the Poornima alumni community."
            ].map((obj, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-4 bg-[#eaf1ff] rounded-xl shadow"
              >
                {obj}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* SERVICES */}
<section className="py-24 px-6 bg-gradient-to-br from-[#eef4ff] via-white to-[#fff2f2]">
  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold bg-gradient-to-r from-[#002147] to-[#C62828] bg-clip-text text-transparent mb-6">
        Services & Alumni Engagement Initiatives
      </h2>

      <p className="max-w-4xl mx-auto text-lg text-gray-600 leading-relaxed">
        PIAS is committed to fostering lifelong relationships among alumni,
        students, faculty members, and industry leaders. Through a wide range
        of professional, academic, and social initiatives, the society creates
        opportunities for networking, mentorship, career growth, entrepreneurship,
        and meaningful community engagement.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

      {[
        {
          title: "Alumni Networking",
          icon: "🤝",
          description:
            "Facilitating meaningful professional and personal connections among alumni across industries, organizations, and geographical locations. PIAS provides a platform for graduates to reconnect with classmates, expand professional networks, exchange ideas, and build long-lasting relationships that contribute to personal and professional success."
        },
        {
          title: "Career & Placement Support",
          icon: "💼",
          description:
            "Supporting students and alumni through career guidance, recruitment opportunities, job referrals, resume-building assistance, and industry insights. Alumni actively contribute by sharing experiences and helping students navigate evolving career pathways in diverse domains."
        },
        {
          title: "Mentorship Assistance",
          icon: "🎓",
          description:
            "Connecting students and young professionals with experienced alumni mentors who provide guidance on academics, higher education, career planning, leadership development, and professional growth. These mentoring relationships create valuable learning opportunities and inspire future success."
        },
        {
          title: "Entrepreneurship Guidance",
          icon: "🚀",
          description:
            "Encouraging innovation and entrepreneurial thinking by connecting aspiring founders with successful entrepreneurs from the alumni community. PIAS facilitates mentorship, startup guidance, networking opportunities, and access to industry expertise for emerging ventures."
        },
        {
          title: "Industry Connect",
          icon: "🏢",
          description:
            "Strengthening industry-academia collaboration through guest lectures, expert talks, technical sessions, panel discussions, industrial interactions, and collaborative projects. Alumni working in leading organizations help bridge the gap between classroom learning and industry expectations."
        },
        {
          title: "Community Events",
          icon: "🌍",
          description:
            "Organizing alumni meets, reunions, webinars, social initiatives, cultural programs, networking sessions, and outreach activities that strengthen the Poornima community. These events celebrate alumni achievements while fostering a strong sense of belonging and institutional pride."
        }
      ].map((service, i) => (
        <motion.div
          key={i}
          whileHover={{
            y: -10,
            transition: { duration: 0.2 }
          }}
          className="bg-white text-justify rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300"
        >
          {/* Top Gradient Bar */}
          <div className="h-2 bg-gradient-to-r from-[#002147] to-[#C62828] " />

          <div className="p-8">

            <div className="text-5xl mb-5">
              {service.icon}
            </div>

            <h3 className="text-2xl font-bold text-[#002147] mb-4">
              {service.title}
            </h3>

            <p className="text-gray-600 leading-relaxed text-base">
              {service.description}
            </p>

          </div>
        </motion.div>
      ))}

    </div>

    {/* Bottom Highlight */}
    <div className="mt-20 bg-gradient-to-r from-[#002147] to-[#C62828] rounded-3xl p-10 text-white text-center shadow-2xl">
      <h3 className="text-3xl font-bold mb-4">
        Building Lifelong Connections
      </h3>

      <p className="max-w-4xl mx-auto text-lg leading-relaxed text-gray-100 text-justify">
        Through mentorship, networking, professional development, entrepreneurship
        support, and community engagement, PIAS continues to strengthen the bond
        between alumni and the institution. Together, we create opportunities,
        inspire future generations, and contribute to the continued growth and
        excellence of the Poornima family.
      </p>
    </div>

  </div>
</section>

  
  {/* PIAS EXECUTIVE COMMITTEE */}
<section className="py-8 px-6 bg-gradient-to-b from-gray-50 to-white">

  <div className="max-w-7xl mx-auto">

    {/* Section Heading */}
    <div className="text-center mb-16">

      <div className="inline-block px-5 py-2 rounded-full bg-red-50 text-[#C62828] font-semibold text-sm tracking-wide mb-4">
        Alumni Leadership
      </div>

      <h2 className="text-5xl font-bold bg-gradient-to-r from-[#002147] to-[#C62828] bg-clip-text text-transparent mb-6">
        PIAS Executive Committee
      </h2>

      <div className="w-32 h-1.5 bg-gradient-to-r from-[#002147] to-[#C62828] mx-auto rounded-full mb-8"></div>

      <p className="max-w-5xl mx-auto text-lg text-gray-600 leading-relaxed text-justify">
        The <strong>PIAS Executive Committee</strong> serves as the driving force
        behind the Poornima Institute Alumni Society, providing strategic direction,
        leadership, and vision for alumni engagement initiatives. Comprising
        accomplished alumni from diverse professional backgrounds, the committee
        works closely with the institution to strengthen connections among alumni,
        students, faculty, and industry leaders.
      </p>

      <p className="max-w-5xl mx-auto text-lg text-gray-600 leading-relaxed mt-6 text-justify">
        Through mentorship programs, networking opportunities, alumni reunions,
        industry interactions, career guidance initiatives, and community outreach
        activities, the committee actively contributes towards building a vibrant
        and collaborative alumni ecosystem. Their collective efforts help preserve
        the legacy of Poornima while creating meaningful opportunities for future
        generations of students and graduates.
      </p>

    </div>
    <div className="max-w-4xl mx-auto mb-10 mt-10 bg-gradient-to-r from-[#002147] to-[#C62828] text-white rounded-2xl p-8 shadow-xl">
  <p className="text-xl italic leading-relaxed">
    "The strength of an institution lies not only in its students and faculty,
    but also in the achievements, experiences, and continued engagement of its alumni."
  </p>

  <p className="mt-4 font-semibold text-right">
    – Poornima Institute Alumni Society
  </p>
</div>


  </div>


  {(() => {
    const committeeMembers = [
      {
        name: "Anchit Aneja",
        designation: "President, PIAS",
        image: "/images/Alumni/Anchit-team.png"
      },
      {
        name: "Arpit Singhal",
        designation: "Treasurer, PIAS",
        image: "/images/Alumni/Arpit-team.png",
      },
      {
        name: "Bhanu Rajpurohit",
        designation: "Secretary, PIAS",
        image: "/images/Alumni/Bhanu-rajpurohit.png",
      },
      {
        name: "Ritesh Agarwal",
        designation: "Member, PIAS",
        image: "/images/Alumni/Ritesh-team.png",
      },
      {
        name: "Manoj Singh",
        designation: "Member, PIAS",
        image: "/images/Alumni/Manoj-team.png",
      },
      {
        name: "Mukesh Sarsawat",
        designation: "Member, PIAS",
        image: "/images/Alumni/Mukesh-team.png",
      },
      {
        name: "Nikunj Maheshwari",
        designation: "Member, PIAS",
        image: "/images/Alumni/Nikunj-team.png",
      },
    ];

    const CommitteeCard = ({
      member,
      isPresident = false,
    }: {
      member: any;
      isPresident?: boolean;
    }) => (
      <motion.div
        whileHover={{ scale: 1.05 }}
        className={`rounded-2xl shadow-lg border overflow-hidden text-center
          ${
            isPresident
              ? "bg-gradient-to-br from-[#002147] to-[#004080] text-white border-[#002147] p-10"
              : "bg-white border-[#d0ddf3] p-8"
          }`}
      >
        {isPresident && (
          <span className="inline-block bg-yellow-400 text-[#002147] text-xs font-bold px-4 py-1 rounded-full mb-4">
            PRESIDENT
          </span>
        )}

        <img
          src={member.image}
          alt={member.name}
          className={`object-cover rounded-full mx-auto mb-6 border-4 ${
            isPresident
              ? "w-48 h-48 border-white"
              : "w-40 h-40 border-[#d0ddf3]"
          }`}
        />

        <h3
          className={`font-semibold ${
            isPresident
              ? "text-2xl text-white"
              : "text-xl text-[#002147]"
          }`}
        >
          {member.name}
        </h3>

        <p
          className={`mt-2 ${
            isPresident ? "text-gray-200" : "text-gray-600"
          }`}
        >
          {member.designation}
        </p>
      </motion.div>
    );

    return (
      <>
         {/* PRESIDENT */}
    <div className="flex justify-center mb-14">
            <div className="w-full max-w-sm">
            <CommitteeCard
              member={committeeMembers[0]}
              isPresident={true}
            />
          </div>
        </div>

        {/* SECOND ROW */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto mb-10">
          {committeeMembers.slice(1, 4).map((member, index) => (
            <CommitteeCard
              key={index}
              member={member}
            />
          ))}
        </div>

        {/* THIRD ROW */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {committeeMembers.slice(4, 7).map((member, index) => (
            <CommitteeCard
              key={index}
              member={member}
            />
          ))}
        </div>
      </>
    );
  })()}
</section>


{/* ALUMNI EVENTS & ENGAGEMENTS */}
<section className="py-24 px-6 bg-gradient-to-b from-white to-[#f8faff]">
  <div className="max-w-7xl mx-auto">

    {/* Section Header */}
    <div className="text-center mb-16">

      <div className="inline-block px-5 py-2 rounded-full bg-red-50 text-[#C62828] font-semibold text-sm tracking-wide mb-4">
        Alumni Connect
      </div>

      <h2 className="text-5xl font-bold bg-gradient-to-r from-[#002147] to-[#C62828] bg-clip-text text-transparent mb-6">
        Alumni Events & Engagements
      </h2>

      <div className="w-32 h-1.5 bg-gradient-to-r from-[#002147] to-[#C62828] mx-auto rounded-full mb-8"></div>

      <p className="max-w-5xl mx-auto text-lg text-gray-600 leading-relaxed text-justify">
        The Poornima Institute Alumni Society (PIAS) actively organizes a wide range
        of events and engagement initiatives designed to strengthen the bond between
        alumni, students, faculty members, and industry leaders. These activities
        provide valuable opportunities for networking, mentorship, professional
        development, knowledge sharing, and community building.
      </p>

      <p className="max-w-5xl mx-auto text-lg text-gray-600 leading-relaxed text-justify mt-6">
        Through alumni reunions, leadership interactions, career guidance programs,
        industry connect sessions, social outreach activities, and mentorship
        initiatives, PIAS continues to create a vibrant ecosystem that fosters
        lifelong relationships and contributes to the growth and success of the
        entire Poornima community.
      </p>

    </div>

    {/* Event Cards */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

      {[
        {
          image: "/images/Alumni/meet2.jpg",
          title: "Annual Alumni Meet",
          description:
            "A flagship gathering that brings together alumni from various graduating batches to reconnect, celebrate achievements, share experiences, and strengthen professional and personal relationships. The event serves as a platform for networking, collaboration, and celebrating the enduring spirit of the Poornima family.",
        },
        {
          image: "/images/Alumni/ishita-meet.jpg",
          title: "Distinguished Alumni Interaction",
          description:
            "Interactive sessions featuring accomplished alumni who share their professional journeys, leadership experiences, challenges, and success stories. These engagements inspire students and provide valuable insights into career growth, innovation, and lifelong learning.",
        },
        {
          image: "/images/Alumni/PIAS1.jpg",
          title: "Mentorship & Career Guidance",
          description:
            "Dedicated mentoring initiatives where experienced alumni guide students and young graduates on higher education opportunities, career planning, professional development, skill enhancement, and emerging industry trends.",
        },
        {
          image: "/images/Alumni/pias2.jpg",
          title: "Industry Connect Program",
          description:
            "A platform that facilitates meaningful interaction between industry professionals, alumni, faculty, and students. These sessions help bridge the gap between academics and industry while providing exposure to current technologies, practices, and opportunities.",
        },
        {
          image: "/images/Alumni/nss11.jpg",
          title: "Community Outreach Activities",
          description:
            "PIAS encourages alumni participation in social responsibility initiatives and community development programs. These activities reflect the commitment of the Poornima alumni community towards creating a positive impact on society.",
        },
        {
          image: "/images/Alumni/meet2.jpg",
          title: "Networking & Professional Development",
          description:
            "Structured networking opportunities that enable alumni from diverse sectors and geographical locations to connect, collaborate, exchange ideas, and explore new professional opportunities while strengthening the global alumni network.",
        },
      ].map((event, index) => (
        <motion.div
          key={index}
          whileHover={{
            y: -10,
            transition: { duration: 0.25 }
          }}
          className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
        >
          {/* Top Gradient Bar */}
          <div className="h-2 bg-gradient-to-r from-[#002147] to-[#C62828]" />

          <img
            src={event.image}
            alt={event.title}
            className="w-full h-64 object-cover"
          />

          <div className="p-8">

            <h3 className="text-2xl font-bold text-[#002147] mb-4">
              {event.title}
            </h3>

            <p className="text-gray-600 leading-relaxed text-justify text-base">
              {event.description}
            </p>

          </div>
        </motion.div>
      ))}
    </div>

    {/* Highlight Banner */}
    <div className="mt-20 bg-gradient-to-r from-[#002147] via-[#003a75] to-[#C62828] rounded-3xl p-12 text-center text-white shadow-2xl">

      <h3 className="text-3xl md:text-4xl font-bold mb-6">
        Strengthening Connections Beyond Graduation
      </h3>

      <p className="max-w-5xl mx-auto text-lg leading-relaxed text-gray-100 text-justify">
        PIAS believes that graduation is not the end of a student's relationship
        with Poornima—it is the beginning of a lifelong association. Through
        continuous engagement initiatives, mentorship programs, alumni reunions,
        industry interactions, and networking opportunities, PIAS ensures that
        every alumnus remains an integral part of the Poornima family and
        contributes to the success of future generations.
      </p>

    </div>

  </div>
</section>

      {/* ACTIVITIES */}

<section className="py-12 bg-gradient-to-r from-[#002147] via-[#003b75] to-[#C62828] text-white">
  <div className="max-w-6xl mx-auto text-center px-6">
    <h2 className="text-5xl font-bold mb-6">
      PIAS Impact
    </h2>

    <p className="text-xl mb-6">
      Connecting Alumni • Inspiring Students • Building Futures
    </p>

    <div className="grid md:grid-cols-4 gap-8">
      <div>
        <h3 className="text-5xl font-semibold">5000+</h3>
        <p>Alumni Network</p>
      </div>

      <div>
        <h3 className="text-5xl font-semibold">25+</h3>
        <p>Countries</p>
      </div>

      <div>
        <h3 className="text-5xl font-semibold">100+</h3>
        <p>Mentorship Sessions</p>
      </div>

      <div>
        <h3 className="text-5xl font-semibold">50+</h3>
        <p>Events</p>
      </div>
    </div>
  </div>
</section>

      {/* NOTABLE ALUMNI */}
      <section className="py-20 px-6 bg-[#eef3ff]">
        <h2 className="text-4xl font-bold text-[#002147] text-center mb-12">Notable Alumni</h2>

        <div className="max-w-6xl mx-auto">
          <Carousel
            autoPlay
            infiniteLoop
            interval={3200}
            showThumbs={false}
            showStatus={false}
            centerMode
            centerSlidePercentage={33}
            swipeable
            emulateTouch
          >
            {[
              {
                img: "/images/Alumni/anchit.jpg",
                name: "Mr. Anchit Aneja",
                position: "Manager- Assciate Vice President, CityBank, Pune",
              },
              {
                img: "/images/Alumni/arpit.jpg",
                name: "Mr. Arpit Solanki",
                position: "Director, Admissions and Outreach, KREA University",
              },
              {
                img: "/images/Alumni/bhawana.jpg",
                name: "Ms. Bhawana Namrani",
                position: "Lead Consultant, Infosys, Chicago",
              },
              {
                img: "/images/Alumni/Deepanshu.jpg",
                name: "Mr. Deepanshu Agrawal",
                position: "Senior Software Engineer, Microsoft, Vancouver",
              },
              {
                img: "/images/Alumni/Kanushka.jpg",
                name: "Ms. Kashika Jain",
                position: "Associate Manager Data Engineering, Walmart, USA",
              },
            ].map((alumni, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="bg-white mx-3 rounded-2xl shadow-lg overflow-hidden border border-[#d0ddf3]"
              >
                <img
                  src={alumni.img}
                  alt={alumni.name}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-[#002147]">{alumni.name}</h3>
                  <p className="text-gray-600 text-sm">{alumni.position}</p>
                </div>
              </motion.div>
            ))}
          </Carousel>
        </div>
      </section>

     {/* CONTACT */}
<section className="py-20 px-6 text-center">
<h2 className="text-4xl font-bold text-[#002147] mb-10">Get in Touch</h2>


<div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 text-left">
{/* CONTACT DETAILS */}
<div className="bg-white p-8 rounded-2xl shadow-lg border border-[#d0ddf3]">
<h3 className="text-2xl font-semibold text-[#002147] mb-4 text-center">Contact Details</h3>
<p className="text-gray-700 text-lg"><strong>Name:</strong> Alumni Coordinator</p>
<p className="text-gray-700 text-lg"><strong>Mobile:</strong> +91-9929002065</p>
<p className="text-gray-700 text-lg"><strong>Email:</strong> alumnirelations.piet@poornima.org</p>
</div>


{/* REGISTRATION LINK */}
<div className="bg-white p-8 rounded-2xl shadow-lg border border-[#d0ddf3] flex flex-col justify-center items-center">
<h3 className="text-2xl font-semibold text-[#002147] mb-4 text-center">Become a Registered Alumni</h3>
<p className="text-gray-700 text-center mb-6">Join the Poornima Alumni Community and stay connected.</p>
<a
href="/alumni-registration" /* Replace with actual registration link */
className="bg-[#002147] text-white px-10 py-3 rounded-xl text-lg shadow hover:bg-[#00152d] transition-all"
>
Alumni Registration Page
</a>
</div>
</div>
</section>
    </div>

  <Footer />
    </div>
  );
};

export default Alumni;
