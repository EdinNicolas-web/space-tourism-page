import React from "react";
import { useLocation, Route, Routes } from "react-router-dom";

// components
import Destination from "../Destination/Destination";
import Home from "../Home/Home";

// motion
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
