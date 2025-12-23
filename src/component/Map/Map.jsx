import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "./Map.css";
import "leaflet/dist/leaflet.css";

/* Fix Leaflet default marker issue */
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

/* Premium branded marker */
const brandMarker = new L.Icon({
  iconUrl: "/brand-marker.png",
  iconSize: [46, 46],
  iconAnchor: [23, 46],
  popupAnchor: [0, -42],
  className: "brand-marker",
});

const CompanyLocationMap = () => {
  const companyLocation = [6.5244, 3.3792];

  return (
    <div className="map-wrapper premium">
      <MapContainer
        center={companyLocation}
        zoom={13}
        scrollWheelZoom={false}
        dragging={true}
        zoomControl={false}
        className="map-container"
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution="© OpenStreetMap contributors"
        />

        <Marker position={companyLocation} icon={brandMarker}>
          <Popup>
            <strong>Your Company Name</strong>
            <br />
            Lagos, Nigeria
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default CompanyLocationMap;
