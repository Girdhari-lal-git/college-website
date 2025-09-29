import React from 'react'
import { Link } from 'wouter'

const DirectorMessage = () => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left: Director Photo & Info */}
        <div className="flex flex-col items-center md:text-left">
          <img
            src="https://www.piet.poornima.org/images/principle.png"
            alt="Director"
            className="rounded-xl shadow-lg object-cover w-64 h-64 mb-6 border border-1 border-primary"
          />
          <div className='text-center'>
            <h3 className="text-2xl font-bold text-gray-800">Dr. Dinesh Goyal</h3>
            <p className="text-sm text-primar font-medium">Principal & Director, PIET</p>
            <p className="mt-4 text-gray-700 text-sm leading-relaxed max-w-md text-justify">
              With over 25 years in academia and institutional leadership, Dr. Goyal is a visionary
              dedicated to fostering innovation, ethical education, and global competence in students.
            </p>
          </div>
        </div>

        {/* Right: Message and Button */}
        <div>
          <h2 className="text-3xl font-heading font-bold text-primary mb-6 leading-tight font-extrabold text-gray-900 mb-4 pb-2  inline-block">

            Message from the Director
          </h2>
          <div className="w-24 h-1 bg-secondary mb-6"></div>
          <p
            className="text-lg text-gray-700 leading-relaxed mb-6 text-justify"
            style={{ textAlign: "justify" }}
          >
            <strong> Engineers don't think the glass is half empty or half full. They just think the glass needs to be redesigned.</strong>
<br />
It gives me an abundant pleasure to welcome you all to the innovative & inventive world of Poornima Institute of Engineering
 and Technology, an eco-friendly campus coupled with the best infrastructure to help in attaining the highest standards in
  academic, research and professional excellence. Education is a multi-stage process of building character,
   acquiring knowledge and improving skills for life-long learning to lead a happy and peaceful life. Engineering education
    is discipline-specific and outcome based, which involves the application of basic principles of Mathematics......
          </p>
          <Link href="/messages">
            <a className="inline-block px-6 py-2 text-white btn-primary transition rounded-md font-semibold shadow">
              Read all Message <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default DirectorMessage
