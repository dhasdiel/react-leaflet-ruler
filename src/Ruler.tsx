import React, { useEffect } from "react";
import "./leaflet-ruler";
import "./leaflet-ruler.css";
import { useMap } from "react-leaflet";
import L from "leaflet";

interface LeafletRuler extends L.Control {
  _allLayers: {};
  _choice: boolean;
  _defaultCursor: string;
  _container: string;
  _initHooksCalled: boolean;
  _lastClickTime: string;
  _leaflet_id: number;
  _map: L.Map | ExtendMap;
  _toggleMeasure: () => void;
}

interface ExtendMap extends L.Map {
  ruler?: LeafletRuler;
}

const Ruler = () => {
  const map: ExtendMap = useMap();

  useEffect(() => {
    if (!map) return;
    (L.control as any).ruler().addTo(map);
  }, []);

  return null;
};

export default Ruler;
