import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadCrumb from "@/components/BreadCrumb";
import Cta from "@/components/Cta";
import { AccessibilityFeatures } from "@/components/AccessibilityFeatures";
import LazyImage from "@/components/LazyImage";

const firefoodCertificatePage = () => {
    return (
        <div>
            <AccessibilityFeatures />
            <Header />
            <BreadCrumb
                title="Fire & food Safety Certificate"
                description="Fire & food safety certification for a secure and healthy campus environment at PIET"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Accreditation", href: "#" },
                    { label: "Fire & Food Safety", isCurrent: true },
                ]}
            />

            <div className="max-w-6xl mx-auto px-4 py-12">
                <section className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-primary mb-8">
                        Fire Safety Certificate
                    </h2>
                    <div className="w-24 h-1 bg-secondary mb-8 mx-auto"></div>

                    <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                        <div className="relative">
                            <LazyImage
                                src="/images/Fire_Safety-Certificate.jpg"
                                alt=""
                                className="w-full h-auto object-contain bg-gray-50"
                            />
                        </div>
                        <div className="p-6 text-center">
                            <h3 className="text-2xl font-bold text-primary mb-4">
                                Fire Safety Certificate
                            </h3>
                            <p className="text-lg text-neutral-700 leading-relaxed">
                                Poornima Institute of Engineering & Technology received the Fire Safety Certificate for demonstrating excellence in fire safety practices and compliance.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-primary mb-8">
                        Food Safety Certificate
                    </h2>
                    <div className="w-24 h-1 bg-secondary mb-8 mx-auto"></div>

                    <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                        <div className="relative">
                            <LazyImage
                                src="/images/Food_Safety_License.jpg"
                                alt="Food Safety Certificate - Poornima Institute of Engineering & Technology"
                                className="w-full h-auto object-contain bg-gray-50"
                            />
                        </div>
                        <div className="p-6 text-center">
                            <h3 className="text-2xl font-bold text-primary mb-4">
                                Food Safety Certificate
                            </h3>
                            <p className="text-lg text-neutral-700 leading-relaxed">
                                Poornima Institute of Engineering & Technology received the Food Safety Certificate for maintaining high standards of food safety and hygiene in campus dining facilities.
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            <Cta />
            <Footer />
        </div>
    );
};

export default firefoodCertificatePage;
