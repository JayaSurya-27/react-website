import Carditem from "./card-item.js";
import "./card.css";

const Cards = () => {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations !</h1>
      <div className="cards-container">
        <ul className="cards-items">
          <Carditem
            category={"Adventure"}
            src="Images/img-9.jpg"
            text={"Explore the hidden Waterfall deep in the jungles of Amazon"}
            path={"/services"}
          />
          <Carditem
            src=" images/img-2.jpg"
            text="Travel through the Islands of Bali in a Private Cruise"
            category="Luxury"
            path="/services"
          />
        </ul>
        <ul className="cards-items">
          <Carditem
            src="images/img-3.jpg"
            text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
            category="Mystery"
            path="/services"
          />
          <Carditem
            src="images/img-4.jpg"
            text="Experience Football on Top of the Himilayan Mountains"
            category="Adventure"
            path="/products"
          />
          <Carditem
            src="images/img-8.jpg"
            text="Ride through the Sahara Desert on a guided camel tour"
            category="Adrenaline"
            path="/sign-up"
          />
        </ul>
      </div>
    </div>
  );
};

export default Cards;
