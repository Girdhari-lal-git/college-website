import React from "react";
import BreadCrumb from "@/components/BreadCrumb";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import OverviewSection from "@/components/OverviewSection";
import InfoCard from "@/components/InfoCard";
import Checklist from "@/components/Checklist";
import DynamicTable from "@/components/DynamicTable ";
import { AccessibilityFeatures } from "@/components/AccessibilityFeatures";
import { motion } from "framer-motion";

export default function RedRibbonClubPage() {

  // ==========================
  // DATA
  // ==========================

  const statistics = [];

  const pillars = [];

  const objectives = [];

  const leadership = [];

  const activities = [];

  const gallery = [];

  return (
     <div className="bg-gradient-to-b from-[#f8fbff] to-white">
                <AccessibilityFeatures />
                <Header />
                <BreadCrumb
                    title="PIET - Red Ribbon Club"
                    description="The Red Ribbon Club at PIET empowers students through awareness, volunteerism, leadership, and community engagement."
                    breadcrumbs={[
                        { label: "Home", href: "/" },
                        { label: "PIET - IETE", isCurrent: true },
                    ]}
                />
    
                {/* Red Ribbon Club Logo Section */}
        
      
    
    <div className="min-h-screen bg-white">

      {/* ==========================================
                HERO SECTION
========================================== */}
<section className="relative overflow-hidden">

  {/* Background Gradient */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#002147] via-[#003d82] to-[#C62828]" />

  {/* Decorative Elements */}
  <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl" />

  <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-500/20 rounded-full blur-3xl" />

  <div className="relative max-w-7xl mx-auto px-6 py-28">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >

        <span className="
          inline-flex
          items-center
          px-4
          py-2
          rounded-full
          bg-white/10
          text-white
          text-sm
          font-medium
          mb-6
        ">
          Constituted under NACO • Government of India
        </span>

        <h1 className="
          text-5xl
          md:text-7xl
          font-bold
          text-white
          leading-tight
          mb-6
        ">
          Red Ribbon
          <span className="block text-red-300">
            Club
          </span>
        </h1>

        <p className="
          text-xl
          md:text-2xl
          text-blue-100
          font-medium
          mb-6
        ">
          Poornima Institute of Engineering & Technology
        </p>

        <p className="
          text-lg
          text-gray-200
          leading-relaxed
          max-w-2xl
          mb-10
        ">
          Empowering youth through awareness, volunteerism,
          leadership, and community engagement while promoting
          HIV/AIDS awareness, voluntary blood donation, life skills,
          and social responsibility.
        </p>

        <div className="flex flex-wrap gap-4">

          <button className="
            px-8
            py-4
            bg-white
            text-[#002147]
            rounded-xl
            font-semibold
            shadow-xl
            hover:scale-105
            transition-all
          ">
            Explore Activities
          </button>

          <button className="
            px-8
            py-4
            border-2
            border-white
            text-white
            rounded-xl
            font-semibold
            hover:bg-white/10
            transition-all
          ">
            Join the Movement
          </button>

        </div>

      </motion.div>

      {/* Right Content */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="flex justify-center"
      >

        <div className="relative">

          {/* Glow */}
          <div className="
            absolute
            inset-0
            bg-red-500/30
            blur-3xl
            rounded-full
          " />

          <img
            src="/images/chapters/rrc/rrc_logo.png"
            alt="Red Ribbon Club"
            className="
              relative
              w-72
              md:w-96
              object-contain
              drop-shadow-2xl
            "
          />

        </div>

      </motion.div>

    </div>

  </div>

  {/* Bottom Wave */}
  <div className="absolute bottom-0 left-0 right-0">

    <svg
      viewBox="0 0 1440 120"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,53.3C1120,53,1280,75,1360,85.3L1440,96L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" />
    </svg>

  </div>

</section>



      {/* ==========================================
                IMPACT STATISTICS
========================================== */}
<section className="relative py-20 bg-white">

  <div className="max-w-7xl mx-auto px-6">

    {/* Section Header */}
    <div className="text-center mb-16">

      <span className="
        inline-block
        px-4
        py-2
        rounded-full
        bg-red-50
        text-[#C62828]
        font-semibold
        text-sm
      ">
        Club Snapshot
      </span>

      <h2 className="
        mt-5
        text-4xl
        md:text-5xl
        font-bold
        bg-gradient-to-r
        from-[#002147]
        to-[#C62828]
        bg-clip-text
        text-transparent
      ">
        Red Ribbon Club at a Glance
      </h2>

      <p className="
        mt-5
        max-w-3xl
        mx-auto
        text-gray-600
        text-lg
      ">
        Empowering students through awareness, leadership,
        volunteerism, and community engagement in alignment
        with the mission of NACO and RSACS.
      </p>

    </div>

    {/* Statistics Grid */}
    <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">

      {[
        {
          value: "4",
          title: "Core Units",
          icon: "🏛️",
        },
        {
          value: "17-25",
          title: "Target Age Group",
          icon: "🎓",
        },
        {
          value: "NACO",
          title: "Affiliated Club",
          icon: "🇮🇳",
        },
        {
          value: "1000+",
          title: "Students Impacted",
          icon: "👥",
        },
        {
          value: "50+",
          title: "Volunteers",
          icon: "🤝",
        },
      ].map((item, index) => (

        <motion.div
          key={index}
          whileHover={{
            y: -10,
            transition: { duration: 0.2 }
          }}
          className="
            group
            relative
            overflow-hidden
            bg-white
            rounded-3xl
            shadow-lg
            border
            border-gray-100
            p-8
            text-center
            hover:shadow-2xl
            transition-all
          "
        >

          {/* Top Gradient Bar */}
          <div className="
            absolute
            top-0
            left-0
            right-0
            h-1.5
            bg-gradient-to-r
            from-[#002147]
            to-[#C62828]
          " />

          <div className="text-5xl mb-5">
            {item.icon}
          </div>

          <h3 className="
            text-4xl
            font-bold
            text-[#002147]
            mb-2
          ">
            {item.value}
          </h3>

          <p className="
            text-gray-600
            font-medium
          ">
            {item.title}
          </p>

        </motion.div>

      ))}

    </div>

    {/* Bottom Highlight */}
    <div className="
      mt-20
      rounded-3xl
      overflow-hidden
      bg-gradient-to-r
      from-[#002147]
      via-[#003a75]
      to-[#C62828]
      p-10
      text-white
      text-center
      shadow-2xl
    ">

      <h3 className="
        text-3xl
        md:text-4xl
        font-bold
        mb-4
      ">
        Creating Awareness. Inspiring Change.
      </h3>

      <p className="
        max-w-4xl
        mx-auto
        text-lg
        text-gray-100
        leading-relaxed
      ">
        The Red Ribbon Club serves as a platform for students
        to become informed, responsible, and socially conscious
        citizens through awareness campaigns, blood donation
        drives, leadership development initiatives, and
        community outreach programs.
      </p>

    </div>

  </div>

</section>


      {/* ==========================================
                ABOUT RED RIBBON CLUB
========================================== */}
<section className="py-24 bg-gradient-to-b from-white to-[#f8fbff]">

  <div className="max-w-7xl mx-auto px-6">

    {/* Section Header */}
    <div className="text-center mb-16">

      <span className="
        inline-block
        px-4
        py-2
        rounded-full
        bg-blue-50
        text-[#002147]
        font-semibold
        text-sm
      ">
        About RRC
      </span>

      <h2 className="
        mt-5
        text-4xl
        md:text-5xl
        font-bold
        bg-gradient-to-r
        from-[#002147]
        to-[#C62828]
        bg-clip-text
        text-transparent
      ">
        Red Ribbon Club
      </h2>

    </div>

    {/* Content Grid */}
    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* Left Image */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >

        <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl">
  <img
    src="/images/chapters/rrc/rrc3.jpeg"
    alt="Red Ribbon Club"
    className="w-full h-full object-cover"
  />
</div>

      </motion.div>

      {/* Right Content */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >

        <h3 className=" text-3xl font-bold text-[#002147] mb-6 ">
          Building Awareness, Responsibility & Leadership
        </h3>

        <p className=" text-gray-600 leading-relaxed text-lg mb-6 text-justify ">
          The Red Ribbon Club (RRC) is a voluntary youth movement
          established under the National AIDS Control Organisation
          (NACO), Government of India. The club aims to educate and
          empower young people by creating awareness regarding
          HIV/AIDS prevention, voluntary blood donation, healthy
          lifestyles, and social responsibility.
        </p>

        <p className=" text-gray-600 leading-relaxed text-lg mb-6 text-justify
        ">
          At PIET, the Red Ribbon Club serves as a dynamic platform
          where students actively participate in awareness campaigns,
          community outreach programs, leadership development
          initiatives, blood donation drives, and various social
          impact activities. Through these efforts, students become
          responsible citizens and ambassadors of positive change.
        </p>

        <p className=" text-gray-600 leading-relaxed text-lg mb-10 text-justify ">
          The club strives to create a well-informed youth community
          capable of making healthy life choices while contributing
          meaningfully to society through volunteerism, compassion,
          and leadership.
        </p>

        {/* Highlight Cards */}
        <div className="grid md:grid-cols-2 gap-5">

          <div className="  bg-white rounded-2xl  p-5  shadow-lg  border-l-4 border-[#002147]">
            <h4 className="
              font-bold
              text-[#002147]
              mb-2
            ">
              NACO Affiliation
            </h4>

            <p className="text-sm text-gray-600">
              Functioning under the National AIDS Control Organisation,
              Government of India.
            </p>
          </div>

          <div className="
            bg-white
            rounded-2xl
            p-5
            shadow-lg
            border-l-4
            border-[#C62828]
          ">
            <h4 className="
              font-bold
              text-[#C62828]
              mb-2
            ">
              Youth Empowerment
            </h4>

            <p className="text-sm text-gray-600">
              Developing socially responsible and informed student
              leaders.
            </p>
          </div>

        </div>

      </motion.div>

    </div>

  </div>

</section>


     {/* ==========================================
              FOUR PILLARS OF RRC
========================================== */}
<section className="py-24 bg-white">

  <div className="max-w-7xl mx-auto px-6">

    {/* Section Header */}
    <div className="text-center mb-16">

      <span className="
        inline-block
        px-4
        py-2
        rounded-full
        bg-red-50
        text-[#C62828]
        font-semibold
        text-sm
      ">
        Core Focus Areas
      </span>

      <h2 className="
        mt-5
        text-4xl
        md:text-5xl
        font-bold
        bg-gradient-to-r
        from-[#002147]
        to-[#C62828]
        bg-clip-text
        text-transparent
      ">
        Four Pillars of Red Ribbon Club
      </h2>

      <p className="
        mt-6
        max-w-4xl
        mx-auto
        text-lg
        text-gray-600
      ">
        The Red Ribbon Club operates through four key focus areas
        that empower students to become informed, responsible,
        and socially conscious citizens.
      </p>

    </div>

    {/* Pillars Grid */}
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

      {[
        {
          icon: "🩸",
          title: "Voluntary Blood Donation",
          description:
            "Encouraging safe and voluntary blood donation through awareness campaigns, donor motivation, and participation in blood donation drives.",
          color: "border-red-500",
        },
        {
          icon: "❤️",
          title: "HIV/AIDS Awareness",
          description:
            "Creating awareness about HIV/AIDS prevention, reducing stigma, dispelling myths, and promoting scientific understanding among youth.",
          color: "border-[#C62828]",
        },
        {
          icon: "🌱",
          title: "Life Skills Education",
          description:
            "Developing communication, leadership, decision-making, emotional intelligence, and problem-solving skills among students.",
          color: "border-[#002147]",
        },
        {
          icon: "🤝",
          title: "Community Outreach",
          description:
            "Promoting social responsibility through awareness drives, volunteer activities, outreach programs, and community engagement initiatives.",
          color: "border-[#004a99]",
        },
      ].map((pillar, index) => (

        <motion.div
          key={index}
          whileHover={{
            y: -10,
            transition: { duration: 0.2 }
          }}
          className="
            group
            bg-white
            rounded-3xl
            shadow-xl
            p-8
            border-t-4
            hover:shadow-2xl
            transition-all
            duration-300
          "
          style={{
            borderTopColor:
              index === 0
                ? "#C62828"
                : index === 1
                ? "#ef5350"
                : index === 2
                ? "#002147"
                : "#004a99",
          }}
        >

          <div className="
            w-20
            h-20
            rounded-2xl
            bg-gradient-to-br
            from-[#002147]
            to-[#C62828]
            flex
            items-center
            justify-center
            text-4xl
            mb-6
            mx-auto
          ">
            {pillar.icon}
          </div>

          <h3 className="
            text-2xl
            font-bold
            text-[#002147]
            text-center
            mb-4
          ">
            {pillar.title}
          </h3>

          <p className="
            text-gray-600
            leading-relaxed
            text-center
          ">
            {pillar.description}
          </p>

        </motion.div>

      ))}

    </div>

    {/* Bottom Statement */}
    <div className="
      mt-20
      bg-gradient-to-r
      from-[#002147]
      via-[#003a75]
      to-[#C62828]
      rounded-3xl
      p-10
      text-center
      text-white
      shadow-2xl
    ">

      <h3 className="
        text-3xl
        md:text-4xl
        font-bold
        mb-4
      ">
        Empowering Youth Through Action
      </h3>

      <p className="
        max-w-4xl
        mx-auto
        text-lg
        text-gray-100
        leading-relaxed
      ">
        These four pillars form the foundation of the Red Ribbon Club,
        enabling students to actively contribute towards building a
        healthier, informed, and compassionate society while developing
        leadership qualities and a strong sense of social responsibility.
      </p>

    </div>

  </div>

</section>


      {/* ==========================================
              OBJECTIVES & MISSION
========================================== */}
<section className="py-24 bg-gradient-to-b from-[#f8fbff] to-white">

  <div className="max-w-7xl mx-auto px-6">

    {/* Section Header */}
    <div className="text-center mb-16">

      <span className="
        inline-block
        px-4
        py-2
        rounded-full
        bg-blue-50
        text-[#002147]
        font-semibold
        text-sm
      ">
        Vision & Purpose
      </span>

      <h2 className="
        mt-5
        text-4xl
        md:text-5xl
        font-bold
        bg-gradient-to-r
        from-[#002147]
        to-[#C62828]
        bg-clip-text
        text-transparent
      ">
        Objectives & Mission
      </h2>

      <p className="
        mt-6
        max-w-4xl
        mx-auto
        text-lg
        text-gray-600
      ">
        The Red Ribbon Club aims to create informed, responsible,
        and socially conscious youth by promoting awareness,
        healthy lifestyles, leadership development, and community service.
      </p>

    </div>

    {/* Mission Banner */}
    <div className="
      bg-gradient-to-r
      from-[#002147]
      via-[#003a75]
      to-[#C62828]
      rounded-3xl
      p-10
      text-center
      text-white
      shadow-2xl
      mb-16
    ">

      <h3 className="
        text-3xl
        md:text-4xl
        font-bold
        mb-5
      ">
        Our Mission
      </h3>

      <p className="
        max-w-5xl
        mx-auto
        text-lg
        leading-relaxed
        text-gray-100
      ">
        To empower students with knowledge, leadership skills,
        and social responsibility while promoting awareness
        about HIV/AIDS prevention, voluntary blood donation,
        healthy lifestyles, and community engagement for the
        betterment of society.
      </p>

    </div>

    {/* Objectives Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {[
        {
          icon: "🎗️",
          title: "Awareness Creation",
          description:
            "Spread awareness regarding HIV/AIDS prevention, stigma reduction, and healthy lifestyle practices among youth."
        },
        {
          icon: "🩸",
          title: "Blood Donation",
          description:
            "Promote voluntary blood donation and encourage students to contribute towards saving lives."
        },
        {
          icon: "👨‍🎓",
          title: "Youth Leadership",
          description:
            "Develop leadership qualities and empower students to become responsible community leaders."
        },
        {
          icon: "🌿",
          title: "Healthy Lifestyle",
          description:
            "Encourage healthy habits, informed decision-making, and positive behavioral changes."
        },
        {
          icon: "🤝",
          title: "Social Responsibility",
          description:
            "Instill a sense of social commitment and active participation in community welfare initiatives."
        },
        {
          icon: "🌍",
          title: "Community Service",
          description:
            "Engage students in outreach activities, awareness drives, and volunteer programs for societal development."
        }
      ].map((item, index) => (

        <motion.div
          key={index}
          whileHover={{
            y: -10,
            transition: { duration: 0.2 }
          }}
          className="
            bg-white
            rounded-3xl
            p-8
            shadow-lg
            border
            border-gray-100
            hover:shadow-2xl
            transition-all
          "
        >

          <div className="
            w-16
            h-16
            rounded-2xl
            bg-gradient-to-br
            from-[#002147]
            to-[#C62828]
            flex
            items-center
            justify-center
            text-3xl
            mb-5
          ">
            {item.icon}
          </div>

          <h3 className="
            text-xl
            font-bold
            text-[#002147]
            mb-3
          ">
            {item.title}
          </h3>

          <p className="
            text-gray-600
            leading-relaxed
          ">
            {item.description}
          </p>

        </motion.div>

      ))}

    </div>

  </div>

</section>



      {/* ==========================================
                LEADERSHIP TEAM
========================================== */}
<section className="py-24 bg-white">

  <div className="max-w-7xl mx-auto px-6">

    {/* Section Header */}
    <div className="text-center mb-16">

      <span className="
        inline-block
        px-4
        py-2
        rounded-full
        bg-red-50
        text-[#C62828]
        font-semibold
        text-sm
      ">
        Team RRC
      </span>

      <h2 className="
        mt-5
        text-4xl
        md:text-5xl
        font-bold
        bg-gradient-to-r
        from-[#002147]
        to-[#C62828]
        bg-clip-text
        text-transparent
      ">
        Leadership Team
      </h2>

      <p className="
        mt-6
        max-w-4xl
        mx-auto
        text-lg
        text-gray-600
      ">
        The Red Ribbon Club is guided by dedicated faculty mentors
        and student leaders who work together to promote awareness,
        volunteerism, leadership, and social responsibility.
      </p>

    </div>

    {/* ==========================================
                  FACULTY LEADERSHIP
    ========================================== */}

    <div className="mb-20">

      <h3 className="
        text-3xl
        font-bold
        text-[#002147]
        text-center
        mb-10
      ">
        Faculty Leadership
      </h3>

      <div className="grid md:grid-cols-3 gap-8">

        {[
          {
            name: "Dr. Dinesh Goyal",
            designation: "Patron",
            initials: "DG",
          },
          {
            name: "Dr. Nupur Jain",
            designation: "Nodal Officer",
            initials: "NJ",
          },
          {
            name: "Mr. Robin Prakash",
            designation: "Programme Officer",
            initials: "RP",
          },
        ].map((member, index) => (

          <motion.div
            key={index}
            whileHover={{
              y: -10,
              transition: { duration: 0.2 }
            }}
            className="
              bg-white
              rounded-3xl
              shadow-xl
              border
              border-gray-100
              overflow-hidden
              hover:shadow-2xl
              transition-all
            "
          >

            <div className="
              h-2
              bg-gradient-to-r
              from-[#002147]
              to-[#C62828]
            " />

            <div className="p-8 text-center">

              <div className="
                w-24
                h-24
                rounded-full
                bg-gradient-to-br
                from-[#002147]
                to-[#C62828]
                text-white
                flex
                items-center
                justify-center
                text-2xl
                font-bold
                mx-auto
                mb-5
              ">
                {member.initials}
              </div>

              <h4 className="
                text-xl
                font-bold
                text-[#002147]
                mb-2
              ">
                {member.name}
              </h4>

              <p className="
                text-[#C62828]
                font-semibold
              ">
                {member.designation}
              </p>

            </div>

          </motion.div>

        ))}

      </div>

    </div>

    {/* ==========================================
                  STUDENT LEADERSHIP
    ========================================== */}

    <div>

      <h3 className="
        text-3xl
        font-bold
        text-[#002147]
        text-center
        mb-10
      ">
        Student Leadership
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 ">

        {[
          {
            name: "Vaibhav Sharma",
            designation: "President",
            initials: "VS",
          },
          {
            name: "Purshottam Lingwal",
            designation: "Vice President",
            initials: "PL",
          },
          
        ].map((member, index) => (

          <motion.div
            key={index}
            whileHover={{
              y: -10,
              transition: { duration: 0.2 }
            }}
            className="
              bg-gradient-to-br
              from-[#002147]
              to-[#C62828]
              rounded-3xl
              p-8
              text-white
              text-center
              shadow-xl
              hover:shadow-2xl
              transition-all
            "
          >

            <div className="
              w-20
              h-20
              rounded-full
              bg-white/20
              backdrop-blur-sm
              flex
              items-center
              justify-center
              text-xl
              font-bold
              mx-auto
              mb-5
            ">
              {member.initials}
            </div>

            <h4 className="
              text-xl
              font-bold
              mb-2
            ">
              {member.name}
            </h4>

            <p className="
              text-red-100
              font-medium
            ">
              {member.designation}
            </p>

          </motion.div>

        ))}

      </div>

    </div>

  </div>

</section>


 {/* ==========================================
        ACTIVITIES & INITIATIVES
========================================== */}
<section className="py-24 bg-gradient-to-b from-[#f8fbff] to-white">

  <div className="max-w-7xl mx-auto px-6">

    {/* Header */}
    <div className="text-center mb-16">

      <span className="
        inline-block
        px-4 py-2
        rounded-full
        bg-red-50
        text-[#C62828]
        text-sm
        font-semibold
      ">
        Club Activities
      </span>

      <h2 className="
        mt-5
        text-4xl
        md:text-5xl
        font-bold
        bg-gradient-to-r
        from-[#002147]
        to-[#C62828]
        bg-clip-text
        text-transparent
      ">
        Activities & Initiatives
      </h2>

      <p className="
        mt-6
        max-w-4xl
        mx-auto
        text-lg
        text-gray-600
      ">
        Red Ribbon Club organizes a variety of awareness,
        leadership, health, and community engagement
        activities throughout the year.
      </p>

    </div>

    {/* Categories */}
    <div className="grid lg:grid-cols-2 gap-8">

      {[
        {
          icon: "🩸",
          title: "Voluntary Blood Donation",
          description:
            "Promoting voluntary blood donation and encouraging students to become responsible donors.",
          activities: [
            "Blood Donation Camps",
            "Donor Awareness Campaigns",
            "Blood Group Testing",
            "Donor Registration Drives"
          ]
        },
        {
          icon: "🎗️",
          title: "HIV/AIDS Awareness",
          description:
            "Creating awareness and reducing stigma through educational programs and campaigns.",
          activities: [
            "World AIDS Day",
            "Awareness Rallies",
            "Poster Competitions",
            "Awareness Sessions"
          ]
        },
        {
          icon: "🎓",
          title: "Workshops & Training",
          description:
            "Developing life skills, leadership abilities, and health awareness among students.",
          activities: [
            "Leadership Programs",
            "Expert Talks",
            "Life Skills Training",
            "Interactive Workshops"
          ]
        },
        {
          icon: "🤝",
          title: "Community Outreach",
          description:
            "Encouraging social responsibility through direct community engagement.",
          activities: [
            "Nukkad Natak",
            "Awareness Drives",
            "Volunteer Activities",
            "Community Campaigns"
          ]
        }
      ].map((category, index) => (

        <motion.div
          key={index}
          whileHover={{
            y: -8,
            transition: { duration: 0.2 }
          }}
          className="
            bg-white
            rounded-3xl
            shadow-xl
            overflow-hidden
            border
            border-gray-100
            hover:shadow-2xl
            transition-all
          "
        >

          <div className="
            h-2
            bg-gradient-to-r
            from-[#002147]
            to-[#C62828]
          " />

          <div className="p-8">

            <div className="
              flex
              items-center
              gap-4
              mb-5
            ">
              <div className="text-5xl">
                {category.icon}
              </div>

              <h3 className="
                text-2xl
                font-bold
                text-[#002147]
              ">
                {category.title}
              </h3>
            </div>

            <p className="
              text-gray-600
              mb-6
            ">
              {category.description}
            </p>

            <ul className="space-y-3">

              {category.activities.map((activity, idx) => (

                <li
                  key={idx}
                  className="
                    flex
                    items-center
                    gap-3
                    text-gray-700
                  "
                >
                  <span className="
                    w-2
                    h-2
                    rounded-full
                    bg-[#C62828]
                  " />

                  {activity}

                </li>

              ))}

            </ul>

          </div>

        </motion.div>

      ))}

    </div>

  </div>

</section>

{/* ==========================================
            ACTIVITY ARCHIVE
========================================== */}
<section className="py-24 bg-white">

  <div className="max-w-7xl mx-auto px-6">

    {/* Header */}
    <div className="text-center mb-16">

      <span className="
        inline-block
        px-4 py-2
        rounded-full
        bg-blue-50
        text-[#002147]
        text-sm
        font-semibold
      ">
        Activity Archive
      </span>

      <h2 className="
        mt-5
        text-4xl
        md:text-5xl
        font-bold
        bg-gradient-to-r
        from-[#002147]
        to-[#C62828]
        bg-clip-text
        text-transparent
      ">
        Activities Conducted
      </h2>

      <p className="
        mt-6
        max-w-4xl
        mx-auto
        text-lg
        text-gray-600
      ">
        A glimpse of awareness campaigns, outreach programs,
        workshops, blood donation initiatives, and community
        engagement activities organized by the Red Ribbon Club.
      </p>

    </div>

    {/* Activity List */}
    <div className="
      bg-white
      rounded-3xl
      shadow-xl
      overflow-hidden
      border
      border-gray-100
    ">

      {[
        {
          date: "01 Dec 2024",
          activity: "World AIDS Day Awareness Campaign",
        },
        {
          date: "15 Jan 2025",
          activity: "Voluntary Blood Donation Camp",
        },
        {
          date: "08 Feb 2025",
          activity: "Youth Leadership Development Program",
        },
        {
          date: "22 Feb 2025",
          activity: "HIV/AIDS Awareness Workshop",
        },
        {
          date: "05 Mar 2025",
          activity: "Community Outreach & Awareness Drive",
        },
        {
          date: "18 Mar 2025",
          activity: "Street Play (Nukkad Natak)",
        },
        {
          date: "02 Apr 2025",
          activity: "Healthy Lifestyle Awareness Session",
        },
      ].map((item, index) => (

        <div
          key={index}
          className="
            flex
            flex-col
            md:flex-row
            md:items-center
            justify-between
            gap-3
            px-8
            py-5
            border-b
            border-gray-100
            hover:bg-gray-50
            transition-all
          "
        >

          <div className="
            flex
            items-center
            gap-4
          ">

            <div className="
              w-3
              h-3
              rounded-full
              bg-[#C62828]
            " />

            <h3 className="
              text-lg
              font-medium
              text-[#002147]
            ">
              {item.activity}
            </h3>

          </div>

          <div className="
            px-4
            py-2
            rounded-full
            bg-blue-50
            text-[#002147]
            font-semibold
            text-sm
            w-fit
          ">
            {item.date}
          </div>

        </div>

      ))}

    </div>

    {/* View More Button */}
    <div className="text-center mt-10">

      <button className="
        px-8
        py-4
        rounded-xl
        bg-gradient-to-r
        from-[#002147]
        to-[#C62828]
        text-white
        font-semibold
        shadow-lg
        hover:scale-105
        transition-all
      ">
        View All Activities
      </button>

    </div>

  </div>

</section>


      {/* ==========================================
                IMPACT BANNER
========================================== */}
<section className="py-24">

  <div className="max-w-7xl mx-auto px-6">

    <div className="
      relative
      overflow-hidden
      rounded-[2rem]
      bg-gradient-to-r
      from-[#002147]
      via-[#003a75]
      to-[#C62828]
      shadow-2xl
    ">

      {/* Decorative Background Elements */}
      <div className="
        absolute
        top-0
        right-0
        w-96
        h-96
        bg-white/10
        rounded-full
        blur-3xl
      " />

      <div className="
        absolute
        bottom-0
        left-0
        w-80
        h-80
        bg-red-500/20
        rounded-full
        blur-3xl
      " />

      <div className="
        relative
        px-10
        md:px-16
        py-20
      ">

        {/* Heading */}
        <div className="text-center mb-16">

          <span className="
            inline-block
            px-5
            py-2
            rounded-full
            bg-white/10
            text-white
            font-medium
            backdrop-blur-sm
          ">
            Red Ribbon Club Impact
          </span>

          <h2 className="
            mt-6
            text-4xl
            md:text-6xl
            font-bold
            text-white
          ">
            Creating Awareness.
            <span className="block text-red-200">
              Inspiring Change.
            </span>
          </h2>

          <p className="
            mt-6
            max-w-4xl
            mx-auto
            text-lg
            text-blue-100
            leading-relaxed
          ">
            Through education, volunteerism, leadership,
            and community engagement, the Red Ribbon Club
            empowers students to become informed citizens
            and responsible leaders committed to building
            a healthier and more compassionate society.
          </p>

        </div>

        {/* Impact Highlights */}
        <div className="
          grid
          md:grid-cols-4
          gap-8
        ">

          {[
            {
              value: "Awareness",
              label: "Educating youth on HIV/AIDS prevention and healthy lifestyles",
            },
            {
              value: "Service",
              label: "Promoting voluntary blood donation and social responsibility",
            },
            {
              value: "Leadership",
              label: "Developing future leaders through participation and action",
            },
            {
              value: "Community",
              label: "Creating positive social impact through outreach initiatives",
            },
          ].map((item, index) => (

            <div
              key={index}
              className="
                text-center
                bg-white/10
                backdrop-blur-sm
                rounded-2xl
                p-6
                border
                border-white/10
              "
            >

              <h3 className="
                text-3xl
                font-bold
                text-white
                mb-3
              ">
                {item.value}
              </h3>

              <p className="
                text-blue-100
                text-sm
                leading-relaxed
              ">
                {item.label}
              </p>

            </div>

          ))}

        </div>

        {/* Quote */}
        <div className="
          mt-16
          text-center
        ">

          <blockquote className="
            text-xl
            md:text-2xl
            italic
            text-white
            max-w-4xl
            mx-auto
            leading-relaxed
          ">
            "The greatest contribution of youth is not only in
            shaping their own future, but in creating a healthier,
            informed, and empowered society for all."
          </blockquote>

        </div>

      </div>

    </div>

  </div>

</section>



     {/* ==========================================
                  PHOTO GALLERY
========================================== */}
<section className="py-24 bg-gradient-to-b from-white to-[#f8fbff]">

  <div className="max-w-7xl mx-auto px-6">

    {/* Header */}
    <div className="text-center mb-16">

      <span className="
        inline-block
        px-4
        py-2
        rounded-full
        bg-red-50
        text-[#C62828]
        font-semibold
        text-sm
      ">
        Moments & Memories
      </span>

      <h2 className="
        mt-5
        text-4xl
        md:text-5xl
        font-bold
        bg-gradient-to-r
        from-[#002147]
        to-[#C62828]
        bg-clip-text
        text-transparent
      ">
        Gallery
      </h2>

      <p className="
        mt-6
        max-w-4xl
        mx-auto
        text-lg
        text-gray-600
      ">
        A glimpse into the awareness campaigns,
        blood donation drives, workshops,
        leadership programs, and community
        outreach activities conducted by the
        Red Ribbon Club.
      </p>

    </div>

    {/* Masonry Gallery */}
    <div className="
      columns-1
      md:columns-2
      lg:columns-3
      gap-6
      space-y-6
    ">

      {[
        {
          image: "/images/chapters/rrc/rrc9.jpg",
          title: "World AIDS Day",
        },
        {
          image: "/images/chapters/rrc/rrc7.jpg",
          title: "Blood Donation Camp",
        },
        {
          image: "/images/chapters/rrc/rrc4.jpeg",
          title: "Merathon Walk",
        },
        {
          image: "/images/chapters/rrc/rrc6.jpeg",
          title: "Youth Leadership Program",
        },
        {
          image: "/images/chapters/rrc/rrc2.JPG",
          title: "Community Outreach",
        },
        {
          image: "/images/chapters/rrc/rrc8.jpg",
          title: "Faculty Felicitation",
        },
        {
          image: "/images/chapters/rrc/rrc5.jpeg",
          title: "Volunteer Activity",
        },
        {
          image: "/images/chapters/rrc/rrc8.jpg",
          title: "Health Awareness Session",
        },
        {
          image: "/images/chapters/rrc/rrc10.jpg",
          title: "Health Awareness Session",
        },
      ].map((item, index) => (

        <motion.div
          key={index}
          whileHover={{ scale: 1.03 }}
          className="
            relative
            overflow-hidden
            rounded-3xl
            shadow-xl
            group
            break-inside-avoid
            mb-6
          "
        >

          <img
            src={item.image}
            alt={item.title}
            className="
              w-full
              object-cover
              transition-transform
              duration-500
              group-hover:scale-110
            "
          />

          {/* Overlay */}
          <div className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/80
            via-black/30
            to-transparent
            opacity-0
            group-hover:opacity-100
            transition-all
            duration-300
            flex
            items-end
          ">

            <div className="p-6">

              <h3 className="
                text-white
                text-xl
                font-bold
              ">
                {item.title}
              </h3>

            </div>

          </div>

        </motion.div>

      ))}

    </div>

    {/* Bottom Banner */}
    <div className="
      mt-16
      bg-white
      rounded-3xl
      shadow-xl
      border
      border-gray-100
      p-10
      text-center
    ">

      <h3 className="
        text-3xl
        font-bold
        text-[#002147]
        mb-4
      ">
        Capturing Impact Through Action
      </h3>

      <p className="
        max-w-4xl
        mx-auto
        text-gray-600
        text-lg
        leading-relaxed
      ">
        Every photograph reflects the dedication,
        enthusiasm, and commitment of our volunteers
        and participants who contribute towards
        creating awareness, promoting healthy lifestyles,
        and strengthening community engagement.
      </p>

    </div>

  </div>

</section>



     {/* ==========================================
                WHY JOIN RRC
========================================== */}
<section className="py-24 bg-gradient-to-b from-[#f8fbff] to-white">

  <div className="max-w-7xl mx-auto px-6">

    {/* Header */}
    <div className="text-center mb-16">

      <span className="
        inline-block
        px-4
        py-2
        rounded-full
        bg-blue-50
        text-[#002147]
        font-semibold
        text-sm
      ">
        Become a Volunteer
      </span>

      <h2 className="
        mt-5
        text-4xl
        md:text-5xl
        font-bold
        bg-gradient-to-r
        from-[#002147]
        to-[#C62828]
        bg-clip-text
        text-transparent
      ">
        Why Join Red Ribbon Club?
      </h2>

      <p className="
        mt-6
        max-w-4xl
        mx-auto
        text-lg
        text-gray-600
      ">
        Joining the Red Ribbon Club is more than participating
        in activities—it's an opportunity to become a socially
        responsible leader, contribute to meaningful causes,
        and make a lasting impact on society.
      </p>

    </div>

    {/* Benefits Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {[
        {
          icon: "🚀",
          title: "Leadership Development",
          description:
            "Enhance leadership, communication, teamwork, and decision-making skills through active participation in club initiatives.",
        },
        {
          icon: "🤝",
          title: "Volunteer Experience",
          description:
            "Gain valuable experience by organizing awareness campaigns, community outreach programs, and social initiatives.",
        },
        {
          icon: "🌍",
          title: "Social Impact",
          description:
            "Contribute towards creating awareness and improving the well-being of communities through meaningful service activities.",
        },
        {
          icon: "🩸",
          title: "Health Awareness",
          description:
            "Develop awareness about HIV/AIDS prevention, blood donation, healthy lifestyles, and public health issues.",
        },
        {
          icon: "🎓",
          title: "Personal Growth",
          description:
            "Build confidence, empathy, responsibility, and interpersonal skills while working with diverse groups of people.",
        },
        {
          icon: "🏆",
          title: "Recognition & Achievement",
          description:
            "Receive certificates, leadership opportunities, and recognition for contributions towards community service and awareness programs.",
        },
      ].map((benefit, index) => (

        <motion.div
          key={index}
          whileHover={{
            y: -10,
            transition: { duration: 0.2 }
          }}
          className=" bg-white rounded-3xl  p-8 shadow-lg border border-gray-100 hover:shadow-2xl  transition-all  duration-300  "
        >

          <div className="
            w-16
            h-16
            rounded-2xl
            bg-gradient-to-br
            from-[#002147]
            to-[#C62828]
            flex
            items-center
            justify-center
            text-3xl
            mb-5
          ">
            {benefit.icon}
          </div>

          <h3 className="
            text-xl
            font-bold
            text-[#002147]
            mb-4
          ">
            {benefit.title}
          </h3>

          <p className="
            text-gray-600
            leading-relaxed
          ">
            {benefit.description}
          </p>

        </motion.div>

      ))}

    </div>

    {/* Bottom Message */}
    <div className="
      mt-20
      text-center
      bg-white
      rounded-3xl
      shadow-xl
      border
      border-gray-100
      p-10
    ">

      <h3 className="
        text-3xl
        font-bold
        text-[#002147]
        mb-4
      ">
        Be the Change You Wish to See
      </h3>

      <p className="
        max-w-4xl
        mx-auto
        text-lg
        text-gray-600
        leading-relaxed
      ">
        Every volunteer contributes towards building a healthier,
        more informed, and compassionate society. Join the Red
        Ribbon Club and become part of a movement that empowers
        youth to create positive social change.
      </p>

    </div>

  </div>

</section>
    </div>
     <Cta />
      <Footer />
    </div>

  );
}