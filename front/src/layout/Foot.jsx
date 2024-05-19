import React from "react";
import "./foot.css";
const Foot = () => {
  return (
    <div className="foot">
      <div>
        <h1>
          Estore<span>.</span>
        </h1>
        <p style={{ color: "grey", marginTop: "30px" }}>
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipisicing elit sed
          <br />
          do eiusmod tempor incididunt
          <br />
          ut labore.
        </p>
      </div>

      <div>
        <h1 style={{ fontWeight: "400" }}>Quick Links</h1>
        <p style={{ color: "grey", marginTop: "30px" }}>About</p>
        <p style={{ color: "grey", marginTop: "10px" }}>Offers & Discounts</p>
        <p style={{ color: "grey", marginTop: "10px" }}>Get Coupon</p>
        <p style={{ color: "grey", marginTop: "10px" }}>Contact Us</p>
      </div>

      <div>
        <h1 style={{ fontWeight: "400" }}>New Products</h1>
        <p style={{ color: "grey", marginTop: "30px" }}>Woman Cloth</p>
        <p style={{ color: "grey", marginTop: "10px" }}>Fashion Accessories</p>
        <p style={{ color: "grey", marginTop: "10px" }}>Man Accessories</p>
        <p style={{ color: "grey", marginTop: "10px" }}>Rubber made Toys</p>
      </div>

      <div>
        <h1 style={{ fontWeight: "400" }}>Support</h1>
        <p style={{ color: "grey", marginTop: "30px" }}>
          Frequently Asked Questions
        </p>
        <p style={{ color: "grey", marginTop: "10px" }}>Terms & Conditions</p>
        <p style={{ color: "grey", marginTop: "10px" }}>Privacy Policy</p>
        <p style={{ color: "grey", marginTop: "10px" }}>Privacy Policy</p>
        <p style={{ color: "grey", marginTop: "10px" }}>
          Report a Payment Issue
        </p>
      </div>
    </div>
  );
};

export default Foot;
