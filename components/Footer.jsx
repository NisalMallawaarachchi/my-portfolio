import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";

const Footer = ({ isDarkMode }) => {
  return (
    <footer className="mt-20">
      {/* Back to top + email */}
      <div className="text-center">
        <a href="#top" className="text-3xl cursor-pointer">
          Nisal Mallawaarachchi .
        </a>

        <div className="w-max flex items-center gap-2 mx-auto mt-2">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt="mail icon"
            className="w-6 h-auto"
          />
          <a
            href="mailto:nisalmallawarachchi@gmail.com"
            className="hover:underline"
          >
            nisalmallawarachchi@gmail.com
          </a>
        </div>
      </div>

      {/* Social links */}
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2025 Nisal Mallawaarachchi. All rights reserved.</p>

        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a
              target="_blank"
              href="https://github.com/NisalMallawaarachchi"
              aria-label="GitHub profile"
              className="flex items-center gap-2 text-gray-500 hover:underline"
            >
              <FaGithub className="text-2xl" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </li>

          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/nisal-mallawaarachchi-483466279/"
              aria-label="LinkedIn profile"
              className="flex items-center gap-2 text-gray-500 hover:underline"
            >
              <FaLinkedin className="text-2xl" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </li>

          <li>
            <a
              target="_blank"
              rel="everyone can code"
              href="https://nisal.hashnode.dev/"
              aria-label="Hashnode blog"
              className="flex items-center gap-2 text-gray-500 hover:underline"
            >
              <SiHashnode className="text-2xl" />
              <span className="hidden sm:inline capitalize">hashnode</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
