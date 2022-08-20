
import Announcement from "../components/announcement/Announcement";
import Categories from "../components/categories/Categories";
import Navbar from "../components/navbar/Navbar";
import PopularProducts from "../components/popularproducts/PopularProducts";

import Slider from "../components/slider/Slider";

const Home = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <PopularProducts/>
     
   
    </>
  );
};

export default Home;
