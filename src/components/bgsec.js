import React from "react";
import BackgroundImage from "./assets/image.png";
import a from "./a.svg";
import b from "./b.svg";

function Bgsec() {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        backgroundImage: "url(" + BackgroundImage + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          margin: "auto",
          width: "80%",
          height: "100%",
        }}
      >
        <div
          style={{
            paddingTop: "200px",
            margin: "50",
            paddingBottom: "20px",
            borderRadius: 40,
            textAlign: "center",
            fontSize: 45,
            color: "white",
            fontWeight: 600,
            // width: "100%",
          }}
        >
          Is Home Automation Practical For The Long Term?
        </div>
        <div style={{ marginLeft: "10px" }}>
          <img src={a}></img>
        </div>
        <div
          style={{
            margin: "50",
            padding: "0px 85px",
            borderRadius: 40,
            textAlign: "center",
            frontsize: 150,
            color: "white",
          }}
        >
          The concept of automated homes has evolved from pressing buttons to
          open doors to securing your house and being able to remotely observe
          and control this space. As an add-on, automated homes tend to be more
          energy efficient than conventional homes.
        </div>
        <div
          style={{
            margin: "50",
            padding: "40px 85px",
            borderRadius: 40,
            textAlign: "center",
            frontsize: "24px",
            color: "white",
          }}
        >
          The concept of automated homes has evolved from pressing buttons to
          open doors to securing your house and being able to remotely observe
          and control this space. As an add-on, automated homes tend to be more
          energy efficient than conventional homes.Automating your home is not
          only going to deduct your Electricity Bills but also will give you
          benefits in subsidies and tax deductions from the government for
          taking steps to save the environment. As your environment concerned
          actions are proving you a well-aware citizen of society, the society
          is getting inspired by you and this makes you a superior responsible
          person among all.
        </div>
        <div
          style={{
            marginLeft: "10px",
            display: "flex",
            flexDirection: "row-reverse",
            paddingTop: "40px",
            paddingBottom: "200px",
          }}
        >
          <img src={b}></img>
        </div>
      </div>
    </div>
  );
}

export default Bgsec;
