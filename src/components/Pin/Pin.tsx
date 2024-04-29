import { Marker, Popup } from "react-leaflet"
import "./pin.scss"
import { Link } from "react-router-dom";

interface IProps {
  data: {
    id: number;
    title: string;
    img: string;
    bedroom: number;
    bathroom: number;
    price: number;
    address: string;
    latitude: number;
    longitude: number;
  }
}

function Pin({data}: IProps) {
  return (
    <Marker position={[data.latitude, data.longitude]}>
      <Popup>
        <div className="popup-container">
          <img src={data.img} alt="" />
          <div className="text-container">
            <Link to={`/${data.id}`}>{data.title}</Link>
            <span>{data.bedroom} bedrooms</span>
            <b>$ {data.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  )
}

export default Pin