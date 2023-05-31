import "./topbar.css";

import { Link } from "react-router-dom";

const Topbar = () => {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft">
        <img
          width="30"
          height="30"
          src="https://img.icons8.com/ios-glyphs/30/twitter--v1.png"
          alt="twitter--v1"
          className="topIcon"
        />
        <img
          width="30"
          height="30"
          src="https://img.icons8.com/ios-glyphs/30/instagram-new.png"
          alt="instagram-new"
          className="topIcon"
        />
        <img
          width="30"
          height="30"
          src="https://img.icons8.com/ios-glyphs/30/pinterest.png"
          alt="pinterest"
          className="topIcon"
        />
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/">HOME</Link>
          </li>
          <li className="topListItem">
            <Link to="/">ABOUT</Link>
          </li>
          <li className="topListItem">
            <Link to="/">CONTACT</Link>
          </li>
          <li className="topListItem">
            <Link to="/write">WRITE</Link>
          </li>
          <li className="topListItem">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img
            src="https://plus.unsplash.com/premium_photo-1661559131354-0f189d5970e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80"
            alt=""
            className="topImage"
          />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="Link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="Link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}

        <img
          width="50"
          height="50"
          src="https://img.icons8.com/ios/50/search--v1.png"
          alt="search--v1"
          className="topSearchIcon"
        />
      </div>
    </div>
  );
};

export default Topbar;
