import React, { useState, useEffect } from "react";
import axios from "axios";

import Layout from "../components/layout";
import SEO from "../components/seo";

function IndexPage() {
  const [error, setError] = useState();
  const [location, setLocation] = useState({});
  const [weatherData, setWeatherdata] = useState({});

  useEffect(() => {
    const getData = async () => {
      if (!navigator.geolocation) {
        setError("Geolocation is not supported");
        return;
      }

      const success = async (position) => {
        const result = await axios.get(`./.netlify/functions/getWeather`, {
          params: {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          },
        });

        setWeatherdata(result.data);
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      };

      const reject = (error) => {
        setError(error.message);
        return;
      };

      navigator.geolocation.getCurrentPosition(success, reject);
    };

    getData();
  }, []);
  console.log("weatherData", weatherData);
  console.log(location);
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />
      {error ? (
        error
      ) : (
        <div className="flex flex-grow flex-col md:flex-row">
          <section className="bg-blue-500 md:w-1/5">Sidebar</section>
          <section className="bg-yellow-500 flex-1 md:w-4/5">Content</section>
        </div>
      )}
    </Layout>
  );
}

export default IndexPage;
