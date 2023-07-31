import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { RecipeContext } from "../../Context/RecipeContext";

const RecipeDetails = () => {
  const { recipeID } = useParams();
  const { recipesData } = useContext(RecipeContext);

  const navigate = useNavigate();

  const currentRecipe = recipesData.find(
    (recipe) => Number(recipe.id) === Number(recipeID)
  );

  const handleBackButton = () => {
    navigate(`/`);
  };

  console.log(currentRecipe);

  return (
    <div>
      <div className="recipe-card">
        {currentRecipe && (
          <div>
            <h2>{currentRecipe.name}</h2>

            <div className="recipe__detail__container">
              <img
                src={currentRecipe.img}
                alt="Recipe"
                className="recipe__photo"
              />
              <div className="recipe__details">
                <h3>Cuisine: {currentRecipe.cuisineType}</h3>
                <div>
                  <h3 className="ingredients__details__title">Ingredients:</h3>
                  <span>{currentRecipe.ingredients}</span>
                </div>
                <div>
                  <h3>Instructions:</h3>
                  <span>{currentRecipe.instructions}</span>
                </div>
              </div>
            </div>
            <i
              className="fa fa-angle-left fa-3x back"
              aria-hidden="true"
              onClick={handleBackButton}
            ></i>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeDetails;
