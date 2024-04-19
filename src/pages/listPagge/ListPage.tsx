import Card from "../../components/Card/Card"
import Filter from "../../components/Filter/Filter"
import { listData } from "../../lib/dummyData"
import "./listPage.scss"

function ListPage() {
  const data = listData

  return (
    <div className="list-page">
      <div className="list-container">
        <div className="wrapper">
          <Filter />
          {data.map(item => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      </div>
      <div className="map-container"></div>
    </div>
  )
}

export default ListPage