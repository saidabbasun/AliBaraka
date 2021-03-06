import React from "react";
import "../Style/About.scss";
import Tractor from "../assets/Images/Tractor.png";
import AboutImg1 from "../assets/Images/AboutImg1.png";
import AboutImg2 from "../assets/Images/AboutImg2.png";
import Bulut from "../assets/Images/Bulut.png";
import Tree from "../assets/Images/Tree.png";
import Group from "../assets/Images/Group 1279.png";
import CricleArrow from "../assets/Images/CricleArrow.png";
import { Card } from "react-bootstrap";
export default function About() {
  return (
    <div>
      <div className="container" id="about">
        <div className=" d-flex">
          <Card className="bg-white   border-0">
            <div className="TitleWrapper col-6">
              <h4 className=" ProductsTitle">little ABout our company </h4>
              <p className="ProductsDescription">
                "Your work is going to fill a large part of your life, and the
                only way to be truly satisfied is to do what you believe is
                great work. And the only way to do great work is to love what
                you do."
              </p>
              <div className="BtnWrapper">
                <a href="/">
                <button className="AboutBtn"> More About </button>
                </a>
                <a href="/" className="Link">
                  OUR YOUTUBE
                </a>
              </div>
            </div>
          </Card>
          <div className="AboutImg ">
            <img className="AboutImg1" src={AboutImg1} alt="" />
            <img className="AboutImg2" src={AboutImg2} alt="" />
            <img className="Tractor" src={Tractor} alt="" />
            <img className="Bulut" src={Bulut} alt="" />
          </div>
        </div>
      </div>
      <img className="TreeImg" src={Tree} alt="Tree" />
      <div className="AboutBottomImg">
        <p className="Text">
          Trused <br /> by
        </p>
        <img src={Group} alt="Logo" />
        <img src={CricleArrow} alt="arrow" />
      </div>
    </div>
  );
}
