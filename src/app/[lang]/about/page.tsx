// /app/your-page-directory/page.tsx

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useAnimate, useInView, stagger, AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

// Icons
import { FaGlobeAfrica, FaLeaf, FaSolarPanel } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { LuAward, LuCrown, LuGlobe, LuGroup, LuLeaf, LuLightbulb, LuRocket, LuScale, LuSchool, LuShield, LuTabletSmartphone, LuTrophy } from "react-icons/lu";
import { RiArrowLeftLine, RiArrowRightLine, RiOrganizationChart, RiShakeHandsLine } from "react-icons/ri";

export default function Page() {
    // --- Carousel State ---
    const imageUrls = [undefined, undefined, undefined];
    const [index, setIndex] = useState(0);

    // --- Animation Hooks ---
    const [visionScope, animateVision] = useAnimate();
    const [founderScope, animateFounder] = useAnimate();
    const [teamScope, animateTeam] = useAnimate();
    const [valuesScope, animateValues] = useAnimate();
    const [impactScope, animateImpact] = useAnimate();
    const [ctaScope, animateCta] = useAnimate();

    const isVisionInView = useInView(visionScope, { once: true, amount: 0.2 });
    const isFounderInView = useInView(founderScope, { once: true, amount: 0.2 });
    const isTeamInView = useInView(teamScope, { once: true, amount: 0.1 });
    const isValuesInView = useInView(valuesScope, { once: true, amount: 0.2 });
    const isImpactInView = useInView(impactScope, { once: true, amount: 0.2 });
    const isCtaInView = useInView(ctaScope, { once: true, amount: 0.3 });

    // --- Carousel Logic ---
    // This is a more robust way to handle the timer, preventing multiple timers from running.
    useEffect(() => {
        const timer = setTimeout(() => {
            setIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
        }, 5000); // Change image every 5 seconds

        // Clean up the timer when the component unmounts or index changes
        return () => clearTimeout(timer);
    }, [index, imageUrls.length]);

    const handlePrev = () => {
        setIndex((prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length);
    };

    const handleNext = () => {
        setIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    };

    // --- Animation Effects ---
    useEffect(() => {
        if (isVisionInView) animateVision([
            [".section-title", { opacity: [0, 1], y: [20, 0] }, { duration: 0.6 }],
            [".vision-card", { opacity: [0, 1], y: [30, 0] }, { duration: 0.5, delay: stagger(0.15), at: "-0.2" }]
        ])
    }, [isVisionInView, animateVision]);

    useEffect(() => {
        if (isFounderInView) animateFounder([
            [".founder-image", { opacity: [0, 1], x: [-30, 0] }, { duration: 0.7 }],
            [".founder-content", { opacity: [0, 1], x: [30, 0] }, { duration: 0.7, at: "<", delay: stagger(0.1) }]
        ])
    }, [isFounderInView, animateFounder]);

    useEffect(() => {
        if (isTeamInView) animateTeam([
            [".section-title", { opacity: [0, 1], y: [20, 0] }, { duration: 0.6 }],
            [".team-card", { opacity: [0, 1], scale: [0.9, 1] }, { duration: 0.5, delay: stagger(0.1), at: "-0.2" }]
        ])
    }, [isTeamInView, animateTeam]);

    useEffect(() => {
        if (isValuesInView) animateValues([
            [".section-title", { opacity: [0, 1], y: [20, 0] }, { duration: 0.6 }],
            [".value-card", { opacity: [0, 1], y: [30, 0] }, { duration: 0.5, delay: stagger(0.1), at: "-0.2" }]
        ])
    }, [isValuesInView, animateValues]);

    useEffect(() => {
        if (isImpactInView) animateImpact([
            [".section-title", { opacity: [0, 1], y: [20, 0] }, { duration: 0.6 }],
            [".impact-card", { opacity: [0, 1], y: [30, 0] }, { duration: 0.5, delay: stagger(0.1), at: "-0.2" }]
        ])
    }, [isImpactInView, animateImpact]);

    useEffect(() => { if (isCtaInView) animateCta("h1, div", { opacity: [0, 1], y: [30, 0] }, { duration: 0.6, delay: stagger(0.2) }) }, [isCtaInView, animateCta]);

    // Change title
    useEffect(() => {
        document.title = "Notre équipe - KYA Energy Group";
    }, []);

    return (
        <>
            <div>
                {/* Carousel */}
                <div className="relative h-[calc(100vh-6rem)]">
                    {/* Image with AnimatePresence for smooth transitions */}
                    <AnimatePresence>
                        <motion.img
                            key={index}
                            src={imageUrls[index]}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            alt="Team photo"
                            className="w-full h-full object-cover absolute inset-0"
                        />
                    </AnimatePresence>
                    {/* Text Overlay */}
                    <div className="absolute top-0 left-0 z-10 w-full h-full bg-gradient-to-r from-[#05df72a0] to-[#fffa]/20 flex flex-col items-center justify-center p-4">
                        <div className="text-white w-[90%] md:w-[70%] lg:w-1/2 space-y-8">
                            <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-2xl md:text-4xl lg:text-6xl font-bold">Notre Équipe<br />d&apos;Excellence</motion.h1>
                            <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-lg md:text-xl lg:text-2xl">Découvrez les experts qui façonnent l&apos;avenir énergétique de l&apos;Afrique avec passion, innovation et professionnalisme.</motion.p>
                        </div>
                        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex justify-between items-center w-[90%] md:w-[70%] lg:w-1/2 mt-4 md:mt-16 lg:mt-32">
                            {/* Indicators */}
                            <div className="flex items-center justify-center w-max gap-4">
                                {imageUrls.map((_, i) => (
                                    <div key={i} className={`w-4 h-4 rounded-full transition-all duration-300 ${index === i ? "bg-white scale-150" : "bg-green-300"}`}></div>
                                ))}
                            </div>
                            {/* Buttons */}
                            <div className="text-4xl text-green-700 flex items-center justify-center w-max gap-4 *:p-4 *:bg-white/60 *:hover:bg-green-300 *:rounded-full *:cursor-pointer *:transition-colors">
                                <button onClick={handlePrev}><RiArrowLeftLine /></button>
                                <button onClick={handleNext}><RiArrowRightLine /></button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Notre vision */}
            <div ref={visionScope} className="container mx-auto px-4 my-32">
                <div className="section-title opacity-0 px-4 lg:px-48">
                    <div className="flex items-center justify-center my-4">
                        <p className="w-max rounded-full px-4 py-2 bg-green-700 text-white font-bold text-sm">Notre vision</p>
                    </div>
                    <h2 className="text-center text-4xl font-bold w-full">Transformer l&apos;Afrique par l&apos;Énergie Solaire</h2>
                    <div className="flex justify-center items-center my-4">
                        <div className="h-1 w-32 bg-green-300"></div>
                    </div>
                    <p className="text-center text-xl">KYA-Energy Group s&apos;engage dans la révolution énergétique africaine avec une ambition claire: devenir un leader incontournable des énergies renouvelables sur le continent.</p>
                </div>
                <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {[
                        { icon: <LuGlobe />, title: "Leadership Continental", desc: "Ambition de figurer parmi les 10 leaders de l'industrie énergétique en Afrique" },
                        { icon: <LuTabletSmartphone />, title: "Innovation Technologique", desc: "Développement de solutions solaires de pointe adaptées au contexte africain" },
                        { icon: <LuTrophy />, title: "Impact Durable", desc: "Extension de notre influence pour un avenir énergétique durable en Afrique" }
                    ].map((value, index) => (
                        <div key={index} className="vision-card opacity-0 text-center flex flex-col items-center gap-4 p-8 bg-white rounded-xl shadow hover:shadow-xl hover:scale-105 transition-all duration-300">
                            <div className="w-max p-4 bg-green-200 text-green-700 rounded-full text-3xl">{value.icon}</div>
                            <h3 className="font-bold text-2xl">{value.title}</h3>
                            <p className="text-xl text-gray-500">{value.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Fondateur */}
            <div ref={founderScope} className="container mx-auto px-4 my-32 flex flex-col lg:flex-row gap-8 items-center overflow-hidden">
                {/* Image */}
                <div className="founder-image opacity-0 w-max relative">
                    <div className="w-max rounded-xl overflow-hidden shadow-xl">
                        <Image width={296} height={361} src="/team/azoumah.avif" alt="Professeur Yao K. AZOUMAH" className="object-cover" />
                    </div>
                    <div className="flex items-center justify-center gap-2 absolute -top-4 right-3 px-4 py-2 rounded-full font-bold text-white bg-orange-400">
                        <p className="text-xl"><LuCrown /></p>
                        <p>Fondateur et CEO</p>
                    </div>
                </div>
                {/* Description */}
                <div className="flex flex-col gap-8">
                    <h2 className="founder-content opacity-0 font-bold text-4xl text-center lg:text-left">Prof. Yao K. AZOUMAH</h2>
                    <p className="founder-content opacity-0 text-green-600 text-2xl text-center lg:text-left font-medium">Fondateur et Directeur Général</p>
                    <p className="founder-content opacity-0 text-xl">Visionnaire et pionnier de l&apos;énergie renouvelable en Afrique, le Professeur Yao K. AZOUMAH combine expertise académique et vision entrepreneuriale pour révolutionner le secteur énergétique africain.</p>
                    <div className="space-y-8">
                        {[
                            { icon: <LuSchool />, title: "Professeur d'université", desc: "Expert reconnu en énergies renouvelables" },
                            { icon: <LuLightbulb />, title: "Innovateur", desc: "Pionnier des solutions solaires africaines" },
                            { icon: <LuAward />, title: "Leader Visionnaire", desc: "Architecte de l'avenir énergétique" }
                        ].map((value, index) => (
                            <div key={index} className="founder-content opacity-0">
                                <div className="flex items-center gap-4 p-8 bg-linear-to-r from-[#87CEEB7f] to-[#7BF1A87F] shadow hover:shadow-xl transition-all duration-300 rounded-xl">
                                    <div className="text-2xl text-kya-white w-max p-4 bg-kya-green rounded-full">{value.icon}</div>
                                    <div className="space-y-2">
                                        <h3 className="font-bold text-2xl text-kya-green">{value.title}</h3>
                                        <p className="text-xl">{value.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Equipe */}
            <div ref={teamScope} className="bg-gradient-to-tr from-orange-200 to-green-200 py-32" id="equipe">
                <div className="container mx-auto px-4">
                    <div className="section-title opacity-0 px-4 lg:px-48">
                        <div className="flex items-center justify-center my-4">
                            <p className="w-max rounded-full px-4 py-2 bg-green-700 text-white font-bold text-sm">Leadership</p>
                        </div>
                        <h2 className="text-center text-4xl font-bold w-full">Comité de Direction</h2>
                        <div className="flex justify-center items-center my-4">
                            <div className="h-1 w-32 bg-green-300"></div>
                        </div>
                        <p className="text-center text-xl">Une équipe d&apos;experts chevronnés avec plus de 15 ans d&apos;expérience collective, unis par une vision commune d&apos;excellence et d&apos;innovation.</p>
                    </div>
                    <div className="grid grid-cols-7">
                        {[
                            { img: "/team/azoumah.avif", name: "Prof. Yao K. AZOUMAH", role: "Directeur Général" },
                            { img: "/team/lawson.avif", name: "M. Yves LAWSON", role: "Directeur Général Adjoint" },
                            { img: "/team/tchassama.avif", name: "M. TCHASSAMA", role: "Directeur Technique et des Opérations" },
                            { img: "/team/shikpe.avif", name: "Mme Sylvie SHIKPE", role: "Directrice Commerciale & Marketing" },
                            { img: "/team/eklou.avif", name: "M. Yaovi V. EKLOU", role: "Directeur des Ressources Humaines" },
                            { img: "/team/fousseni.avif", name: "M. Mohamed FOUSSENI", role: "Directeur Financier & Comptable" },
                            { img: "/team/agbehadji.avif", name: "Mme Massan AGBEHADJI", role: "Assistante de Direction" }
                        ].map((value, index) => (
                            <div key={index} className="team-member
                            nth-[4]:scale-105 nth-[2]:scale-95 nth-[6]:scale-95 nth-[1]:scale-90 nth-[7]:scale-90 flex flex-col bg-gray-100 rounded-xl shadow hover:shadow-xl transition-all duration-300 overflow-hidden hover:scale-110">
                                
                                    <Image width={296} height={361} src={value.img} alt={`Photo de ${value.name}`} className="object-contain w-full" />
                                
                                <div className="text-center p-4 bg-green-50">
                                    <h3 className="font-bold text-xl">{value.name}</h3>
                                    <p className="text-lg text-gray-600">{value.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ... other sections with similar animation patterns ... */}

            <div ref={valuesScope} className="container mx-auto px-4 my-32">
                <div className="section-title opacity-0 px-4 lg:px-48">
                    <div className="flex items-center justify-center my-4">
                        <p className="w-max rounded-full px-4 py-2 bg-green-700 text-white font-bold text-sm">Nos valeurs</p>
                    </div>
                    <h2 className="text-center text-4xl font-bold w-full">Les Piliers de notre Excellence</h2>
                    <div className="flex justify-center items-center my-4">
                        <div className="h-1 w-32 bg-green-300"></div>
                    </div>
                    <p className="text-center text-xl">Des principes fondamentaux qui guident chacune de nos actions et décisions.</p>
                </div>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { icon: <LuAward />, title: "Excellence", desc: "Professionnalisme et rigueur dans chaque projet" },
                        { icon: <LuShield />, title: "Intégrité", desc: "Transparence et honnêteté en toutes circonstances" },
                        { icon: <LuRocket />, title: "Innovation", desc: "Créativité et solutions avant-gardistes" },
                        { icon: <LuGroup />, title: "Collaboration", desc: "Esprit d'équipe et synergie collective" },
                        { icon: <LuLeaf />, title: "Durabilité", desc: "Responsabilité environnementale et sociale" },
                        { icon: <LuScale />, title: "Équité", desc: "Justice et fairness dans toutes nos relations" }
                    ].map((value, index) => (
                        <div key={index} className="value-card opacity-0 text-center flex flex-col items-center gap-4 p-8 bg-white rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div className="w-max p-4 bg-green-200 text-green-700 rounded-full text-3xl">{value.icon}</div>
                            <h3 className="font-bold text-2xl">{value.title}</h3>
                            <p className="text-xl text-gray-500">{value.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div ref={impactScope} className="bg-gray-200 py-32">
                <div className="container mx-auto px-4">
                    <div className="section-title opacity-0 px-4 lg:px-48">
                        <div className="flex items-center justify-center my-4">
                            <p className="w-max rounded-full px-4 py-2 bg-green-700 text-white font-bold text-sm">Notre impact</p>
                        </div>
                        <h2 className="text-center text-4xl font-bold w-full">Résultats Concrets</h2>
                        <div className="flex justify-center items-center my-4">
                            <div className="h-1 w-32 bg-green-300"></div>
                        </div>
                        <p className="text-center text-xl">Des chiffres qui témoignent de notre engagement et de notre impact positif.</p>
                    </div>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: <FaSolarPanel />, stat: "1,000+", title: "Installations Solaires", desc: "Systèmes déployés avec succès" },
                            { icon: <FaHouse />, stat: "50,000+", title: "Foyers Alimentés", desc: "Familles bénéficiant d'énergie propre" },
                            { icon: <FaLeaf />, stat: "25,000T", title: "CO₂ Évitées", desc: "Impact environnemental positif" },
                            { icon: <FaGlobeAfrica />, stat: "15", title: "Pays d'Intervention", desc: "Présence continentale active" }
                        ].map((value, index) => (
                            <div key={index} className="impact-card opacity-0 text-center flex flex-col items-center gap-2 p-8 bg-white rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                <div className="w-max p-4 bg-green-200 text-green-700 rounded-full text-3xl">{value.icon}</div>
                                <p className="font-bold text-4xl py-2">{value.stat}</p>
                                <h3 className="text-lg font-semibold">{value.title}</h3>
                                <p className="text-sm text-gray-500">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div ref={ctaScope} className="bg-gray-100 py-32">
                <div className="container mx-auto px-4">
                    <div className="px-4 lg:px-48">
                        <h2 className="text-center text-4xl font-bold w-full">Rejoignez l&apos;Aventure KYA-Energy</h2>
                        <div className="flex justify-center items-center my-8">
                            <p className="text-center text-xl">Découvrez nos opportunités et participez à la révolution énergétique africaine</p>
                        </div>
                        <div className="my-16">
                            <div className="flex flex-wrap items-center justify-center gap-8 my-8 text-white font-semibold">
                                <Link href="#equipe">
                                    <div className="w-max px-6 py-4 gap-3 flex items-center justify-center rounded-full bg-orange-400 hover:bg-orange-500 transition-colors duration-300">
                                        <p className="text-2xl"><RiOrganizationChart /></p>
                                        <p>Voir l&apos;organigramme</p>
                                    </div>
                                </Link>
                                <Link href="">
                                    <div className="w-max px-6 py-4 gap-3 flex items-center justify-center rounded-full bg-green-400 hover:bg-green-500 transition-colors duration-300">
                                        <p className="text-2xl"><RiShakeHandsLine /></p>
                                        <p>Nous rejoindre</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
