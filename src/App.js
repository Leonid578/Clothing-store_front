import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header/HeaderMenu";
import Footer from "./components/Footer/Footer";
import { Carousel } from "./components/Carousel/Carousel";
import "./components/Carousel/Carousel.style.css";
import Layout from "./components/Theme/Layout";
import { ThemeProvider } from "./components/providers/ThemeProvider";
import PageHitsOfSales from "./components/hitsOfSales/PageHitsOfSales";
import Search from "./components/Search/Search";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import Instagram from "./components/Instagram/PageInstagram";
import Description from "./components/Description/description";

import Product1 from "./components/Page/product1";
import Product2 from "./components/Page/product2";
import Product3 from "./components/Page/product3";
import Product4 from "./components/Page/product4";
import Product5 from "./components/Page/product5";
import Product6 from "./components/Page/product6";

const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<h1>Loading...</h1>}>
        <ThemeProvider>
          <Layout>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Carousel />
                    <PageHitsOfSales />
                    <Instagram />
                    <Description />
                  </>
                }
              />
              <Route path="/product1" element={<Product1 />}></Route>
              <Route path="/product2" element={<Product2 />}></Route>
              <Route path="/product3" element={<Product3 />}></Route>
              <Route path="/product4" element={<Product4 />}></Route>
              <Route path="/product5" element={<Product5 />}></Route>
              <Route path="/product6" element={<Product6 />}></Route>
              <Route path="/buy" element={<Search />}></Route>
              <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <Footer />
          </Layout>
        </ThemeProvider>
      </Suspense>
    </>
  );
};

export default App;
