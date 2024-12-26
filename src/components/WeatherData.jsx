import React from "react";
import { Air, DeviceThermostat, Water } from "@mui/icons-material";
import WeatherIcon from "./WeatherIcon";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const WeatherData = (props) => {
  const { weatherData } = props;

  return (
    <div className="w-1/2 mt-4 border-2 border-bg_form-100 bg-bg_form-400 p-5 rounded-lg">
      <h2 className="text-3xl font-extrabold text-center mb-3">{weatherData.name}</h2>
      <TableContainer component={Paper}>
        <Table aria-label="weather data table">
          <TableHead>
            <TableRow className="bg-bg_form-100">
              <TableCell>Parameter</TableCell>
              <TableCell align="center">Symbol</TableCell>
              <TableCell align="center">Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="bg-bg_form-400">
            <TableRow>
              <TableCell component="th" scope="row">
                Description
              </TableCell>
              <TableCell align="center">
                <WeatherIcon weatherData={weatherData} />
              </TableCell>
              <TableCell align="center">{weatherData.weather[0].main}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Temperature
              </TableCell>
              <TableCell align="center">
                <DeviceThermostat style={{color: "red"}}/>
              </TableCell>
              <TableCell align="center">{weatherData.main.temp}°C</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Humidity
              </TableCell>
              <TableCell align="center">
                <Water style={{color: "gray"}}/>
              </TableCell>
              <TableCell align="center">{weatherData.main.humidity}%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Wind Speed
              </TableCell>
              <TableCell align="center">
                <Air style={{color: "gray"}}/>
              </TableCell>
              <TableCell align="center">{weatherData.wind.speed} m/s</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default WeatherData;
