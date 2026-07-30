import { FaShoppingCart, FaBolt, FaLeaf } from "react-icons/fa";

import cakesImg from "../assets/products/cow-dung-cakes.jpeg";
import powderImg from "../assets/products/cow-dung-powder.jpg";
import manureImg from "../assets/products/cow-dung-manure.jpeg";
import vermiImg from "../assets/products/vermi-compost.jpeg";

import "../css/Products.css";

const products = [
  {
    id: 1,
    name: "Cow Dung Cakes",
    image: cakesImg,
    hsn: "31010091",
    category: "Pure Cow Dung",
    price: 15.8,
    unit: "Per KG",
    stock: 2500,
    packaging: [
      {
        label: "24 Piece Pack",
        price: 95,
      },
      {
        label: "60 Piece Pack",
        price: 220,
      },
      {
        label: "Bulk (Per KG)",
        price: 15.8,
      },
    ],
    specifications: [
      "Diameter : 8 × 2 Inch",
      "Sun Dried",
      "7-8 Pieces Per KG",
      "Good NPK Value",
      "Pathogen : N/A",
    ],
  },

  {
    id: 2,
    name: "Cow Dung Powder",
    image: powderImg,
    hsn: "31010091",
    category: "Pure Cow Dung",
    price: 10.8,
    unit: "Per KG",
    stock: 8000,
    packaging: [
      {
        label: "40 KG PP Bag",
        price: 432,
      },
      {
        label: "50 KG PP Bag",
        price: 540,
      },
    ],
    specifications: [
      "Moisture : 10%",
      "Mesh Size : 80-100",
      "Fine Powder",
      "Brown Colour",
      "Odour Free",
      "N : 1.35%",
      "P : 4.32%",
      "K : 0.62%",
    ],
  },

  {
    id: 3,
    name: "Cow Dung Manure",
    image: manureImg,
    hsn: "31010091",
    category: "Organic Fertilizer",
    price: 10.5,
    unit: "Per KG",
    stock: 10000,
    packaging: [
      {
        label: "40 KG PP Bag",
        price: 420,
      },
      {
        label: "50 KG PP Bag",
        price: 525,
      },
    ],
    specifications: [
      "Moisture : 15-20%",
      "Greenish Yellow",
      "Odour Free",
      "Indian Standard Mesh",
      "N : 1.35%",
      "P : 4.32%",
      "K : 0.62%",
    ],
  },

  {
    id: 4,
    name: "Vermi Compost",
    image: vermiImg,
    hsn: "31010099",
    category: "Organic Compost",
    price: 11.2,
    unit: "Per KG",
    stock: 6000,
    packaging: [
      {
        label: "40 KG PP Bag",
        price: 448,
      },
      {
        label: "50 KG PP Bag",
        price: 560,
      },
    ],
    specifications: [
      "Black Colour",
      "Fine Texture",
      "Odour Free",
      "Pathogen : N/A",
      "N : 1.26%",
      "P : 3.56%",
      "K : 0.42%",
    ],
  },
];

export default function Products() {
  return (
    <section className="products-section" id="products">
      <div className="container">
        <div className="section-title">
          <h2>Our Products</h2>
          <p>Premium Organic Cow Dung Products</p>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />

              <div className="product-content">
                <h3>{product.name}</h3>

                <span className="product-category">
                  <FaLeaf />
                  {product.category}
                </span>

                <div className="product-price">
                  ₹{product.price}
                  <span>/{product.unit}</span>
                </div>

                <p>
                  <strong>HSN :</strong> {product.hsn}
                </p>

                <p className="stock">
                  <strong>Available Stock :</strong> {product.stock} KG
                </p>

                <div className="buy-options">
                  <label>Packaging</label>

                  <select>
                    {product.packaging.map((pack, index) => (
                      <option key={index}>
                        {pack.label} - ₹{pack.price}
                      </option>
                    ))}
                  </select>

                  <label>Quantity</label>

                  <input
                    type="number"
                    min="1"
                    max={product.stock}
                    defaultValue="1"
                  />
                </div>

                <ul>
                  {product.specifications.map((spec, index) => (
                    <li key={index}>{spec}</li>
                  ))}
                </ul>

                <div className="buttons">
                  <button className="cart-btn">
                    <FaShoppingCart />
                    Add to Cart
                  </button>

                  <button className="buy-btn">
                    <FaBolt />
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
