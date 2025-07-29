"use client";

import { FC, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";

interface Props {
  t: {
    hero: {
      title: string;
      subtitle: string;
      searchPlaceholder: string;
    };
    categories: {
      general: string;
      maintenance: string;
      financing: string;
      installation: string;
    };
    questions: {
      question: string;
      answer: string;
    }[];
  };
}

const FaqClientPage: FC<Props> = ({ t }) => {
  const [activeCategory, setActiveCategory] = useState("general");
  const [searchTerm, setSearchTerm] = useState("");
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);

  const filteredQuestions = t.questions.filter((q) =>
    q.question.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const categories = [
    { id: "general", label: t.categories.general },
    { id: "maintenance", label: t.categories.maintenance },
    { id: "financing", label: t.categories.financing },
    { id: "installation", label: t.categories.installation },
  ];

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-linear-to-r  from-[#1e9983] from-[19%] to-[#197867] to-[100%] text-white py-30 px-4 text-center relative overflow-hidden">
        <motion.div className="z-10 absolute w-full h-max -bottom-40 overflow-hidden left-0 flex flex-col justify-end items-start">
          <p className="faq-effect font-black font-facebook-sans select-none text-shadow[100px_0_1000px_#fff] text-[25rem] container mx-auto flex justify-between items-center">
            <span>faq</span>
            <span className="skew-6 rotate-12">?</span>
          </p>
          {/* <div className="h-[30%] absolute w-full bottom-[40%] bg-linear-to-r  from-[#1e9983a0] from-[19%] to-[#197867a0] to-[100%]"></div> */}
        </motion.div>
        <motion.h1
          className="z-20 container relative mx-auto text-6xl md:text-8xl font-black mb-4 w-full lowercase text-left"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}>
          {t.hero.title}
        </motion.h1>
        <motion.p
          className="z-20 relative text-2xl md:text-4xl mb-8 font-semibold"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }} dangerouslySetInnerHTML={{ __html: t.hero.subtitle }} />
        <motion.div
          className="z-20 absolute -bottom-4 left-1/2 -translate-x-1/2 w-[90%] sm:w-xl bg-kya-white rounded-full shadow-lg outline-none lg:w-2xl mx-auto"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}>
          <FaSearch className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder={t.hero.searchPlaceholder}
            className="w-full py-3 pl-12 pr-4 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-kya-orange"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </motion.div>
      </section>

      {/* FAQ Content Section */}
      <section className="py-20 px-4 container mx-auto">
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`py-2 px-6 rounded-full font-bold transition-colors ${activeCategory === cat.id
                ? "bg-kya-green text-white"
                : "bg-gray-200 text-gray-700 hover:bg-kya-green/80 hover:text-white dark:bg-gray-700 dark:text-gray-300"
                }`}>
              {cat.label}
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            {filteredQuestions
              .slice(0, Math.ceil(filteredQuestions.length / 2))
              .map((q, i) => (
                <AccordionItem
                  key={i}
                  question={q.question}
                  answer={q.answer}
                  isOpen={openQuestion === i}
                  onClick={() => setOpenQuestion(openQuestion === i ? null : i)}
                />
              ))}
          </div>
          <div className="space-y-4">
            {filteredQuestions
              .slice(Math.ceil(filteredQuestions.length / 2))
              .map((q, i) => {
                const globalIndex = i + Math.ceil(filteredQuestions.length / 2);
                return (
                  <AccordionItem
                    key={globalIndex}
                    question={q.question}
                    answer={q.answer}
                    isOpen={openQuestion === globalIndex}
                    onClick={() =>
                      setOpenQuestion(
                        openQuestion === globalIndex ? null : globalIndex,
                      )
                    }
                  />
                );
              })}
          </div>
        </div>
      </section>
    </div>
  );
};

const AccordionItem: FC<{
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center p-4 gap-1 text-left font-bold text-kya-coffee dark:text-kya-white">
        <span>{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}>
          <FaChevronDown />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden">
            <div className="p-4 pt-0 text-gray-600 dark:text-gray-300 font-medium">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FaqClientPage;
