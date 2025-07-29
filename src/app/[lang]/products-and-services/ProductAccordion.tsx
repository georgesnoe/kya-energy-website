"use client";

import { useState } from "react";
import Image from "next/image";
import { FaPlus, FaMinus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import styles from "@/styles/products-and-services.module.css";

type Product = {
  label: string;
  image: string;
  description: string;
};

type ProductAccordionProps = {
  products: Product[];
};

export default function ProductAccordion({ products }: ProductAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.accordion}>
      {products.map((product, index) => (
        <motion.div
          key={index}
          className={styles.accordion_item}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div
            className={styles.accordion_header}
            onClick={() => toggleAccordion(index)}
          >
            <div className={styles.accordion_header_content}>
              <Image
                src={product.image}
                alt={product.label}
                width={120}
                height={120}
                className={styles.accordion_image}
              />
              <p className={styles.accordion_description}>{product.description}</p>
            </div>
            <div className={styles.accordion_icon}>
              {openIndex === index ? <FaMinus /> : <FaPlus />}
            </div>
          </div>
          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                className={styles.accordion_content}
                key="content"
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { opacity: 1, height: "auto", maxHeight: "500px" },
                  collapsed: { opacity: 0, height: 0, maxHeight: "0px" },
                }}
                transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
              >
                <div className={styles.accordion_content_inner}>
                  {/* You can add more detailed content here if needed */}
                  <p>
                    More detailed information about {product.label} can be placed here. 
                    This section expands to show more content, as requested by the accordion functionality.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}
