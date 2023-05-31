import React from "react";
import "./write.css";

export default function Write() {
  return (
    <div className="write">
      <img
        src="https://images.unsplash.com/photo-1546074177-ffdda98d214f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt=""
        className="writeImg"
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          {/* <label htmlFor="fileInput"> */}
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/android/24/plus.png"
            alt="plus"
            className="writeIcon"
          />
          {/* </label> */}
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            className="writeIcon"
          />
          <input type="text" placeholder="Title" className="writeInput" />
        </div>
        <div className="writeFromGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
}
