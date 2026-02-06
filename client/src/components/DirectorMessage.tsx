import React, { useState, useRef, useEffect } from 'react'

const DirectorMessage = () => {
  const [expanded, setExpanded] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      // If content height is more than preview height, show button
      if (contentRef.current.scrollHeight > 320) {
        setShowButton(true);
      }
    }
  }, []);

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        
        {/* Left column */}
        <div className="flex flex-col items-center">
          <img
            src="https://www.piet.poornima.org/images/principle.png"
            alt="Director"
            className="rounded-xl shadow-lg object-cover w-64 h-64 mb-6 border border-primary"
          />
          <div className='text-center'>
            <h3 className="text-2xl font-bold text-gray-800">Dr. Dinesh Goyal</h3>
            <p className="text-sm text-primary font-medium">
              Principal & Director, PIET
            </p>
          </div>
        </div>

        {/* Right column (2 cols) */}
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Message from the Director
          </h2>
          <div className="w-24 h-1 bg-secondary mb-6"></div>

          {/* MESSAGE CONTAINER */}
          <div
            ref={contentRef}
            className={`text-lg text-gray-700 leading-relaxed text-justify transition-all duration-700 overflow-hidden ${
              expanded ? 'max-h-full' : 'max-h-[320px]'
            }`}
          >
            <p className="mb-4">
              <strong>Warm Greetings!</strong>
            </p>

            <p className="mb-4">
              <strong>"Engineers don't think the glass is half empty or half full. They just think the glass needs to be redesigned."</strong>
            </p>

            <p className="mb-4">
              It gives me an abundant pleasure to welcome you all to the innovative & inventive world of Poornima Institute of
               Engineering and Technology, an eco-friendly campus coupled with the best infrastructure to help
                in attaining the highest standards in academic, research and professional excellence. Education is a
                 multi-stage process of building character, acquiring knowledge and improving skills for life-long 
                 learning to lead a happy and peaceful life. </p>

            <p className="mb-4"> Engineering education is discipline-specific and outcome 
                 based, which involves application of basic principles of Mathematics and Science to solve practical 
                 engineering problems, to innovate newer technologies for providing feasible solutions to the futuristic 
                 challenges.In contemporary world, the higher technical education is facing a tough challenge of 
                 facilitating the skilled manpower and technocrats to society. The need of an hour is highly challenging 
                 as well as demanding from the engineering students to be the best in overall development & employability 
                 skills. Hereby, the Poornima Institute of Engineering and Technology is highly committed to provide the 
                 best support system to its prospective young engineers for nurturing their dream and goal in the 
                 engineering field. </p>

            <p className="mb-4">The aspiring students of PIET are exceedingly boosted for possessing leadership 
                 qualities with good subject knowledge and communication skills. The PIET is constantly and thoroughly 
                 devoted to update itself with the upcoming market trends in technical and societal requirements to 
                 fulfill the needs of students for surviving in the best ways in today's competitive world. </p>

            <p className="mb-4">For this 
                 purpose, PIET provides the best motivated and continuously technically updating faculties to the 
                 students. The high level of teaching-learning process is always into higher consideration for the 
                 management and administration of PIET. The faculties are well trained and updated by attending meaningful 
                 Faculty Development Programs (FDP), Seminars, Conferences and by writing innovative research papers 
                 with students in every academic session along with other outreach activities of department. We are
                 the only institute in Rajasthan for establishing IDEA Lab. The PIET AICTE IDEA Lab provides a platform 
                 for students to convert their innovative ideas into tangible products, services, or start-ups. 
                 It encourages students to think creatively, develop problem-solving skills, and gain practical 
                 experiences in various domains.</p>

            <p className="mb-4"> We have also proved our excellence by recent Quality Index Value 
                 (QIV) rankings by Rajasthan Technical University (RTU) which placed Poornima Institute of Engineering 
                 & Technology among the top three out of 98 affiliated engineering colleges regularly since last 
                 05 years. Moreover, the PIET has proudly achieved the NBA accreditation for B.Tech Civil
                  Engineering & B.Tech Computer Science program as being the 1st in Private Institutes and
                   1st amongst affiliated colleges and second in Rajasthan to achieve the same.</p>

            <p className="mb-4"> We continuously 
                   aspire to maintain the excellent standards for unfolding the talents of our students for being 
                   the efficient technocrats. The Poornima Institute of Engineering and Technology has received the 
                   prestigious Platinum rating for being strong industry linked technical institutes. The PIET has 
                   established a very strong industry relations and having very efficient industry members in its 
                   advisory board. In present scenario, all the major recruiters of Industry like Infosys, Capgemini, 
                   IBM, Pinnacle, IMS, Torrent, Adani, GVK etc. are having our Alumni on their roles. It is my pleasure 
                   to convey that the PIET is greatly providing a state of an art of infrastructure for the students 
                   to make them feel homely and comfortable in an excellent as well as stress free learning environment. 
                   May God bless you always! My best wishes for your future endeavours! Welcome to Poornima Family!
            </p>

            {/* 👉 Paste ALL remaining paragraphs exactly as you sent, each inside <p className="mb-4"> */}
            
            <p className="mb-4">
              Welcome to Poornima Family!
            </p>

            <p className="mt-6 font-semibold">
              Dr. Dinesh Goyal<br/>
              Principal & Director<br/>
              Poornima Institute of Engineering and Technology
            </p>
          </div>

          {showButton && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-6 px-6 py-2 text-white btn-primary rounded-md font-semibold shadow transition"
            >
              {expanded ? "Read Less" : "Read Full Message"}
            </button>
          )}
        </div>
      </div>
    </section>
  )
}

export default DirectorMessage
