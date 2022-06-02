import React from 'react';
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import L, { LatLngTuple } from 'leaflet';
import 'leaflet/dist/leaflet.css';

import MarkerIcon from '../../../../images/marker-icon.png';

interface MapProps {
  height: number;
}

const Map: React.FC<MapProps> = ({ height }) => {
  const mapPosition: LatLngTuple = [50.96, -113.973];
  const icon = L.icon({
    iconUrl: MarkerIcon,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -48],
  });

  return (
    <MapContainer
      center={mapPosition}
      zoom={4}
      scrollWheelZoom={false}
      style={{ height: `${height}px` }}
    >
      <TileLayer
        attribution={`&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors`}
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png"
      />
      <Marker position={mapPosition} icon={icon}>
        <Tooltip direction="right" offset={[16, -16]} opacity={1} permanent>
          aaaaaaaaaa
        </Tooltip>
      </Marker>
    </MapContainer>
  );
};

export default Map;
