import { useEffect } from "react";
import Categories from "../../components/categories/Categories";

import PopularProducts from "../../components/popularproducts/PopularProducts";

import Slider from "../../components/slider/Slider";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
  }, []);
  return (
    <>
      <Slider />
      <Categories />
      <PopularProducts />
    </>
  );
};

export default Home;
