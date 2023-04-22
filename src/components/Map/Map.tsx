import { MapContainer, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";

const Map = () => {
  return (
    <MapContainer
      center={[-31.416687, -64.183419]}
      zoom={12}
      className="h-[400px] w-screen"
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

export default Map;
