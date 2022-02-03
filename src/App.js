import { Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Navigator from "./navigator";
import store from "./store/store";

function App() {
  return (
    <Suspense fallback={<h1>Чето тут есть</h1>}>
      <Provider store={store}>
        <BrowserRouter>
          <Navigator />
        </BrowserRouter>
      </Provider>
    </Suspense>
  );
}

export default App;
