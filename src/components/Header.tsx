import { useState } from "react";
import { useTranslation } from "react-i18next";
import { MdMenu, MdClose } from "react-icons/md";

import logo from "../assets/logo.png";
import Container from "./Container";
import HoverDropDown from "./HoverDropDown";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { href: "#home", key: "nav.home" },
        { href: "#work", key: "nav.works" },
        { href: "#about", key: "nav.about" },
        { href: "#contact", key: "nav.contact" },
    ];

    const dropDownItems = [
        { label: "EN", value: "en" },
        { label: "TA", value: "ta" }
    ];

    const { t, i18n } = useTranslation();

    return (
        <header className="relative">
            <Container className="flex items-center justify-between pt-8">

                {/* Logo */}
                <div className="text-2xl font-bold cursor-pointer text-white flex gap-2 z-50 shrink-0">
                    <img src={logo} alt="logo" className="w-6 h-6" />
                    {t("logo")}
                </div>

                {/* Navigation */}
                <nav
                    className={`
                        fixed xl:relative
                        top-0 left-0
                        w-full xl:w-auto
                        h-screen xl:h-auto
                        bg-black xl:bg-transparent
                        flex flex-col xl:flex-row
                        items-center justify-center
                        gap-8
                        ${menuOpen ? "flex" : "hidden"} xl:flex
                        z-40
                    `}
                >
                    <ul className="flex flex-col xl:flex-row items-center gap-8">
                        {navLinks.map((item) => (
                            <li key={item.key} className="text-[16px] text-white">
                                <a
                                    href={item.href}
                                    className="flex items-center gap-1"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    <span className="text-primary">#</span>
                                    {t(item.key)}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <HoverDropDown
                        value={i18n.language === "ta" ? "EN" : "TA"}
                        items={dropDownItems}
                        onSelect={(lang) => {
                            i18n.changeLanguage(lang);
                            setMenuOpen(false);
                        }}
                    />
                </nav>

                {/* Hamburger */}
                <button
                    className="xl:hidden text-2xl text-white cursor-pointer z-50 shrink-0"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <MdClose /> : <MdMenu />}
                </button>

            </Container>
        </header>
    );
}
