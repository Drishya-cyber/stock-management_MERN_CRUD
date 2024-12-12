import React from 'react';
import './About.css'; // Optional: Custom styles for better control over the design

export default function About() {
  return (
    <div className="about-container container-fluid p-5">
      <h1 className="text-center mb-4">Stock Management System - MERN CRUD App</h1>

      {/* Introduction Section */}
      <div className="row mb-5">
        <div className="col-lg-6 col-md-12 mb-4">
          <h2>Introduction</h2>
          <p className="lead">
            The Stock Management System is a modern, efficient, and scalable inventory management tool built with the MERN stack (MongoDB, Express, React, Node.js). This app allows users to easily manage their products, update inventory levels, and streamline the entire process of stock management.
          </p>
          <p>
            This system offers a variety of features that make it user-friendly and highly customizable. Whether you are managing a small business or a large warehouse, this system is designed to suit your needs.
          </p>
        </div>

        {/* Features Section */}
        <div className="col-lg-6 col-md-12 mb-4">
          <h2>Key Features</h2>
          <ul className="features-list">
            <li>Manage your product inventory effortlessly.</li>
            <li>Real-time updates for quick stock-level adjustments.</li>
            <li>Add, update, and delete products with ease.</li>
            <li>View detailed information for each product, including price, quantity, and barcode.</li>
            <li>Fully responsive design, optimized for mobile and desktop devices.</li>
            <li>Secure access and smooth user experience.</li>
            <li>Fast performance, thanks to the powerful MERN stack.</li>
          </ul>
        </div>
      </div>

      {/* Operations Section */}
      <div className="row mb-5">
        <div className="col-12">
          <h2>Operations</h2>
          <p>
            The Stock Management System offers a variety of simple and efficient operations:
          </p>
          <div className="operations-list">
            <div className="operation">
              <h4>Add New Product</h4>
              <p>Add new products to the inventory by providing product details like name, price, barcode, and stock quantity.</p>
            </div>
            <div className="operation">
              <h4>Update Product</h4>
              <p>Edit existing product details such as price or quantity to keep your inventory up-to-date.</p>
            </div>
            <div className="operation">
              <h4>Delete Product</h4>
              <p>Remove products from your inventory that are no longer needed or are out of stock.</p>
            </div>
            <div className="operation">
              <h4>View Product Details</h4>
              <p>Quickly view the details of each product, including barcode, price, and quantity, in a clean and simple interface.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Technologies Used Section */}
      <div className="row mt-5">
        <div className="col-12 text-center">
          <h2>Technologies Used</h2>
          <p className="lead">
            The application utilizes the MERN stack, which ensures high performance, scalability, and flexibility in developing modern web applications:
          </p>
        </div>

        <div className="col-md-4 text-center mb-4">
          <img 
            src={require('./assets/mongodb.png')} // Adjust path if needed
            alt="MongoDB" 
            className="tech-icon" 
          />
          <h4>MongoDB</h4>
          <p>NoSQL database for storing and managing product data in a scalable and flexible way.</p>
        </div>
        <div className="col-md-4 text-center mb-4">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" 
            alt="Express" 
            className="tech-icon" 
          />
          <h4>Express</h4>
          <p>Lightweight web framework for Node.js, used to build the backend of the application.</p>
        </div>
        <div className="col-md-4 text-center mb-4">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" 
            alt="React" 
            className="tech-icon" 
          />
          <h4>React</h4>
          <p>JavaScript library used to build the user interface with reusable components for a smooth user experience.</p>
        </div>
      </div>

      {/* Footer Section */}
      <div className="row mt-5">
        <div className="col-12 text-center">
          <p className="footer-text">
            © 2024 Stock Management System. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
