import React, { useEffect, useState } from "react";
import { Chart, Cards, CountryPicker } from "./components/index";
import styles from "./App.module.css";
import { fetchData } from "./api";
import image from "./images/image.png";
const App = () => {
  const [data, Setdata] = useState([]);
  const [country, setCountry] = useState("");

  useEffect(() => {
    const fetching = async () => {
      const fetchedData = await fetchData();
      Setdata(fetchedData);
    };
    fetching();
  }, []);

  const handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    Setdata(fetchedData);
    setCountry(country);
  };
  return (
    <>
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    </>
  );
};

export default App;
