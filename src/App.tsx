import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import FeatureGraphic from "./components/FeatureGraphic";
import FeatureSection from "./components/FeatureSection";
import PricingSection from "./components/Pricing";
import { Background } from "./assets/background";

function App() {
  return (
    <div className="landing-page-container">
      <Background />
      <Navbar />
      {/* <HeroSection />

      <FeatureGraphic />

      <FeatureSection featureType="inbox" />
      <FeatureSection featureType="mobile" />
      <FeatureSection featureType="email" />

      <PricingSection /> */}

      <Footer />
    </div>
  );
}

export default App;
