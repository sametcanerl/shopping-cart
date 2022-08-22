import AppRouter from "./router/AppRouter";
import { Provider } from "react-redux";
import { getStore } from "./redux";

function App() {
  const store = getStore();
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
