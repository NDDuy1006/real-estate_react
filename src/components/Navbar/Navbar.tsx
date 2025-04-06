import { useState } from "react"
import "./navbar.scss"
import { Link } from "react-router-dom"

type Props = {}

const Navbar = (props: Props) => {
  const [open, setOpen] = useState(false)

  const user = true

  return (
    <nav>
      <div className="left">
        <a href="/"  className="logo">
          <img src="/logo.png" alt="logo" />
          <span>SwiftySerene</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agent</a>
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="avatar" />
            <span>John Doe</span>
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="/">Sign In</a>
            <a href="/" className="register">Sign Up</a >
          </>
        )}
        <div className="menu-icon">
          <img src="/menu.png" alt="menu" onClick={() => setOpen(!open)} />
        </div>
        <div className={open ? "mobile-menu active" : "mobile-menu"}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agent</a>
          <a href="/">Sign In</a>
          <a href="/">Sign Up</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar