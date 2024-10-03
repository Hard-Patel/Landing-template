import { IntroLogo } from "../assets/intro";
import { MobileFeatureGraphic } from "../assets/MobileFeatureGraphic";

function FeatureGraphic() {
  return (
    <div className="mobile-landing-section mobile-landing-section-reverse">
      <div className="landing-intro">
        <div className="landing-intro-div">
          <span className="landing-title text-left">
            Light, Fast & Powerful
          </span>
          <br />
          <span className="landing-desc text-left padding-0">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </span>
          <div className="flex-row feature-section-margin">
            <div className="flex-5 flex-column column-section">
              <IntroLogo />
              <span className="feature-title">Title goes here</span>
              <span className="feature-desc">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.
              </span>
            </div>
            <div className="seperator" />
            <div className="flex-5 flex-column column-section">
              <IntroLogo />
              <span className="feature-title">Title goes here</span>
              <span className="feature-desc">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.
              </span>
            </div>
          </div>
        </div>
      </div>
      <MobileFeatureGraphic />
    </div>
  );
}

export default FeatureGraphic;
