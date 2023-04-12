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

import Health from "./components/Page/Health/Health";
import ActiveComponent from "./components/Page/ActiveComponent/ActiveComponent";
import Programs from "./components/Page/Programs/Programs";
import Beauty from "./components/Page/Beauty/Beauty";
import Protection from "./components/Page/Protection/Protection";

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
              <Route path="/health" element={<Health />}></Route>
              <Route
                path="/active-component"
                element={<ActiveComponent />}
              ></Route>
              <Route path="/programs-and-packs" element={<Programs />}></Route>
              <Route path="/beauty" element={<Beauty />}></Route>
              <Route path="/protection" element={<Protection />}></Route>
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
