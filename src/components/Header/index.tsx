import * as React from "react";
import "./index.less";

const Header = () => {
  return (
    <>
      <div className="logo_products">
        <div className="container">
          <div className="w3ls_logo_products_left">
            <h1>
              <a href="index.html">
                <span>CREEBOO</span> Store
              </a>
            </h1>
          </div>
          <div className="w3ls_logo_products_left1">
            <ul className="special_items">
              <li>
                <a href="events.html">Sản phẩm</a>
                <i>/</i>
              </li>
              <li>
                <a href="about.html">About Us</a>
                <i>/</i>
              </li>
              <li>
                <a href="products.html">Bán chạy</a>
                <i>/</i>
              </li>
              <li>
                <a href="services.html">Dịch vụ</a>
              </li>
            </ul>
          </div>
          <div className="w3ls_logo_products_left1">
            <ul className="phone_email">
              <li>
                <i className="fa fa-phone" aria-hidden="true"></i>(+0123) 234
                567
              </li>
              <li>
                <i className="fa fa-envelope-o" aria-hidden="true"></i>
                <a href="mailto:store@creboo.com">store@creboo.com</a>
              </li>
            </ul>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
    </>
  );
};
export default Header;
