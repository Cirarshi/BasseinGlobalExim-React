import "../css/About.css";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-title">
          <h2>About Us</h2>
          <p>Connecting Businesses Across Borders</p>
        </div>

        <div className="about-content">
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=900"
              alt="Import Export"
            />
          </div>

          <div className="about-text">
            <h3>Bassein Global Exim</h3>

            <p>
              At <strong>Bassein Global Exim</strong>, our mission is to deliver
              premium-quality products to businesses around the globe while
              creating long-term relationships built on trust, quality, and
              transparency.
            </p>

            <p>
              We specialize in sourcing, procurement, logistics, international
              trading, and IT-enabled business solutions. Our team ensures every
              shipment meets international quality standards and reaches
              customers safely and on time.
            </p>

            <p>
              Our expertise spans multiple industries including agricultural
              products, industrial goods, consumer products, technology
              solutions, and customized sourcing for businesses worldwide.
            </p>

            <div className="about-stats">
              <div className="stat">
                <h2>20+</h2>
                <p>Countries Served</p>
              </div>

              <div className="stat">
                <h2>100+</h2>
                <p>Business Partners</p>
              </div>

              <div className="stat">
                <h2>500+</h2>
                <p>Products Delivered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
