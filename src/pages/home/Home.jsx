import Categories from "../../components/categories/Categories";

import PopularProducts from "../../components/popularproducts/PopularProducts";

import Slider from "../../components/slider/Slider";

const Home = () => {
  return (
    <>
      <Slider />
      <Categories />
      <PopularProducts />
    </>
  );
};

export default Home;
