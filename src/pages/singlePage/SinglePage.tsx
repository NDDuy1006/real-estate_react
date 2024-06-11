import Gallery from "../../components/gallery/Gallery"
import "./singlePage.scss"
import { singlePostData, userData } from "../../lib/dummyData"

interface IProps {

}

function SinglePage () {
  return (
    <div className="single-page">
      <div className="details">
        <div className="wrapper">
          <Gallery images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">
                  $ {singlePostData.price}
                </div>
              </div>
              <div className="user">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">
              {singlePostData.description}
            </div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="list-vertical"></div>
          <p className="title">Sizes</p>
          <div className="sizes"></div>
          <p className="title">Nearby Places</p>
          <div className="list-horizontal"></div>
          <p className="title">Location</p>
          <div className="map-container"></div>
        </div>
      </div>
    </div>
  )
}

export default SinglePage
