import { Link } from "react-router-dom";
import "./SectionThree.css";

function SectionThree() {
  return (
    <div className="section-divider-container" id="section-three-container" >
      <div className="section-divider-img">
        <img loading="lazy" src="/media/section-three-img.webp" alt=" " />
      </div>
      <div className="section-divider-info">
        <div className="section-divider-text">
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
