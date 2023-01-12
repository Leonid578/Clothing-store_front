import { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Carousel } from "./components/Carousel/Carousel";
import "./components/Carousel/Carousel.style.css";
import Layout from "./components/Theme/Layout";
import { ThemeProvider } from "./components/providers/ThemeProvider";

import PageHitsOfSales from "./components/hitsOfSales/PageHitsOfSales";
// import Products from "./components/Products/Products";
import Search from "./components/Search/SearchKG";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<h1>Loading....</h1>}>
        <ThemeProvider>
          <Layout>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Carousel />
                    <PageHitsOfSales />
                  </>
                }
              />
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
