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
  { name: 'Kumari Kushboo', designation: 'Chair' },
  { name: 'Himani Jangid', designation: 'Vice Chair' },
  { name: 'Prateek Khandelwal', designation: 'Treasurer' },
  { name: 'Abhishek Dadhich', designation: 'Secretary' },
  { name: 'Ms. Shikha Gautam', designation: 'Web Master' },
  { name: 'Dr. Anil Kumar', designation: 'Faculty Sponsor' },
  { name: 'Dr. Dinesh Goyal', designation: 'Membership Chair' },
  { name: 'Dr. Payal Bansal', designation: 'Chapter Member' },
  { name: 'Mr. Dev Chandwani', designation: 'Chapter Member' },
  { name: 'Ms. Avani Choudhary', designation: 'Chapter Member' },
  { name: 'Ms. Riddhi Dadhich', designation: 'Chapter Member' },
  { name: 'Ms. Mahak Garg', designation: 'Chapter Member' },
  { name: 'Ms. Namrata Gurbani', designation: 'Chapter Member' },
  { name: 'Mr. Rajat Mathur', designation: 'Chapter Member' },
  { name: 'Mr. Parv Sharma', designation: 'Chapter Member' },
]

const memberColumns = [
  { label: 'Member Name', key: 'name' },
  { label: 'Designation', key: 'designation' },
]

const eventData = [
  { sno: 1, name: 'Typing Speed & Coding Contest', date: '7th March 2024', participants: 90 },
  { sno: 2, name: 'Aptitude Contest', date: '7th March 2024', participants: 52 },
  { sno: 3, name: 'Research Contest', date: '8th March 2024', participants: 35 },
  { sno: 4, name: 'Group Discussion Contest', date: '8th March 2024', participants: 25 },
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
          src={"/public/images/council/acm.png"}
          alt="ACM Logo"
          className="mx-auto h-24 mb-6 transform hover:scale-105 transition-transform duration-300"
        />
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          The IETE Student Branch at PIET empowers students through innovation, collaboration, and technical excellence.
        </p>
      </div>
    </section>
      <OverviewSection
        title="ACM Student Chapter @ PIET"
        subtitle="About the Chapter"
        reverse={false}
        image={{
          src: '/images/chapters/acm/acm-1.jpg',
          alt: 'ACM Chapter Events',
        }}
      >
        <p>
          Student Chapters provide unique opportunities for networking, mentoring and bonding over common interests. They provide support both within the student community and to local communities outside the institution.
        </p>
        <br />
        <p>
          Within educational institutions, the ACM Student Chapter is a thriving and active community committed to promoting interest and knowledge in computer science and related subjects. These chapters offer venues for members to participate in a variety of activities such as coding competitions, workshops, lectures, and networking events.
        </p>
        <br />
        <p>
          Led by enthusiastic students and guided by academic advisors, ACM chapters serve as hubs of collaboration, innovation, and career development. They help students grow professionally and foster the next generation of technology leaders.
        </p>
      </OverviewSection>

      <div className="container mx-auto my-10 grid grid-cols-1 md:grid-cols-1 gap-6">
        <InfoCard
          title="Purpose of the Chapter"
          iconClass="fas fa-lightbulb"
          content={
            <>
              <p>The ACM Student Chapter at PIET aims to:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Promote knowledge and innovation in computer science.</li>
                <li>Provide learning platforms like workshops, seminars, and contests.</li>
                <li>Encourage participation in national and global ACM events.</li>
                <li>Foster a strong technical community on campus.</li>
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
      src="/images/chapters/acm/acm-5.jpg"
      alt="Event 5"
      className="w-full h-full object-cover rounded-lg shadow"
    />
  </div>
  <div className="aspect-square">
    <img
      src="/images/chapters/acm/acm-2.jpg"
      alt="Event 6"
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
