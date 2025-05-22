import FeaturesHeader from "../FeaturesSection/FeaturesHeader/FeaturesHeader";
import "./ContactBanner.css";
import React from "react";

function ContactBanner({ contactItems }) {
  return (
    <div className="contact-banner">
      <div className="contact-banner-overlay"></div>
      {contactItems.map((item, index) => (
        <div key={index} className="contact-banner-container">
          <div className="contact-banner-content">
            <FeaturesHeader featuresText={item.featuresText} titleStyle={{fontSize: "48px"}}/>
            <p className="contact-banner-desc">
              {item.description.split('\n').map((line, idx) => (
                <React.Fragment key={idx}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
            <a className="contact-banner-btn" href={item.href}>
              <span className="btn-text">{item.hrefText}</span>
              <span className="btn-shine"></span>
              <span className="btn-border"></span>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ContactBanner;
