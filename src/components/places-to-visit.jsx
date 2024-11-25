import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/places-to-visit.css";
import UnderConstruction from "../assets/under-construction.jpg";

const PlacesToVisit = () => {
  const navigate = useNavigate();
  return (
    <>
    <section className="places-to-visit-section">
      <h1 className="swipe">Places To Visit</h1>
      <br />
      <div className="places-to-visit-container">
        <div className="places-to-visit-card places-to-visit-card1 swipe">
          <div className="places-to-visit-card-content">
            <h2>UDAI SAGAR LAKE</h2>
            <p>
            Udai Sagar Lake, one of the five prominent lakes of Udaipur, is situated around 13 km in the east of Udaipur. This lake was built by Maharana Udai Singh in 1565. Udai Sagar Lake is around 4 km in length, 2.5 km in width and 9 meters deep at the maximum. It is fed by the Ahar River. 
            </p>
          </div>
        </div>
        <div className="places-to-visit-card places-to-visit-card2 swipe">
          <div className="places-to-visit-card-content">
            <h2>SWAROOP SAGAR LAKE</h2>
            <p>
            Swaroop Sagar Lake is situated in the city of Udaipur in the Rajasthan state of India. It is an artificially created lake, named after Maharana Swarup Singh of Udaipur. It is also known as Kumharia Talab, which is a combined water body comprising other nearby lakes Fateh Sagar Lake and Lake Pichola.
            </p>
          </div>
        </div>
        <div className="places-to-visit-card places-to-visit-card3 swipe">
          <div className="places-to-visit-card-content">
            <h2>SAJJANGARH BIOLOGICAL PARK</h2>
            <p>
            Sajjangarh Biological Park is a zoological garden located in Udaipur, Rajasthan, India. This biological park is situated just beneath the Monsoon Palace, around 4 km from the city center.
            </p>
          </div>
        </div>
        <div className="places-to-visit-card places-to-visit-card4 swipe">
          <div className="places-to-visit-card-content">
            <h2>MONSOON PALACE</h2>
            <p>
            The Monsoon Palace, also known as the Sajjan Garh Palace, is a hilltop palatial residence in the city of Udaipur, Rajasthan in India, overlooking the Fateh Sagar Lake. It is named Sajjangarh after Maharana Sajjan Singh of the Mewar dynasty, whom it was built for in 1884.
            </p>
          </div>
        </div>
        <div className="places-to-visit-card places-to-visit-card5 swipe">
          <div className="places-to-visit-card-content">
            <h2>BADI LAKE</h2>
            <p>
            Lake Badi is an artificial freshwater lake situated in Udaipur city in the Indian state of Rajasthan. The lake was built in the village of Badi, about 12 km from Udaipur, by Maharana Raj Singh I to counteract the devastating effects of a famine. He named it Jiyan Sagar after his mother Jana Devi.
            </p>
          </div>
        </div>
        <div className="places-to-visit-card places-to-visit-card6 swipe">
          <div className="places-to-visit-card-content">
            <h2>LAKE PICHOLA</h2>
            <p>
            Lake Pichola, situated in Udaipur city in the Indian state of Rajasthan, is an artificial fresh water lake, created in the year 1362, named after the nearby Picholi village. It is one of the several contiguous lakes, and developed over the last few centuries in and around the famous Udaipur city.
            </p>
          </div>
        </div>
        <div className="places-to-visit-card places-to-visit-card7 swipe">
          <div className="places-to-visit-card-content">
            <h2>JAGDISH TEMPLE</h2>
            <p>
            Jagdish Temple is a large Hindu temple in the middle of Udaipur in Rajasthan, just outside the royal palace. It has been in continuous worship since 1651. A big tourist attraction, the temple was originally called the temple of Jagannath Rai but is now called Jagdish-ji. It is a major monument in Udaipur.
            </p>
          </div>
        </div>
        <div className="places-to-visit-card places-to-visit-card8 swipe">
          <div className="places-to-visit-card-content">
            <h2>FATEH SAGAR LAKE</h2>
            <p>
            Fateh Sagar Lake is situated in the city of Udaipur in the Indian state of Rajasthan. It is an artificial lake named after Maharana Fateh Singh of Udaipur and Mewar, constructed north-west of Udaipur, to the north of Lake Pichola in the 1680s.
            </p>
          </div>
        </div>
        <div className="places-to-visit-card places-to-visit-card9 swipe">
          <div className="places-to-visit-card-content">
            <h2>DOODH TALAI LAKE</h2>
            <p>
            Doodh Talai Lake or Dudh Talai lake, is a small pond located adjacent to the Lake Pichola, near Shiva Niwas Palace, in the heart of Udaipur, Rajasthan.
            </p>
          </div>
        </div>
        <div className="places-to-visit-card places-to-visit-card10 swipe">
          <div className="places-to-visit-card-content">
            <h2>CITY PALACE</h2>
            <p>
            City Palace, Udaipur is a palace complex situated in the city of Udaipur in the Indian state of Rajasthan. It was built over a period of nearly 400 years, with contributions from several rulers of the Mewar dynasty.
            </p>
          </div>
        </div>
        <div className="places-to-visit-card places-to-visit-card11 swipe">
          <div className="places-to-visit-card-content">
            <h2>BAGORE KI HAVELI</h2>
            <p>
            Bagore-ki-Haveli is a haveli in Udaipur in Rajasthan state in India. It is right on the waterfront of Lake Pichola at Gangori Ghat. Amar Chand Badwa, the Prime Minister of Mewar, built it in the eighteenth century.
            </p>
          </div>
        </div>
        
      </div>
    </section>
    
    </>
    
  );
};

export default PlacesToVisit;
