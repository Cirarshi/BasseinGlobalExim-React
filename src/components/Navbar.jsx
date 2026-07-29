import "../css/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Bassein Global Exim</div>

      <ul className="nav-links">
        <li>
          <a href="#home">Home</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

        <li className="dropdown">
          <a href="#services">Services ▼</a>

          <ul className="dropdown-menu">
            <li>
              <a href="#trading">Trading</a>
            </li>

            <li>
              <a href="#it-services">IT Services</a>
            </li>
          </ul>
        </li>

        <li>
          <a href="#products">Products</a>
        </li>

        <li>
          <a href="#establisher">Team</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
