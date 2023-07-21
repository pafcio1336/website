import React from "react";
import { FiPhone } from "react-icons/fi";
import { SiGmail } from "@react-icons/all-files/si/SiGmail";
import { FaFacebookMessenger } from "@react-icons/all-files/fa/FaFacebookMessenger";
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";

import "./Contact.scss";
function Contact() {
  return (
    <div className="contact">
      <div className="contact__container">
        <h2 className="contact__header">
          I strongly encourage you to contact me!
        </h2>
        <p className="contact__paragraph">
          if you are interested in finding a new employee, you can contact me by
          phone as well as via social media
        </p>
        <div className="contact__details">
          <div className="contact__details-1">
            <div className="contact__details-1--telephone">
              <div className="contact__details-1--telephone svg">
                <FiPhone />
              </div>
              <span className="contact__details-1--telephone number">
                512018615
              </span>
            </div>
            <div className="contact__details-1--facebook">
              <div className="contact__details-1--facebook svg">
                <FaFacebookMessenger />
              </div>
              <span className="contact__details-1--facebook messenger">
                <a href="#">Contact me on messanger</a>
              </span>
            </div>
          </div>
          <div className="contact__details-2">
            <div className="contact__details-2--mail">
              <div className="contact__details-2--mail svg">
                <SiGmail />
              </div>
              <span className="contact__details-2--mail gmail">
                <a href="https://gmail.google.com/" target="_blank">
                  pawel@leszczynski.it
                </a>
              </span>
            </div>

            <div className="contact__details-2--github">
              <div className="contact__details-2--github  svg">
                <AiFillGithub />
              </div>
              <span className="contact__details-2--github gitAcc">
                <a href="https://github.com/pafcio1336" target="_blank">
                  https://github.com/pafcio1336
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
