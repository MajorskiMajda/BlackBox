"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Image from 'next/image';

const Footer = () => {
  return (
    <footer id="contactSection" className="bg-black text-white py-12 px-8 z-2">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Logo and About */}
        <div>
          <Image src="/logo.svg" alt="Kursor Logo" width={180} height={80} />
          <p className="mt-4 text-neutral-400">
          Pružamo najbolje usluge da bismo vam pomogli da ostvarite svoje ciljeve. Pridružite nam se danas!
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-[#da26ff]">Linkovi</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/" className="text-neutral-400 text-lg hover:text-[#da26ff]">
                Početna
              </Link>
            </li>
            <li>
              <Link href="/onama" className="text-neutral-400 text-lg hover:text-[#da26ff]">
                O nama
              </Link>
            </li>
            <li>
              <Link href="#contactSection" className="text-neutral-400 text-lg hover:text-[#da26ff]">
                Kontaktirajte nas
              </Link>
            </li>
           
          </ul>
        </div>

        {/* Column 3: Social Media Links */}
        <div>
          <h3 className="text-xl font-semibold  text-[#da26ff]">Kontaktirajte nas</h3>
          <div className="mt-4 flex space-x-4">
            <a
              href="https://facebook.com"
              className="text-neutral-400 hover:text-[#da26ff]"
              target="_blank"
              aria-label="Facebook"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookF} className="text-2xl" />
            </a>
            <a
              href="https://twitter.com"
              className="text-neutral-400 hover:text-[#da26ff]"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
            </a>
            <a
              href="https://linkedin.com"
              className="text-neutral-400 hover:text-[#da26ff]"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="text-2xl" />
            </a>
            <a
              href="https://instagram.com"
              className="text-neutral-400 hover:text-[#da26ff]"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
            </a>
          </div>
          
          <p className="mt-4 text-neutral-400">
            Kontakt email:{" "}
            <a href="mailto:info@black-box-media.com" className="text-white">
              info@black-box-media.com
            </a>
  
          </p>
          <p className="mt-4 text-neutral-400">
            Kontakt telefon:{" "}
            <a className="text-white">
              +381601305588
            </a>
          </p>
        </div>
        
      </div>

      {/* Bottom Section */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center">
        <p className="text-neutral-300">
          &copy; {new Date().getFullYear()} Black Box Media.  Sva prava zadržana.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
