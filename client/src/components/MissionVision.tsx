import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const MissionVision = () => {
  const missions = [
    "To provide an environment that will allow students and faculty members to be skilled in creation and implementation of new ideas.",
    "To provide platform to improve questioning, observing, testing, analyzing and communication skills.",
    "To provide qualitative education and generate new knowledge with integration of emerging technologies and research.",
    "To practice and promote high standard of potential ethics, transparency and accountability."
  ];

  const [showAll, setShowAll] = useState(false);

  return (
    <>
      {/* Vision + Mission + Values + Objectives */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        
        {/* Vision Card */}
        <Card className="animate-scaleUp">
          <CardHeader className="flex flex-row items-center gap-4">
            <i className="fas fa-eye text-blue-600 text-xl"></i>
            <CardTitle>Our Vision</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-neutral-700 leading-relaxed text-base">
              To create knowledge-based society with scientific temper through
              cutting-edge technologies, innovative research and to become
              valuable resource for enriching mankind.
            </p>
          </CardContent>
        </Card>

        {/* Mission Card */}
        <Card className="animate-scaleUp">
          <CardHeader className="flex flex-row items-center gap-4">
            <i className="fas fa-bullseye text-green-600 text-xl"></i>
            <CardTitle>Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-neutral-700 leading-relaxed text-base">
              {(showAll ? missions : missions.slice(0, 1)).map((mission, idx) => (
                <li key={idx}>{mission}</li>
              ))}
            </ul>
            <button
              onClick={() => setShowAll(!showAll)}
              className="mt-4 text-primary font-semibold hover:underline"
            >
              {showAll ? "View Less" : "View More"}
            </button>
          </CardContent>
        </Card>

        {/* Values Card */}
        <Card className="animate-scaleUp">
          <CardHeader className="flex flex-row items-center gap-4">
            <i className="fas fa-hand-holding-heart text-red-600 text-xl"></i>
            <CardTitle>Our Values</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-neutral-700 leading-relaxed text-base">
              Integrity, innovation, inclusivity, and social responsibility
              guide our actions and decisions, fostering a culture of trust,
              collaboration, and lifelong learning.
            </p>
          </CardContent>
        </Card>

        {/* Objectives Card */}
        <Card className="animate-scaleUp">
          <CardHeader className="flex flex-row items-center gap-4">
            <i className="fas fa-list-check text-yellow-600 text-xl"></i>
            <CardTitle>Our Objectives</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-neutral-700 leading-relaxed text-base">
              To equip students with technical knowledge and skills, promote
              industry collaboration, encourage innovation and research, and
              contribute to national development.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default MissionVision;
