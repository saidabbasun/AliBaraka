import React from "react";
import "../Style/Home.scss";
import Header from "./Header";

import HomeImg from "../assets/Images/HomeImg.png";
import HomeArrow from "../assets/Images/rightArrowLeft.svg";

import { Card } from "react-bootstrap";
export default function Home() {
  return (
    <>
      <Card className=" border-0 bg-dark text-white  ">
        <Card.Img className="HomeBg"  src={HomeImg} alt="Card image" />

        <Card.ImgOverlay className="container d-flex flex-column justify-content-center container">
          <Header />

          <div className=" Home col-8">
            <Card.Title className="Title  display-3 fw-bolder mb-3 ">
              ВСЕ ДЛЯ ТЕПЛИЦ
            </Card.Title>
            <Card.Text className="description ">
              Here will be brief information about our company and some of
              advantages of our offers. Here will be brief information about our
              company.
            </Card.Text>
            <button className="homeBtn"> EXPLORE &#xFFEB; </button>
          </div>
        </Card.ImgOverlay>
        <div className="rightCol ">
          <img className="HomeImg" src={HomeArrow} alt="homeArrow" />
          <div className="Play">
            <div className="Cricle">
              <span className="playBtn">&#9654;</span>
            </div>
          </div>
        </div>
        <div className="bottomImg"></div>
      </Card>
    </>
  );
}