import React, { useState } from "react";
import PlaceIcon from "@mui/icons-material/Place";
import { Button } from "@mui/material";
import { fetchWeather } from "../api/WeatherApi";

const SelectCityInput = (props) => {
  const { setWeatherData } = props;
  const [selectCity, setSelectCity] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleButtonClick = async () => {
    try {
      const data = await fetchWeather(selectCity);
      setWeatherData(data);
      setErrorMessage(""); // Clear any previous error message
    } catch (error) {
      setErrorMessage("Please enter a correct city name");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleButtonClick();
    }
  };
  

  return (
    <div className="w-1/2 bg-bg_form-100 p-5 rounded-lg flex flex-col gap-3 items-center">
      <div className="input-area flex items-center justify-center border-2 border-bg_form-400 rounded-lg p-2">
        <input
          placeholder="Enter city"
          className="bg-transparent border-none rounded-lg px-2 text-bg_form-400 w-full"
          value={selectCity}
          onChange={(e) => setSelectCity(e.target.value)}
          onKeyDown={handleKeyDown}
        ></input>
        <PlaceIcon className="text-bg_form-400" />
      </div>
      <Button
        variant="contained"
        style={{
          borderRadius: 15,
          backgroundColor: "#B3C8CF",
          padding: "8px 16px",
          fontSize: "18px",
        }}
        onClick={handleButtonClick}
      >
        Get Weather
      </Button>
      {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
    </div>
  );
};

export default SelectCityInput;
