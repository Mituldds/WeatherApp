import React, { useEffect, useState } from "react";
import "./Style.css";
import axios from "axios";
const Tempapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=4e84a6a495b72c29221af868b320ba2b`
        )
        .then((res) => {
          const result = res.data;
          setCity(result);
          console.log(result);
        })
        .catch((error) => {
          console.log("ErrorFetching Data", error);
        });
    };
    fetchData();
  }, [search]);

  return (
    <>
      <div className="main">
        <h3 className="title">Weather App</h3>
        <div className="header">
          City Name :{" "}
          <input
            className="city-input"
            type="search"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>

        {!city ? (
          <p>No Data Found</p>
        ) : (
          <div>
            <h2>
              <i className="fas fa-street-view"></i>
              {search}
            </h2>
            <h1>{city.main.temp} °Cel</h1>
            <h3>
              Min : {city.main.temp_min}°Cel | Max : {city.main.temp_max}°Cel
            </h3>
          </div>
        )}
      </div>
    </>
  );
};

export default Tempapp;
