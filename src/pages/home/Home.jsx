
import Announcement from "../../components/announcement/Announcement";
import Categories from "../../components/categories/Categories";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import PopularProduct from "../../components/popularproduct/PopularProduct";

import Slider from "../../components/slider/Slider";

const Home = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <PopularProduct/>
      <Footer/>

     
   
    </>
  );
};

export default Home;
