import "leaflet/dist/leaflet.css";
import styles from "../../styles/Home.module.css";
import L from "leaflet";

function GetIcon(_iconSize) {
  return L.icon({
    iconUrl: require("../../public/favicon.ico"),
    iconSize: [_iconSize],
  });
}

import { Marker, Popup, MapContainer, TileLayer } from "react-leaflet";

export const Map = ({ data }) => {
  const position = [data?.latitude, data?.longitude];
  console.log(data);
  return (
    <MapContainer
      className={styles.map}
      center={[58.8696217, 9.4142145]}
      zoom={15}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="http://127.0.0.1:8000/tiles/{z}/{x}/{y}.png"
      />
      {data?.map((location) => (
        <Marker position={location.position} icon={GetIcon(location.size)}>
          <Popup>
            {location.name_shop} - {location.location}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
