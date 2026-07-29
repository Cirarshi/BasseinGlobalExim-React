import "../css/Services.css";

import { FaGlobeAsia, FaLaptopCode } from "react-icons/fa";

const services = [
  {
    id: "trading",
    title: "Trading",
    icon: <FaGlobeAsia />,
    description:
      "We specialize in international import and export of high-quality products, helping businesses source reliable goods across global markets.",
    features: [
      "Import & Export",
      "Global Sourcing",
      "Logistics Support",
      "Supply Chain Management",
      "Quality Assurance",
    ],
  },
  {
    id: "it-services",
    title: "IT Services",
    icon: <FaLaptopCode />,
    description:
      "We provide modern software solutions and IT consulting to help businesses digitally transform and improve operational efficiency.",
    features: [
      "Website Development",
      "Cloud Solutions",
      "DevOps Services",
      "UI/UX Design",
      "Application Support",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>Delivering Excellence Through Trading & Technology</p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" id={service.id} key={service.id}>
              <div className="service-icon">{service.icon}</div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <ul>
                {service.features.map((item, index) => (
                  <li key={index}>✓ {item}</li>
                ))}
              </ul>

              <button className="service-btn">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
