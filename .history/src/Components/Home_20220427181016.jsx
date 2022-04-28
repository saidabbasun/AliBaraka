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
   <div className="CardWrapper">

   </div>
         
        <div className="bottomImg"></div>
      </Card>
    </>
  );
}
