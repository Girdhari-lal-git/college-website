import React from 'react'
import SimpleImageSlider from '@/components/SimpleImageSlider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Cta from '@/components/Cta'
import BreadCrumb from '@/components/BreadCrumb'
import { AccessibilityFeatures } from '@/components/AccessibilityFeatures'

const images = [
    "https://www.piet.poornima.org/images/med-img1.jpg",
    "https://www.piet.poornima.org/images/med-img2.jpg",
    "https://www.piet.poornima.org/images/med-img3.jpg",
    "https://www.piet.poornima.org/images/med-img4.jpg",
];

const altTexts = [
    "Campus Medical Facility",
    "Ambulance Service",
    "Doctor Consultation",
    "First Aid Support",
];

const Health = () => {
    return (
        <div>
            <AccessibilityFeatures />
            <Header />
            <BreadCrumb
                title="Healthcare Facilities"
                description="We ensure the health and well-being of our students through dedicated medical facilities, ambulance support, and regular health-related activities."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Healthcare Facilities', isCurrent: true },
                ]}
            />

            {/* Intro + Slider Section */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-10 p-8 max-w-7xl mx-auto">
                {/* Left Column */}
                <div className="md:w-1/2">
                    <h1 className="text-4xl text-blue-800 font-bold mb-4">
                        Caring for Students’ Health
                    </h1>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        At Poornima Institute of Engineering & Technology, student well-being is a top priority. 
                        We provide <span className="font-semibold text-blue-700">24x7 ambulance support</span>, 
                        a <span className="font-semibold text-blue-700">dedicated medical clinic</span>, and have 
                        signed an <span className="font-semibold text-blue-700">MoU with a reputed hospital</span> 
                        for timely doctor visits.  
                        <br /><br />
                        First-aid kits are available at multiple campus locations, and regular 
                        <span className="font-semibold text-blue-700"> health awareness activities</span> are organized 
                        to promote physical and mental well-being.
                    </p>
                    <a href="" className="inline-block mt-6 px-6 py-3 bg-blue-700 text-white rounded-lg shadow-md hover:bg-blue-800 transition">
                        Need Help? <br /> Call +91-9001893262
                    </a>
                </div>

                {/* Right Column */}
                <div className="md:w-1/2 w-full">
                    <SimpleImageSlider
                        images={images}
                        altTexts={altTexts}
                        autoPlayInterval={5000}
                        aspectRatio="4/3"
                    />
                </div>
            </div>

            {/* Healthcare Highlights */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">Our Healthcare Services</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-blue-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold text-blue-700 mb-2">Ambulance Facility</h3>
                        <p className="text-gray-600 text-sm">24x7 ambulance available on campus for emergencies.</p>
                    </div>
                    <div className="bg-green-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold text-green-700 mb-2">Hospital MoU</h3>
                        <p className="text-gray-600 text-sm">MoU with a nearby hospital ensures timely doctor visits & treatment.</p>
                    </div>
                    <div className="bg-purple-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold text-purple-700 mb-2">Campus Clinic</h3>
                        <p className="text-gray-600 text-sm">Doctor visits regularly at our on-campus medical clinic.</p>
                    </div>
                    <div className="bg-orange-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold text-orange-700 mb-2">First Aid & Health Drives</h3>
                        <p className="text-gray-600 text-sm">First-aid kits & frequent health awareness activities for students.</p>
                    </div>
                </div>
            </div>

            {/* Closing Section */}
            <div className="bg-gray-50 py-12 px-6 text-center rounded-t-2xl shadow-inner">
                <h2 className="text-2xl font-bold text-blue-800 mb-4">Our Commitment to Student Health</h2>
                <p className="text-gray-700 max-w-4xl mx-auto">
                    From routine checkups to emergency care, we are committed to providing comprehensive healthcare support 
                    that ensures peace of mind for both students and parents.
                </p>
            </div>

            <Cta />
            <Footer />
        </div>
    )
}

export default Health
