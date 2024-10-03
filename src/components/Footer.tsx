import "./Footer.css";
import { Instagram } from "../assets/Instagram";
import { Facebook } from "../assets/facebook";
import { LinkedIn } from "../assets/linkedin";
import { Youtube } from "../assets/youtube";
import { Twitter } from "../assets/twitter";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container flex-column">
        <div className="justify-between flex-row align-center upper-footer">
          <h2 className="heading">Landing</h2>

          <h6>2024 @ Your company</h6>
        </div>
        <hr className="footer-seperator" />
        <div className="flex-1 flex-row justify-between align-center lower-footer">
          <div className="flex-1 lower-footer-top">
            <ul className="footer-ul">
              <li className="footer-li">Home</li>
              <li className="footer-li">About</li>
              <li className="footer-li">Contact</li>
            </ul>
          </div>
          <div className="flex-1 flex-row align-center lower-footer-bottom">
            <a className="social-icon">
              <Instagram />
            </a>
            <a className="social-icon">
              <Facebook />
            </a>
            <a className="social-icon">
              <Twitter />
            </a>
            <a className="social-icon">
              <Youtube />
            </a>
            <a className="social-icon">
              <LinkedIn />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
