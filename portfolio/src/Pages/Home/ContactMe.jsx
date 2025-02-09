import React from "react";
import { contactData } from "../../data/contact_me_index";


const Contact = () => {
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
                  src={info.iconSrc}
                  alt={info.iconAlt}
                  className="icon"
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
