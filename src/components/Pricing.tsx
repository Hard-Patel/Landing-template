function PricingSection() {
  return (
    <div className="bottom-section">
      <div className="flex flex-column bottom-pricing-info">
        <span className="landing-title text-center">
          A Price To Suit Everyone
        </span>
        <span className="text-center landing-desc pricing-desc">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus
        </span>
        <br />
        <span className="landing-title text-center">$40</span>
        <span className="landing-desc padding-0 text-center">
          UI Design Kit
        </span>
        <br />
        <span className="landing-desc padding-0 text-center">
          See, One price. Simple.
        </span>
        <button className="buy-now-button pricing-section-button">Purchase Now</button>
      </div>
    </div>
  );
}

export default PricingSection;
