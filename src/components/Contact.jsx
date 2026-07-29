import "../css/Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-title">
          <h2>Contact Us</h2>

          <p>We'd love to hear from you.</p>
        </div>

        <div className="contact-wrapper">
          <div className="contact-info">
            <h3>Get In Touch</h3>

            <p>
              <strong>Address</strong>
              <br />
              Mumbai, Maharashtra, India
            </p>

            <p>
              <strong>Email</strong>
              <br />
              info@basseinglobalexim.com
            </p>

            <p>
              <strong>Phone</strong>
              <br />
              +91 98765 43210
            </p>

            <p>
              <strong>Business Hours</strong>
              <br />
              Monday - Saturday
              <br />
              9:00 AM - 6:00 PM
            </p>
          </div>

          <form className="contact-form">
            <input type="text" placeholder="Full Name" />

            <input type="email" placeholder="Email Address" />

            <input type="text" placeholder="Subject" />

            <textarea rows="6" placeholder="Your Message"></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
