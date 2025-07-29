"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectCreative } from "swiper/modules";
import styles from "@/styles/products-and-services.module.css";
import PromoModal from "./PromoModal";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-creative";

type Promo = {
  image: string;
  title: string;
};

const promotions: Promo[] = [
  {
    image: "/products/pub.png",
    title: "Special Offer on KYA-SoP Systems",
  },
  {
    image: "/products/kya-sop.png",
    title: "Discover our KYA-SoP",
  },
  {
    image: "/products/kya-sol-design.png",
    title: "Free Solar Design Consultation",
  },
];

export default function PromotionalCarousel() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPromo, setSelectedPromo] = useState<Promo | null>(null);

  const handleOpenModal = (promo: Promo) => {
    setSelectedPromo(promo);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPromo(null);
  };

  return (
    <>
      <div className={styles.promo_carousel}>
        <Swiper
          modules={[Autoplay, Navigation, EffectCreative]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: `.${styles.swiper_button_next}`,
            prevEl: `.${styles.swiper_button_prev}`,
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          effect="creative"
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
        >
          {promotions.map((promo, index) => (
            <SwiperSlide
              key={index}
              className={styles.promo_slide}
              onClick={() => handleOpenModal(promo)}
            >
              <Image
                src={promo.image}
                alt={promo.title}
                width={800}
                height={400}
                className={styles.promo_image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles.swiper_button_prev} />
        <div className={styles.swiper_button_next} />
      </div>
      <PromoModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        promo={selectedPromo}
      />
    </>
  );
}