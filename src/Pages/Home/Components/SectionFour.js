import "./SectionFour.css";
import { Link } from "react-router-dom";

function SectionFour() {
  return (
    <div className="section-divider-container" id="section-four-container" >
      <div className="section-divider-info">
        <div className="section-four-text">
          <h2>Experience Global Flavours</h2>
          <p>
            Embark on a culinary journey around the world with our diverse
            selection of mouthwatering cuisines. From savory Italian pasta to
            spicy Indian curries, you'll find a world of flavors waiting to
            delight your taste buds.
          </p>
          <Link>Cuisines</Link>
        </div>
      </div>
      <div className="section-divider-img" >
        <img loading="lazy" src="/media/section-four-img.webp" alt=" " />
      </div>
    </div>
  );
}

export default SectionFour;
