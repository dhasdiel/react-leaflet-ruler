import Ruler from "react-leaflet-ruler";
import "./App.css";
import { MapContainer, TileLayer } from "react-leaflet";

function App() {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={true}
      className="map"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Ruler />
    </MapContainer>
  );
}

export default App;
