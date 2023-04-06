import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Review from './components/Review/Review';
import Main from './components/Layout/Main';
import OrderReview from './components/OrderReview/OrderReview';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: ()=> fetch('tsharts.json')
      },
      {
        path: "contacts0/",
        element: <Contact/>,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "review",
        element: <OrderReview />,
      },
    ],
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
