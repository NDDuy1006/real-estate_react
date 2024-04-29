import Card from "../../components/Card/Card"
import Filter from "../../components/Filter/Filter"
import Map from "../../components/Map/Map"
import { listData } from "../../lib/dummyData"
import "./listPage.scss"

function ListPage() {
  const data = listData

  return (
    <div className="list-page">
      <div className="list-container">
        <Filter />
        <div className="wrapper">
          {data.map(item => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      </div>
      <div className="map-container">
        <Map items={data} />
      </div>
    </div>
  )
}

export default ListPage