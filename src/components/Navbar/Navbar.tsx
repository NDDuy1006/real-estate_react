import { useState } from "react"
import "./navbar.scss"

type Props = {}

const Navbar = (props: Props) => {
  const [open, setOpen] = useState(false)

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
        <a href="/">Sign In</a>
        <a href="/" className="register">Sign Up</a>
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