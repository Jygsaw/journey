import { useEffect, useRef } from "react";
import { toLonLat } from "ol/proj.js";
import { getCurrCoord, initMap, buildMarkerOverlay } from "@/lib/mapUtils";
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
  // TODO: extend LocationSelector to allow selection of
  // public shared locations instead of custom location
  // setLocationId,
  setCoord,
}: InputProps) {
  const mapRef = useRef(null);

  useEffect(() => {
    let map;

    async function configMap() {
      const centerCoord = locationId
        ? [ coord.longitude, coord.latitude ]
        : await getCurrCoord();

      map = initMap({
        centerCoord,
        target: mapRef.current,
      });

      const markerOverlay = buildMarkerOverlay({
        centerCoord,
        element: document.createElement("div"),
      });
      map.addOverlay(markerOverlay);

      map.on("postrender", () => {
        const center = map.getView().getCenter();
        markerOverlay.setPosition(center);
        setCoord(toLonLat(center));
      });
    }

    configMap();

    return () => {
      async function disposeMap() {
        await waitFor(() => !!map, 100, 5000);
        map.setTarget(undefined);
        map.dispose();
      }

      disposeMap();
    };
  }, []);

  return <div ref={mapRef} className="w-[450px] h-[350px]" />;
}
