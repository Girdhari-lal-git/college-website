import React from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadCrumb from "@/components/BreadCrumb";

import IEEEHero from "@/components/ieee/IEEEHero";
import IEEEStats from "@/components/ieee/IEEEStats";
import IEEESocieties from "@/components/ieee/IEEESocieties";
import IEEEActivities from "@/components/ieee/IEEEActivities";

const IEEE: React.FC = () => {
  return (
    <>
      <Header />

       <BreadCrumb
      title="IEEE Student Branch"
      description="Professional excellence, leadership and innovation at PIET"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "IEEE Student Branch", isCurrent: true },
      ]}
    />

      <main>

        {/* 1. Hero */}
        <IEEEHero />

        {/* 2. Impact Statistics */}
        <IEEEStats />

        {/* 3. Recognition */}
        <section className="py-8 bg-gray-50">
          {/* Recognition content */}
        </section>

        {/* 4. Why IEEE */}
        <section className="py-8 bg-white">
          {/* Why IEEE content */}
        </section>

        {/* 5. Societies */}
        <IEEESocieties />

        {/* 6. Leadership */}
        <section className="py-8 bg-gray-50">
          {/* Leadership cards */}
        </section>

        {/* 7. Gallery */}
        <section className="py-8 bg-white">
          {/* IEEE gallery */}
        </section>

        {/* 8. Activities */}
        <IEEEActivities />

        {/* 9. Impact */}
        <section className="py-8 bg-gray-50">
          {/* Impact content */}
        </section>

        {/* 10. Testimonials */}
        <section className="py-8 bg-white">
          {/* Student voices */}
        </section>

        {/* 11. CTA */}
        <section id="join-ieee" className="py-24 bg-primary text-white">
          {/* Join IEEE */}
        </section>

      </main>

      <Footer />
    </>
  );
};

export default IEEE;
