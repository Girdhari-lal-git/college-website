import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadCrumb from "@/components/BreadCrumb";
import Cta from "@/components/Cta";
import { AccessibilityFeatures } from "@/components/AccessibilityFeatures";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";

const publicationsList = [
    "Book / Book Chapters and Papers Published in Conferences",
    "Research Papers Published in the Journals",
    "Mandatory Disclosure",
    "Grievance Submission",
    "Campus Life @ PIET",
    "Green Campus",
    "Study In India",
    "AICTE Feedback Facility",
    "UGC Compliances",
];

const pdfDocuments = [
    {
        sno: 1,
        title: "Book / Book Chapters and Papers Published in Conferences",
        pdfUrl: "https://drive.google.com/file/d/1d-N_LJk1VLNgsve11Khxjwlh4X6YM9_k/view?usp=sharing",
    },
    {
        sno: 2,
        title: "Research Papers Published in the Journals",
        pdfUrl: "https://drive.google.com/file/d/1kSarouEwUK5_iyV6yRXF2mZl4YuQ2Vmc/view?usp=sharing",
    },
];

const Publications = () => {
    return (
        <div className="min-h-screen bg-neutral-50">
            <AccessibilityFeatures />
            <Header />
            <BreadCrumb
                title="Publications and Information"
                description="Explore books, research papers, and important disclosures at PIET."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Publications", isCurrent: true },
                ]}
            />

            <div className="container mx-auto px-4 py-12">
                {/* Publications Resources Card */}

                {/* PDF Documents Table */}
                <Card className="max-w-4xl mx-auto">
                    <CardHeader>
                        <CardTitle className="text-2xl text-primary flex items-center gap-3">
                            <FileText className="h-8 w-8" />
                            Publication Documents
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse border border-neutral-300">
                                <thead>
                                    <tr className="bg-primary text-white">
                                        <th className="border border-neutral-300 px-4 py-3 text-left">
                                            S. No.
                                        </th>
                                        <th className="border border-neutral-300 px-4 py-3 text-left">
                                            Document Title
                                        </th>
                                        <th className="border border-neutral-300 px-4 py-3 text-center">
                                            View PDF
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {pdfDocuments.map((doc) => (
                                        <tr
                                            key={doc.sno}
                                            className={
                                                doc.sno % 2 === 0
                                                    ? "bg-neutral-50"
                                                    : "bg-white"
                                            }
                                        >
                                            <td className="border border-neutral-300 px-4 py-3">
                                                {doc.sno}
                                            </td>
                                            <td className="border border-neutral-300 px-4 py-3">
                                                {doc.title}
                                            </td>
                                            <td className="border border-neutral-300 px-4 py-3 text-center">
                                                <a
                                                    href={doc.pdfUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition-colors"
                                                >
                                                    <FileText className="h-4 w-4" />
                                                    View PDF
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Cta />
            <Footer />
        </div>
    );
};

export default Publications;
