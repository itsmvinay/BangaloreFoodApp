import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from './src/components/About';
import Contact from './src/components/Contact';
import RestaurantMenu from './src/components/RestaurantMenu';
import Error from './src/components/Error';
import { createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
// import Grocery from "./src/components/Grocery";

const Grocery = lazy(() => import('./src/components/Grocery'));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};


const appRouter = createBrowserRouter([
  {
    path: "/", 
    element: <AppLayout/>,
    children: [
      {
        path: "/", 
        element: <Body/> 
      },
      {
        path: "/grocery", 
        element: <Suspense fallback="{<h1>Loading...</h1>}"><Grocery/></Suspense>
      },
      {
        path: "/about", 
        element: <About/> 
      },
      {
        path: "/contact",
         element: <Contact /> 
        },
        {
        path: "/restaurants/:resId",
        element: <RestaurantMenu /> 
       },
    ],
    errorElement: <Error />
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
