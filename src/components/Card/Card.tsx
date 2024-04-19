

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
    <div className="card">Card</div>
  )
}

export default Card