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
         { id: 2, src: "https://www.piet.poornima.org/images/partners/ats.PNG", alt: "ATS", name: "ATS", type: "Industry Partner", mou: "https://www.piet.poornima.org/mou/ATS_MoU.pdf" },
        { id: 3, src: "https://www.piet.poornima.org/images/partners/machineautomation.PNG", alt: "Machine Automation", name: "Machine Automation", type: "Technology Partner", mou: "https://www.piet.poornima.org/mou/MachineAutomation_MoU.pdf" },
         { id: 10, src: "https://www.piet.poornima.org/images/partners/ggnation.png", alt: "GG Nation", name: "GG Nation", type: "Technology Partner", mou: "https://www.piet.poornima.org/PIET_NAAC_SSR/Our_partners/NAAC_MOU/GG_NATION.pdf" },
        { id: 11, src: "https://www.piet.poornima.org/images/partners/Globalit.jpg", alt: "Global IT Providers", name: "GITP", type: "Technology Partner", mou: "https://www.piet.poornima.org/PIET_NAAC_SSR/Our_partners/NAAC_MOU/Global_IT_Providers.pdf" },
       
        { id: 14, src: "https://www.piet.poornima.org/images/partners/kistechno_logo.png", alt: "Kistechno", name: "Kistechno", type: "Technology Partner", mou: "https://www.piet.poornima.org/PIET_NAAC_SSR/Our_partners/NAAC_MOU/Kistechno_Software.pdf" },
        
         { id: 20, src: "https://www.piet.poornima.org/images/partners/young.png", alt: "Young Indians", name: "Young Indians", type: "Technology Partner", mou: "https://www.piet.poornima.org/PIET_NAAC_SSR/Our_partners/NAAC_MOU/Young_Indians.pdf" },
        { id: 21, src: "https://www.piet.poornima.org/images/partners/elektrolites.jpg", alt: "Elektrolites", name: "Elektrolites", type: "Technology Partner", mou: "https://www.piet.poornima.org/PIET_NAAC_SSR/Our_partners/NAAC_MOU/ELEKTROLITES.pdf" },
        { id: 22, src: "https://www.piet.poornima.org/images/partners/exeliq.png", alt: "Exeliq", name: "Exeliq", type: "Technology Partner", mou: "https://www.piet.poornima.org/PIET_NAAC_SSR/Our_partners/NAAC_MOU/EXELIQ.pdf" },
        { id: 23, src: "https://www.piet.poornima.org/images/partners/firstclub.jpg", alt: "First Club", name: "First Club", type: "Technology Partner", mou: "https://www.piet.poornima.org/PIET_NAAC_SSR/Our_partners/NAAC_MOU/FIRST_CLUB_ROBOTIC.pdf" },
        { id: 24, src: "https://www.piet.poornima.org/images/partners/johns.jpg", alt: "John Automation", name: "John Automation", type: "Technology Partner", mou: "https://www.piet.poornima.org/PIET_NAAC_SSR/Our_partners/NAAC_MOU/JOHNS_AUTOMATION.pdf" },
        { id: 25, src: "https://www.piet.poornima.org/images/partners/vmk.jpg", alt: "VMK Digital", name: "VMK Digital", type: "Technology Partner", mou: "https://www.piet.poornima.org/PIET_NAAC_SSR/Our_partners/NAAC_MOU/Vmk_Digital.pdf" },
         { id: 27, src: "https://www.piet.poornima.org/images/partners/helios.png", alt: "Helios", name: "Helios", type: "Technology Partner", mou: "https://www.piet.poornima.org/PIET_NAAC_SSR/Our_partners/NAAC_MOU/Helios_Web_Srives.pdf" },
         { id: 29, src: "https://www.piet.poornima.org/images/partners/synoriq.webp", alt: "Synoriq", name: "Synoriq", type: "Technology Partner", mou: "https://www.piet.poornima.org/PIET_NAAC_SSR/Our_partners/NAAC_MOU/Synoriq.pdf" },
        
           { id: 35, src: "https://www.piet.poornima.org/images/partners/rapidops.png", alt: "Rapidops", name: "Rapidops", type: "Technology Partner", mou: "https://www.piet.poornima.org/PIET_NAAC_SSR/Our_partners/NAAC_MOU/Rapidops_Solutions.pdf" },
        { id: 36, src: "https://www.piet.poornima.org/images/partners/hiteshla.png", alt: "Hitesh Lohati", name: "Hitesh Lohati", type: "Technology Partner", mou: "https://www.piet.poornima.org/PIET_NAAC_SSR/Our_partners/NAAC_MOU/Hitesh_Lahoti&Associtates.pdf" },
        { id: 37, src: "https://www.piet.poornima.org/images/partners/youngify.jpg", alt: "Younify", name: "Younify", type: "Technology Partner", mou: "https://www.piet.poornima.org/PIET_NAAC_SSR/Our_partners/NAAC_MOU/Younify_Applications.pdf" },
         { id: 41, src: "https://www.piet.poornima.org/images/partners/quicksmartwash.png", alt: "Quick Smart Wash", name: "Quick Smart Wash", type: "Technology Partner", mou: "https://www.piet.poornima.org/PIET_NAAC_SSR/Our_partners/NAAC_MOU/Quick_wash.pdf" },
           { id: 43, src: "https://www.piet.poornima.org/images/partners/leo-logo.png", alt: "LEO Card", name: "LEO Card", type: "Technology Partner", mou: "https://www.piet.poornima.org/PIET_NAAC_SSR/Our_partners/NAAC_MOU/leo_card.pdf" },        
        { id: 44, src: "https://www.piet.poornima.org/images/partners/ehrlogic_logo.jpg", alt: "EHR Logic", name: "EHR Logic", type: "Technology Partner", mou: "https://www.piet.poornima.org/PIET_NAAC_SSR/Our_partners/NAAC_MOU/MOU_PIET_&_EHRLOGIC.pdf" },
        { id: 45, src: "https://www.piet.poornima.org/images/partners/xcrotek_logo.jpg", alt: "xCroTek", name: "xCroTek", type: "Technology Partner", mou: "https://www.piet.poornima.org/PIET_NAAC_SSR/Our_partners/NAAC_MOU/MOU_PIET_&_xCroTek.pdf" },
        
    ],
    academic: [
        { id: 6, src: "https://www.piet.poornima.org/images/partners/muscat.PNG", alt: "Muscat University", name: "Muscat University", type: "Academic Partner" },
        { id: 7, src: "https://www.piet.poornima.org/images/partners/asiauniversity.PNG", alt: "Asia University", name: "Asia University", type: "International Partner" },
        { id: 19, src: "https://www.piet.poornima.org/images/partners/ybiance.jpg", alt: "Ybiance", name: "Ybiance", type: "Technology Partner", mou: "https://www.piet.poornima.org/PIET_NAAC_SSR/Our_partners/NAAC_MOU/Ybiance.pdf" },
       { id: 38, src: "https://www.piet.poornima.org/images/partners/springer.png", alt: "Springer", name: "Springer", type: "Technology Partner", mou: "https://www.piet.poornima.org/PIET_NAAC_SSR/Our_partners/NAAC_MOU/Springel_ICIMMI.pdf" },
        { id: 40, src: "https://www.piet.poornima.org/images/partners/tcsion.png", alt: "TCS-iON", name: "TCS-iON", type: "Technology Partner", mou: "https://www.piet.poornima.org/PIET_NAAC_SSR/Our_partners/NAAC_MOU/MoU_TCS-iON.pdf" },
       { id: 47, src: "https://www.piet.poornima.org/images/partners/T&F.png", alt: "Zeetron", name: "Taylor & Francis", type: "Technology Partner", mou: "https://www.piet.poornima.org/PIET_NAAC_SSR/Our_partners/NAAC_MOU/T&F_MOA.pdf" },
       { id: 42, src: "https://www.piet.poornima.org/images/partners/TCOE-logo.png", alt: "TCOE", name: "TCOE", type: "Technology Partner", mou: "https://www.piet.poornima.org/PIET_NAAC_SSR/Our_partners/NAAC_MOU/TCOE.pdf" },
      { id: 39, src: "https://www.piet.poornima.org/images/partners/edcept.png", alt: "EdCept", name: "EdCept", type: "Technology Partner", mou: "https://www.piet.poornima.org/PIET_NAAC_SSR/Our_partners/NAAC_MOU/EdCEPT_MoU.pdf" },
        { id: 34, src: "https://www.piet.poornima.org/images/partners/ibm.png", alt: "IBM", name: "IBM", type: "Technology Partner", mou: "https://www.piet.poornima.org/PIET_NAAC_SSR/Our_partners/NAAC_MOU/IBM.pdf" },
      { id: 30, src: "https://www.piet.poornima.org/images/partners/oracle.png", alt: "Oracle", name: "Oracle", type: "Technology Partner", mou: "https://www.piet.poornima.org/PIET_NAAC_SSR/Our_partners/NAAC_MOU/Oracle_Support.pdf" },
        { id: 31, src: "https://www.piet.poornima.org/images/partners/redhat.png", alt: "Red Hat", name: "Red Hat", type: "Technology Partner", mou: "https://www.piet.poornima.org/PIET_NAAC_SSR/Our_partners/NAAC_MOU/Red_Hat.pdf" },
         { id: 28, src: "https://www.piet.poornima.org/images/partners/Ictacademy_logo_vertical.png", alt: "ICT Academy", name: "ICT Academy", type: "Technology Partner", mou: "https://www.piet.poornima.org/PIET_NAAC_SSR/Our_partners/NAAC_MOU/ICT_Academy.pdf" },
       { id: 26, src: "https://www.piet.poornima.org/images/partners/aiesec.png", alt: "Aiesec", name: "Aiesec", type: "Technology Partner", mou: "https://www.piet.poornima.org/PIET_NAAC_SSR/Our_partners/NAAC_MOU/Aiesec.pdf" },
      { id: 4, src: "https://www.piet.poornima.org/images/partners/h2s.PNG", alt: "H2S", name: "H2S", type: "Industry Partner", mou: "https://www.piet.poornima.org/mou/H2S_MoU.pdf" },
        { id: 5, src: "https://www.piet.poornima.org/images/partners/zeetron.PNG", alt: "Zeetron", name: "Zeetron", type: "Technology Partner", mou: "https://www.piet.poornima.org/mou/Zeetron_MoU.pdf" },
       
    ],
    publishing: [         
        { id: 1, src: "https://www.piet.poornima.org/images/partners/Aerophantom.PNG", alt: "Aerophantom", name: "Aerophantom", type: "Technology Partner", mou: "https://www.piet.poornima.org/PIET_NAAC_SSR/Our_partners/NAAC_MOU/Aerophantum.pdf" },
        { id: 8, src: "https://www.piet.poornima.org/images/partners/Aippublishing.png", alt: "AIP Publishing", name: "AIP Publishing", type: "Publishing Partner" },
        { id: 33, src: "https://www.piet.poornima.org/images/partners/Codingninjas.jpg", alt: "Coding Ninja", name: "Coding Ninja", type: "Technology Partner", mou: "https://www.piet.poornima.org/PIET_NAAC_SSR/Our_partners/NAAC_MOU/CODING_NINJAS.pdf" },
        { id: 46, src: "https://www.piet.poornima.org/images/partners/Tech_matrix.jpg", alt: "Tech Matrix", name: "Tech Matric", type: "Technology Partner", mou: "https://www.piet.poornima.org/PIET_NAAC_SSR/Our_partners/NAAC_MOU/Tech_Matrix.pdf" },
        { id: 9, src: "https://www.piet.poornima.org/images/partners/geekster.png", alt: "Geekster", name: "Geekster", type: "Training Partner" },
        { id: 12, src: "https://www.piet.poornima.org/images/partners/grras.jpg", alt: "GRRAS", name: "GRRAS", type: "Training Partner", mou: "https://www.piet.poornima.org/PIET_NAAC_SSR/Our_partners/NAAC_MOU/Grras.pdf" },
        { id: 13, src: "https://www.piet.poornima.org/images/partners/karytech.png", alt: "KaryTech", name: "KaryTech", type: "Training Partner", mou: "https://www.piet.poornima.org/PIET_NAAC_SSR/Our_partners/NAAC_MOU/Karyteck.pdf" },
        { id: 15, src: "https://www.piet.poornima.org/images/partners/Navriti.png", alt: "Navriti", name: "Navriti", type: "Training Partner", mou: "https://www.piet.poornima.org/PIET_NAAC_SSR/Our_partners/NAAC_MOU/Navriti.pdf" },
        { id: 16, src: "https://www.piet.poornima.org/images/partners/robofi-logo.jpg", alt: "Robofi", name: "Robofi", type: "Training Partner", mou: "https://www.piet.poornima.org/PIET_NAAC_SSR/Our_partners/NAAC_MOU/ROBOFI.pdf" },
        { id: 17, src: "https://www.piet.poornima.org/images/partners/sincgrid.png", alt: "Sincgrid", name: "Sincgrid", type: "Training Partner", mou: "https://www.piet.poornima.org/PIET_NAAC_SSR/Our_partners/NAAC_MOU/Sincgrid.pdf" },
        { id: 18, src: "https://www.piet.poornima.org/images/partners/upflairs.PNG", alt: "Upflairs", name: "Upflairs", type: "Training Partner", mou: "https://www.piet.poornima.org/PIET_NAAC_SSR/Our_partners/NAAC_MOU/Upflairs.pdf" },
        { id: 32, src: "https://www.piet.poornima.org/images/partners/celebal.png", alt: "Celebal", name: "Celebal", type: "Placement Partner", mou: "https://www.piet.poornima.org/PIET_NAAC_SSR/Our_partners/NAAC_MOU/CELEBAL.pdf" },
       
  

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
