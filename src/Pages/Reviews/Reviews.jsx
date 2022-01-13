import React from "react";
import Banner from "../../Components/Banner/Banner";
import Blog from "../../Components/Blog/Blog";
import Footer from "../../Components/Footer/Footer";
import Testmonial from "../../Components/Testmonial/Testmonial";

const Reviews = () => {
  return (
    <>
      <Banner calenderShow={false} />
      <Testmonial />
      <Blog />
      <Footer />
    </>
  );
};
export default Reviews;
