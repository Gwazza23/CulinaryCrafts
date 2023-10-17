import "./SectionSix.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'

function SectionSix() {
  const [data, setData] = useState(false);

  function getFoodData() {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?a=Japanese")
      .then((response) => {
        setData(response.data.meals.slice(0,3));
      });
  }

  useEffect(() => {
    getFoodData();
  }, []);

  return (
    <div className="section-six-container">
      <div className="section-six-bg"></div>
      <div className="section-six-header">
        <h2>Flavour Of The Month</h2>
        <h2>Culinary Delights from the Land of the Rising Sun 🇯🇵 </h2>
      </div>
      <div className="section-six-list">
        {data &&
          data.map((meal) => {
            return (
              <div className="section-six-meal">
                  <img src={meal.strMealThumb} alt={meal.strMeal} />
                  <h3>{meal.strMeal}</h3>
                  <Link>Recipe</Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default SectionSix;
