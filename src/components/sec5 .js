import React from "react";
import "../index.css";
import map from "./map.svg";

function Section5() {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1> Contact Us </h1>
        <p>
          Blessing welcomed ladyship she met humoured sir breeding her. Six
          curiosity day assurance bed necessary.
        </p>
      </div>
      <div class="bigbox">
        <div class="form">
          <input
            style={{
              backgroundColor: "#F9F9F9",
              width: "90%",
              margin: "auto",
              height: "40px",
              border: "0px",
              borderRadius: "7px",
              padding: "10px",
              border: "none",
              border: "0",
              lineHeight: "100%",
            }}
            placeholder="Name"
          />

          <input
            style={{
              backgroundColor: "#F9F9F9",
              width: "90%",
              margin: "auto",
              height: "40px",
              border: "0px",
              borderRadius: "7px",
              padding: "10px",
              marginTop: "10px",
            }}
            placeholder="Email"
          />
          <input
            style={{
              backgroundColor: "#F9F9F9",
              width: "90%",
              margin: "auto",
              height: "40px",
              border: "0px",
              borderRadius: "7px",
              padding: "10px",
              marginTop: "10px",
            }}
            placeholder="Subject"
          />
          <textarea
            placeholder="Massage"
            style={{
              backgroundColor: "#F9F9F9",
              width: "90%",
              margin: "auto",
              height: "200px",
              border: "0px",
              borderRadius: "7px",
              padding: "10px",
              marginTop: "10px",
            }}
          />
          <button
            style={{
              backgroundColor: "#40A2D5",
              height: "50px",
              width: "150px",
              borderRadius: "40px 5px",
              fontSize: "12px",
              border: "0px",
              marginTop: "20px",
              color: "white",
            }}
          >
            Send Massage
          </button>
        </div>

        <div class="map">
          <img src={map} style={{ width: "100%" }}></img>
        </div>
      </div>
    </>
  );
}

export default Section5;
