// import {categories} from "../../data"
import CategoryItem from "../categoryitem/CategoryItem";
import { Container } from "./Categories.stlye";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../features/dataSlice";
import { useEffect } from "react";
const Categories = () => {
  //Redux Toolkit ve Thunk bilgilerini pekiştirmek  amacı için kullanılmıştır.
  //API'den veri çekme similasyonu gibi düşünülebilir.
  //İlgili Data'yı ilgili componentte direkt import edip kullanabilirdik.
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <Container>
      {categories?.map((item) => (
        <CategoryItem key={item.id} {...item} />
      ))}
    </Container>
  );
};

export default Categories;
