import "../css/Products.css";

import {
  FaShoppingBag,
  FaStore,
  FaBoxOpen,
  FaMobileAlt,
  FaLaptop,
} from "react-icons/fa";

const products = [
  {
    name: "Amazon",
    category: "E-Commerce",
    description: "Global online shopping platform.",
    icon: <FaShoppingBag />,
  },
  {
    name: "Flipkart",
    category: "E-Commerce",
    description: "India's leading online marketplace.",
    icon: <FaStore />,
  },
  {
    name: "Meesho",
    category: "Reseller Platform",
    description: "Affordable online shopping.",
    icon: <FaBoxOpen />,
  },
  {
    name: "AJIO",
    category: "Fashion",
    description: "Premium fashion & lifestyle.",
    icon: <FaMobileAlt />,
  },
  {
    name: "Myntra",
    category: "Fashion",
    description: "Fashion and lifestyle products.",
    icon: <FaLaptop />,
  },
  {
    name: "Croma",
    category: "Electronics",
    description: "Consumer electronics retailer.",
    icon: <FaLaptop />,
  },
  {
    name: "Reliance Digital",
    category: "Electronics",
    description: "Home appliances and gadgets.",
    icon: <FaLaptop />,
  },
  {
    name: "Tata Cliq",
    category: "Lifestyle",
    description: "Fashion, electronics and luxury.",
    icon: <FaLaptop />,
  },
];

export default function Products() {
  return (
    <section id="products" className="products-section">
      <div className="container">
        <div className="section-title">
          <h2>Our Products</h2>
          <p>Products We Deal With Across Global Markets</p>
        </div>

        <div className="products-grid">
          {products.map((product, index) => (
            <div className="product-card" key={index}>
              <div className="product-image"> {product.icon}</div>

              <h3>{product.name}</h3>

              <span className="category">{product.category}</span>

              <p>{product.description}</p>

              <button>View Details</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
