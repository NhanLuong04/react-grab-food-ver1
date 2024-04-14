import React from "react";
import Header from "../components/Header/Header.jsx";
import { Routes, Route, Link } from "react-router-dom";
import SearchContainer from "../components/SearchContainer/SearchContainer.jsx";
import ListOfRestaurants from "./ListOfRestaurants.jsx";
import Slider from "../components/Slider/Slider.jsx";
import Title from "../components/Title/Title.jsx";
import Button from "../components/Button/Button.jsx";
import Category from "../components/Category/Category.jsx";
import Benefit from "../components/Benefit/Benefit.jsx";
import ReadMore from "../components/ReadMore/ReadMore.jsx";
import BottomBanner from "../components/BottomBanner/BottomBanner.jsx";
import Footer from "../components/Footer/Footer.jsx";
import "./App.css";
import "react-multi-carousel/lib/styles.css";
export default function HomePage() {
  const bgImage1 = "https://food.grab.com/static/page-home/VN-new-2.jpg";
  const bgImage2 = "https://food.grab.com/static/page-home/VN-new-1.jpg";
  const bgStyle = {
    width: "100%",
    height: "52vh",
    objectFit: "cover",
  };
  return (
    <div>
      <Header />
      <img style={bgStyle} src={bgImage1} alt="background" />
      <SearchContainer />
      <div className="promotion-section container">
        <div className="promotion-container m-40">
          <Title p_1="Ưu đãi GrabFood tại" p_2="Location" />
          <Slider />
          <Link to="/restaurants">
            <Button>See more promotions</Button>
          </Link>
          <Title p_1="There's something for everyone!" />
          <Category />
          <Title p_1="Vì sao bạn nên Order trên GrabFood?" />
          <Benefit />
          <Title p_1="Những câu hỏi thường gặp" />
          <ReadMore />
        </div>
      </div>
      <BottomBanner />
      <Footer />
    </div>
  );
}
