import React from "react";
import "./Home.css";
import Header from "../../components/Header/Header.jsx";
import Posts from "../../posts/Posts";
import Sidebar from "../../sidebar/Sidebar";

const home = () => {
  return (
    <>
      <Header />
      <div className="home">  
        <Posts />
        <Sidebar />
      </div>
    </>
  );
};

export default home;
