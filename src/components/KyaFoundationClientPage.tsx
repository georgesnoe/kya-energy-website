"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";
import {
  FaDownload,
  FaGlobe,
  FaHeart,
  FaPlay,
  FaRocket,
} from "react-icons/fa6";
import { FiTarget } from "react-icons/fi";

interface Props {
  t: {
    hero: {
      title: string;
      description: string;
      tagline: string;
      cta: string;
      stats: {
        employees: string;
        mission: string;
        experience: string;
      };
    };
    actions: {
      title: string;
      items: string[];
    };
    objectives: {
      title: string;
      items: string[];
    };
    domains: {
      title: string;
      items: {
        title: string;
        description: string;
      }[];
    };
    video: {
      title: string;
    };
    gallery: {
      title: string;
    };
    sponsors: {
      title: string;
    };
  };
  interventionDomains: {
    imageSrc: string;
  }[];
  sponsors: {
    name: string;
    logo: string;
    description: string;
  }[];
}

const KyaFoundationClientPage: FC<Props> = ({
  t,
  interventionDomains,
  sponsors,
}) => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-screen text-white">
        <video
          // src="/kya-foundation/kya-foundation-video-1.mp4"
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline>
          <source
            src="/kya-foundation/kya-foundation-video-1.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black/60" />
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="bg-kya-green inline-block px-4 py-1 rounded-full text-sm mb-4">
            FONDATION KYA
          </motion.div>
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}>
            {t.hero.title}
          </motion.h1>
          <motion.p
            className="max-w-3xl mx-auto mb-6"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}>
            {t.hero.description}
          </motion.p>
          <motion.div
            className="flex items-center gap-2 text-kya-yellow mb-8"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}>
            <FaHeart />
            <span>{t.hero.tagline}</span>
          </motion.div>
          <motion.div
            className="flex flex-col md:flex-row items-center gap-4"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8 }}>
            <button className="flex items-center gap-2 bg-kya-green py-3 px-6 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
              <FaPlay />
              <span>Regarder la vidéo</span>
            </button>
            <button className="flex items-center gap-2 border border-kya-green py-3 px-6 rounded-lg font-semibold hover:bg-kya-green transition-colors">
              <FaDownload />
              <span>{t.hero.cta}</span>
            </button>
          </motion.div>
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-4xl"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1 }}>
            <div className="hidden md:flex justify-around items-center bg-white/20 backdrop-blur-sm p-6 rounded-lg">
              <div className="text-center">
                <p className="text-4xl font-bold">500+</p>
                <p>{t.hero.stats.employees}</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold">
                  <FaGlobe />
                </p>
                <p>{t.hero.stats.mission}</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold">10</p>
                <p>{t.hero.stats.experience}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Actions & Objectives Section */}
      <section className="py-20 px-4 container mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-kya-green/20 p-3 rounded-full">
                <FaRocket className="text-kya-green text-2xl" />
              </div>
              <h2 className="text-3xl font-bold text-kya-coffee dark:text-kya-white">
                {t.actions.title}
              </h2>
            </div>
            <ul className="space-y-3">
              {t.actions.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-kya-green font-bold mt-1">&gt;</span>
                  <span className="dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-kya-orange/20 p-3 rounded-full">
                <FiTarget className="text-kya-orange text-2xl" />
              </div>
              <h2 className="text-3xl font-bold text-kya-coffee dark:text-kya-white">
                {t.objectives.title}
              </h2>
            </div>
            <ul className="space-y-3">
              {t.objectives.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-kya-orange font-bold mt-1">&gt;</span>
                  <span className="dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Intervention Domains Section */}
      <section className="py-20 px-4 container mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-kya-coffee dark:text-kya-white"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}>
          {t.domains.title}
        </motion.h2>
        <div className="space-y-12">
          {t.domains.items.map((domain, index) => (
            <motion.div
              key={index}
              className="grid md:grid-cols-2 gap-12 items-center"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}>
              <div
                className={`w-full h-80 relative ${
                  index % 2 === 1 ? "md:order-last" : ""
                }`}>
                <Image
                  src={interventionDomains[index].imageSrc}
                  alt={domain.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-kya-orange">
                  {domain.title}
                </h3>
                <p className="text-lg dark:text-gray-300">
                  {domain.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Video Presentation Section */}
      <section className="py-20 px-4 container mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold text-center mb-8 text-kya-coffee dark:text-kya-white"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}>
          {t.video.title}
        </motion.h2>
        <motion.div
          className="relative max-w-4xl mx-auto shadow-2xl rounded-lg overflow-hidden"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}>
          <video controls className="w-full">
            <source
              src="/kya-foundation/kya-foundation-video-1.mp4"
              type="video/mp4"
            />
          </video>
        </motion.div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 container mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-kya-coffee dark:text-kya-white"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}>
          {t.gallery.title}
        </motion.h2>
        <motion.div
          className="relative w-full h-[600px] shadow-lg rounded-lg overflow-hidden"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}>
          <Image
            src="/kya-foundation/image-4.png"
            alt="Gallery main image"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute bottom-4 left-4 bg-black/50 text-white p-4 rounded-lg">
            <p className="font-bold">Soirée caritative de la fondation KYA</p>
            <p className="text-sm">Mai 2024 - Lomé, Togo</p>
          </div>
        </motion.div>
      </section>

      {/* Sponsors Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 text-kya-coffee dark:text-kya-white"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}>
            {t.sponsors.title}
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {sponsors.map((sponsor, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}>
                <div className="w-full h-32 bg-kya-yellow flex items-center justify-center p-4">
                  <div className="w-full h-full relative">
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <p className="dark:text-gray-300">{sponsor.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default KyaFoundationClientPage;
