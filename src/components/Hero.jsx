import "../css/Hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay">
        <h1>Bassein Global Exim</h1>

        <p>Your Trusted Partner in Import & Export</p>

        <a href="#about" className="hero-btn">
          Learn More
        </a>
      </div>
    </section>
  );
}
