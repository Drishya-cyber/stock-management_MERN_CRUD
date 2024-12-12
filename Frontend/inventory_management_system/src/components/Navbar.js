import React, { useState } from 'react';
import './Navbar.css'; // Import custom CSS for additional styles

export default function Navbar(props) {
  const [showVideo, setShowVideo] = useState(false); // State to toggle video display
  const [searchQuery, setSearchQuery] = useState(''); // State for the search query

  // Toggle video visibility when the title is clicked
  const handleTitleClick = () => {
    setShowVideo(!showVideo);
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle search form submit
  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    if (searchQuery) {
      console.log('Searching for:', searchQuery);
      // Implement the search logic here (e.g., filtering products or sending the query to a server)
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3">
        <div className="container-fluid">
          {/* Brand or Title */}
          <a 
            className="navbar-brand fs-3 text-primary" 
            href="/" 
            onClick={(e) => { 
              e.preventDefault(); // Prevent page refresh
              handleTitleClick(); // Toggle video visibility
            }}
          >
            {props.title || "My Website"}
          </a>
          {/* Toggler for Mobile View */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* Navbar Links and Search Form */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a style={{color:"black"}} className="nav-link fs-5" href="/products">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a style={{color:"black"}} className="nav-link fs-5" href="/about">
                  About
                </a>
              </li>
            </ul>
            <form className="d-flex search-bar" role="search" onSubmit={handleSearchSubmit}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search here..."
                aria-label="Search"
                value={searchQuery}
                onChange={handleSearchChange} // Update the search query state
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      {/* Video Section */}
      {showVideo && (
        <div className="video-container mt-4">
          <video width="100%" controls>
            <source src="path_to_your_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
}
