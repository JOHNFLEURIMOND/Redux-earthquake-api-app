import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

// Create a context
const EarthquakeContext = createContext();

// Create a provider component
export const EarthquakeProvider = ({ children }) => {
  const [quakes, setQuakes] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchQuakes = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson",
      );
      // Assuming the API does not provide image URLs, you may need to add them or modify this
      const quakesWithImages = response.data.features.map((quake) => ({
        ...quake,
        detail: "https://example.com/path/to/image.jpg", // Replace with actual URL logic if needed
      }));
      setQuakes(quakesWithImages);
    } catch (error) {
      console.error("Failed to fetch quakes:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuakes();
  }, []);

  return (
    <EarthquakeContext.Provider value={{ quakes, fetchQuakes, loading }}>
      {children}
    </EarthquakeContext.Provider>
  );
};

// Custom hook for using the context
export const useEarthquake = () => {
  const context = useContext(EarthquakeContext);
  if (!context) {
    throw new Error("useEarthquake must be used within an EarthquakeProvider");
  }
  return context;
};
