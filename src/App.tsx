import { IntroLogo } from "./assets/intro";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="container">
        <div className="hero-background" />
        <Navbar />
        <div className="landing">
          <div className="landing-info">
            <div>
              <h1 className="landing-title">
                Introduce Your Product <br />
                Quickly & Effectively
              </h1>
              <p className="landing-desc">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim.
              </p>
              <div className="button-container">
                <button className="buy-now-button margin-right">
                  Puchase UI Kit
                </button>
                <button className="outlined-button">Learn More</button>
              </div>
            </div>
          </div>
          <div className="landing-background">
            <div className="hero-foreground" />
          </div>
        </div>

        <div className="mobile-landing-section">
          <div className="landing-intro">
            <div className="landing-intro-info">
              <h1 className="landing-title text-left">
                Light, Fast & Powerful
              </h1>
              <p className="landing-desc text-left padding-0">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim.
              </p>
              <div className="flex-row margin-top">
                <div className="flex-5 flex-column column-section">
                  <IntroLogo />
                  <text className="feature-title">Title goes here</text>
                  <text className="feature-desc">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor.{" "}
                  </text>
                </div>
                <div className="seperator" />
                <div className="flex-5 flex-column column-section">
                  <IntroLogo />
                  <text className="feature-title">Title goes here</text>
                  <text className="feature-desc">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor.{" "}
                  </text>
                </div>
              </div>
            </div>
          </div>
          <div className="landing-graphic" />
        </div>

        <div className="mobile-landing-section">
          <div className="third-graphic" />
          <div className="landing-intro">
            <div className="landing-intro-info">
              <h1 className="landing-title text-left">
                Light, Fast & Powerful
              </h1>
              <p className="landing-desc text-left padding-0">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim.
              </p>
            </div>
          </div>
        </div>

        <div className="mobile-landing-section">
          <div className="fourth-graphic" />
          <div className="landing-intro">
            <div className="landing-intro-info">
              <h1 className="landing-title text-left">
                Light, Fast & Powerful
              </h1>
              <p className="landing-desc text-left padding-0">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim.
              </p>
            </div>
          </div>
        </div>

        <div className="mobile-landing-section">
          <div className="fifth-graphic" />
          <div className="landing-intro">
            <div className="landing-intro-info landing-intro-info-align-start">
              <h1 className="landing-title text-left">
                Light, Fast & Powerful
              </h1>
              <p className="landing-desc text-left padding-0">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim.
              </p>
              <div>
                <button className="buy-now-button">Purchase Now</button>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom-section">
          <div className="bottom-pricing">
            <div className="bottom-pricing-info">
              <h1 className="landing-title text-center">
                A Price To Suit Everyone
              </h1>
              <p className="text-center landing-desc ">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
              </p>
              <h1 className="landing-title text-center">$40</h1>
              <p className="landing-desc padding-0 text-center">
                UI Design Kit
              </p>
              <div>
                <p className="landing-desc padding-0 text-center">
                  See, One price. Simple.
                </p>
                <button className="buy-now-button">Purchase Now</button>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
