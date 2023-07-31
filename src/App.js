import React, { lazy, Suspense, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import NavigationBar from "./Components/NavigationBar.js";
import Body from "./Components/Body.jsx";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import Aboutus from "./Components/Aboutus.js";
import Error from "./Components/ErrorComponent.js";
import SingleResMenu from "./Components/SingleResMenu.js";
// import Contactus from "./Components/Contactus.js";
import UserContext from "../utils/UserContext.js";
import { Provider } from "react-redux";
import store from "../utils/store.js";
import Cart from "./Components/Cart.js";
const Contactus = lazy(() => import("./Components/Contactus.js"));
const Aboutus = lazy(() => import("./Components/Aboutus.js"));
const AppLayOut = () => {
  const [useData, setUseData] = useState();
  const [check, setCheck] = useState(false);
  useEffect(() => {
    // call to DB fetching data
    const data = {
      loggedInUser: "Prashant",
      check: false,
    };
    setUseData(data?.loggedInUser);
    setCheck(data?.check);
  }, []);

  return (
   
      <Provider store={store}>
        <NavigationBar />
        <Outlet />
      </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayOut />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Aboutus />
          </Suspense>
        ),
      },
      {
        path: "/contactus",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Contactus />
          </Suspense>
        ),
      },
      {
        path: "/restaurents/:resId",
        element: <SingleResMenu />,
      },
      ,
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
