import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "../Components/aboutUs/AboutUs";
import AdminPage from "../Page/AdminPage";

import HomePage from "../Page/HomePage";
import NotFoundPage from "../Page/NotFoundPage";
import ProductsPage from "../Page/ProductsPage";
import RegisterPage from "../Page/RegisterPage";
import AuthPage from "../Page/AuthPage";
import Verify from "../Components/register/Verify";
import Madalka from "../Components/register/Madalka";
import PaymentPage from "../Page/PaymentPage";
import ContactUsPage from "../Page/ContactUsPage";
import Moshennik from "../Components/moshennik/Moshennik";
import Cart from "../Components/Cart/Cart";
import ProductDetailsPage from "../Page/ProductDetailsPage";
import EditProductPage from "../Page/EditProductPage";
import FirstComics from "../ComicsPage/FirstComics/FirstComics";
import SecondComics from "../ComicsPage/SecondComics/SecondComics";
import FourComics from "../ComicsPage/FourComics/FourComics";
import ThreeComics from "../ComicsPage/ThreeComics/ThreeComics";
import FiveComics from "../ComicsPage/AllComicsPage/FiveComics";
import SixComics from "../ComicsPage/AllComicsPage/SixComics";
import SevenComics from "../ComicsPage/AllComicsPage/SevenComics";
import EightComics from "../ComicsPage/AllComicsPage/EightComics";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/products",
      element: <ProductsPage />,
      id: 1,
    },
    {
      link: "/",
      element: <HomePage />,
      id: 2,
    },
    {
      link: "/login",
      element: <AuthPage />,
      id: 3,
    },
    {
      link: "*",
      element: <NotFoundPage />,
      id: 4,
    },
    {
      link: "/payment",
      element: <PaymentPage />,
      id: 5,
    },
    {
      link: "/admin",
      element: <AdminPage />,
      id: 6,
    },
    {
      link: "/contacts",
      element: <ContactUsPage />,
      id: 7,
    },
    {
      link: "/cart",
      element: <Cart />,
      id: 8,
    },
    {
      link: "/register",
      element: <RegisterPage />,
      id: 8,
    },
    {
      link: "/about",
      element: <AboutUs />,
      id: 9,
    },
    {
      link: "/moshennik",
      element: <Moshennik />,
      id: 11,
    },
    {
      link: "/products/:id",
      element: <ProductDetailsPage />,
      id: 12,
    },
    {
      link: "/edit/:id",
      element: <EditProductPage />,
      id: 13,
    },
    {
      link: "/1comics",
      element: <FirstComics />,
      id: 14,
    },
    {
      link: "/2comics",
      element: <SecondComics />,
      id: 15,
    },
    {
      link: "/3comics",
      element: <ThreeComics />,
      id: 16,
    },
    {
      link: "/4comics",
      element: <FourComics />,
      id: 17,
    },
    {
      link: "/5comics",
      element: <FiveComics />,
      id: 18,
    },
    {
      link: "/6comics",
      element: <SixComics />,
      id: 19,
    },
    {
      link: "/7comics",
      element: <SevenComics />,
      id: 20,
    },
    {
      link: "/8comics",
      element: <EightComics />,
      id: 21,
    },
  ];
  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id}></Route>
      ))}
    </Routes>
  );
};

export default MainRoutes;
