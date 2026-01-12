import React from "react";
import LazyImage from "@/components/LazyImage";
import Header from "@/components/Header";
import BreadCrumb from "@/components/BreadCrumb";
import { AccessibilityFeatures } from "@/components/AccessibilityFeatures";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

const RTIInformationOfficer: React.FC = () => {
  return (
    <div className="max-w-8xl mx-auto p-6 bg-white rounded-lg shadow">
        <AccessibilityFeatures />
                    <Header />
                    <BreadCrumb
                        title="Central Public Information Officer (RTI)"
                        description="Details of the Central Public Information Officer (RTI) at Poornima Institute of Engineering & Technology."
                        breadcrumbs={[
                            { label: "Home", href: "/" },
                            { label: "CPIO", href: "#" },
                            { label: "Central Public Information Officer (RTI)", isCurrent: true },
                        ]}
                    />
    <section className="w-full py-12 px-4 md:px-8">
        

      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-4xl font-heading font-bold text-primary mb-8">
          Central Public Information Officer (RTI)
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center border rounded-lg p-6 card-hover">
          
          {/* LEFT: Officer Photo */}
          <div className="md:col-span-1 text-center">
            <LazyImage
              src="/images/messages/reg.jpg" // <-- update path if needed
              alt="Dr. Balwan – Registrar"
              className="w-64 h-64 rounded-full mx-auto object-cover shadow-md"
            />
          </div>

          {/* RIGHT: Officer Details */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              Name of the Information Officer for RTI
            </h3>

            <table className="w-full text-sm border">
              <tbody>
                <tr>
                  <td className="border p-3 font-semibold w-1/3">
                    Name
                  </td>
                  <td className="border p-3">
                    Dr. Balwan
                  </td>
                </tr>

                <tr>
                  <td className="border p-3 font-semibold">
                    Designation
                  </td>
                  <td className="border p-3">
                    Registrar
                  </td>
                </tr>

                <tr>
                  <td className="border p-3 font-semibold">
                    Official Contact Number
                  </td>
                  <td className="border p-3">
                    <a
                      href="tel:9001893262"
                      className="text-primary hover:underline"
                    >
                      9001893262
                    </a>
                  </td>
                </tr>

                <tr>
                  <td className="border p-3 font-semibold">
                    Email ID
                  </td>
                  <td className="border p-3">
                    <a
                      href="mailto:registrar.piet@poornima.org"
                      className="text-primary hover:underline"
                    >
                      registrar.piet@poornima.org
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
      <Cta />
      <Footer />
    </section>
    </div>
  );
};

export default RTIInformationOfficer;
