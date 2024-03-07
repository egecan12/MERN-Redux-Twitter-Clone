import React from "react";
import { Icon } from "antd";

function Footer() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "0",
        width: "100%",
        fontSize: "10px", // Add this line to set the font size to 10
      }}
    >
      <p>
        Developed by Egecan Kahyaoglu <Icon type="smile" />
      </p>
      <p>Thanks for SVGBackgrounds.com</p>
    </div>
  );
}

export default Footer;
