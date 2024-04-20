import "./card.scss"
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

function Card({
  data
}: IProps) {
  return (
    <div className="card">
      <Link to={`/${data.id}`} className="img-container">
        <img src={data.img} alt="img" />
      </Link>
      <div className="info-container">
        <h2 className="title">
          <Link to={`/${data.id}`}>{data.title}</Link>
        </h2>
        <p className="address">
          <img src="/pin.png" alt="" />
          <span>{data.address}</span>
        </p>
        <p className="price">${data.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature-item">
              <img src="/bed.png" alt="bed" />
              <span>{data.bedroom} bedrooms</span>
            </div>
            <div className="feature-item">
              <img src="/bath.png" alt="bed" />
              <span>{data.bathroom} bathrooms</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon-item">
              <img src="/save.png" alt="" />
            </div>
            <div className="icon-item">
              <img src="/chat.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card