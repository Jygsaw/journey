import { useEffect, useRef } from "react";
import Map from "ol/Map.js";
import View from "ol/View.js";
import Overlay from "ol/Overlay";
import TileLayer from "ol/layer/Tile.js";
import OSM from "ol/source/OSM.js";
import { fromLonLat, toLonLat } from "ol/proj.js";
import { waitFor } from "@/lib/utils";

interface InputProps {
  locationId?: Location;
  coord: Coordinate;
  setLocationId: () => void;
  setCoord: () => void;
}

export function LocationSelector({
  locationId,
  coord,
  // setLocationId,
  setCoord,
}: InputProps) {
  const mapRef = useRef(null);

  const getCurrCoord = async () => new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition((position) => {
      resolve([
        position.coords.longitude,
        position.coords.latitude,
      ]);
    });
  });

  useEffect(() => {
    let map;

    async function initMap() {
      const initCenter = locationId
        ? [ coord.longitude, coord.latitude ]
        : await getCurrCoord();

      map = new Map({
        target: mapRef.current,
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        view: new View({
          center: fromLonLat(initCenter),
          zoom: 20,
        }),
      });

      const markerElement = document.createElement("div");
      markerElement.className = [
        "w-3 h-3 bg-red-600 rounded-full",
        "border-2 border-white shadow-[0_0_5px] shadow-black/50",
      ].join(" ");

      const markerOverlay = new Overlay({
        element: markerElement,
        positioning: "center-center",
        stopEvent: false,
      });
      map.addOverlay(markerOverlay);

      map.on("postrender", () => {
        const center = map.getView().getCenter();
        markerOverlay.setPosition(center);
        setCoord(toLonLat(center));
      });
    }

    initMap();

    return () => {
      async function disposeMap() {
        await waitFor(() => !!map);
        map.setTarget(undefined);
        map.dispose();
      }

      disposeMap();
    };
  }, []);

  return <div ref={mapRef} className="w-[450px] h-[350px]" />;
}
