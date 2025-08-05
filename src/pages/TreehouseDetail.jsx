import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 
import { Treehouses } from "../components/Treehouses"; 

// Import the lightbox component and styles
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Import the thumbnail plugin for the lightbox
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import BookingForm from "../components/BookingForm";

// Define the main component
const TreehouseDetail = () => {
  // Extract the slug from the URL (e.g. /treehouses/breezeTreehouse)
  const { slug } = useParams();

  // Find the matching treehouse data based on the slug
  const treehouse = Treehouses.find((t) => t.slug === slug);

  // State to control whether the image lightbox is open
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // State to track which image is active in the lightbox
  const [photoIndex, setPhotoIndex] = useState(0);

  // State to show/hide the booking form
  const [showBookingForm, setShowBookingForm] = useState(false);

  // Side effect to add a background class to the body when the component mounts
  useEffect(() => {
    document.body.classList.add("treehouse-detail-bg");

    // Clean up the class when the component unmounts
    return () => {
      document.body.classList.remove("treehouse-detail-bg");
    };
  }, []);

  // If the slug doesn't match any treehouse, show a fallback message
  if (!treehouse) {
    return <p>Treehouse not found</p>;
  }

  return (
    // Wrapper for the detail page
    <div className="treehouse-detail-wrapper">
      {/* Inner content container */}
      <div className="treehouse-detail">
        
        {/* Header row with treehouse name and booking button */}
        <div className="header-row">
          <h1>{treehouse.name}</h1>

          {/* Toggle booking form visibility */}
          <button
            className="button"
            onClick={() => setShowBookingForm((prev) => !prev)}
          >
            {showBookingForm ? "Cancel Booking" : "BOOK NOW"}
          </button>
        </div>

        {/* Description and price */}
        <p className="treehouse-infos">{treehouse.infos}</p>
        <p className="price">${treehouse.priceByNight} per night</p>

        {/* Display amenities */}
        <div className="amenities">
          {treehouse?.amenities?.map((item, index) => (
            <div className="amenity" key={index}>
              <span className="icon">{item.icon}</span>
              <span className="label">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Gallery section with main and side images */}
        <div className="gallery-grid">
          {/* Main large image */}
          <div className="main-image">
            <img
              src={treehouse.images[0]}
              alt={`${treehouse.name} main`}
              onClick={() => {
                setPhotoIndex(0); // Set active index
                setIsLightboxOpen(true); // Open lightbox
              }}
            />
          </div>

          {/* Thumbnail side images (limit to 4) */}
          <div className="side-images">
            {treehouse.images.slice(1, 5).map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${treehouse.name} preview ${index + 2}`}
                onClick={() => {
                  setPhotoIndex(index + 1); // Set index for lightbox
                  setIsLightboxOpen(true); // Open lightbox
                }}
              />
            ))}
          </div>
        </div>

        {/* Conditional rendering of the lightbox when open */}
        {isLightboxOpen && (
          <Lightbox
            open={isLightboxOpen}
            close={() => setIsLightboxOpen(false)} // Close handler
            index={photoIndex} // Start from selected image
            slides={treehouse.images.map((src) => ({ src }))}
            plugins={[Thumbnails]} // Use thumbnails plugin
          />
        )}

        {/* Conditional rendering of the booking form when toggled */}
        {showBookingForm && (
          <div className="booking-modal">
            <BookingForm
              treehouse={treehouse}
              onClose={() => setShowBookingForm(false)} // Close form handler
            />
          </div>
        )}
      </div>
    </div>
  );
};


export default TreehouseDetail;