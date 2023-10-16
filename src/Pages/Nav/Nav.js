import "./Nav.css";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  const navigate = useNavigate();

  function navHome() {
    navigate("/");
  }
  return (
    <>
      <nav>
        <div className="nav-logo" onClick={navHome}>
          <img src="/media/cc-logo.webp" alt="culinary crafts logo" />
        </div>
        <div className="nav-section-two">
          <div className="nav-links">
            <NavLink>Dish Type</NavLink>
            <NavLink>Cuisine</NavLink>
          </div>
          <div className="nav-search">
            <input />
            <FontAwesomeIcon id="nav-input-icon" icon={faMagnifyingGlass} />
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Nav;
