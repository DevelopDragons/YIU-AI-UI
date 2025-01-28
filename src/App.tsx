import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";
import Layout from "./Layout";
import MainPage from "./pages/Main/Main";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* <Routes>
        <Route path="/*" element={<MainPage />} />
      </Routes> */}
      <Layout>
        <Routes>
          <Route path="/*" element={<MainPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
