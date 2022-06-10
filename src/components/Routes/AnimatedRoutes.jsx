import React from "react";
import { useLocation, Route, Routes } from "react-router-dom";

// motion
import { AnimatePresence } from "framer-motion";

// components
import Destination from "../Destination/Destination";
import Home from "../Home/Home";
import Crew from "../Crew/Crew";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
