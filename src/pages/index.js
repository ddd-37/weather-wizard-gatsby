import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Sidebar from "../components/IndexPage/SideBar/Sidebar";
import Content from "../components/IndexPage/Content";

const WeatherData = createContext();

function IndexPage() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState(null);
  const [weatherData, setWeatherdata] = useState(null);
  const [fahrenheit, setFahrenheit] = useState(true);

  useEffect(() => {
    const getData = async () => {
      if (!navigator.geolocation) {
        setError("Geolocation is not supported");
        return;
      }

      setLoading(true);

      const success = async (position) => {
        // openCage is used for out reverse geoCoding features
        try {
          const openCageResult = await axios.get(
            `./.netlify/functions/getLocation`,
            {
              params: {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              },
            }
          );

          const locationText = openCageResult.data.city
            ? `${openCageResult.data.city}, ${openCageResult.data.state}`
            : `${openCageResult.data.county}, ${openCageResult.data.state}`;

          setLocation(locationText);
        } catch (e) {
          setLoading(false);
          setError(e.message);
          console.log("openCageResult error: ", e.message);
          return;
        }

        // Now let's go get our weather data
        try {
          const openWeatherResult = await axios.get(
            `./.netlify/functions/getWeather`,
            {
              params: {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
                unit: fahrenheit ? "imperial" : "metric",
              },
            }
          );
          setWeatherdata(openWeatherResult.data);
        } catch (e) {
          setLoading(false);
          setError(e.message);
          console.log("openWeatherResult: ", e.message);
          return;
        } finally {
          setLoading(false);
        }
      };

      const reject = (error) => {
        setLoading(false);
        setError(error.message);
        return;
      };

      navigator.geolocation.getCurrentPosition(success, reject);
    };

    getData();
  }, [fahrenheit]);

  function handleUnitClick(e) {
    setFahrenheit(e);
  }

  console.log("weatherData", weatherData);
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />
      {error && <div>{error}</div>}

      {loading && (
        <div>
          <h2>Loading...</h2>
        </div>
      )}

      {!loading && !error && location && weatherData && (
        <div className="flex flex-grow flex-col md:flex-row">
          <WeatherData.Provider value={{ current: weatherData.current }}>
            <section className="bg-blue-500 md:w-1/5 px-3">
              <Sidebar
                location={location}
                currentTemp={weatherData.current.temp}
                changeUnit={handleUnitClick}
              />
            </section>
            <section className="bg-yellow-500 flex-1 md:w-4/5 px-3">
              <Content data={weatherData.daily} />
            </section>
          </WeatherData.Provider>
        </div>
      )}
    </Layout>
  );
}

export { IndexPage as default, WeatherData };
