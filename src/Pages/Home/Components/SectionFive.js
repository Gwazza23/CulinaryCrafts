import { useEffect, useState } from "react";
import "./SectionFive.css";
import axios from "axios";
import { Link } from "react-router-dom";

function SectionFive() {
  const [data, setData] = useState(false);
  function handleRandom() {
    axios
      .get(
        "https://www.themealdb.com/api/json/v1/1/random.php?app_id=bff6806a&app_key=%20d5afbba359e71e8e1911a2ba473ca264"
      )
      .then((response) => {
        setData(response);
      });
  }

  function rotateWords() {
    const text = document.querySelector(".section-five-initial-text p");

    text.innerHTML = text.innerText
      .split("")
      .map(
        (char, i) =>
          `<span style="transform:rotate(${i * 3.6}deg)" >${char}</span>`
      )
      .join("");
  }

  useEffect(() => {
    rotateWords()
  },[])

  return (
    <div className="section-five-container">
      <img id="section-five-img1" src="/media/section-five-img1.webp" alt=" " />
      <img id="section-five-img2" src="/media/section-five-img2.webp" alt=" " />
      <div className="section-five-header">
        <h2>Recipe Roulette!</h2>
      </div>
      <div className="section-five-main">
        {data ? (
          <div className="section-five-pt1">
            <img
              src={data.data?.meals[0].strMealThumb}
              alt={data.data?.meals[0].strMeal}
              loading="lazy"
            />
            <div className="section-five-info">
              <h3>{data.data?.meals[0].strMeal}</h3>
              <p>
                Cuisine: <span>{data.data?.meals[0].strArea}</span>
              </p>
              <p>
                Dish Type: <span>{data.data?.meals[0].strCategory}</span>
              </p>
              <Link>Get The Recipe!</Link>
            </div>
          </div>
        ) : (
          <div className="section-five-pt1-initial">
            <div className="section-five-initial-div">
              <h2>?</h2>
              <div className="section-five-initial-text">
                <p>
                  Pancake - Tacos - Salad - Casserole - Curry - Pasta - Burgers
                  -
                </p>
              </div>
            </div>
          </div>
        )}
        <div className="section-five-pt2">
          <p>
            Ready to embark on a culinary adventure? Click the "Random Recipe"
            button below and let your taste buds journey through our diverse
            collection of mouthwatering dishes. With a simple click, you'll
            uncover delightful recipes that'll satisfy your cravings and inspire
            your next cooking endeavor
          </p>
          <button onClick={handleRandom}>Random Recipe</button>
        </div>
      </div>
    </div>
  );
}

export default SectionFive;
