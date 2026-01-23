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

      {/* ABOUT PIAS */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-[#002147] mb-6"
        >
          About PIAS
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="leading-relaxed text-gray-700 text-lg"
        >
          Poornima Institute Alumni Society (PIAS) connects and celebrates thousands of Poornima
          graduates globally — building a strong ecosystem of collaboration, innovation, and
          mentorship.
        </motion.p>
      </section>

      {/* OBJECTIVES */}
      <section className="bg-white py-20 px-6 shadow-inner">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#002147] mb-6 text-center">Objectives</h2>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-700 text-lg">
            {[
              "Strengthen alumni-student mentorship.",
              "Provide global networking opportunities.",
              "Celebrate alumni achievements.",
              "Support institutional development & outreach.",
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
      <section className="py-20 px-6 bg-gradient-to-br from-[#eef3ff] to-[#dce8ff]">
        <h2 className="text-4xl font-bold text-[#002147] text-center mb-12">Services</h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            "Alumni Networking",
            "Career & Placement Support",
            "Mentorship Assistance",
            "Entrepreneurship Guidance",
            "Industry Connect",
            "Community Events",
          ].map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-2xl shadow-xl border border-[#cbd7f1] hover:shadow-2xl transition-all"
            >
              <h3 className="text-xl font-semibold text-[#002147] mb-2">{service}</h3>
              <p className="text-gray-600 text-sm">
                Empowering alumni through structured programs and professional support.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TEAM 
      <section className="py-20 px-6">
        <h2 className="text-4xl font-bold text-[#002147] text-center mb-12">Team</h2>
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden text-center p-8 border border-[#d0ddf3]"
            >
              <img
                src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=500"
                className="w-40 h-40 object-cover rounded-full mx-auto mb-6"
                alt="Team member"
              />
              
              <h3 className="text-xl font-semibold text-[#002147]">Team Member</h3>
              <p className="text-gray-600 text-sm">Designation</p>
            </motion.div>
          ))}
        </div>
      </section> */}

      {/* ACTIVITIES */}
<section className="bg-[#e5eeff] py-20 px-6">
  <h2 className="text-4xl font-bold text-[#002147] text-center mb-12">Activities</h2>

  <div className="max-w-5xl mx-auto">
    <Carousel
      autoPlay
      infiniteLoop
      interval={3000}
      showThumbs={false}
      showStatus={false}
      showIndicators={true}
      centerMode
      centerSlidePercentage={33}
      swipeable
      emulateTouch
    >
      {[
        "/images/Alumni/nss11.jpg",
        "/images/Alumni/pias2.jpg",
        "/images/Alumni/PIAS1.jpg",
        "/images/Alumni/ishita-meet.jpg",
        "/images/Alumni/meet2.jpg"
      ].map((img, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.03 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden mx-3"
        >
          <img
            src={img}
            alt={`Activity ${i + 1}`}
            className="w-full h-56 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-[#002147]">Activity {i + 1}</h3>
            <p className="text-gray-600 text-sm">Short description of activity.</p>
          </div>
        </motion.div>
      ))}
    </Carousel>
  </div>
</section>


      {/* UPCOMING EVENTS */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-4xl font-bold text-[#002147] text-center mb-6">Upcoming Events</h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-[#eef3ff] p-8 rounded-2xl shadow-xl border border-[#d0ddf3]"
        >
          <ul className="space-y-4 text-gray-700 text-lg">
            <li>• Alumni Meet 2025 – Coming Soon</li>
            <li>• Webinar on Startup Ecosystems – December 2025</li>
            <li>• Tech Talk with Distinguished Alumni – January 2026</li>
          </ul>
        </motion.div>
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


<div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 text-left">
{/* CONTACT DETAILS */}
<div className="bg-white p-8 rounded-2xl shadow-lg border border-[#d0ddf3]">
<h3 className="text-2xl font-semibold text-[#002147] mb-4 text-center">Contact Details</h3>
<p className="text-gray-700 text-lg"><strong>Name:</strong> Alumni Coordinator</p>
<p className="text-gray-700 text-lg"><strong>Mobile:</strong> +91-9876543210</p>
<p className="text-gray-700 text-lg"><strong>Email:</strong> alumni@poornima.org</p>
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
