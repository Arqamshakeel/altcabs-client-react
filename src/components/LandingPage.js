import React from "react";
import Navigation from "./navigation";
import Header from "./header";
import Features from "./features";
import About from "./about";
import Services from "./services";
import Gallery from "./gallery";
import Testimonials from "./testimonials";
import Team from "./Team";
import Contact from "./contact";
import JsonData from "../data/data.json";
const LandingPage = () => {
  const [landingPageData, setLandingPageData] = React.useState(JsonData);
  return (
    <div>
      {" "}
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery />
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default LandingPage;
