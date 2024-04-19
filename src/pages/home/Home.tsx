import SearchBar from "../../components/SearchBar/SearchBar"
import "./home.scss"

function Home() {
  return (
    <div className="home">
      <div className="text-container">
        <div className="wrapper">
          <h1 className="title">
            Find Real Estate & Get your Dream Place
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo sequi odio dolore maiores perspiciatis. Magni labore sapiente suscipit obcaecati optio.
          </p>
          <SearchBar />
          <div className="boxed">
            <div className="box">
              <h1>+16</h1>
              <h2>
                Years of Experience
              </h2>
            </div>
            <div className="box">
              <h1>+16</h1>
              <h2>
                Years of Experience
              </h2>
            </div>
            <div className="box">
              <h1>+1200</h1>
              <h2>
                Property Ready
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="img-container">
        <img src="/bg.png" alt="home bg" />
      </div>
    </div>
  )
}

export default Home