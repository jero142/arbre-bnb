import React from 'react';
import { Link } from "react-router-dom";
import { Treehouses } from '../components/Treehouses';
import Header from '../components/Header';
const Home = () => {
  return (

    <div className="home-container">
      
      
      <Header />

      {/* Container that holds all the treehouse sections */}
      <div className="treehouses-container">
        
        {/* Loop over each treehouse object in the Treehouses array */}
        {Treehouses.map((house, index) => {
          
          // Check if the current index is even to alternate layout
          const isEven = index % 2 === 0;

          // Define descriptions for each treehouse based on its slug
          const descriptions = {
            breezeTreehouse:
              "BREEZE Treehouse, at The Appleton Retreat is located on 120 acres of private land, bordered by 1,300 acres of a protected nature conservancy. To the south is the Pettengill Stream a resource protected area and to the north a large secluded pond. BREEZE guests may reserve the wood fired cedar hot tub and the sauna, which are close by and private, at an additional charge. The Appleton Retreat is less than a 30 minute drive to Belfast, Rockport, Camden and Rockland, charming downeast seaside towns.",
            moonTreehouse:
              "A soulful and energetic paradise. Beautiful, private, peaceful & wild surroundings complimented with modern luxuries and comfort. A stunning, unique, & unrivaled experience sure to impact you deeply. Soak in the outdoor tub while you plan your next adventure. Just minutes from the beach, amazing hiking, views and biking. Outfitted with organic latex mattresses, down comforters, top of the line appliances, smoking fast internet and a spectacular wifi sound system with world class acoustics.",
            lovtagTreehouse:
              "After seven years in the making, Rasmus Lybæk’s dream of bringing people closer to nature has finally been realized with the debut of Lovtag (Danish for \"canopy\"), a glamping destination near Denmark’s pristine Mariager Fjord on the Als Odde peninsula. The getaway not only offers peaceful respite in a coastal forest, but also a cozy stay in a treetop cabin that positively oozes hygge.",
            treeframeTreehouse:
              "The Treeframe is a modern a-frame treehouse that offers an unforgettable short-term rental experience. Located in the heart of the forest and surrounded by nature, our treehouse is the perfect spot for travelers looking for a one-of-a-kind getaway. Our treehouse is fully equipped with all the amenities you need for a relaxing stay, and Nick is always available to answer any questions you may have. Come discover the beauty of nature and escape the hustle and bustle of city life at The Treeframe!",
            sphericalTreehouse:
              "The spherical treehouse concept also borrows heavily from sailboat construction and rigging practice. It's a marriage of tree house and sailboat technology. Wooden spheres are built much like a cedar strip canoe or kayak. Suspension points are similar to the chain plate attachments on a sailboat. Stairways hang from a tree much like a sailboat shroud hangs from the mast. Spherical architecture has many unconventional features. Conventional buildings separate walls, ceiling and floor with hard lines. In a sphere the walls and ceiling merge into one. The function changes but the form remains the same. It is a unified structure with one continuous wall. I call this uniwall construction. There are only 2 sides to a sphere inside and outside."
          };

          // Render the alternating layout container
          return (
            <div
              key={house.id}
              className={isEven ? "first-house-container" : "second-house-container"}
            >
              {isEven ? (
                // Layout when index is even: text on left, image on right
                <>
                  <div>
                    {/* Treehouse title */}
                    <h2>{house.name.toUpperCase()}</h2>

                    {/* Description from descriptions object */}
                    <p>{descriptions[house.slug]}</p>
                  </div>

                  <div className={`image-treehouse-${index + 1}-container`}>
                    {/* Link to the detail page of the current treehouse */}
                    <Link to={`/treehouses/${house.slug}`}>
                      <img
                        className={`image-treehouse-${index + 1}`}
                        src={house.thumbnail}
                        alt={house.name}
                      />
                    </Link>
                  </div>
                </>
              ) : (
                // Layout when index is odd: image on left, text on right
                <>
                  <div className={`image-treehouse-${index + 1}-container`}>
                    <Link to={`/treehouses/${house.slug}`}>
                      <img
                        className={`image-treehouse-${index + 1}`}
                        src={house.thumbnail}
                        alt={house.name}
                      />
                    </Link>
                  </div>

                  <div>
                    <h2>{house.name.toUpperCase()}</h2>
                    <p>{descriptions[house.slug]}</p>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Export the Home component so it can be used in other files
export default Home;