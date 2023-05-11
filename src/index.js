import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './Components/Navbar';
import ProductCard from './Components/ProductCard';
import Slider from './Components/Slider';

//rounter 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar/>,
    path: "/",
    element: <ProductCard/>,
    path: "/",
    element: <Slider/>,
    
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
    <App />
  </React.StrictMode>
);

