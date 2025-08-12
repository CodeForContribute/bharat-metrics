import React from "react";
import NavbarComponent from "../components/NavbarComponent";
import FooterSection from "../components/FooterSection";
import { CareersComponent } from "../components/CarrersPageComponent/CareersComponent";
import NotFound from "@/pages/NotFound.tsx";

export function Careers() {
  return (
    <div className="min-h-screen">
      <NavbarComponent />
      {/*<CareersComponent />*/}
        <NotFound />
      <FooterSection />
    </div>
  );
}
