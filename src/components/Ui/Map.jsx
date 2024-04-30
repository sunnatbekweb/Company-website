"use client"
import React from "react";
import { YMaps, Map as YandexMap } from "react-yandex-maps";

const MapComponent = () => {
  return (
    <YMaps query={{ apikey: "9d297deb-9ee4-40a9-a05e-56a5953117bb" }}>
      <div style={{ width: "100%", height: "400px" }}>
        <YandexMap
          defaultState={{ center: [55.76, 37.64], zoom: 10 }}
          width="100%"
          height="100%"
        />
      </div>
    </YMaps>
  );
};

export default MapComponent;
