import "./hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <br></br>
      <div className="hero-btns">
        <button className="btn , btn-outline">GET STARTED</button>
        <button className="btn , btn-primary">
          WATCH TRAILER <i className="far fa-play-circle"></i>
        </button>
      </div>
    </div>
  );
};

export default Hero;
