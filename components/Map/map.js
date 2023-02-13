import React, { Component } from "react";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import styles from "../../styles/Home.module.css";
import hotdogShops from "../../data/data.json";
import L from "leaflet";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function Map() {
  return (
    <MapContainer
      className={styles.map}
      center={[
        hotdogShops.hotdog_shops[0].latitude,
        hotdogShops.hotdog_shops[0].longitude,
      ]}
      zoom={14}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {hotdogShops.hotdog_shops.map((shop) => (
        <Marker position={[shop.latitude, shop.longitude]} key={shop.id}>
          <Popup>
            {shop.name_shop} <br /> {shop.location}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
