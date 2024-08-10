import React, { useState, useCallback } from "react";
import EarthquakeCard from "../Card/EarthquakeCard"; // Ensure this path is correct
import { EarthquakeContainer, Title, CardDiv } from "./index"; // Verify this path is correct
import { useEarthquake } from "./EarthquakeContext"; // Ensure this path is correct

const Quakes = () => {
  const { quakes, fetchQuakes, loading } = useEarthquake();
  const [expandedCard, setExpandedCard] = useState(null);

  const handleRefreshClick = useCallback(
    (e) => {
      e.preventDefault();
      console.log("Refresh button clicked");
      fetchQuakes();
    },
    [fetchQuakes],
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!quakes || quakes.length === 0) {
    return <p>No earthquake data available.</p>;
  }

  console.log("Quakes data:", quakes); // Debugging: Check data structure

  const handleCardClick = (idx) => {
    setExpandedCard((prevIdx) => (prevIdx === idx ? null : idx));
  };

  return (
    <EarthquakeContainer>
      <Title>Earthquakes</Title>
      <a
        href="#"
        onClick={handleRefreshClick}
        aria-label="Refresh earthquake data"
      >
        [refresh]
      </a>
      <CardDiv>
        {quakes.map((quake, idx) => {
          console.log("Quake item:", quake); // Debugging: Check individual quake item

          const {
            properties: {
              detail,
              title,
              mag, // Changed from magnitude to mag
              alert,
              tsunami,
            },
            dyfi, // Assuming this is the dyfi data
            groundFailure, // Assuming this is the ground-failure data
          } = quake;

          return (
            <EarthquakeCard
              key={idx}
              title={title}
              detail={detail}
              magnitude={mag} // Ensure this matches the prop name in EarthquakeCard
              alert={alert}
              tsunami={tsunami}
              dyfiContents={dyfi?.[0]?.contents} // Adjust if necessary based on data structure
              groundFailureData={groundFailure?.[0]} // Adjust if necessary based on data structure
              isExpanded={expandedCard === idx}
              onClick={() => handleCardClick(idx)}
            />
          );
        })}
      </CardDiv>
    </EarthquakeContainer>
  );
};

export default Quakes;
