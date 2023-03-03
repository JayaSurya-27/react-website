import { Link } from "react-router-dom";
import "./card.css";

const Carditem = (props) => {
  return (
    <li className="cards-item">
      <Link className="cards-item-link" to={props.path}>
        <figure className="cards-item-pic-wrap" data-category={props.category}>
          <img src={props.src} className="cards-item-img"></img>
        </figure>
        <div className="cards-item-info">
          <h5 className="cards-item-text">{props.text}</h5>
        </div>
      </Link>
    </li>
  );
};
export default Carditem;
