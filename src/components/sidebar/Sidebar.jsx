import { Link } from "react-router-dom";
import "./sidebar.css";
import logo from './image/logo.png'

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT US</span>
        <img
          src={logo}
          alt=""
        />
        <p>
        We are a venture studio focusing on impact, based
         in the USA. We are expanding our scope and scale
          and setting up an office in India and telling 
          our story of this expansion via a YouTube channel.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link className="link" to="">
              Life
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="">
              Music
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="">
              Sport
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="">
              Style
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="">
              Tech
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="">
              Cinema
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}