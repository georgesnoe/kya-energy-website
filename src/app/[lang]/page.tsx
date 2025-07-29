import { getTranslation } from "@/lib/get-translation";
import { Locale } from "@/lib/i18n.config";
import Link from "next/link";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import {
  FaArrowRight,
  FaAward,
  FaCalendar,
  FaFaceSmile,
  FaFlask,
  FaGlobe,
  FaHeadphones,
  FaLeaf,
  FaPeopleGroup,
  FaPooStorm,
  FaShield,
  FaSolarPanel,
  FaUserGroup,
} from "react-icons/fa6";
import { GiVillage } from "react-icons/gi";
import { LiaUserGraduateSolid } from "react-icons/lia";
import { MdCardMembership, MdCo2 } from "react-icons/md";
import { SiEnterprisedb } from "react-icons/si";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  await getTranslation(lang);

  return (
    <main>
      <section className="bg-[url(/background-homepage.avif)] bg-cover bg-center bg-no-repeat relative">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-kya-white h-8 w-4/5 z-10 rounded-t-4xl"></div>
        <div className="min-h-screen z-0 p-16 backdrop-blur w-full h-full flex flex-col justify-between gap-16 text-kya-white">
          <div className="space-y-4">
            <h1 className="font-bold text-3xl md:text-6xl">
              <span>Avec nos groupes électrosolaires</span>{" "}
              <span className="text-kya-orange">KYA-SoP</span>
            </h1>
            <p className="font-bold text-2xl md:text-3xl">
              <span>Devenez</span>{" "}
              <span className="text-kya-orange">
                propriétaires énergétiques
              </span>{" "}
              <span className="text-kya-green text-shadow-2xs text-shadow-kya-coffee">
                verts.
              </span>
            </p>
          </div>
          <p className="flex items-center gap-2 text-xl md:text-2xl font-bold text-kya-green">
            <FaCheckCircle />
            <span>
              Notre vision: démocratiser l&apos;accès à l&apos;énergie verte et
              durable
            </span>
          </p>
          <Link
            href=""
            className="group w-max flex items-center gap-4 text-lg font-bold text-kya-white bg-kya-orange p-4 hover:bg-kya-green hover:text-kya-white transition-all duration-300">
            <span>Découvrir nos solutions</span>
            <FaArrowRight className="-translate-x-2 group-hover:translate-0 transition-all duration-300" />
          </Link>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col justify-center items-center gap-4">
              <FaSolarPanel size={64} className="text-kya-white" />
              <p className="flex items-center gap-2">
                <span className="text-kya-orange font-bold text-4xl">500+</span>
                <span className="text-xl">Installations réalisées</span>
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
              <FaCalendar size={64} className="text-kya-white" />
              <p className="flex items-center gap-2">
                <span className="text-kya-orange font-bold text-4xl">
                  {new Date().getFullYear() - 2015}
                </span>
                <span className="text-xl">Années d&apos;expertise</span>
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
              <FaFaceSmile size={64} className="text-kya-white" />
              <p className="flex items-center gap-2">
                <span className="text-kya-orange font-bold text-4xl">98%</span>
                <span className="text-xl">Satisfaction client</span>
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
              <FaHeadphones size={64} className="text-kya-white" />
              <p className="flex items-center gap-2">
                <span className="text-kya-orange font-bold text-4xl">24/7</span>
                <span className="text-xl">Support client</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Mission and values */}
      <section className="bg-kya-white py-16 px-8">
        <div className="container mx-auto text-center mb-12">
          <h2 className="font-bold text-4xl text-kya-coffee mb-2">
            Mission et valeurs
          </h2>
          <div className="w-24 h-1 bg-kya-green mx-auto"></div>
        </div>
        <div className="container mx-auto grid md:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center">
            <div className="flex justify-center items-center mb-4">
              <span className="bg-kya-green text-white p-4 rounded-full">
                <FaGlobe size={32} />
              </span>
            </div>
            <h3 className="text-2xl font-bold text-kya-green mb-4">
              Notre mission
            </h3>
            <p className="text-gray-700 text-lg">
              Transformer les ressources énergétiques renouvelables de manière
              innovante pour produire une énergie propre, fiable et abordable
              pour tous. Nous nous engageons à créer un avenir énergétique
              durable qui profite aux communautés et préserve notre planète.
            </p>
          </div>
          {/* Values */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center">
            <div className="flex justify-center items-center mb-4">
              <span className="bg-kya-orange text-white p-4 rounded-full">
                <FaPeopleGroup size={32} />
              </span>
            </div>
            <h3 className="text-2xl font-bold text-kya-orange mb-4">
              Nos valeurs
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              {[
                "Professionnalisme",
                "Esprit d'équipe",
                "Intégrité",
                "Equité",
                "Rigueur",
                "Écoute du client",
                "Transparence",
                "Innovation",
              ].map((value) => (
                <p key={value} className="flex items-center gap-3">
                  <FaCheckCircle className="text-kya-green" />
                  <span className="text-gray-700">{value}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Our impacts */}
      <section className="bg-kya-white py-16 px-8">
        <div className="container mx-auto text-center mb-12">
          <h2 className="font-bold text-4xl text-kya-coffee mb-2">
            Nos impacts
          </h2>
          <div className="w-24 h-1 bg-kya-green mx-auto"></div>
        </div>
        <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <FaPooStorm size={40} />,
              value: "5 MWc",
              description: "de puissance cumulée installée à ce jour",
            },
            {
              icon: <MdCo2 size={40} />,
              value: "396 t CO2/an",
              description: "de CO2 évité",
            },
            {
              icon: <MdCardMembership size={40} />,
              value: "500 +",
              description: "emplois crées",
            },
            {
              icon: <SiEnterprisedb size={40} />,
              value: "10",
              description: "entreprises ou agences formées",
            },
            {
              icon: <LiaUserGraduateSolid size={40} />,
              value: "3200 +",
              description: "personnes formées",
            },
            {
              icon: <GiVillage size={40} />,
              value: "1000 +",
              description: "foyers alimentés",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-md text-center flex flex-col items-center">
              <div className="text-kya-orange mb-4">{item.icon}</div>
              <p className="text-3xl font-bold text-kya-green">{item.value}</p>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      {/* YouTube Video and Description */}
      <section className="bg-gray-100 py-16 px-8">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Description */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-kya-coffee">
              Découvrez KYA-Energy Group
            </h2>
            <p className="text-gray-700">
              KYA-ENERGY GROUP est une entreprise internationale spécialisée
              dans les énergies renouvelables (énergie solaire en particulier)
              et l’efficacité énergétique. Elle œuvre pour relever le défi de
              l’électrification en Afrique de façon durable.
            </p>
            <p className="text-gray-700">
              Membre fondateur de la{" "}
              <Link
                href="https://saer-togo.org"
                className="text-kya-green hover:underline font-semibold">
                Synergie des Acteurs des Energies Renouvelables (SAER-TOGO)
              </Link>
              , et d&apos;associations internationales comme{" "}
              <Link
                href="https://gogla.org"
                className="text-kya-green hover:underline font-semibold">
                Global Off Grid Lightning Association (GOGLA)
              </Link>{" "}
              et{" "}
              <Link
                href="https://africamda.org"
                className="text-kya-green hover:underline font-semibold">
                Africa Minigrid Developers Association (AMDA)
              </Link>
              .
            </p>
          </div>
          {/* YouTube Video */}
          <div className="relative">
            <div className="absolute -right-4 top-0 w-4 h-full bg-kya-yellow rounded-r-3xl"></div>
            <div className="absolute -right-10 top-1/2 p-16 rounded-full -translate-y-1/2 bg-kya-orange"></div>
            <div className="absolute group z-[2] -right-8 top-1/2 p-4 rounded-full -translate-y-1/2 bg-kya-yellow">
              <FaArrowRight
                size={24}
                className="text-kya-coffee group-hover:translate-x-1 transition-all duration-300 hover:animate-bounce-right"
              />
            </div>
            <div className="overflow-hidden shadow-lg z-[1] relative">
              <iframe
                className="w-full aspect-video"
                loading="lazy"
                src="https://www.youtube.com/embed/ayX_GLi40K8?list=TLGGgUtPL6h5MB8yNTA3MjAyNQ"
                title="Video institutionnelle KYA Energy Group"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us? */}
      <section className="py-16 px-8">
        <div className="container mx-auto text-center mb-12">
          <h2 className="font-bold text-4xl text-kya-coffee mb-2">
            Pourquoi choisir KYA-Energy Group ?
          </h2>
          <div className="w-24 h-1 bg-kya-green mx-auto"></div>
        </div>
        <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <FaUserGroup size={40} />,
              title: "Accompagnement Complet",
              description:
                "De l'étude à la maintenance, nous vous accompagnons.",
            },
            {
              icon: <FaShield size={40} />,
              title: "Fiabilité Prouvée",
              description: "Équipements durables avec garanties étendues.",
            },
            {
              icon: <FaAward size={40} />,
              title: "Certification ISO 9001:2015",
              description:
                "Qualité garantie selon les standards internationaux les plus exigeants.",
            },
            {
              icon: <FaFlask size={40} />,
              title: "Solutions innovantes",
              description:
                "Technologies de pointe pour une efficacité énergétique maximale.",
            },
            {
              icon: <FaLeaf size={40} />,
              title: "Impact environnemental",
              description:
                "Réduction significatique de votre empreinte carbone.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-md text-center flex flex-col items-center">
              <div className="text-kya-green mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-kya-coffee mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Our Products */}
      <section className="bg-gray-100 py-16 px-8">
        <div className="container mx-auto text-center mb-12">
          <h2 className="font-bold text-4xl text-kya-coffee mb-2">
            Nos produits
          </h2>
          <div className="w-24 h-1 bg-kya-green mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Découvrez notre gamme complète de groupes électrosolaires adaptés à
            tous vos besoins énergetiques.
          </p>
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              image: "/kya-sop-residentiel.avif",
              title: "KYA-SoP Résidentiel",
              description:
                "Solutions adaptées aux maisons et aux petits bâtiments.",
            },
            {
              image: "/kya-sop-commercial.avif",
              title: "KYA-SoP Commercial",
              description:
                "Systèmes hautes performances pour les entreprises et les industries.",
            },
            {
              image: "/kya-sop-communautaire.avif",
              title: "KYA-SoP Communautaire",
              description:
                "Projet d'envergure pour collectivités et institutions.",
            },
          ].map((product, index) => (
            <div key={index} className="w-full relative bg-white shadow-lg group z-10">
              <div className="overflow-hidden">
                <div className="h-64 w-max mx-auto">
                  <Image
                    src={product.image}
                    alt={product.title}
                    className="h-64 w-auto object-scale-down"
                    width={225}
                    height={321}
                  />
                </div>
                <div className="p-6 bg-white z-10">
                  <h3 className="text-2xl font-bold text-kya-coffee mb-2">
                    {product.title}
                  </h3>
                  <p className="text-gray-700">{product.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
