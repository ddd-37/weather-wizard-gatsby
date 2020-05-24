import React, { useState, useEffect } from "react";
import axios from "axios";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Sidebar from "./../components/IndexPage/Sidebar";

function IndexPage() {
  const [error, setError] = useState();
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherdata] = useState({});

  useEffect(() => {
    const getData = async () => {
      if (!navigator.geolocation) {
        setError("Geolocation is not supported");
        return;
      }

      const success = async (position) => {
        const openCageResult = await axios.get(
          `./.netlify/functions/getLocation`,
          {
            params: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
          }
        );
        console.log("success -> openCageResult", openCageResult);

        const openWeatherResult = await axios.get(
          `./.netlify/functions/getWeather`,
          {
            params: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
          }
        );

        setWeatherdata(openWeatherResult.data);

        const locationText = openCageResult.data.city
          ? `${openCageResult.data.city}, ${openCageResult.data.state}`
          : `${openCageResult.data.county}, ${openCageResult.data.state}`;

        console.log("success -> locationText", locationText);

        setLocation(locationText);
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
          <section className="bg-blue-500 md:w-1/5">
            <Sidebar location={location} />
          </section>
          <section className="bg-yellow-500 flex-1 md:w-4/5">Content</section>
        </div>
      )}
    </Layout>
  );
}

export default IndexPage;
