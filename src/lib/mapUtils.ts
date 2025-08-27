import Map from "ol/Map.js";
import View from "ol/View.js";
import Overlay from "ol/Overlay";
import TileLayer from "ol/layer/Tile.js";
import VectorLayer from "ol/layer/Vector";
import OSM from "ol/source/OSM.js";
import VectorSource from "ol/source/Vector";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import LineString from "ol/geom/LineString";
import Style from "ol/style/Style";
import Circle from "ol/style/Circle";
import Line from "ol/style/Line";
import Fill from "ol/style/Fill";
import Stroke from "ol/style/Stroke";
import Icon from "ol/style/Icon";
import { fromLonLat } from "ol/proj.js";

export const getCurrCoord = async () => new Promise((resolve) => {
  navigator.geolocation.getCurrentPosition((position) => {
    resolve([
      position.coords.longitude,
      position.coords.latitude,
    ]);
  });
});

export const initMap = ({
  centerCoord = [0, 0],
  zoomLevel = 18,
  target = "map",
} = {}) => {
  const map = new Map({
    target,
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
    ],
    view: new View({
      center: fromLonLat(centerCoord),
      zoom: zoomLevel,
    }),
  });

  return map;
};

export const buildMarkerOverlay = ({
  centerCoord = [0, 0],
  element,
} = {}) => {
  element.className = [
    "w-3 h-3 bg-red-600 rounded-full",
    "border-2 border-white shadow-[0_0_5px] shadow-black/50",
  ].join(" ");

  const markerOverlay = new Overlay({
    element,
    positioning: "center-center",
    position: fromLonLat(centerCoord),
    stopEvent: false,
  });

  return markerOverlay;
};

export const buildFeatureLayer = ({ points = [], lines = [] } = {}) => {
  const vectorLayer = new VectorLayer({
    source: new VectorSource({
      features: [
        ...points.map(point => createPointFeature(point)),
        ...lines.map(line => createLineFeature(line)),
      ],
    }),
  });

  return vectorLayer;
};

export const createPointFeature = (coord) => {
  const feature = new Feature({
    geometry: new Point(fromLonLat(coord)),
  });
  const myStyle = new Style(
    {
      fill: new Fill({
        color: "rgba(255, 0, 0, 0.6)" // Red fill with transparency
      }),
      stroke: new Stroke({
        color: "blue", // Blue stroke
        width: 2
      }),
      image: new Circle({ // For point features
        radius: 5,
        fill: new Fill({
          color: "green"
        })
      })
    }
  );
  feature.setStyle(myStyle);

  return feature;
};

export const createLineFeature = ([ begin, end ]) => {
  const feature = new Feature({
    geometry: new LineString([fromLonLat(begin), fromLonLat(end)]),
  });
  const myStyle = new Style(
    {
      stroke: new Stroke({
        color: "blue",
        width: 3
      })
    }
  );
  feature.setStyle(myStyle);

  return feature;
};
