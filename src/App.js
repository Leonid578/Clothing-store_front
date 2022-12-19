import { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Carousel } from "./components/Carousel/Carousel";
import "./components/Carousel/Carousel.style.css";
import Layout from "./components/Theme/Layout";
import { ThemeProvider } from "./components/providers/ThemeProvider";

import PageHitsOfSales from "./components/hitsOfSales/PageHitsOfSales";
import Products from "./components/Products/Products";
const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<h1>Loading....</h1>}>
        <ThemeProvider>
          <Layout>
            <Routes>
              <Route
                path="/Home"
                element={
                  <>
                    <Carousel>
                      <div className="Img1"></div>
                      <div className="Img2"></div>
                      <div className="Img3"></div>
                    </Carousel>
                    <PageHitsOfSales />
                  </>
                }
              />
              {/* <Route path="/Home" element={}></Route> */}
              <Route path="/buy" element={<Products />}></Route>
              {/* <Products /> */}

              <Route path="*" element={<Navigate to="/Home" />} />
            </Routes>
            <Footer />
          </Layout>
        </ThemeProvider>
      </Suspense>
    </>
  );
};

export default App;
