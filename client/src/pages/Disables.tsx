import React from 'react'
import SimpleImageSlider from '@/components/SimpleImageSlider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Cta from '@/components/Cta'
import BreadCrumb from '@/components/BreadCrumb'
import DynamicTable from '@/components/DynamicTable '
import { AccessibilityFeatures } from '@/components/AccessibilityFeatures'

const images = [
    "https://www.piet.poornima.org/images/ramp1.jpg",
    "https://www.piet.poornima.org/images/ramp2.jpg",
    "https://www.piet.poornima.org/images/ramp3.jpg",
    "https://www.piet.poornima.org/images/facility1.jpg",
];

const altTexts = [
    "Campus Ramp for Accessibility",
    "Wheelchair Access",
    "Accessible Infrastructure",
    "Inclusive Facilities",
];

const disabledDocumentData = [
    {
        sno: 1,
        name: 'Document for Disabled Friendly Campus',
        download: (
            <a href="https://drive.google.com/file/d/1z4Q_YBxGqVMcu6atTWW6KgZxPzMqeZsn/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download PDF
                </button>
            </a>
        )
    }
];

const documentColumns = [
    { label: 'S.No', key: 'sno' },
    { label: 'Name', key: 'name' },
    { label: 'Download', key: 'download' }
];

const Disables = () => {
    return (
        <div>
            <AccessibilityFeatures />
            <Header />
            <BreadCrumb
                title="Disabled Friendly Campus"
                description="Creating an inclusive environment where accessibility and dignity are prioritized for every student."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Disabled Friendly Campus', isCurrent: true },
                ]}
            />

            {/* Intro + Slider Section */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-10 p-8 max-w-7xl mx-auto">
                {/* Left Column */}
                <div className="md:w-1/2">
                    <h1 className="text-6xl text-blue-800 font-bold mb-4">
                        Inclusive & Accessible Campus
                    </h1>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        At Poornima Institute of Engineering and Technology, we are committed to ensuring that 
                        students with disabilities never feel helpless. Our infrastructure is designed to provide 
                        <span className="font-semibold text-blue-700"> smooth access to every important location</span> 
                        on campus.  
                        <br /><br />
                        With <span className="font-semibold text-blue-700">ramps, wheelchairs, disabled-friendly toilets, 
                        and an assistive technology lab</span>, we foster a truly inclusive and supportive learning 
                        environment for all.
                    </p>
                    <a href="#" className="inline-block mt-6 px-6 py-3 bg-blue-700 text-white rounded-lg shadow-md hover:bg-blue-800 transition">
                        View More Details
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

            {/* Accessibility Highlights */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">Accessibility Features</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-blue-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold text-blue-700 mb-2">Ramps</h3>
                        <p className="text-gray-600 text-sm">Well-constructed ramps at major locations for easy mobility.</p>
                    </div>
                    <div className="bg-green-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold text-green-700 mb-2">Wheelchairs</h3>
                        <p className="text-gray-600 text-sm">Campus equipped with wheelchairs for students in need.</p>
                    </div>
                    <div className="bg-purple-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold text-purple-700 mb-2">Accessible Toilets</h3>
                        <p className="text-gray-600 text-sm">Dedicated disabled-friendly restrooms across the campus.</p>
                    </div>
                    <div className="bg-orange-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold text-orange-700 mb-2">Assistive Technology</h3>
                        <p className="text-gray-600 text-sm">Special lab with assistive tools to support learning needs.</p>
                    </div>
                </div>
            </div>

            {/* Document Section */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                <h2 className="text-3xl text-primary font-bold mb-8 text-center">Disabled Friendly Campus Documents</h2>
                <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                <DynamicTable columns={documentColumns} data={disabledDocumentData} />
            </div>

            {/* Closing Section */}
            <div className="bg-gray-50 py-12 px-6 text-center rounded-t-2xl shadow-inner">
                <h2 className="text-2xl font-bold text-blue-800 mb-4">Our Commitment to Accessibility</h2>
                <p className="text-gray-700 max-w-4xl mx-auto">
                    We believe that education should be accessible to all. By creating a disabled-friendly campus, 
                    we empower every student to learn, grow, and thrive with dignity and independence.
                </p>
            </div>

            <Cta />
            <Footer />
        </div>
    )
}

export default Disables
