// marketing-import/src/App.tsx
import React from "react";
import { Routes as RouterRoutes, Route as RouterRoute, Navigate } from "react-router-dom";

import Marketing from "@/pages/Marketing";
import Pricing from "@/pages/Pricing";
import About from "@/pages/About";
import Schedule from "@/pages/Schedule";
import Contact from "@/pages/Contact";
import ScrollToTop from "@/components/ScrollToTop";

export default function App() {
  return (
    <ScrollToTop>
      <RouterRoutes>
        <RouterRoute path="/" element={<Marketing />} />
        {/* Redirect old /marketing links to home */}
        <RouterRoute path="/marketing" element={<Navigate to="/" replace />} />

        <RouterRoute path="/pricing" element={<Pricing />} />
        <RouterRoute path="/about" element={<About />} />
        <RouterRoute path="/schedule" element={<Schedule />} />
        <RouterRoute path="/contact" element={<Contact />} />
      </RouterRoutes>
    </ScrollToTop>
  );
}
