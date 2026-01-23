import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Cta from '@/components/Cta';
import BreadCrumb from '@/components/BreadCrumb';
import { AccessibilityFeatures } from '@/components/AccessibilityFeatures'

const Card = ({ imageSrc, title, description, color, gradient }) => (
  <div
    className={`shadow-md border-2 border-l-8 rounded-xl p-8 flex flex-col items-start transition hover:scale-[1.02] duration-300 min-h-[250px]`}
    style={{
      borderColor: color,
      background: gradient,
    }}
  >
    {/* Image Section */}
    {imageSrc && (
      <div className="mb-4 w-full h-40 overflow-hidden rounded-lg">
        <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
      </div>
    )}

    {/* Title */}
    <h3 className="text-2xl font-semibold mb-3 text-primary">{title}</h3>

    {/* Description */}
    <p className="text-gray-600 text-base whitespace-pre-line">{description}</p>
  </div>
);


const SportsFacilities = () => {
    return (
        <div>
            <AccessibilityFeatures />
            <Header />
            <BreadCrumb
                title="Sports & Gym Facilities"
                description="Explore the vibrant sports and fitness infrastructure available at PIET."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Sports & Gym', isCurrent: true },
                ]}
            />

            <div className="container mx-auto py-10 px-4">


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

  <Card
    imageSrc="/images/sports/pgym1.jpeg"
    title="Overview"
    description={`PIET promotes holistic development through indoor & outdoor facilities, certified coaches, and diverse equipment for student fitness.`}
    color="#f6e05e" // Tailwind yellow-400
    gradient="linear-gradient(135deg, #fffaf0 0%, #fefcbf 100%)"
  />

  <Card
    imageSrc="/images/sports/pgym10.jpeg"
    title="Key Facts"
    description={`Sports Facilities: Indoor & Outdoor\nPlaygrounds: 4\nPlayground Area: 38,878 sq. ft.\nCertified Coaches: 3`}
    color="#4299e1" // Tailwind blue-500
    gradient="linear-gradient(135deg, #ebf8ff 0%, #bee3f8 100%)"
  />

  <Card
    imageSrc="/images/sports/ground-2.jpg"
    title="Outdoor Sports"
    description={`Cricket, Football, Volleyball, Basketball, Track & Field (Shot put, Discus, Javelin, Kho-Kho, etc.)`}
    color="#48bb78" // Tailwind green-500
    gradient="linear-gradient(135deg, #f0fff4 0%, #c6f6d5 100%)"
  />

  <Card 
    imageSrc="/images/sports/pgym8.jpeg"
    title="Indoor Sports"
    description="Badminton, Table Tennis (68 bats, 89 balls, 16 nets), Carrom, Chess, Rubik’s Cubes, Boxing Gloves"
    color="#9f7aea" // Tailwind purple-500
    gradient="linear-gradient(135deg, #f5f3ff 0%, #e9d8fd 100%)"
  />

  <Card
    imageSrc="/images/sports/sockert1.jpeg"
    title="Yoga & Wellness"
    description={`57 yoga mats (sports section) + 3 in gym.\nStructured sessions by expert instructors.`}
    color="#f687b3" // Tailwind pink-400
    gradient="linear-gradient(135deg, #fff5f7 0%, #fed7e2 100%)"
  />

  <Card
    imageSrc="/images/sports/pgym5.jpeg"
    title="Gym - Cardio & Strength"
    description={`Treadmills, Spin Bikes, Lat Pull, Leg Curl, Chest Press, Cable Machines, Bicep Curl Bench.`}
    color="#f56565" // Tailwind red-400
    gradient="linear-gradient(135deg, #fff5f5 0%, #feb2b2 100%)"
  />
{/*
  <Card
    imageSrc="/images/sports/outdoor1.jpg"
    title="Weight Training"
    description={`Dumbbells (2.5–35 kg), Barbells, Rods, Plates, Squat Stands, Deadlift Platform.`}
    color="#667eea" // Tailwind indigo-500
    gradient="linear-gradient(135deg, #f0f5ff 0%, #c3dafe 100%)"
  />
*/}
  <Card
    imageSrc="/images/sports/vground.jpg"
    title="Additional Equipment"
    description={`Benches (Incline, Decline, Curl), Massager, Music System, Measurement Machine.`}
    color="#06b6d4" // Tailwind cyan-500
    gradient="linear-gradient(135deg, #ecfeff 0%, #cffafe 100%)"
  />

  <Card
    imageSrc="/images/sports/pgym1.jpeg"
    title="Coaching Support"
    description={`Certified coaches guide students, prepare for competitions, and support skill development.`}
    color="#f97316" // Tailwind orange-400
    gradient="linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%)"
  />

  <Card
    imageSrc="/images/sports/billiards1.jpeg"
    title="Highlights"
    description={`30+ Sports Activities\n40+ Gym Machines & Accessories\n4 Playgrounds\nIndoor/Outdoor Zones\nWellness Sessions`}
    color="#84cc16" // Tailwind lime-500
    gradient="linear-gradient(135deg, #f7fee7 0%, #d9f99d 100%)"
  />

</div>

            </div>

            <Cta />
            <Footer />
        </div>
    );
};

export default SportsFacilities;
