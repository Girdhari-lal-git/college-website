
import React from 'react';
import { motion } from 'framer-motion';
import { AccessibilityFeatures } from '../components/AccessibilityFeatures';
import Header from '../components/Header';
import BreadCrumb from '../components/BreadCrumb';
import Footer from '../components/Footer';
import Cta from '../components/Cta';
import DynamicTable from '@/components/DynamicTable '

interface EventCardProps {
  title: string;
  description: string;
  image: string;
  highlights: string[];
  when: string;
  venue: string;
  category: string;
  featured?: boolean;
}

const EventCard = ({ title, description, image, highlights, when, venue, category, featured }: EventCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className={`group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
      featured ? 'ring-2 ring-primary/20 scale-105' : ''
    }`}
  >
    {featured && (
      <div className="absolute top-4 right-4 z-10">
        <span className="bg-gradient-to-r from-primary to-primary-light text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
          Featured
        </span>
      </div>
    )}
    
    <div className="relative h-72 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
      <div className="absolute top-4 left-4">
        <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
          {category}
        </span>
      </div>
      <div className="absolute bottom-6 left-6 right-6 text-white">
        <h3 className="text-2xl font-bold mb-2 leading-tight">{title}</h3>
        <div className="flex items-center space-x-4 text-sm opacity-90">
          <div className="flex items-center">
            <i className="fas fa-calendar mr-2"></i>
            <span>{when}</span>
          </div>
          <div className="flex items-center">
            <i className="fas fa-map-marker-alt mr-2"></i>
            <span className="truncate">{venue}</span>
          </div>
        </div>
      </div>
    </div>
    
    <div className="p-8">
      <p className="text-gray-600 mb-6 leading-relaxed text-sm">{description}</p>
      
      <div className="mb-6">
        <h4 className="text-lg font-bold text-primary mb-4 uppercase tracking-wide">Event Highlights</h4>
        <div className="grid grid-cols-1 gap-3">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-start group/item"
            >
              <div className="w-2 h-2 bg-gradient-to-r from-primary to-primary-light rounded-full mt-2 mr-3 flex-shrink-0 group-hover/item:scale-125 transition-transform"></div>
              <span className="text-sm text-gray-600 group-hover/item:text-gray-800 transition-colors">{highlight}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <i className="fas fa-users text-primary"></i>
          <span>Open for All Students</span>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-primary to-primary-light text-white px-6 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-300"
        >
          Learn More
        </motion.button>
      </div>
    </div>
  </motion.div>
);

const StatsCard = ({ icon, number, label, gradient }: { icon: string; number: string; label: string; gradient: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={`relative text-center ${gradient} text-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group`}
  >
    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="relative z-10">
      <div className="mb-4">
        <i className={`${icon} text-5xl mb-3 drop-shadow-lg`}></i>
      </div>
      <div className="text-4xl font-bold mb-2 tracking-tight">{number}</div>
      <div className="text-sm opacity-90 uppercase tracking-wide font-medium">{label}</div>
    </div>
  </motion.div>
);

const AnnualEvents = () => {
  const events: EventCardProps[] = [
    {
      title: "TECH FEST",
      description: "The ultimate technology festival showcasing cutting-edge innovations, coding competitions, robotics, and tech exhibitions. A platform where future engineers demonstrate their technical prowess and innovative thinking.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80",
      highlights: [
        "AI & Machine Learning workshops",
        "Robotics competitions and exhibitions",
        "Coding hackathons and programming contests",
        "Tech startup pitching sessions",
        "Industry expert talks and networking",
        "Innovation showcase and project displays"
      ],
      when: "January - February",
      venue: "PIET Campus",
      category: "Technology",
      featured: true
    },
    {
      title: "AAROHAN",
      description: "The grand annual technical festival of PIET that showcases innovation, creativity, and technical prowess. A platform where students from various disciplines come together to participate in competitions, workshops, and exhibitions.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80",
      highlights: [
        "Technical competitions and coding challenges",
        "Innovation exhibitions and project displays",
        "Expert talks and industry interactions",
        "Cultural performances and entertainment",
        "Inter-college competitions",
        "Research paper presentations"
      ],
      when: "February - March",
      venue: "PIET Campus",
      category: "Technical",
      featured: true
    },
    {
      title: "OJAS",
      description: "The vibrant annual cultural festival that celebrates art, creativity, and talent. Ojas brings together students to showcase their artistic abilities through various cultural competitions and performances.",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80",
      highlights: [
        "Dance and music competitions",
        "Drama and theatre performances",
        "Art and craft exhibitions",
        "Fashion shows and talent hunts",
        "Celebrity performances and entertainment",
        "Photography and videography contests"
      ],
      when: "October - November",
      venue: "PIET Auditorium & Campus",
      category: "Cultural"
    },
    {
      title: "FRESHERS PARTY",
      description: "A warm welcome celebration for new students joining the PIET family. An opportunity for freshers to interact with seniors, participate in fun activities, and begin their journey with memorable experiences.",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80",
      highlights: [
        "Welcome ceremony and orientation",
        "Fun games and ice-breaking activities",
        "Mr. & Miss Fresher competitions",
        "Cultural performances by seniors",
        "Networking and interaction sessions",
        "Campus tour and facility introduction"
      ],
      when: "August - September",
      venue: "Main Auditorium",
      category: "Social"
    },
    {
      title: "FAREWELL PARTY",
      description: "A heartfelt send-off celebration for graduating students. A memorable evening filled with emotions, memories, and best wishes for the future endeavors of our departing students.",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80",
      highlights: [
        "Emotional farewell speeches and memories",
        "Awards and recognition ceremony",
        "Photo sessions and memory sharing",
        "Entertainment and cultural programs",
        "Networking with alumni and faculty",
        "Career guidance and mentorship sessions"
      ],
      when: "April - May",
      venue: "PIET Auditorium",
      category: "Social"
    },
    {
      title: "DANDIYA NIGHT",
      description: "A spectacular celebration of traditional Gujarati culture during Navratri. Students come together to enjoy the vibrant dandiya and garba dance forms in a festive atmosphere filled with music, colors, and joy.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80",
      highlights: [
        "Traditional dandiya and garba dancing",
        "Colorful ethnic attire and decorations",
        "Live music and DJ performances",
        "Best dressed competitions",
        "Food stalls with traditional delicacies",
        "Cultural exchange and community bonding"
      ],
      when: "September - October",
      venue: "College Grounds",
      category: "Cultural"
    }
  ];

  //Annual Event Data
  const annualDocumentData = [
    {
        sno: 1,
        name: 'Aarohan 2024 ',
        download: (
            <a href="https://drive.google.com/file/d/1c6fEJgOiTnTN5YRlv2wPqI9Ks56dJk7S/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download PDF
                </button>
            </a>
        )
      },
      {
      sno: 2,
        name: 'Aarohan 2023',
        download: (
            <a href="https://drive.google.com/file/d/1fXCkEw7h5pIkbQL-nC-9GVqfUxoCe_ah/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download PDF
                </button>
            </a>
        )
    },
    {
      sno: 3,
        name: 'Aarohan 2022',
        download: (
            <a href="https://drive.google.com/file/d/1HXT-OArNhLicSt81JXCGiZqWT76vPSpv/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download PDF
                </button>
            </a>
        )
    },
    {
        sno: 4,
        name: 'Aarohan 2019 ',
        download: (
            <a href="https://drive.google.com/file/d/1au4WC28G3sVRW6rZLtXRG8oVNd7L4q2D/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download PDF
                </button>
            </a>
        )
      },
      {
      sno: 5,
        name: 'Manthan 2023',
        download: (
            <a href="https://drive.google.com/file/d/1LkOWAQJFV_5if6zQQD-WT7ZJdiSF9gMC/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download PDF
                </button>
            </a>
        )
    },
    {
      sno: 6,
        name: 'Manthan 2021',
        download: (
            <a href="https://drive.google.com/file/d/1z4Q_YBxGqVMcu6atTWW6KgZxPzMqeZsn/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download PDF
                </button>
            </a>
        )
    },
    {
        sno: 7,
        name: 'Manthan 2019 ',
        download: (
            <a href="https://drive.google.com/file/d/1qIum9ZR285WWHHQggKFDtOLrE_YtwB5p/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download PDF
                </button>
            </a>
        )
      },
      {
      sno: 8,
        name: 'Kalanidhi 2023',
        download: (
            <a href="https://drive.google.com/file/d/15E5nmCXPKlWdU1Szs8jhg2L0mCvMRZws/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download PDF
                </button>
            </a>
        )
    },
    {
      sno: 9,
        name: 'Kalanidhi 2022',
        download: (
            <a href="https://drive.google.com/file/d/18PzDTLEi_uBNBBKszZGydlevavGLKi4a/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download PDF
                </button>
            </a>
        )
    }
];

//Annual Event Table
const annualdocumentColumns = [
    { label: 'S.No', key: 'sno' },
    { label: 'Name', key: 'name' },
    { label: 'Download', key: 'download' }
];

//Regular event Data
 const regulareventDocumentData = [
    {
        sno: 1,
        name: 'Events 2023-24',
        download: (
            <a href="https://drive.google.com/file/d/1007Qcof3mSTZTb7UMLsNfbsfNDSgQzuD/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download PDF
                </button>
            </a>
        )
    },
    {
        sno: 2,
        name: 'Events 2022-23',
        download: (
            <a href="https://drive.google.com/file/d/1wUdJ7999MyE_uN06RfZxliCBjFRU1Ehv/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download PDF
                </button>
            </a>
        )
    },
    {
        sno: 3,
        name: 'Events 2021-22',
        download: (
            <a href="https://drive.google.com/file/d/1Gi-BAbQKUBX0bsEKMEr_H67HyvjglCiH/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download PDF
                </button>
            </a>
        )
    },
    {
        sno: 4,
        name: 'Events 2020-21',
        download: (
            <a href="https://drive.google.com/file/d/1kLW-IA2bA30IlM61XMQOEc_hJtUF203_/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download PDF
                </button>
            </a>
        )
    },
    {
        sno: 5,
        name: 'Events 2019-20',
        download: (
            <a href="https://drive.google.com/file/d/1TZtYaTq6v026Kb1xYiJ8tUtt6iBC5wmS/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download PDF
                </button>
            </a>
        )
    },
    {
        sno: 6,
        name: 'Events 2018-19',
        download: (
            <a href="https://drive.google.com/file/d/1_U0OB-u-ebY4ySxArCu3QsxnX7iBQYES/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download PDF
                </button>
            </a>
        )
    }
];

// Regular Event Table
const regualreventdocumentColumns = [
    { label: 'S.No', key: 'sno' },
    { label: 'Name', key: 'name' },
    { label: 'Download', key: 'download' }
];


  const stats = [
    { icon: "fas fa-calendar-check", number: "6+", label: "Annual Events", gradient: "bg-gradient-to-br from-primary to-primary-dark" },
    { icon: "fas fa-users", number: "3000+", label: "Participants", gradient: "bg-gradient-to-br from-primary to-primary-dark" },
    { icon: "fas fa-trophy", number: "75+", label: "Competitions", gradient: "bg-gradient-to-br from-primary to-primary-dark" },
    { icon: "fas fa-heart", number: "100%", label: "Memorable Moments", gradient: "bg-gradient-to-br from-primary to-primary-dark" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <AccessibilityFeatures />
      <Header />
      
      <BreadCrumb
        title="ANNUAL EVENTS"
        description="Celebrating life, culture, and achievements through our vibrant annual events"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Student Life', href: '/student-life' },
          { label: 'Annual Events', isCurrent: true },
        ]}
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary via-primary-light to-primary text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary-light/80"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200"
            >
              CELEBRATE LIFE AT PIET
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl mb-10 opacity-90 leading-relaxed"
            >
              From cutting-edge tech festivals to vibrant cultural celebrations, our annual events create memories that last a lifetime
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
             {/* <button className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                View Events
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105">
                Join Us
              </button> 
              */}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 -mt-10 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StatsCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6 uppercase tracking-tight">
              OUR SIGNATURE EVENTS
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-primary to-primary-light mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Experience the vibrant campus life through our carefully curated annual events that bring together 
              students, faculty, and the wider community in celebration of learning, culture, and achievement.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <EventCard {...event} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

        {/* Annual Events */}
      <div className="container mt-14 mx-auto mb-10">
                      <h2 className="text-3xl text-primary font-bold mb-8 text-center">Reports of Annual Events</h2>
                      <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                      <DynamicTable columns={annualdocumentColumns} data={annualDocumentData} />
                  </div>
         {/* Regular Events List */}

            <div className="container mt-14 mx-auto mb-10">
                      <h2 className="text-3xl text-primary font-bold mb-8 text-center">List of Regular Event</h2>
                      <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                      <DynamicTable columns={regualreventdocumentColumns} data={regulareventDocumentData} />
                  </div>
      {/* Participation Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary-light/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-5xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-primary mb-8 uppercase tracking-tight">
              JOIN THE CELEBRATION
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-primary to-primary-light mx-auto mb-10 rounded-full"></div>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              Our annual events are more than just celebrations – they're opportunities for personal growth, 
              skill development, and building lifelong friendships. Whether you're interested in technology, 
              arts, culture, or simply want to have fun, there's something for everyone at PIET.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              {[
                { icon: "fas fa-users", title: "NETWORK", desc: "Connect with peers, seniors, and industry professionals", delay: 0.1 },
                { icon: "fas fa-lightbulb", title: "LEARN", desc: "Gain new skills through workshops and competitions", delay: 0.2 },
                { icon: "fas fa-trophy", title: "EXCEL", desc: "Showcase your talents and win exciting prizes", delay: 0.3 }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: item.delay }}
                  className="group text-center p-8 rounded-2xl hover:bg-gradient-to-br hover:from-primary/10 hover:to-primary-light/10 transition-all duration-300"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-primary to-primary-light text-white rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <i className={`${item.icon} text-3xl`}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4 uppercase tracking-wide">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Cta />
      <Footer />
    </div>
  );
};

export default AnnualEvents;
