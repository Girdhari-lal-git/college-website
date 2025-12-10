import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BreadCrumb from '@/components/BreadCrumb'
import Cta from '@/components/Cta'
import OverviewSection from '@/components/OverviewSection'
import InfoCard from '@/components/InfoCard'
import DynamicTable from '@/components/DynamicTable '
import { AccessibilityFeatures } from '@/components/AccessibilityFeatures'

const memberData = [
  { name: 'Karan Swami', designation: 'Chair' },
  { name: 'Amit Singh Shekhawat', designation: 'Vice-Chair' },
  { name: 'Anag Aggarwal', designation: 'Treasurer' },
  { name: 'Kartikey Sharma', designation: 'Secretary' },
   // --- Additional Names You Requested ---
  { name: 'Dr. Dinesh Goyal', designation: 'Membership Chair' },
  { name: 'Dr. Anil Kumar', designation: 'Faculty Sponsor' },
  { name: 'Ronak Prajapat', designation: 'Webmaster' },
  { name: 'Yashika Saini', designation: 'Membership Chair' },
  { name: 'Pratham Upadhayay', designation: 'Club Captain' },
  { name: 'Khyati Arora', designation: 'Club Vice-Captain' },
  { name: 'Vaibhav Vaishnav', designation: 'Executive Lead' },
  { name: 'Tushar Mauka', designation: 'Social Lead' },
  { name: 'Kavya Mittal', designation: 'Photography Lead' },
  { name: 'Himanshi Khandelwal', designation: 'Content Lead' },
  { name: 'Sachin Kushwaha', designation: 'Technical Lead' },
  { name: 'Vishakha Khardia', designation: 'Graphics Lead' },
  { name: 'Mukul Arora', designation: 'Junior Webmaster' },
  { name: 'Neelam Jain', designation: 'Junior Webmaster' },
  { name: 'Priyansh Garg', designation: 'Technical Co-ordinator' },
  { name: 'Arpeet Upadhayay', designation: 'Event Co-ordinator' },
  { name: 'Kanupriya Sharma', designation: 'Anchor' },
  { name: 'Nandini Jain', designation: 'Event Co-ordinator' },
  { name: 'Neeraj Dulani', designation: 'Graphic Co-ordinator' }
]


const memberColumns = [
  { label: 'Member Name', key: 'name' },
  { label: 'Designation', key: 'designation' },
]

const eventData = [
  
  { sno: 1, name: 'ACM ESP Session Report', date: '21 August 2025', participants: 350 },
  { sno: 2, name: 'ACM Vibe Coding Report', date: '23 September 2025', participants: 54 },
  { sno: 3, name: 'ACM Career Roadmap and Technical Growth', date: '6 October 2025', participants: 40 },
  { sno: 4, name: 'ACM Cyber Session Bootcamp', date: '8–9 October 2025', participants: 40 },
  { sno: 5, name: 'ACM Tech Triathlon', date: '14 October 2025', participants: 60 },


  { sno: 6, name: 'Typing Speed & Coding Contest', date: '7th March 2024', participants: 90 },
  { sno: 7, name: 'Aptitude Contest', date: '7th March 2024', participants: 52 },
  { sno: 8, name: 'Research Contest', date: '8th March 2024', participants: 35 },
  { sno: 9, name: 'Group Discussion Contest', date: '8th March 2024', participants: 25 },
]

const eventColumns = [
  { label: 'S. No.', key: 'sno' },
  { label: 'Name of Event', key: 'name' },
  { label: 'Date', key: 'date' },
  { label: 'No. of Participants', key: 'participants' },
]

const AcmChapter = () => {
  return (
    <div>
      <AccessibilityFeatures />
      <Header />
      <BreadCrumb
        title="PIET ACM Student Chapter"
        description="Discover how our ACM chapter fosters computing excellence at PIET."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'ACM Chapter', isCurrent: true },
        ]}
      />
 {/* ACM Logo Section */}
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6 text-center">
        <img
          src={"/images/chapters/acm/acm_logo.png"}
          alt="ACM Logo"
          className="mx-auto h-24 mb-6 transform hover:scale-105 transition-transform duration-300"
        />
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          The ACM Student Branch at PIET empowers students through innovation, collaboration, and technical excellence.
        </p>
      </div>
    </section>
      <OverviewSection
        title="ACM Student Chapter @ PIET"
        subtitle="About the Chapter"
        reverse={false}
        image={{
          src: '/images/chapters/acm/piet_acm_team.jpg',
          alt: 'ACM Chapter Events',
        }}
      >
        <p className="text-justify">
          At Poornima Institute of Engineering and Technology (PIET), the ACM Student Chapter stands as a vibrant
           and dynamic community of passionate students driven by curiosity, innovation, and the spirit of 
           technology. Our chapter aims to ignite interest in computer science and related fields, providing 
           a platform where ideas turn into impactful actions.
        </p>
        <br />
        <p className="text-justify">
          We organize a diverse range of activities — from technical workshops, coding competitions, hackathons,
           expert lectures, and seminars to networking events and collaborative projects — all designed to help 
           students explore, learn, and grow together. <br/>
          Led by enthusiastic student leaders and guided by dedicated faculty mentors, the ACM Student Chapter at PIET 
          acts as a hub for creativity, learning, and professional development. It nurtures the next generation of innovators 
          and leaders, empowering them to excel both academically and professionally in the tech world.
        </p>
        <br />
        <p className="text-justify">
         Within our chapter, the ACM Club functions as an integral part — actively assisting in planning and 
         executing various events and initiatives. While the ACM Chapter serves as the main body that connects us
          with the global ACM community, the ACM Club ensures smooth on-ground coordination, participation, and
           engagement across campus. Together, they create a thriving ecosystem that blends technical excellence,
            teamwork, and community service.<br/>
          At PIET, the ACM Student Chapter is more than just an organization — it’s a family of learners, creators, and
          dreamers working together to build a brighter technological future.
        </p>
      </OverviewSection>

      <div className="container mx-auto my-10 grid grid-cols-1 md:grid-cols-1 gap-6">
        <InfoCard
          title="Purpose of the Chapter"
          iconClass="fas fa-lightbulb"
          content={
            <>
              <p>The ACM Student Chapter at Poornima Institute of Engineering and Technology (PIET) aims to:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Promote learning, innovation, and research in computer science and technology.</li>
                <li>Organize workshops, seminars, and technical contests for skill development.</li>
                <li>Encourage participation in national and international ACM events.</li>
                <li>Build a strong, collaborative, and active technical community on campus.
</li>
              </ul>
            </>
          }
        />
      </div>

      <div className="container mt-10 mx-auto">
        <h2 className="text-3xl text-primary font-bold mb-8 text-center">List of Members</h2>
        <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
        <DynamicTable columns={memberColumns} data={memberData} />
      </div>

      <div className="container mt-14 mx-auto">
        <h2 className="text-3xl text-primary font-bold mb-8 text-center">Events Organized by ACM</h2>
        <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
        <DynamicTable columns={eventColumns} data={eventData} />
      </div>

      <div className="container mt-14 mx-auto mb-16">
        <h2 className="text-3xl text-primary font-bold mb-8 text-center">Glimpses of the Events</h2>
        <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
  <div className="aspect-square">
    <img
      src="/images/chapters/acm/acm-2.jpg"
      alt="Event 1"
      className="w-full h-full object-cover rounded-lg shadow"
    />
  </div>
  <div className="aspect-square">
    <img
      src="/images/chapters/acm/acm-6.jpg"
      alt="Event 2"
      className="w-full h-full object-cover rounded-lg shadow"
    />
  </div>
  <div className="aspect-square">
    <img
      src="/images/chapters/acm/acm-3.jpg"
      alt="Event 3"
      className="w-full h-full object-cover rounded-lg shadow"
    />
  </div>
  <div className="aspect-square">
    <img
      src="/images/chapters/acm/acm-4.jpg"
      alt="Event 4"
      className="w-full h-full object-cover rounded-lg shadow"
    />
  </div>
  <div className="aspect-square">
    <img
      src="/images/chapters/acm/acm20251.jpg"
      alt="Event 5"
      className="w-full h-full object-cover rounded-lg shadow"
    />
  </div>
  <div className="aspect-square">
    <img
      src="/images/chapters/acm/acm20252.JPG"
      alt="Event 6"
      className="w-full h-full object-cover rounded-lg shadow"
    />
  </div>
   <div className="aspect-square">
    <img
      src="/images/chapters/acm/acm20253.JPG"
      alt="Event 7"
      className="w-full h-full object-cover rounded-lg shadow"
    />
  </div>
   <div className="aspect-square">
    <img
      src="/images/chapters/acm/acm20254.JPG"
      alt="Event 8"
      className="w-full h-full object-cover rounded-lg shadow"
    />
  </div>
   <div className="aspect-square">
    <img
      src="/images/chapters/acm/acm20255.JPG"
      alt="Event 9"
      className="w-full h-full object-cover rounded-lg shadow"
    />
  </div>
</div>


      </div>

      <Cta />
      <Footer />
    </div>
  )
}

export default AcmChapter
