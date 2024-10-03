import { FifthSectionGraphic } from "../assets/FifthSectionGraphic";
import { FourthSectionGraphic } from "../assets/FourthSectionGraphic";
import { ThirdSectionGraphic } from "../assets/ThirdSectionSection";

function FeatureSection({
  featureType,
}: {
  featureType: "mobile" | "email" | "inbox";
}) {
  return (
    <div
      className={`mobile-landing-section ${
        featureType === "email" ? "mobile-extra-landing-section" : ""
      }`}
    >
      {featureType === "inbox" ? (
        <ThirdSectionGraphic />
      ) : featureType === "mobile" ? (
        <FourthSectionGraphic />
      ) : (
        <FifthSectionGraphic />
      )}
      <div className="flex-1 landing-intro">
        <div className="landing-intro-div">
          <span className="landing-title text-left">
            Light, Fast & Powerful
          </span>
          <br />
          <span className="landing-desc text-left">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </span>
          <br />
          {featureType === "email" ? (
            <button className="buy-now-button margin-top-2">
              Purchase Now
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default FeatureSection;
