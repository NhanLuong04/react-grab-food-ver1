import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import NavBar from "../components/NavBar/NavBar";
import ListFoods from "../components/ListFoods/ListFoods";
import { useParams } from "react-router-dom";
import { promo_foods, responsive } from "../data/data";
import FoodDetails from "../components/FoodDetails/FoodDetails";
import DateTimeDelivery from "../components/DateTimeDelivery/DateTimeDelivery";
import SlideShow from "../components/SlideShow/SlideShow";
import CategoryDetails from "../components/CategoryDetails/CategoryDetails";
import Footer from "../components/Footer/Footer";

export default function RestaurantDetails() {
  const { id } = useParams();
  const idNumber = parseInt(id, 10);
  const selectedFood = promo_foods.find((food) => food.id === idNumber);
  const listCategory = selectedFood.items.map((item) => (
    <SlideShow key={item.id} id={item.id} category={item.category} />
  ));
  return (
    <>
      <NavBar />
      <div className="break-p"></div>
      <div className="promotion-section container">
        <div className="promotion-container m-40">
          <ListFoods
            rootLink="Trang chủ"
            rootLink1="Nhà hàng"
            currentPage={selectedFood.name}
          />
          <FoodDetails
            name={selectedFood.name}
            category={selectedFood.category}
            rate={selectedFood.rate}
            mins={selectedFood.mins}
            dist={selectedFood.dist}
            promo={selectedFood.promo}
            open={selectedFood.open}
          />
          <DateTimeDelivery />
          <Carousel responsive={responsive}>{listCategory}</Carousel>
        </div>
      </div>
      <CategoryDetails idPrev={idNumber} />
      <Footer />
    </>
  );
}
