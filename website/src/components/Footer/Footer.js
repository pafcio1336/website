import React from "react";
// import { CgFacebook } from "@react-icons/all-files/cg/CgFacebook";
import { FaFacebookMessenger } from "@react-icons/all-files/fa/FaFacebookMessenger";
import { SiGmail } from "@react-icons/all-files/si/SiGmail";
import { AiOutlineWhatsApp } from "@react-icons/all-files/ai/AiOutlineWhatsApp";
import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <span className="footer__social footer__social-copy">
        &copy; All right reserved 2023
      </span>
      <AiOutlineWhatsApp className="footer__social footer__social-whatsup" />
      <a
        className="footer__social"
        href="https://www.facebook.com/profile.php?id=100000617766937"
        target="_blank"
      >
        <FaFacebookMessenger className="footer__social footer__social-massenger" />
      </a>

      <SiGmail className="footer__social footer__social-gmail" />
    </footer>
  );
}

export default Footer;
