import React from "react";
import SectionPage from "./sectionpage/SectionPage";
import FooterPage from "./footerpage/FooterPage";
import HeaderPage from "./header/Header";


function HomePage() {

    return (
        <>
        <div className="nav-btn-div">
           <HeaderPage />
          <SectionPage /> 
          <FooterPage/> 
        </div>

        </>
    )
}

export default HomePage;