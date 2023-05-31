import React from "react";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://images.unsplash.com/photo-1517026575980-3e1e2dedeab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1098&q=80"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
          reprehenderit architecto, porro sed perferendis animi saepe velit
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/ios-glyphs/30/twitter--v1.png"
            alt="twitter--v1"
            className="sidebarIcon"
          />
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/ios-glyphs/30/instagram-new.png"
            alt="instagram-new"
            className="sidebarIcon"
          />
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/ios-glyphs/30/pinterest.png"
            alt="pinterest"
            className="sidebarIcon"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
