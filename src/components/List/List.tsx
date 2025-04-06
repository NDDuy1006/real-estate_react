import { listData } from "../../lib/dummyData"
import Card from "../Card/Card"
import "./list.scss"

const List = () => {
  return (
    <div className="list">
      {listData.map(item => (
        <Card key={item.id} data={item} />
      ))}
    </div>
  )
}

export default List