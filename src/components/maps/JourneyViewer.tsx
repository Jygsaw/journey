import { useEffect, useRef } from "react";
import { getCurrCoord, initMap, buildMarkerOverlay, buildFeatureLayer } from "@/lib/mapUtils";
import { waitFor } from "@/lib/utils";

interface InputProps {
  path: string[];
  places: Place[];
  locations: Location[];
}

export const JourneyViewer = ({ path, places, locations }: InputProps) => {
  const mapRef = useRef(null);

  useEffect(() => {
    let map;

    async function configMap() {
      const currCoord = await getCurrCoord();
      const points = path.map(placeId => {
        const place = places.find(record => record.id === placeId);
        const location = locations.find(record => record.id === place.locationId);
        return [location.longitude, location.latitude];
      });
      const lines = points.map((point, i) => [point, points[i + 1]]);
      lines.pop();

      map = initMap({
        centerCoord: currCoord,
        target: mapRef.current,
      });

      const markerOverlay = buildMarkerOverlay({
        centerCoord: currCoord,
        element: document.createElement("div"),
      });
      map.addOverlay(markerOverlay);

      const featureLayer = buildFeatureLayer({ points, lines });
      map.addLayer(featureLayer);
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
  return <div ref={mapRef} className="w-[450px] h-[350px]" />;
};
