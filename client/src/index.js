import React from 'react';
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

// pages
import Landing from './pages/landing'

// pagination
import Faq from './pages/pagination/faq'
import Team from './pages/pagination/team'
import Partners from './pages/pagination/partners'
import Terms from './pages/pagination/terms'
import Dashboard from './pages/pagination/dashboard';
import Shop from './pages/pagination/shop';

// Shop
import Payment from './pages/pagination/shop/payment';
import Item from './pages/pagination/shop/item.js';
import Checkout from './pages/pagination/shop/checkout';
import Success from './pages/pagination/success';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing/>,
    },
    {
      path: "/faq",
      element: <Faq/>,
    },
    {
      path: "/team",
      element: <Team/>,
    },
    {
      path: "/terms",
      element: <Terms/>,
    },
    {
      path: '/shop',
      element: <Shop/>
    },
    {
      path: '/item',
      element: <Item/>
    },
    {
      path: '/checkout',
      element: <Checkout/>
    },
    {
      path: '/payment',
      element: <Payment/>
    },
    {
      path: '/success',
      element: <Success/>
    },
    {
      path:'/dashboard',
      element: <Dashboard/>
    },
    {
      path: '/partners',
      element: <Partners/>
    }
    
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );