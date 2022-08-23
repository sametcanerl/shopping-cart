import store from "./app/store";
import Cart from "./pages/cart/Cart";
import ComingSoon from "./pages/comingsoon/ComingSoon";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Product from "./pages/product/Product";
import ProductList from "./pages/productlist/ProductList";
import Register from "./pages/register/Register";
import AppRouter from "./router/AppRouter";
import {Provider} from "react-redux"
function App() {
  return (
    <Provider store = {store} >
      <AppRouter />
    </Provider>

    // <Home/>
    // <ProductList/>
    // <Product />
    // <Register/>
    // <Login/>
    // <Cart/>
    // <ComingSoon/>
  );
}

export default App;
