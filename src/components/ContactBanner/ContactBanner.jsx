import FeaturesHeader from "../FeaturesSection/FeaturesHeader/FeaturesHeader";
import "./ContactBanner.css";

function ContactBanner({ contactItems }) {
  return (
    <div className="contact-banner">
      {contactItems.map((item, index) => (
        <div key={index} className="contact-banner-container">
          <FeaturesHeader featuresText={item.featuresText} />
          <p className="contact-banner-desc">{item.description}</p>
          <a className="contact-banner-btn" href={item.href}><span>{item.hrefText}</span></a>
        </div>
      ))}
    </div>
  );
}

export default ContactBanner;
