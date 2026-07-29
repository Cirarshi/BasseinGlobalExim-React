import "../css/Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h2>Bassein Global Exim</h2>

            <p>
              Connecting businesses globally through trusted trading solutions
              and innovative IT services.
            </p>
          </div>

          <div>
            <h3>Quick Links</h3>

            <ul>
              <li>
                <a href="#home">Home</a>
              </li>

              <li>
                <a href="#about">About</a>
              </li>

              <li>
                <a href="#services">Services</a>
              </li>

              <li>
                <a href="#products">Products</a>
              </li>

              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h3>Services</h3>

            <ul>
              <li>Trading</li>

              <li>Import & Export</li>

              <li>Website Development</li>

              <li>Cloud Solutions</li>

              <li>DevOps</li>
            </ul>
          </div>

          <div>
            <h3>Contact</h3>

            <p>Mumbai, Maharashtra</p>

            <p>info@basseinglobalexim.com</p>

            <p>+91 98765 43210</p>
          </div>
        </div>

        <hr />

        <div className="copyright">
          <p>© {year} Bassein Global Exim. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
