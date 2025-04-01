import React from "react";
import { contactData } from "../../../data/contact_me_index";
import { useDarkMode } from "../../hooks/useDarkMode";// Adjust the path as needed

const Contact = () => {
  const darkMode = useDarkMode();

  return (
    <section id="contact">
      <p className="section__text__p1">{contactData.sectionTitle}</p>
      <h1 className="title">{contactData.mainTitle}</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          {contactData.contactInfo.map((info) => (
            <div key={info.id} className="contact-info-container">
              <a href={info.link}>
                <img
                  // Use the dark mode icon if dark mode is active, otherwise use the default icon
                  src={darkMode ? info.iconSrcDark : info.iconSrc}
                  alt={info.iconAlt}
                  className={`icon ${info.iconClass}`}
                />
              </a>
              <p>
                <a href={info.link}>{info.linkText}</a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
