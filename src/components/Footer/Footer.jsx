import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-top">
            <img
              src="https://food.grab.com/static/images/logo-grabfood-white2.svg"
              alt="logo"
            />
          </div>
          <hr />
          <div className="footer-mid">
            <div className="footer-mid-about">
              <span>Về GrabFood</span>
              <span>Về Grab</span>
              <span>Blog</span>
            </div>
            <div className="footer-mid-driver">
              <span>Mở quán trên GrabFood</span>
              <span>Trở thành tài xế Grab</span>
            </div>
            <div className="footer-mid-help">
              <span>Trung tâm hỗ trợ</span>
              <span>Câu hỏi thường gặp</span>
            </div>
            <div className="footer-mid-sm">
              <span>
                <i className="fa-brands fa-square-facebook"></i>
              </span>
              <span>
                <i className="fa-brands fa-square-instagram"></i>
              </span>
              <span>
                <i className="fa-brands fa-square-twitter"></i>
              </span>
            </div>
          </div>
          <hr />
          <div className="footer-bot">
            <div className="footer-bot-app">
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
            <div className="footer-bot-liscense">
              <span>&copy; 2024 Grab</span>
              <span>Câu hỏi thường gặp &bull; Chính sách bảo mật</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
