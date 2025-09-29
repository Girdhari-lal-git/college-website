import React from "react"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/accordion"

type CourseOutcome = {
  coNumber: string
  coDefinition: string
}

export type SubjectCO = {
  subject: string
  subjectCode: string
  semester: string
  outcomes: CourseOutcome[]
}

type CourseOutcomeAccordionProps = {
  data: SubjectCO[]
}

// Group subjects by semester
function groupBySemester(data: SubjectCO[]) {
  return data.reduce((acc: Record<string, SubjectCO[]>, subject: SubjectCO) => {
    if (!acc[subject.semester]) acc[subject.semester] = []
    acc[subject.semester].push(subject)
    return acc
  }, {})
}

export default function CourseOutcomeAccordion({
  data,
}: CourseOutcomeAccordionProps) {
  const grouped = groupBySemester(data)

  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-primary text-center">
        Course Outcomes
      </h2>

      {/* Semester Accordion */}
      <Accordion type="multiple" defaultValue={[]} className="space-y-6">
        {Object.entries(grouped).map(([semester, subjects], semIndex) => (
          <AccordionItem
            key={semIndex}
            value={`semester-${semIndex}`}
            className="border rounded-md shadow"
          >
            <AccordionTrigger className="text-xl font-semibold px-4 py-3 bg-secondary text-white rounded-t-md">
              {semester}
            </AccordionTrigger>

            <AccordionContent>
              {/* Subjects Accordion inside semester */}
              <Accordion
                type="multiple"
                defaultValue={[]}
                className="space-y-4 mt-4"
              >
                {subjects.map(({ subject, subjectCode, outcomes }, index) => (
                  <AccordionItem
                    key={index}
                    value={`subject-${semIndex}-${index}`}
                    className="border rounded-md"
                  >
                    <AccordionTrigger className="text-lg font-semibold flex items-center justify-between px-4 py-2">
                      <div>
                        <i className="fa-solid fa-angle-right text-primary mx-2"></i>
                        {subject}
                        <span className="ml-3 text-sm text-gray-600">
                          ({subjectCode})
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <table className="w-full border-collapse border border-gray-300 text-sm">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-2 text-secondary text-left w-24">
                              CO Number
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-left">
                              CO Definition
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {outcomes.map(({ coNumber, coDefinition }) => (
                            <tr key={coNumber} className="even:bg-gray-50">
                              <td className="border border-gray-300 px-4 py-2 font-semibold text-secondary">
                                {coNumber}
                              </td>
                              <td className="border border-gray-300 px-4 py-2">
                                {coDefinition}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
