import { useTranslation } from "react-i18next";

import Section from "./Section";
import Button from "./Button";
import QuoteCard from "./Quote";
import home from "../assets/home.png"


export default function Home() {
    const { t } = useTranslation();
    return (
        <section>
            <Section>
                <div className="flex flex-col lg:flex-row xl:h-120 gap-20">
                    <div className="flex flex-col justify-center">
                        <p className="font-semibold text-[32px]">{t("home.name")}
                            <span className="text-primary"> {t("home.work")} </span>
                            (React JS + Django)
                        </p>
                        <p className="text-gray-400 text-[16px] mt-10">{t("home.description")}</p>
                        {/* <a href="" className="mt-10 border-2 w-fit border-primary border-solid py-2 px-4">{t("home.contact-btn")}</a> */}
                        <Button value={t("home.contact-btn")} />
                    </div>
                    <img src={home} className="" alt="home" />
                </div>

                <div className="mt-10">
                    <QuoteCard quote={t("quote.quote")} author={t("quote.author")} />
                </div>

            </Section>
        </section>
    )
}