import "./map.scss"
import { MapContainer, TileLayer } from "react-leaflet"
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png"
import markerIcon from "leaflet/dist/images/marker-icon.png"
import markerShadow from "leaflet/dist/images/marker-shadow.png"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import Pin from "../Pin/Pin"

// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow
});

interface IProps {
  items: {
    id: number;
    title: string;
    img: string;
    bedroom: number;
    bathroom: number;
    price: number;
    address: string;
    latitude: number;
    longitude: number;
  }[];
  center?: number[]
};

function Map ({ items, center }: IProps) {
  return (
    <MapContainer
      center={center as L.LatLngExpression || [51, -0.09]}
      zoom={7}
      scrollWheelZoom={false}
      className="map"
    >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {items.map(item => (
        <Pin data={item} />
      ))}
  </MapContainer>
  )
}

export default Map