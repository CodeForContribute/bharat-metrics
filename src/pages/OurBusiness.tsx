import React from "react";
import NavbarComponent from "../components/NavbarComponent";
import FooterSection from "../components/FooterSection";
import NotFound from "@/pages/NotFound.tsx";

export function OurBusiness() {
  return (
    <div className="min-h-screen">
      <NavbarComponent />
        <NotFound/>
      <FooterSection />
    </div>
  );
}
