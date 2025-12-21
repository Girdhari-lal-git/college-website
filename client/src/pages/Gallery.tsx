
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { AccessibilityFeatures } from '@/components/AccessibilityFeatures';
import LazyImage from '@/components/LazyImage';
import BreadCrumb from '@/components/BreadCrumb';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  // Campus Buildings
  {
    id: '1',
    src: 'https://www.piet.poornima.org/images/Campus/MainBuilding1.JPG',
    alt: 'Main Academic Block',
    title: 'Main Academic Block Front View',
    category: 'campus'
  },
  {
    id: '2',
    src: 'https://www.piet.poornima.org/images/Campus/MainBuilding2.JPG',
    alt: 'Main Academic Block Upper View',
    title: 'Main Academic Block Upper View',
    category: 'campus'
  },
  {
    id: '3',
    src: 'https://www.piet.poornima.org/images/Campus/TPO1.JPG',
    alt: 'Training & Placement Office',
    title: 'Training & Placement Office',
    category: 'campus'
  },
  {
    id: '4',
    src: 'https://www.piet.poornima.org/images/Campus/MainBuildingSideview.jpg',
    alt: 'Main Building Side View',
    title: 'Main Building Side View',
    category: 'campus'
  },
  {
    id: '5',
    src: 'https://www.piet.poornima.org/images/Campus/MainBuilding.jpeg',
    alt: 'Main Building Entrance',
    title: 'Campus Main Entrance',
    category: 'campus'
  },

  // Library
  {
    id: '6',
    src: 'https://www.piet.poornima.org/images/Campus/AcademicblockB2.jpg',
    alt: 'Acaemic Block B',
    title: 'B Block',
    category: 'campus'
  },
  {
    id: '7',
    src: 'https://www.piet.poornima.org/images/Campus/HostelBuilding1.jpg',
    alt: 'Hostel Building',
    title: 'Hostel Building',
    category: 'campus'
  },
  {
    id: '8',
    src: 'https://www.piet.poornima.org/images/Campus/CentralLibrary3.jpg',
    alt: 'Digital Library',
    title: 'Digital Library Section',
    category: 'library'
  },
{
    id: '25',
    src: 'https://www.piet.poornima.org/images/Campus/Centrallibrary2.jpg',
    alt: 'Digital Library',
    title: 'Digital Library Section',
    category: 'library'
  },

  {
    id: '26',
    src: 'https://www.piet.poornima.org/images/Campus/CentralLibrary3.jpg',
    alt: 'Digital Library',
    title: 'Digital Library Section',
    category: 'library'
  },


  // Laboratories
  {
    id: '9',
    src: 'https://www.piet.poornima.org/images/Labs/ComputerLab1.JPG',
    alt: 'Computer Laboratory',
    title: 'Computer Programming Lab',
    category: 'labs'
  },
  {
    id: '10',
    src: 'https://www.piet.poornima.org/images/Labs/ElectronicsLab.JPG',
    alt: 'Electronics Lab',
    title: 'Electronics & Communication Lab',
    category: 'labs'
  },
  {
    id: '11',
    src: 'https://www.piet.poornima.org/images/Labs/MechanicalLab.JPG',
    alt: 'Mechanical Lab',
    title: 'Mechanical Engineering Lab',
    category: 'labs'
  },
  {
    id: '12',
    src: 'https://www.piet.poornima.org/images/Labs/PhysicsLab.JPG',
    alt: 'Physics Lab',
    title: 'Physics Laboratory',
    category: 'labs'
  },

  // Research & Development
  {
    id: '13',
    src: 'https://www.piet.poornima.org/images/Campus/Research&Innovation1.jpg',
    alt: 'Research Center',
    title: 'Research & Development Center',
    category: 'research'
  },
  {
    id: '14',
    src: 'https://www.piet.poornima.org/images/pbic/collage_pbic.jpg',
    alt: 'PBIC',
    title: 'Incubation Lab',
    category: 'research'
  },
{
    id: '27',
    src: 'https://www.piet.poornima.org/images/Campus/PBIC2.jpg',
    alt: 'PBIC',
    title: 'Incubation Lab',
    category: 'research'
  },
{
    id: '28',
    src: 'https://www.piet.poornima.org/images/Campus/PBIC1.jpg',
    alt: 'PBIC',
    title: 'Incubation Lab',
    category: 'research'
  },

  {
    id: '15',
    src: 'https://www.piet.poornima.org/images/Research/ProjectLab.JPG',
    alt: 'Project Lab',
    title: 'Student Project Laboratory',
    category: 'research'
  },

  // Sports Grounds
  {
    id: '16',
    src: 'https://www.piet.poornima.org/images/Campus/VollyballGround1.jpg',
    alt: 'Vollyball Playground',
    title: 'Main Sports Ground',
    category: 'sports'
  },
  {
    id: '17',
    src: 'https://www.piet.poornima.org/images/Campus/ground1.jpeg',
    alt: 'Basketball Court',
    title: 'Basketball Court',
    category: 'sports'
  },
  {
    id: '18',
    src: 'https://www.piet.poornima.org/images/Campus/basketballground2.jpg',
    alt: 'Basketball Court',
    title: 'Basketball Court',
    category: 'sports'
  },

  {
    id: '29',
    src: 'https://www.piet.poornima.org/images/Campus/basketballground2.jpg',
    alt: 'Basketball Court',
    title: 'Basketball Court',
    category: 'sports'
  },

  {
    id: '30',
    src: 'https://www.piet.poornima.org/images/Campus/basketballground2.jpg',
    alt: 'Basketball Court',
    title: 'Basketball Court',
    category: 'sports'
  },

  {
    id: '31',
    src: 'https://www.piet.poornima.org/images/Campus/basketballground2.jpg',
    alt: 'Basketball Court',
    title: 'Basketball Court',
    category: 'sports'
  },

  // Annual Events
  {
    id: '19',
    src: 'https://www.piet.poornima.org/images/iii_event.png',
    alt: 'Industry Institute Interaction',
    title: 'Annual Technical Festival',
    category: 'events'
  },
  {
    id: '20',
    src: 'https://www.piet.poornima.org/images-acm/image1.jpg',
    alt: 'ACM Event',
    title: 'Technical Program',
    category: 'events'
  },
  {
    id: '21',
    src: 'https://www.piet.poornima.org/images/hc/Web%20Banner%202.jpg',
    alt: 'Convocation Ceremony',
    title: 'Annual Convocation',
    category: 'events'
  },

  {
    id: '32',
    src: 'https://res.cloudinary.com/db3x8h2gn/image/upload/v1765954955/farewel13_xpihyr.jpg',
    alt: 'Farewell Ceremony',
    title: 'Farewell Ceremony',
    category: 'events'
  },

  {
    id: '33',
    src: 'https://www.piet.poornima.org/images/hc/Web%20Banner%202.jpg',
    alt: 'farewell Ceremony',
    title: 'Farewell Ceremony',
    category: 'events'
  },

  // Activities
  {
    id: '22',
    src: 'https://www.piet.poornima.org/images/Activities/yogaDay1.jpeg',
    alt: 'Yoga Day Celebration',
    title: 'International Yoga Day',
    category: 'activities'
  },
  {
    id: '23',
    src: 'https://www.piet.poornima.org/images/Activities/RoadSafety.jpg',
    alt: 'Road Safety Drive',
    title: 'Road Safety Awareness Program',
    category: 'activities'
  },
  {
    id: '24',
    src: 'https://www.piet.poornima.org/images/Activities/NSS1.jpg',
    alt: 'National Service Scheme',
    title: 'National Service Scheme Activity',
    category: 'activities'
  },

  { "id": "32", "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/icsicst3_gnofl7.jpg", "alt": "ICSICST international research conference session at PIET Jaipur", "title": "ICSICST Research Conference", "category": "research" },
  { "id": "33", "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/students2_fxjtat.jpg", "alt": "Students participating in campus activities at PIET Jaipur", "title": "Student Participation", "category": "activities" },
  { "id": "34", "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/yogaday2_oedee5.jpg", "alt": "International Yoga Day activity conducted at PIET Jaipur", "title": "International Yoga Day", "category": "activities" },
  { "id": "35", "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/rvisit2_wpdc4a.jpg", "alt": "Students during industrial visit organized by PIET Jaipur", "title": "Industrial Visit", "category": "activities" },
  { "id": "36", "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/rvisit1_u8gt2j.jpg", "alt": "Academic industrial visit for engineering students", "title": "Industrial Exposure Visit", "category": "activities" },
  { "id": "37", "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/pbic-startup1_nra7lq.jpg", "alt": "Startup incubation activity under PBIC at PIET Jaipur", "title": "PBIC Startup Activity", "category": "activities" },
  { "id": "38", "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/pbic-startup3_gf10zf.jpg", "alt": "Students presenting startup ideas at PBIC incubation center", "title": "Startup Idea Presentation", "category": "activities" },
  { "id": "39", "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/pbic-ing2_k00z6w.jpg", "alt": "Innovation and incubation mentoring session at PBIC", "title": "Innovation and Incubation Session", "category": "activities" },
  { "id": "40", "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/icsicst1_fsacyw.jpg", "alt": "Inaugural session of ICSICST international research conference", "title": "ICSICST Conference Inauguration", "category": "research" },
  { "id": "41", "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/pbic-ing1_ov0yso.jpg", "alt": "PBIC incubation and mentoring activity for startups", "title": "PBIC Incubation Program", "category": "activities" },
  { "id": "42", "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/momento-guest1_bzc4xy.jpg", "alt": "Guest being felicitated during institutional event at PIET Jaipur", "title": "Guest Felicitation Ceremony", "category": "events" },
  { "id": "43", "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/lamp-lighting1_volnwm.jpg", "alt": "Lamp lighting ceremony during academic event at PIET Jaipur", "title": "Lamp Lighting Ceremony", "category": "events" },
  { "id": "44", "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/ieee-session1_rna08a.jpg", "alt": "IEEE research and technical session at PIET Jaipur", "title": "IEEE Research Session", "category": "research" },
  { "id": "45", "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/icracs4_tqvwtx.jpg", "alt": "ICRACS international research conference at PIET Jaipur", "title": "ICRACS Research Conference", "category": "research" },
  { "id": "46", "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/ICNCDA_2025_23052025_119_vim5b2.jpg", "alt": "ICNCDA 2025 international research conference session", "title": "ICNCDA 2025 Conference", "category": "research" },
  { "id": "47", "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/icracs3_dt1e89.jpg", "alt": "Technical paper presentation during ICRACS conference", "title": "ICRACS Paper Presentation", "category": "research" },
  { "id": "48", "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/icracs2_hlqkvn.jpg", "alt": "Research discussion session at ICRACS conference", "title": "ICRACS Research Session", "category": "research" },
  { "id": "49", "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/icracs1_bjuadg.jpg", "alt": "Inaugural moments of ICRACS research conference", "title": "ICRACS Conference Inauguration", "category": "research" },
  { "id": "50", "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/ICNCDA_2025_23052025_112_h4obar.jpg", "alt": "Researchers attending ICNCDA 2025 conference session", "title": "ICNCDA 2025 Session", "category": "research" },
  { "id": "51", "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/guest-session1_f4ospi.jpg", "alt": "Expert guest session conducted at PIET Jaipur", "title": "Guest Lecture Session", "category": "events" },
  { "id": "52", "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/farewel8_dzqfkd.jpg", "alt": "Cultural performance during farewell ceremony at PIET Jaipur", "title": "Farewell Ceremony", "category": "events" },
  { "id": "53", "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/ICNCDA_2025_23052025_91_zfjbe0.jpg", "alt": "Audience interaction during ICNCDA 2025 conference", "title": "ICNCDA Conference Interaction", "category": "research" },
  { "id": "54", "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/farewel13_xpihyr.jpg", "alt": "Faculty and students during farewell celebration", "title": "Farewell Celebration", "category": "events" },
  { "id": "55", "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/farewel11_wtypme.jpg", "alt": "Students enjoying farewell ceremony moments", "title": "Farewell Ceremony Moments", "category": "events" },
  { "id": "56", "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/farewel10_wzzr7j.jpg", "alt": "Group photograph during farewell ceremony at PIET Jaipur", "title": "Farewell Group Photograph", "category": "events" },
  { "id": "57", "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/farewel6_udlsba.jpg", "alt": "Farewell ceremony celebration with students and faculty", "title": "Farewell Celebration", "category": "events" },
  { "id": "58", "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/farewel3_prwldo.jpg", "alt": "Students performing during farewell function", "title": "Farewell Cultural Performance", "category": "events" },
  { "id": "59", "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/farewel5_txcjat.jpg", "alt": "Memorable moments from farewell ceremony", "title": "Farewell Memories", "category": "events" },
  { "id": "60", "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/counciling1_m0ggo8.jpg", "alt": "Student counselling and guidance session at PIET Jaipur", "title": "Student Counselling Session", "category": "activities" },
  { "id": "61", "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/farewel2_kpzgd0.jpg", "alt": "Students captured during farewell ceremony celebrations", "title": "Farewell Ceremony Highlights", "category": "events" },
  { "id": "62", "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/fairwel1_t1gter.jpg", "alt": "Farewell ceremony group photo with students", "title": "Farewell Ceremony Group Photo", "category": "events" },
  { "id": "63", "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/yogaday1_sbrdtc.jpg", "alt": "Yoga practice session on International Yoga Day at PIET Jaipur", "title": "Yoga Day Session", "category": "activities" },
  { "id": "64", "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/dg-speech1_iihzyo.jpg", "alt": "Director General addressing students during institutional event", "title": "Director General Address", "category": "events" },
  { "id": "65", "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/audience1_rt45s7.jpg", "alt": "Audience attending academic event at PIET Jaipur", "title": "Event Audience", "category": "events" },
  { "id": "66", "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/students4_rmwaoi.jpg", "alt": "Students attending campus academic activities", "title": "Student Gathering", "category": "activities" },
  { "id": "67", "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/students3_rhuhpn.jpg", "alt": "Students actively participating in institute activities", "title": "Student Engagement", "category": "activities" },
  { "id": "68", "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/student1_ppafvd.jpg", "alt": "Student interaction during institutional activity", "title": "Student Interaction", "category": "activities" },
  { "id": "69", "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/rvisit3_ybzv2g.jpg", "alt": "Students during educational industrial visit", "title": "Educational Industrial Visit", "category": "activities" },
  { "id": "70", "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/pbic-ing3_gwgjvt.jpg", "alt": "Innovation guidance session at PBIC incubation center", "title": "PBIC Innovation Guidance", "category": "activities" },
  { "id": "71", "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/pbic-startup2_y6wb1j.jpg", "alt": "Startup mentoring session at PBIC PIET Jaipur", "title": "PBIC Startup Mentoring", "category": "activities" },
  { "id": "72", "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/icsicst2_zeooki.jpg", "alt": "Research paper presentation during ICSICST conference", "title": "ICSICST Paper Presentation", "category": "research" },
  { "id": "73", "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/nss-ing_ceknhp.jpg", "alt": "NSS volunteers participating in social service activity", "title": "NSS Activity", "category": "activities" },
  { "id": "74", "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/ICNCDA_2025_23052025_126_hdtd8x.jpg", "alt": "Participants attending ICNCDA 2025 research conference", "title": "ICNCDA 2025 Conference", "category": "research" },
  { "id": "75", "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/icracs5_vkvnrp.jpg", "alt": "Research scholars presenting work at ICRACS conference", "title": "ICRACS Research Presentation", "category": "research" },
  { "id": "76", "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/ieee-group1_wugroo.jpg", "alt": "IEEE members group photo during technical event", "title": "IEEE Group Photo", "category": "research" },
  { "id": "77", "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/ICNCDA_2025_23052025_118_sbtnlw.jpg", "alt": "Keynote address during ICNCDA 2025 conference", "title": "ICNCDA Keynote Session", "category": "research" },
  { "id": "78", "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/farewel9_vb2ovy.jpg", "alt": "Students celebrating farewell ceremony together", "title": "Farewell Celebration", "category": "events" },
  { "id": "79", "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/ICNCDA_2025_23052025_108_lkbdqf.jpg", "alt": "Panel discussion during ICNCDA 2025 research conference", "title": "ICNCDA Panel Discussion", "category": "research" },
  { "id": "80", "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/goomer1_hn0ssf.jpg", "alt": "Guest of honour addressing the gathering at PIET Jaipur", "title": "Guest Address", "category": "events" },
  { "id": "81", "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/momento-guest2_i91eq1.jpg", "alt": "Guest receiving memento during institutional event", "title": "Guest Felicitation", "category": "events" },
  { "id": "82", "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/farewel12_dppe6n.jpg", "alt": "Farewell ceremony moments with faculty and students", "title": "Farewell Ceremony Moments", "category": "events" },
  { "id": "83", "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/farewel4_pqp28f.jpg", "alt": "Students enjoying farewell cultural activities", "title": "Farewell Cultural Activity", "category": "events" },
  { "id": "84", "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/ieee-welcome_wtxeaq.jpg", "alt": "Welcome session for IEEE event at PIET Jaipur", "title": "IEEE Welcome Session", "category": "research" },
  { "id": "85", "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/independence-day1_k6fwia.jpg", "alt": "Independence Day celebration at PIET Jaipur campus", "title": "Independence Day Celebration", "category": "events" },
  { "id": "86", "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/guest-session2_rffk0x.jpg", "alt": "Second expert guest session conducted at PIET Jaipur", "title": "Guest Session", "category": "events" },
  { "id": "87", "src": "https://res.cloudinary.com/db3x8h2gn/image/upload/w_1200,q_auto,f_auto/farewel7_vzpbh9.jpg", "alt": "Group photograph during farewell ceremony", "title": "Farewell Group Photo", "category": "events" }

  
];

const categories = [
  { id: 'all', name: 'All Images', icon: 'fas fa-layer-group' },
  { id: 'campus', name: 'Campus Buildings', icon: 'fas fa-building' },
  { id: 'library', name: 'Library', icon: 'fas fa-book' },
  { id: 'labs', name: 'Laboratories', icon: 'fas fa-flask' },
  { id: 'research', name: 'Research & Development', icon: 'fas fa-microscope' },
  { id: 'sports', name: 'Sports Grounds', icon: 'fas fa-futbol' },
  { id: 'events', name: 'Annual Events', icon: 'fas fa-calendar-alt' },
  { id: 'activities', name: 'Activities', icon: 'fas fa-users' }
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [modalImage, setModalImage] = useState<GalleryImage | null>(null);

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeCategory);

  const activeCategoryData = categories.find(cat => cat.id === activeCategory);
  const imageCount = filteredImages.length;

  const openModal = (image: GalleryImage) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100">
      <AccessibilityFeatures />
      <Header />

      <BreadCrumb
        title="Campus Gallery"
        description="Explore the beautiful campus, modern facilities, and vibrant student life at Poornima Institute of Engineering & Technology"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Gallery", isCurrent: true },
        ]}
      />

      <div className="container mx-auto px-4 py-12">
        {/* Category Filter Tabs */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">
              <i className="fas fa-images mr-3"></i>
              Browse by Category
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 font-medium ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg scale-105'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 hover:scale-105'
                  }`}
                >
                  <i className={`${category.icon} text-sm`}></i>
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Header */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="text-center lg:text-left mb-6 lg:mb-0">
              <h3 className="text-4xl font-bold text-primary mb-3 flex items-center justify-center lg:justify-start">
                <i className={`${activeCategoryData?.icon} mr-4 text-secondary`}></i>
                {activeCategoryData?.name}
              </h3>
              <p className="text-lg text-neutral-600 max-w-2xl">
                {activeCategory === 'campus' && 'Modern architecture and state-of-the-art academic facilities designed for excellence in education'}
                {activeCategory === 'library' && 'World-class learning resources and digital facilities for comprehensive academic support'}
                {activeCategory === 'labs' && 'Advanced laboratory facilities equipped with cutting-edge technology and instruments'}
                {activeCategory === 'research' && 'Innovation centers fostering research, development, and entrepreneurial thinking'}
                {activeCategory === 'sports' && 'Comprehensive sports and recreational facilities promoting physical wellness'}
                {activeCategory === 'events' && 'Vibrant campus life with annual celebrations, festivals, and cultural events'}
                {activeCategory === 'activities' && 'Rich academic and co-curricular activities enhancing overall student development'}
                {activeCategory === 'all' && 'Complete visual journey through our beautiful campus and vibrant academic community'}
              </p>
            </div>
            <div className="bg-gradient-to-r from-secondary to-secondary-dark text-white px-8 py-4 rounded-2xl shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold">{imageCount}</div>
                <div className="text-sm font-medium opacity-90">Images</div>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105"
              onClick={() => openModal(image)}
            >
              <div className="relative overflow-hidden">
                <LazyImage
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h4 className="text-white font-bold text-lg mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {image.title}
                    </h4>
                    <div className="flex items-center text-white/90 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                      <i className={`${categories.find(cat => cat.id === image.category)?.icon} mr-2`}></i>
                      <span className="capitalize">{image.category.replace('_', ' ')}</span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <i className="fas fa-expand-alt text-white text-sm"></i>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-20">
            <div className="bg-white rounded-2xl shadow-xl p-12 max-w-md mx-auto">
              <i className="fas fa-images text-6xl text-neutral-400 mb-6"></i>
              <h3 className="text-xl font-bold text-neutral-600 mb-3">No Images Found</h3>
              <p className="text-neutral-500">No images are available in this category at the moment.</p>
            </div>
          </div>
        )}
      </div>

      {/* Enhanced Modal */}
      {modalImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm" 
          onClick={closeModal}
        >
          <div 
            className="relative max-w-6xl max-h-[95vh] bg-white rounded-2xl overflow-hidden shadow-2xl animate-scaleUp" 
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
            >
              <i className="fas fa-times text-lg"></i>
            </button>
            
            <div className="relative">
              <LazyImage
                src={modalImage.src}
                alt={modalImage.alt}
                className="w-full max-h-[75vh] object-contain bg-neutral-50"
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{modalImage.title}</h3>
                <div className="flex items-center text-white/90">
                  <i className={`${categories.find(cat => cat.id === modalImage.category)?.icon} mr-2`}></i>
                  <span className="capitalize text-lg">{modalImage.category.replace('_', ' ')}</span>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-primary mb-1">{modalImage.title}</h3>
                  <p className="text-neutral-600 capitalize flex items-center">
                    <i className={`${categories.find(cat => cat.id === modalImage.category)?.icon} mr-2 text-secondary`}></i>
                    {modalImage.category.replace('_', ' ')}
                  </p>
                </div>
                <div className="bg-gradient-to-r from-primary to-primary-dark text-white px-4 py-2 rounded-full text-sm font-medium">
                  <i className="fas fa-eye mr-2"></i>
                  Gallery View
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
