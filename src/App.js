import React from "react";

import {Home} from './pages/Home'
import { Contact } from "./pages/Contact";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import { Route, Routes } from "react-router-dom";
import { Service } from "./pages/Service";
import { Blog } from "./pages/Blog";
import { About } from "./pages/About";

function App() {
  return (
    <>
    <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
    </>
  );
}

export default App;
