import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadCrumb from "@/components/BreadCrumb";
import Cta from "@/components/Cta";
import { AccessibilityFeatures } from "@/components/AccessibilityFeatures";

const Card = ({ iconClass, title, description, color }) => (
    <div
        className={`bg-white shadow-md border-2 border-primary border-l-8  rounded-xl p-6 flex flex-col min-h-[250px] transition hover:scale-[1.02] duration-300`}
    >
        <div className="text-4xl text-secondary mb-4">
            <i className={`fas ${iconClass}`}></i>
        </div>
        <h3 className="text-xl font-semibold  text-primary mb-2">{title}</h3>
        <p className="text-gray-600 whitespace-pre-line text-sm">
            {description}
        </p>
    </div>
);

const Grievances = () => {
    return (
        <div>
            <AccessibilityFeatures />
            <Header />

            <BreadCrumb
                title="Grievances & Redressal"
                description="Ensuring a fair, safe, and inclusive campus environment."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Grievances", isCurrent: true },
                ]}
            />

            <div className="container mx-auto px-6 py-12 text-justify">
               <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <Card
        iconClass="fa-pen"
        title="Submit Your Complaint"
        description="You can submit your complaints online easily and securely. Every concern is taken seriously, and we ensure fair, transparent, and timely handling of grievances to maintain a safe and supportive campus environment for all students."
        color="border-yellow-500"
    />

    <Card
        iconClass="fa-users"
        title="Minority Cell"
        description="The Minority Cell works to protect the rights of minority students and ensures that academic and administrative issues are resolved effectively. It also conducts awareness programs to educate students about their rights and available support systems."
        color="border-indigo-500"
    />

    <Card
        iconClass="fa-handshake"
        title="SC/ST/OBC Cell"
        description="This cell addresses caste-based concerns and ensures equal opportunities for SC/ST/OBC students. It helps with scholarship applications, reservations, and any academic or social issues, providing consistent guidance and support to underrepresented groups on campus."
        color="border-green-500"
    />

    <Card
        iconClass="fa-shield-alt"
        title="Anti-Ragging Committee"
        description="The Anti-Ragging Committee actively monitors the campus to prevent ragging incidents. It ensures full compliance with UGC regulations, responds promptly to complaints, and organizes preventive measures to create a safe and respectful learning environment for all students."
        color="border-red-400"
    />

    <Card
        iconClass="fa-venus"
        title="Women's Rights Committee / ICC"
        description="This committee handles gender-based issues, investigates harassment complaints, and provides support for victims. It also organizes workshops and sensitization programs to promote awareness of gender equality and empower women within the campus community."
        color="border-pink-400"
    />

    <Card
        iconClass="fa-comments"
        title="Student Grievance Redressal"
        description="The Student Grievance Redressal system addresses complaints regarding academics, infrastructure, and campus facilities. It follows a fair, transparent, and timely resolution process to ensure every student’s concerns are heard and resolved efficiently."
        color="border-blue-500"
    />

    <Card
        iconClass="fa-stream"
        title="Grievance Submission Process"
        description="Submitting a grievance is simple: first, identify the appropriate cell for your concern. Next, submit your complaint online or offline. You will receive acknowledgment within three days, and the issue is investigated and resolved, usually within fifteen days."
        color="border-cyan-500"
    />

    <Card
        iconClass="fa-user-shield"
        title="Confidentiality & Safety"
        description="All grievance submissions are treated with strict confidentiality. Students can raise concerns without fear of retaliation. The institution guarantees a safe, supportive environment, ensuring that every complaint is handled discreetly and with utmost priority for safety."
        color="border-orange-400"
    />
    <Card
        iconClass="fa-address-book"
        title="Authorities to Contact"
        description="For any escalations or urgent concerns, students may contact the designated authorities directly. Dr. Balwan, Registrar, and Mr. Ashok Kumar, Proctor, are responsible for overseeing student welfare and ensuring timely and fair resolution of grievances."
        color="border-purple-500"
    />
</div>


                {/* Download Notifications Section */}
                <div className="mt-16">
                    <h3 className="text-2xl font-semibold text-primary mb-4">
                        📢 Download Notifications
                    </h3>
                    <ul className="list-disc ml-6 space-y-2 text-gray-700">
                        <li>
                            <a
                                href="https://drive.google.com/file/d/165QbjW_C9-toksqv-LqGRmBylCe1j-wg/view?usp=sharing"
                                className="text-secondary hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Minority Cell Notification
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://drive.google.com/file/d/1nSwXPqNgVyZ4fxe3QfZpolRtq1vKmJr-/view?usp=sharing"
                                className="text-secondary hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                SC/ST/OBC Cell Notification
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://drive.google.com/file/d/17cH_d5CWao4skHY0DOF1E5kva1oRlxHB/view?usp=drive_link"
                                className="text-secondary hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Anti-Ragging Committee Notification
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://drive.google.com/file/d/15tsgdKI04bQdhALoFgYhGAnHyZpwPOWH/view?usp=drive_link"
                                className="text-secondary hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                ICC Notification
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://drive.google.com/file/d/1bytUm11HV5LD_lfR7dXzjTi4_7WYx44q/view?usp=drive_link"
                                className="text-secondary hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Student Grievance Redressal Cell Notification
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <Cta />
            <Footer />
        </div>
    );
};

export default Grievances;
