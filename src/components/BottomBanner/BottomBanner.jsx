import React from "react";
import "./BottomBanner.css";
export default function BottomBanner() {
  return (
    <div className="bottom-banner">
      <div className="bottome-banner-container">
        <div className="bottom-banner-content">
          <div className="bottom-content">
            <img
              src="https://food.grab.com/static/page-home/bottom-food-options.svg"
              alt="logo"
            />
            <h2>Curated restaurants</h2>
            <p>
              From small bites to big meals, we won't limit your appetite. Go
              ahead and order all you want.
            </p>
            <div className="bottom-content-fake"></div>
          </div>
          <div className="bottom-content">
            <img
              className="bottom-content-logo"
              src="https://food.grab.com/static/images/ilus-cool-features-app.svg"
              alt="logo"
            />
            <h2>More cool features available on the app</h2>
            <p>
              Download Grab app to use other payment methods and enjoy seamless
              communication with your driver.
            </p>
            <div className="bottom-content-app">
              <img
                src="https://food.grab.com/static/images/logo-appstore.svg"
                alt="app"
                className="bottom-app"
              />
              <img
                src="https://food.grab.com/static/images/logo-playstore.svg"
                alt="app"
                className="bottom-app"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
