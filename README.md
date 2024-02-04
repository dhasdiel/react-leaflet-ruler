# React-Leaflet-Ruler 📏🗺️

React-Leaflet-Ruler is a ruler plugin for react-leaflet that create from leaflet-ruler repository [leaflet-ruler repository](https://github.com/gokertanrisever/leaflet-ruler).

## Installation

Use the npm to install react-leaflet-ruler.

```bash
npm i react-leaflet-ruler
```

[Demo](https://react-leaflet-ruler.vercel.app/) 🔗

## Usage

```javascript
import Ruler from "react-leaflet-ruler";
<MapContainer
  center={[51.505, -0.09]}
  zoom={13}
  scrollWheelZoom={true}
  className="map"
>
  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
  <Ruler />
</MapContainer>;
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
