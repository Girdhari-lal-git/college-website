import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BreadCrumb from '@/components/BreadCrumb'
import Cta from '@/components/Cta'
import { AccessibilityFeatures } from '@/components/AccessibilityFeatures'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const partnerCategories = {
    industry: [
         { id: 2, src: "https://www.piet.poornima.org/images/partners/ats.PNG", alt: "ATS", name: "ATS", type: "Industry Partner", mou: "https://drive.google.com/file/d/1Q4fJ_onUO-fZ9uI0fCQUIMTk1Q-B2QGw/view?usp=drive_link" },
        { id: 3, src: "https://www.piet.poornima.org/images/partners/machineautomation.PNG", alt: "Machine Automation", name: "Machine Automation", type: "Technology Partner", mou: "https://drive.google.com/file/d/18IaCteXIODL6r1zJ6l31yoqjihL3EcUv/view?usp=drive_link" },
         { id: 10, src: "https://www.piet.poornima.org/images/partners/ggnation.png", alt: "GG Nation", name: "GG Nation", type: "Technology Partner", mou: "https://drive.google.com/file/d/1JvR3HBj9kk_ex3WRAldbT5GdSdT3Rfwp/view?usp=drive_link" },
        { id: 11, src: "https://www.piet.poornima.org/images/partners/Globalit.jpg", alt: "Global IT Providers", name: "GITP", type: "Technology Partner", mou: "https://drive.google.com/file/d/1UpvW9LBxk6giB65AcZ0J1v281cqS15fi/view?usp=drive_link" },
       
        { id: 14, src: "https://www.piet.poornima.org/images/partners/kistechno_logo.png", alt: "Kistechno", name: "Kistechno", type: "Technology Partner", mou: "https://drive.google.com/file/d/1NzRPxwUnda3ATSb7LIdAwHDFBlv6Y5CF/view?usp=drive_link" },
        
         { id: 20, src: "https://www.piet.poornima.org/images/partners/young.png", alt: "Young Indians", name: "Young Indians", type: "Technology Partner", mou: "https://drive.google.com/file/d/165n6DXls8z7W2tU0xsDAUJBS5EfEtlwv/view?usp=drive_link" },
        { id: 21, src: "https://www.piet.poornima.org/images/partners/elektrolites.jpg", alt: "Elektrolites", name: "Elektrolites", type: "Technology Partner", mou: "https://drive.google.com/file/d/1NXIT4V_2woJzY6VlIbZT9SFt7OAVCMi2/view?usp=drive_link" },
        { id: 22, src: "https://www.piet.poornima.org/images/partners/exeliq.png", alt: "Exeliq", name: "Exeliq", type: "Technology Partner", mou: "https://drive.google.com/file/d/10fG01dYitN939CaiAD-qwXm4RgcGXpBY/view?usp=drive_link" },
        { id: 23, src: "https://www.piet.poornima.org/images/partners/firstclub.jpg", alt: "First Club", name: "First Club", type: "Technology Partner", mou: "https://drive.google.com/file/d/1ofL2OvoUKTy9n6g_UQbSUnY1CZFL8lx_/view?usp=drive_link" },
        { id: 24, src: "https://www.piet.poornima.org/images/partners/johns.jpg", alt: "John Automation", name: "John Automation", type: "Technology Partner", mou: "https://drive.google.com/file/d/1GuP_6E9tLVUw3USr2badmv3YLHzStdqp/view?usp=drive_link" },
        { id: 25, src: "https://www.piet.poornima.org/images/partners/vmk.jpg", alt: "VMK Digital", name: "VMK Digital", type: "Technology Partner", mou: "https://drive.google.com/file/d/1vfJ8q6-w4eAieR8S3lKIkjvbrhIHEPdd/view?usp=drive_link" },
         { id: 27, src: "https://www.piet.poornima.org/images/partners/helios.png", alt: "Helios", name: "Helios", type: "Technology Partner", mou: "https://drive.google.com/file/d/1apZXZujuP3AfQt5qAoaNImK-cGquuMhK/view?usp=drive_link" },
         { id: 29, src: "https://www.piet.poornima.org/images/partners/synoriq.webp", alt: "Synoriq", name: "Synoriq", type: "Technology Partner", mou: "https://drive.google.com/file/d/1SlZoRra7u8zJ1dhMQOQfxXU1JeHGcYTG/view?usp=drive_link" },
        
           { id: 35, src: "https://www.piet.poornima.org/images/partners/rapidops.png", alt: "Rapidops", name: "Rapidops", type: "Technology Partner", mou: "https://drive.google.com/file/d/1sWiiq6fC-kN8ug00UrEB2lrQ7etIvLbx/view?usp=drive_link" },
        { id: 36, src: "https://www.piet.poornima.org/images/partners/hiteshla.png", alt: "Hitesh Lohati", name: "Hitesh Lohati", type: "Technology Partner", mou: "https://drive.google.com/file/d/1U0vaWNpC2PqyW1P3vUtroT_QmeYza8Rj/view?usp=drive_link" },
        { id: 37, src: "https://www.piet.poornima.org/images/partners/youngify.jpg", alt: "Younify", name: "Younify", type: "Technology Partner", mou: "https://drive.google.com/file/d/1t8ecD-Qdd5yuSd-LkFSg3RzcTyRk4NGC/view?usp=drive_link" },
         { id: 41, src: "https://www.piet.poornima.org/images/partners/quicksmartwash.png", alt: "Quick Smart Wash", name: "Quick Smart Wash", type: "Technology Partner", mou: "https://drive.google.com/file/d/1i2AFXxpUXooTiMjtuFJoJe6T8JdNQeGM/view?usp=drive_link" },
           { id: 43, src: "https://www.piet.poornima.org/images/partners/leo-logo.png", alt: "LEO Card", name: "LEO Card", type: "Technology Partner", mou: "https://drive.google.com/file/d/1q4eW8kE9t91wqW-h5KhP6KVwIn3Oc1ra/view?usp=drive_link" },        
        { id: 44, src: "https://www.piet.poornima.org/images/partners/ehrlogic_logo.jpg", alt: "EHR Logic", name: "EHR Logic", type: "Technology Partner", mou: "https://drive.google.com/file/d/1veQrY0eEkUgeaIj0Z--V2ziHogYag8S0/view?usp=drive_link" },
        { id: 45, src: "https://www.piet.poornima.org/images/partners/xcrotek_logo.jpg", alt: "xCroTek", name: "xCroTek", type: "Technology Partner", mou: "https://drive.google.com/file/d/1caByHpG2demO8qPeUQwfUgvNsLexy9sl/view?usp=drive_link" },
         { id: 49, src: "/images/cmp/kedman-sony.png", alt: "SONY-KEDMAN", name: "SONY-KEDMAN", type: "Technology Partner", mou: "https://drive.google.com/file/d/1nB-HfeJn83JyakqP7LeHAwjOFA8BHoBf/view?usp=drive_link" },
        { id: 50, src: "/images/cmp/captain-tractors.png", alt: "Captain Tractors", name: "Captain Tractors", type: "Technology Partner", mou: "https://drive.google.com/file/d/1lofKQr7mCex0J-wzaltF38QD9GXyPJX4/view?usp=drive_link" },
        
    ],
    academic: [
        { id: 6, src: "https://www.piet.poornima.org/images/partners/muscat.PNG", alt: "Muscat University", name: "Muscat University", type: "Academic Partner",  mou: "https://drive.google.com/file/d/17-z0in6kbkUDKLRjip4ugh_9t3bqpogh/view?usp=drive_link" },
        { id: 7, src: "https://www.piet.poornima.org/images/partners/asiauniversity.PNG", alt: "Asia University", name: "Asia University", type: "International Partner",  mou: "https://drive.google.com/file/d/1_Yip9kbc2OUS2kmvtD-wEPVI5iNxgzeL/view?usp=drive_link" },
        { id: 19, src: "https://www.piet.poornima.org/images/partners/ybiance.jpg", alt: "Ybiance", name: "Ybiance", type: "Technology Partner", mou: "https://drive.google.com/file/d/1dXPvrKtPpoKrGZWkqvb5ZQrMDyVoNBCa/view?usp=drive_link" },
       { id: 38, src: "https://www.piet.poornima.org/images/partners/springer.png", alt: "Springer", name: "Springer", type: "Technology Partner", mou: "https://drive.google.com/file/d/1zl-6HK_8Ov4ti8KkDJg1jk387fjmV6wV/view?usp=drive_link" },
        { id: 40, src: "https://www.piet.poornima.org/images/partners/tcsion.png", alt: "TCS-iON", name: "TCS-iON", type: "Technology Partner", mou: "https://drive.google.com/file/d/13_V0KayQE3zrZlf5c35ZRlSPv46xF7CC/view?usp=drive_link" },
       { id: 47, src: "https://www.piet.poornima.org/images/partners/T&F.png", alt: "Zeetron", name: "Taylor & Francis", type: "Technology Partner", mou: "https://drive.google.com/file/d/1WBTLomjwLY4MJ7trmAtNDBRJgeTVLq2f/view?usp=drive_link" },
       { id: 42, src: "https://www.piet.poornima.org/images/partners/TCOE-logo.png", alt: "TCOE", name: "TCOE", type: "Technology Partner", mou: "https://drive.google.com/file/d/1kFS1yLVzPMJ2zVz2Ynr7M5rCy7uhAn2J/view?usp=drive_link" },
      { id: 39, src: "https://www.piet.poornima.org/images/partners/edcept.png", alt: "EdCept", name: "EdCept", type: "Technology Partner", mou: "https://drive.google.com/file/d/1KuWl_q7F95LczdvbKYr4mQ3e0FLDs2jM/view?usp=drive_link" },
        { id: 34, src: "https://www.piet.poornima.org/images/partners/ibm.png", alt: "IBM", name: "IBM", type: "Technology Partner", mou: "https://drive.google.com/file/d/1P9H6DYi5W4J-49myyVr9kpQSo6HqbpjW/view?usp=drive_link" },
      { id: 30, src: "https://www.piet.poornima.org/images/partners/oracle.png", alt: "Oracle", name: "Oracle", type: "Technology Partner", mou: "https://drive.google.com/file/d/1Go8NMWvhfHGYLdrPR9x0ZwkjE0j14ITu/view?usp=drive_link" },
        { id: 31, src: "https://www.piet.poornima.org/images/partners/redhat.png", alt: "Red Hat", name: "Red Hat", type: "Technology Partner", mou: "https://drive.google.com/file/d/1aRQhQXApGMSdv6UNNmHrHlbu0qEabUXX/view?usp=drive_link" },
         { id: 28, src: "https://www.piet.poornima.org/images/partners/Ictacademy_logo_vertical.png", alt: "ICT Academy", name: "ICT Academy", type: "Technology Partner", mou: "https://drive.google.com/file/d/19PYrMgordUvUfCtUu4nlH1TL6xHP7iee/view?usp=drive_link" },
       { id: 26, src: "https://www.piet.poornima.org/images/partners/aiesec.png", alt: "Aiesec", name: "Aiesec", type: "Technology Partner", mou: "https://drive.google.com/file/d/1d2d-M90KDNea5g0wziJRe_BR0i_ecpLz/view?usp=drive_link" },
      { id: 4, src: "https://www.piet.poornima.org/images/partners/h2s.PNG", alt: "H2S", name: "H2S", type: "Industry Partner", mou: "https://drive.google.com/file/d/1xqHX-xK49MnhQ1Emz1JxxBQJahrACGoN/view?usp=drive_link" },
        { id: 5, src: "https://www.piet.poornima.org/images/partners/zeetron.PNG", alt: "Zeetron", name: "Zeetron", type: "Technology Partner", mou: "https://drive.google.com/file/d/13h9HTIFuYKdU-cRzTku9h7fMgeHsXBgo/view?usp=drive_link" },
        { id: 48, src: "/images/cmp/smartbridge_logo.jpg", alt: "Smart Bridge", name: "Smart Bridge", type: "Technology Partner", mou: "https://drive.google.com/file/d/1lOzSDT8zRkqtW2LoPMXcROCQ5nwKRkZU/view?usp=drive_link" },
         { id: 51, src: "/images/cmp/copal.jpg", alt: "Copal Publishing", name: "Copal Publishing", type: "Technology Partner", mou: "https://drive.google.com/file/d/1VGB5FkyEpsEt6cn2YVPFjV7sbicRc0FI/view?usp=drive_link" },
       
    ],
    publishing: [         
        { id: 1, src: "https://www.piet.poornima.org/images/partners/Aerophantom.PNG", alt: "Aerophantom", name: "Aerophantom", type: "Technology Partner", mou: "https://drive.google.com/file/d/1B-f41gweS49XqnFfLKvC3w4BzRg3eNee/view?usp=drive_link" },
        { id: 8, src: "https://www.piet.poornima.org/images/partners/Aippublishing.png", alt: "AIP Publishing", name: "AIP Publishing", type: "Publishing Partner", mou: "https://drive.google.com/file/d/1XuA-xO7DBrkAYv1kXWh1HV3dGCXIKaXL/view?usp=drive_link" },
        { id: 33, src: "https://www.piet.poornima.org/images/partners/Codingninjas.jpg", alt: "Coding Ninja", name: "Coding Ninja", type: "Technology Partner", mou: "https://drive.google.com/file/d/1xklF1uwo4knkx_2MXR_HXAmj5BLoPZIq/view?usp=drive_link" },
        { id: 46, src: "https://www.piet.poornima.org/images/partners/Tech_matrix.jpg", alt: "Tech Matrix", name: "Tech Matric", type: "Technology Partner", mou: "https://drive.google.com/file/d/117H_xE4jlDke3chATqZGWxulIqQ4I3Jz/view?usp=drive_link" },
        { id: 9, src: "https://www.piet.poornima.org/images/partners/geekster.png", alt: "Geekster", name: "Geekster", type: "Training Partner", mou: "https://drive.google.com/file/d/1XVGE8kB4dGLA9NDjqQWRuukIRQP4c_Pa/view?usp=drive_link" },
        { id: 12, src: "https://www.piet.poornima.org/images/partners/grras.jpg", alt: "GRRAS", name: "GRRAS", type: "Training Partner", mou: "https://drive.google.com/file/d/1jOJ_AAcAfjL2ndhqxsB2zZnKHx0w6pKj/view?usp=drive_link" },
        { id: 13, src: "https://www.piet.poornima.org/images/partners/karytech.png", alt: "KaryTech", name: "KaryTech", type: "Training Partner", mou: "https://drive.google.com/file/d/109pYWjCtxy25LKi3x7c_X_nmw1iZ8chG/view?usp=drive_link" },
        { id: 15, src: "https://www.piet.poornima.org/images/partners/Navriti.png", alt: "Navriti", name: "Navriti", type: "Training Partner", mou: "https://drive.google.com/file/d/15TLAx4blOhZRfJQw2CPqw5jz-A1TFtHa/view?usp=drive_link" },
        { id: 16, src: "https://www.piet.poornima.org/images/partners/robofi-logo.jpg", alt: "Robofi", name: "Robofi", type: "Training Partner", mou: "https://drive.google.com/file/d/1lSEcZ2Ttxjh1GR6QBQgVuofsMp20pSCq/view?usp=drive_link" },
        { id: 17, src: "https://www.piet.poornima.org/images/partners/sincgrid.png", alt: "Sincgrid", name: "Sincgrid", type: "Training Partner", mou: "https://drive.google.com/file/d/1SeBe5u5rgzokaloN0CLwsE1CYvsjeXdL/view?usp=drive_link" },
        { id: 18, src: "https://www.piet.poornima.org/images/partners/upflairs.PNG", alt: "Upflairs", name: "Upflairs", type: "Training Partner", mou: "https://drive.google.com/file/d/1akrGKDTlgRtSMgOsItljjJsPfHliVET6/view?usp=drive_link" },
        { id: 32, src: "https://www.piet.poornima.org/images/partners/celebal.png", alt: "Celebal", name: "Celebal", type: "Placement Partner", mou: "https://drive.google.com/file/d/1AVb_gCwR-RLiFdca90WxM-OuQMkkB8aD/view?usp=drive_link" },
        { id: 52, src: "/images/cmp/edunet-partners.jpg", alt: "Edunet Foundation", name: "Edunet Foundation", type: "Placement Partner", mou: "https://drive.google.com/file/d/18yEDZr9Wo9do0YzN92JD_AzKdD6CktW1/view?usp=drive_link" },

        
  

    ],
    training: [
        ],

    Placement: [
        ]
}

const stats = [
    { number: "50+", label: "Industry Partners", icon: "🏭" },
    { number: "20+", label: "Academic Partners", icon: "🎓" },
    { number: "15+", label: "International Partners", icon: "🌍" },
    { number: "100+", label: "Collaborative Projects", icon: "🤝" }
]

const PartnerCard = ({ partner }: { partner: any }) => {
    const href = partner.mou ?? partner.link ?? null;

    const card = (
        <Card className="group relative overflow-hidden bg-white border border-gray-200 hover:border-primary/30 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2">
            <div className="aspect-video relative bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6">
                <img
                    src={partner.src}
                    alt={partner.alt}
                    className="max-w-full max-h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                    onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.parentElement?.insertAdjacentHTML('beforeend', `
                            <div class="flex items-center justify-center w-full h-full bg-gray-100 text-gray-400">
                                <span class="text-sm font-medium">${partner.name}</span>
                            </div>
                        `);
                    }}
                />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-4 bg-white">
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-200">
                    {partner.name}
                </h3>
                <Badge variant="secondary" className="text-xs px-2 py-1">
                    {partner.type = null}
                </Badge>
            </div>
        </Card>
    );

    return href ? (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${partner.name} MoU`}
            className="block"
        >
            {card}
        </a>
    ) : card;
}

const StatCard = ({ stat }: { stat: any }) => (
    <Card className="text-center p-6 bg-white border border-gray-200 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
        <div className="text-4xl mb-3">{stat.icon}</div>
        <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
        <div className="text-gray-600 font-medium">{stat.label}</div>
    </Card>
)

const CategorySection = ({ title, partners, gradient }: { title: string; partners: any[]; gradient: string }) => (
    <section className="mb-16">
        <div className="text-center mb-10">
            <div className={`inline-block px-6 py-2 rounded-full ${gradient} text-white font-semibold text-sm uppercase tracking-wide mb-4`}>
                {title}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {title} Collaborations
            </h3>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {partners.map((partner) => (
                <PartnerCard key={partner.id} partner={partner} />
            ))}
        </div>
    </section>
)

const Collbration = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <AccessibilityFeatures />
            <Header />
            <BreadCrumb
                title="OUR PARTNERS"
                description="Building bridges to excellence through strategic partnerships and collaborations that enhance learning, research, and innovation opportunities."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'OUR PARTNERS', isCurrent: true },
                ]}
            />

            {/* Hero Section */}
            <section className="relative py-16 bg-gradient-to-r from-primary/10 via-blue-50 to-primary/5">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            Strategic <span className="text-primary">Partnerships</span> for Excellence
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            We collaborate with leading industry players, renowned academic institutions, and innovative organizations to provide our students with unparalleled opportunities for growth, learning, and career advancement.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 text-sm">
                            <span className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200 font-medium">🎯 Industry Exposure</span>
                            <span className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200 font-medium">🔬 Research Collaboration</span>
                            <span className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200 font-medium">💼 Placement Opportunities</span>
                            <span className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200 font-medium">🌐 Global Network</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Statistics Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Partnership Impact</h2>
                        <div className="w-24 h-1 bg-primary mx-auto"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <StatCard key={index} stat={stat} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Partners Sections */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Valued Partners</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Explore our diverse network of partners across various sectors, each contributing to our mission of delivering world-class education and research opportunities.
                        </p>
                        <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
                    </div>

                    <CategorySection
                        title="Technology & Industry"
                        partners={partnerCategories.industry}
                        gradient="bg-gradient-to-r from-blue-600 to-blue-700"
                    />

                    <CategorySection
                        title="Reasearch & Academia "
                        partners={partnerCategories.academic}
                        gradient="bg-gradient-to-r from-green-600 to-green-700"
                    />

                    <CategorySection
                        title="Training & placement"
                        partners={partnerCategories.publishing}
                        gradient="bg-gradient-to-r from-purple-600 to-purple-700"
                    />
                    {/*
                    <CategorySection
                        title="Training"
                        partners={partnerCategories.training}
                        gradient="bg-gradient-to-r from-orange-600 to-orange-700"
                    />
                     <CategorySection
                        title="Placement"
                        partners={partnerCategories.Placement}
                        gradient="bg-gradient-to-r from-yellow-600 to-yellow-700"
                    /> */}
                </div>
            </section> 

            {/* Benefits Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Partnership Benefits</h2>
                        <div className="w-24 h-1 bg-primary mx-auto"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                            <div className="text-4xl mb-4">🎓</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Enhanced Learning</h3>
                            <p className="text-gray-600">Access to industry-standard tools, technologies, and methodologies through our partner network.</p>
                        </Card>
                        <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                            <div className="text-4xl mb-4">💼</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Career Opportunities</h3>
                            <p className="text-gray-600">Direct placement opportunities and internships with our industry and corporate partners.</p>
                        </Card>
                        <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                            <div className="text-4xl mb-4">🔬</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Research Excellence</h3>
                            <p className="text-gray-600">Collaborative research projects and access to cutting-edge facilities and expertise.</p>
                        </Card>
                        <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                            <div className="text-4xl mb-4">🌍</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Global Exposure</h3>
                            <p className="text-gray-600">International exchange programs and global perspective through our academic partners.</p>
                        </Card>
                        <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                            <div className="text-4xl mb-4">💡</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation Hub</h3>
                            <p className="text-gray-600">Access to innovation labs, incubation centers, and startup ecosystem through strategic partnerships.</p>
                        </Card>
                        <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                            <div className="text-4xl mb-4">🤝</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Industry Connect</h3>
                            <p className="text-gray-600">Regular industry interactions, guest lectures, and mentorship programs from partner organizations.</p>
                        </Card>
                    </div>
                </div>
            </section>

            <Cta />
            <Footer />
        </div>
    )
}

export default Collbration
