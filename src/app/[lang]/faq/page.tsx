import { getTranslation } from "@/lib/get-translation";
import { Locale } from "@/lib/i18n.config";
import { FC } from "react";
import FaqClientPage from "@/components/FaqClientPage";

interface Props {
  params: {
    lang: Locale;
  };
}

const FaqPage: FC<Props> = async ({ params: { lang } }) => {
  const t = await getTranslation(lang);
  const faqT = t.faq;

  return <FaqClientPage t={faqT} />;
};

export default FaqPage;