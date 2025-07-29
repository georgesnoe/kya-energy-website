import { getTranslation } from "@/lib/get-translation";
import { Locale } from "@/lib/i18n.config";
import { FC } from "react";
import KyaFoundationClientPage from "@/components/KyaFoundationClientPage";

interface Props {
  params: {
    lang: Locale;
  };
}

const KyaFoundationPage: FC<Props> = async ({ params: { lang } }) => {
  const t = await getTranslation(lang);
  const foundationT = t.kyaFoundation;

  const interventionDomains = [
    {
      imageSrc: "/kya-foundation/image-1.png",
    },
    {
      imageSrc: "/kya-foundation/image-2.png",
    },
    {
      imageSrc: "/kya-foundation/image-3.png",
    },
  ];

  const sponsors = [
    {
      name: "ASECNA",
      logo: "/sponsors/asecna.png",
      description:
        "L’ASECNA est une agence panafricaine qui assure la sécurité de la navigation aérienne dans 17 pays africains.",
    },
    {
      name: "ONOMO",
      logo: "/sponsors/onomo.png",
      description:
        "ONOMO Hôtel Lomé offre un cadre moderne et convivial au cœur de la capitale, idéal pour affaires et loisirs.",
    },
    {
      name: "CETEF",
      logo: "/sponsors/cetef.png",
      description:
        "Le CETEF Togo 2000 est le principal centre d'expositions du Togo, dédié aux événements économiques, culturels...",
    },
    {
      name: "Moov",
      logo: "/sponsors/moov.avif",
      description:
        "Moov Africa Togo est un leader en téléphonie mobile, internet 4G et services financiers.",
    },
  ];

  return (
    <KyaFoundationClientPage
      t={foundationT}
      interventionDomains={interventionDomains}
      sponsors={sponsors}
    />
  );
};

export default KyaFoundationPage;
