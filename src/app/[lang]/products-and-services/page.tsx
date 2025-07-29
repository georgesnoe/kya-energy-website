import Image from "next/image";
import { getTranslation } from "@/lib/get-translation";
import type { Locale } from "@/lib/i18n.config";
import styles from "@/styles/products-and-services.module.css";
import PromotionalCarousel from "./PromotionalCarousel";
import ProductAccordion from "./ProductAccordion";
import { MotionDiv } from "./ClientMotion"; // Corrected import
import { RiCoinsLine } from "react-icons/ri";
import { FiClock } from "react-icons/fi";
import { LuInbox } from "react-icons/lu";


export default async function ProductsAndServicesPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const t = await getTranslation(lang);

  const products = [
    {
      label: "KYA-SoP",
      image: "/products/kya-sop.png",
      description: t.products["kya-sop-description"],
    },
    {
      label: "KYA-SolDesign",
      image: "/products/kya-sol-design.png",
      description: t.products["kya-soldesign-description"],
    },
    {
      label: "KYA-EcoLabel",
      image: "/products/kya-eco-label.png",
      description: t.products["kya-ecolabel-description"],
    },
    {
      label: "KYA-FlexyControl",
      image: "/products/kya-flexy-control.png",
      description: t.products["kya-flexycontrol-description"],
    },
  ];

  const services = [
    {
      title: t.services["installation-title"],
      description: t.services["installation-description"],
      image: "/products/installation.png", // Placeholder, replace with actual service image
    },
    {
      title: t.services["audit-title"],
      description: t.services["audit-description"],
      image: "/products/slks.png", // Placeholder
    },
    {
      title: t.services["training-title"],
      description: t.services["training-description"],
      image: "/products/rdc.png", // Placeholder
    },
    {
      title: t.services["rental-title"],
      description: t.services["rental-description"],
      image: "/products/easc.png", // Placeholder
    },
  ];

  return (
    <main>
      {/* 1. Promotional Offers Section */}
      <section className={styles.section}>
        <h2 className={styles.section_title}>{t.products["promotional-offers"]}</h2>
        <div className={styles.promo_container}>
          <PromotionalCarousel />
          <button className={styles.promo_button}>{t.services["learn-more"]}</button>
        </div>
      </section>

      {/* 2. Product Lines Section */}
      <section className={styles.section}>
        <div className="section-title">
          <h2 className={styles.section_title}>{t.products["product-range"]}</h2>
          <p className={styles.section_subtitle}>{t.products["product-subtitle"]}</p>
        </div>
  
        <ProductAccordion products={products} />
        <div className={styles.catalogue_banner}>
          <p className={styles.catalogue_text}>{t.products["catalog-prompt"]}</p>
          <a href="#" className={styles.catalogue_link}>
            {t.products["see-more"]}
          </a>
        </div>
      </section>

      {/* 3. Services Section */}
      <section className={styles.section}>
        <h2 className={styles.section_title}>{t.services.title}</h2>
        <p className={styles.section_subtitle}>{t.services.subtitle}</p>
        <div className={styles.services_grid}>
          {services.map((service, index) => (
            <MotionDiv
              key={index}
              className={styles.service_card}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.service_card_image_container}>
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  className={styles.service_card_image}
                />
              </div>
              <div className={styles.service_card_content}>
                <h3 className={styles.service_card_title}>{service.title}</h3>
                <p className={styles.service_card_description}>{service.description}</p>
                <a href="#" className={styles.service_card_cta}>
                  {t.services["learn-more"]}
                </a>
              </div>
            </MotionDiv>
          ))}
        </div>
      </section>

      {/* 4. Financing Section */}
      <section className={styles.section}>
        <h2 className={styles.section_title}>{t.financing["title"]}</h2>
        <p className={styles.section_subtitle}>{t.financing["subtitle"]}</p>
        <div className={styles.financing_grid}>
          <MotionDiv
            className={styles.financing_card}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          > 
            <div className={`${styles.iconWrapper} ${styles.orang}`}>
              <RiCoinsLine className={styles.icon}/>
            </div>
            <div className={`${styles.financing_card_value} ${styles.orange}`}>15%</div>
            <div className={styles.financing_card_label}>{t.financing["down-payment"]}</div>
          </MotionDiv>
          <MotionDiv
            className={styles.financing_card}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className={`${styles.iconWrapper} ${styles.gren}`}>
              <FiClock className={styles.icon}/>
            </div>
            <div className={`${styles.financing_card_value} ${styles.green}`}>10 ans</div>
            <div className={styles.financing_card_label}>{t.financing["repayment-period"]}</div>
          </MotionDiv>
          <MotionDiv
            className={styles.financing_card}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className={`${styles.iconWrapper} ${styles.ble}`}>
              <LuInbox className={styles.icon}/>
            </div>
            <div className={`${styles.financing_card_value} ${styles.blue}`}>100%</div>
            <div className={styles.financing_card_label}>{t.financing["maintenance-included"]}</div>
          </MotionDiv>
        </div>
      </section>
    </main>
  );
}