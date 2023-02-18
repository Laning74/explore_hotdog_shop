import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import styles from "../../styles/Home.module.css";
import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function Map() {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    const getShops = async () => {
      const shopsCollection = collection(db, "hotdogShop");
      const shopsSnapshot = await getDocs(shopsCollection);
      const shopsList = shopsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setShops(shopsList);
    };

    getShops();
  }, []);

  return (
    <MapContainer
      className={styles.map}
      center={[59.2588, 9.6055]}
      zoom={6}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {shops.map((shop) => (
        <Marker position={[shop.latitude, shop.longitude]} key={shop.id}>
          <Popup>
            {shop.name_shop} <br /> {shop.location}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
