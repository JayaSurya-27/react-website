import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p>Join the Adventure newsletter to receive our best vaccation deals</p>
        <p>You can Unsubscribe anytime</p>
        <div className="input-areas">
          <form>
            <input type="email" name="email" placeholder="Your email" />
            <button className="footer-btn" type="submit">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Destinations</Link>
            <Link to="/">Sponsorships</Link>
          </div>
        </div>

        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Videos</h2>
            <Link to="/">Submit Video</Link>
            <Link to="/">Ambassadors</Link>
            <Link to="/">Agency</Link>
            <Link to="/">Influencer</Link>
          </div>
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>

      <div className="social-media-wrap">
        <div className="social-logo">
          <Link className="social-icon-link facebook" to="/" target="_blank">
            TRVL &nbsp;
            <i className="fab fa-typo3" />
          </Link>
        </div>
        <samll className="small"> TRVL ©</samll>
        <div className="social-icons">
          <Link to="/">
            <i className="fab fa-facebook" />
          </Link>
          <Link to="/">
            <i className="fab fa-instagram" />
          </Link>
          <Link to="/">
            <i className="fab fa-twitter" />
          </Link>
          <Link to="/">
            <i className="fab fa-linkedin" />
          </Link>
          <Link to="/">
            <i className="fab fa-youtube" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
