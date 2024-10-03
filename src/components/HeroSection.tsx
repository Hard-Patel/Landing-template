import { HeroForeground } from "../assets/HeroForeground";

function HeroSection() {
  return (
    <div className="container">
      <div className="landing-info">
        <span className="landing-title">
          Introduce Your Product <br />
          Quickly & Effectively
        </span>
        <span className="landing-desc margin-top-2">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </span>
        <div className="button-container margin-top-2">
          <button className="buy-now-button">Puchase UI Kit</button>
          <span className="spacer-button-right" />
          <button className="outlined-button">Learn More</button>
        </div>
      </div>
      <HeroForeground />
    </div>
  );
}

export default HeroSection;
