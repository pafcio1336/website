import React from "react";
// import { CgFacebook } from "@react-icons/all-files/cg/CgFacebook";
import { FaFacebookMessenger } from "@react-icons/all-files/fa/FaFacebookMessenger";
import { SiGmail } from "@react-icons/all-files/si/SiGmail";
import { AiOutlineWhatsApp } from "@react-icons/all-files/ai/AiOutlineWhatsApp";
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
import "./Footer.scss";
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
      <a href="https://mail.google.com/" target="_blank">
        <SiGmail className="footer__social footer__social-gmail" />
      </a>
      <a href="https://github.com/pafcio1336" target="_blank">
        <AiFillGithub className="footer__social footer__social-github" />
      </a>
    </footer>
  );
}

export default Footer;
