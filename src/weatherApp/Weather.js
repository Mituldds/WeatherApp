import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = () => {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
      axios
        .get(
          `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
        )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log(result);
        })

        // .then((result) => {
        //   setData(result.data);
        //   console.log(result);
        // })
        .catch((error) => {
          console.log("Error Fetching Data :", error);
        });
    };

    fetchData();
  }, [lat, long]);

  return (
    <>
      <div>weather</div>
      {typeof data.main != "undefined" ? (
        <Weather weatherData={data} />
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Weather;
