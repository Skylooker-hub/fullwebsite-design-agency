import Header from "@/widgets/Header";
import Slider from "@/widgets/Slider";
import AboutUs from "@/widgets/AboutUs";
import SuccessCases from "@/widgets/SuccessCases";
import ServiceProcess from "@/widgets/ServiceProcess";
import Team from "@/widgets/Team";
import Banner from "@/widgets/Banner";
import Information from "@/widgets/Information";
import Footer from "@/widgets/Footer";
import { Element } from "react-scroll";
import ScrollToTop from "@/components/ScrollToTop";
import "./index.css";

export default function HomePage() {
  return (
    <>
      <Element name="home">
        <Header />
        <Slider />
      </Element>

      <Element name="aboutUs">
        <AboutUs />
      </Element>

      <Element name="successCases">
        <SuccessCases />
      </Element>

      <Element name="serviceProcess">
        <ServiceProcess />
      </Element>

      <Element name="team">
        <Team />
      </Element>

      <Banner />

      <Element name="information">
        <Information />
      </Element>

      <Footer />

      <ScrollToTop />
    </>
  );
}
