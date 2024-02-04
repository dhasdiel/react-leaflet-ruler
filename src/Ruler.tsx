import React, { useEffect, useRef } from "react";
import "../dist/leaflet-ruler";
import "../dist/leaflet-ruler.css";
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
  const map = useMap();
  const rulerRef = useRef<LeafletRuler | null>(null); // Store ruler instance

  useEffect(() => {
    if (!map) return;

    const ruler = (L.control as any).ruler();
    rulerRef.current = ruler; // Store in ref for later access
    map.addControl(ruler);

    return () => {
      // Cleanup function to remove ruler when component unmounts
      if (rulerRef.current) {
        map.removeControl(rulerRef.current);
      }
    };
  }, [map]);

  return null;
};

export default Ruler;
