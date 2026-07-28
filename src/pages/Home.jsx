export default function Home(){return <div dangerouslySetInnerHTML={{__html:`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bassein Global Exim | Import & Export</title>
    
    <link rel="stylesheet" href="style.css">

    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background: #f4f4f4;
            color: #333;
            line-height: 1.6;
        }
        header {
            background: #004080;
            color: #fff;
            padding: 40px 0;
            text-align: center;
        }
        nav {
            background: #0066cc;
            padding: 15px;
            text-align: center;
            position: sticky;
            top: 0;
        }
        nav a {
            color: #fff;
            margin: 0 15px;
            text-decoration: none;
            font-weight: bold;
        }
        nav a:hover {
            text-decoration: underline;
        }
        section {
            padding: 40px;
            background: #fff;
            margin: 20px auto;
            max-width: 1000px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        h2 {
            color: #004080;
        }
        .hero-img {
            display: block;
            margin: 20px auto;
            max-width: 100%;
            height: auto;
            border-radius: 4px;
        }
        footer {
            background: #004080;
            color: #fff;
            text-align: center;
            padding: 20px 0;
            margin-top: 40px;
        }
    </style>
</head>
<body>

    <header>
        <h1>Bassein Global Exim</h1>
        <p>Your Trusted Partner in Import & Export</p>
    </header>

    <nav>
        <a href="#about">About Us</a>
        <a href="#services">Services</a>
        <a href="#products">Products</a>
        <a href="#contact">Contact</a>
    </nav>

    <main>
        <section id="about">
            <h2>About Us</h2>
            <img src="trade.jpg" alt="Global Trade Logistics" class="hero-img" width="600">
            <p>At <strong>Bassein Global Exim</strong>, our mission is to provide premium-quality products to our parrtners by fostering strong partnerships with farmers and suppliers. We ensure sustainability, efficiency, and reliability in every step of our trading process, ensuring smooth trade operations across continents.</p>
        </section>

        <section id="services">
            <h2>Our Services</h2>
            <ul>
                <li>Global Supply Chain Management</li>
                <li>Quality Assurance & Inspection</li>
                <li>Customs Clearance & Documentation</li>
                <li>International Logistics Support</li>
            </ul>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 Bassein Global Exim. All Rights Reserved.</p>
    </footer>

</body>
</html>

`}}/>;}