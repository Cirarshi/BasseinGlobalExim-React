import "../css/Establisher.css";

import { FaLinkedin, FaEnvelope, FaBuilding, FaUserTie } from "react-icons/fa";

import founder1 from "../assets/founders/avi.jpg";
import founder2 from "../assets/founders/bhalu.jpg";
import director1 from "../assets/founders/shailu.jpg";
import director2 from "../assets/founders/saurabh.jpg";
import director3 from "../assets/founders/pappu.jpg";
import developer1 from "../assets/founders/uk.jpg";

const founders = [
  {
    name: "Avinash Bacchav",
    designation: "Founder & CEO",
    company: "Yes Bank Ltd",
    image: founder1,
    email: "avinash@basseinglobal.com",
    linkedin: "https://linkedin.com/in/avinash",
  },

  {
    name: "Bhalendra Rathore",
    designation: "Co-Founder",
    company: "Yes Bank Ltd",
    image: founder2,
    email: "bhalendra@basseinglobal.com",
    linkedin: "https://linkedin.com/in/bhalendra",
  },

  {
    name: "Shailender Singh",
    designation: "Director",
    company: "Yes Bank Ltd",
    image: director1,
    email: "director@basseinglobal.com",
    linkedin: "https://linkedin.com/in/shailender",
  },

  {
    name: "Saurabh Rajawat",
    designation: "Director",
    company: "Yes Bank Ltd",
    image: director2,
    email: "director2@basseinglobal.com",
    linkedin: "https://linkedin.com/in/director2",
  },

  {
    name: "Pappu Kumar",
    designation: "Director",
    company: "Yes Bank Ltd",
    image: director3,
    email: "pappu@basseinglobal.com",
    linkedin: "https://linkedin.com/in/pappu",
  },

  {
    name: "Utkarsh Kapoor",
    designation: "Developer",
    company: "Yes Bank Ltd",
    image: developer1,
    email: "utkarsh@basseinglobal.com",
    linkedin: "https://linkedin.com/in/utkarsh",
  },
];

export default function Founders() {
  const foundersTeam = founders.filter(
    (member) =>
      member.designation === "Founder & CEO" ||
      member.designation === "Co-Founder",
  );

  const directors = founders.filter(
    (member) => member.designation === "Director",
  );

  const developers = founders.filter(
    (member) => member.designation === "Developer",
  );

  const renderCards = (members) => (
    <div className="founders-grid">
      {members.map((member, index) => (
        <div className="flip-card" key={index}>
          <div className="flip-card-inner">
            {/* Front */}
            <div className="flip-card-front">
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
            </div>

            {/* Back */}
            <div className="flip-card-back">
              <h3>{member.name}</h3>

              <p>{member.designation}</p>

              <h4>{member.company}</h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section id="establisher" className="founders-section">
      <div className="container">
        <h1 className="team-heading">Our Team</h1>

        {/* Founders */}
        <div className="section-title">
          <h2>Meet Our Founders</h2>
          <p>The visionaries behind Bassein Global Exim.</p>
        </div>

        {renderCards(foundersTeam)}

        {/* Directors */}
        <div className="section-title">
          <h2>Our Directors</h2>
          <p>The driving force behind our operations.</p>
        </div>

        {renderCards(directors)}

        {/* Developers */}
        <div className="section-title">
          <h2>Our Developer</h2>
          <p>The technology powering Bassein Global Exim.</p>
        </div>

        {renderCards(developers)}
      </div>
    </section>
  );
}
