import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";

const options = {
  burgerColor: "#25D366",
  burgerColorHover: "#eb4034",
  logo,
  //logoWidth: "20vmax",
  //logoWidth: "15vmax",
  // link1Transition: 3,
  link1AnimationTime: 1, //home
  link2AnimationTime: 0.6, //product
  link3AnimationTime: 1, //contact
  link4AnimationTime: 0.6, //about
  logoHeight: "12%",
  navColor1: "white",
  logoHoverSize: "10px",
  logoHoverColor: "#25D366",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "1.6vmax",
  // link1Color: "rgba(35, 35, 35,0.8)",
  link1Color: "#62bd69",
  nav1justifyContent: "center",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#eb4034",
  link1Margin: "1vmax",
  profileIconUrl: "/login",
  profileIconColor: "rgba(35, 35, 35,0.8)",
  searchIconColor: "rgba(35, 35, 35,0.8)",
  cartIconColor: "rgba(35, 35, 35,0.8)",
  profileIconColorHover: "#eb4034",
  searchIconColorHover: "#eb4034",
  cartIconColorHover: "#eb4034",
  cartIconMargin: "1vmax",
  searchIconAnimationTime: 0.8,
  cartIconAnimationTime: 1.2,
  profileIconAnimationTime: 1.5,
};

const Header = () => {
  return <ReactNavbar {...options} />;
};

export default Header;
