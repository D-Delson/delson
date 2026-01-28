import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Links() {
    return (
        <div className="fixed left-10 bottom-0 flex-col items-center gap-6 hidden xl:flex">

            {/* Social Icons */}
            <div className="flex flex-col gap-4 text-2xl text-gray-400">
                <a
                    href="https://github.com/D-Delson"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white hover:-translate-y-1 transition-all"
                >
                    <FaGithub />
                </a>

                <a
                    href="https://www.linkedin.com/in/delson15/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white hover:-translate-y-1 transition-all"
                >
                    <FaLinkedinIn />
                </a>

                {/* <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white hover:-translate-y-1 transition-all"
                >
                    <FaTwitter />
                </a> */}
            </div>

            {/* Vertical Line */}
            <div className="w-px h-40 bg-gray-500"></div>
        </div>
    );
}
