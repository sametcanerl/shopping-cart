
import {categories} from "../../data"
import CategoryItem from "../categoryitem/CategoryItem"
import { Container } from "./Categories.stlye"

const Categories = () => {
  return (
    <Container>
        {categories.map((item)=> <CategoryItem key={item.id} {...item} />
        
        )}
    </Container>
  )
}

export default Categories