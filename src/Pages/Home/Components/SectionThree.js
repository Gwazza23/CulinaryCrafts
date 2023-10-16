import { Link } from "react-router-dom";
import "./SectionThree.css";

function SectionThree() {
  return (
    <div className="section-three-container">
      <div className="section-three-pt1">
        <img loading="lazy" src="/media/section-three-img.webp" alt=" " />
      </div>
      <div className="section-three-pt2">
        <div className="section-three-text">
          <h2>Indulge Your Taste Buds</h2>
          <p>
            Embark on a culinary journey with our diverse selection of
            mouthwatering dishes. Whether you crave comforting classics, exotic
            delights, or healthy options, we've got it all. From savory soups to
            delectable desserts, we've got something to satisfy every craving
          </p>
          <Link>Dish Types</Link>
        </div>
      </div>
    </div>
  );
}

export default SectionThree;
