import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RecipeDataModal from "../../Components/RecipeDataModel";
import { RecipeContext } from "../../Context/RecipeContext";

const Home = () => {
  const {
    recipesData,
    handleDelete,
    currentFilter,
    handleSetFilter,
    searchedText,
    SearchedRecipeData,
    handleSearchedText
  } = useContext(RecipeContext);

  const handleChecked = (inputValue) => {
    return currentFilter === inputValue;
  };

  const navigate = useNavigate();

  const handleRecipeCardClick = (recipeID) => {
    navigate(`/recipe/${recipeID}`);
  };

  return (
    <div>
      <h2>All Recipes:</h2>

      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModalCenter"
      >
        Add New Recipe
      </button>
      <RecipeDataModal />
      <div className="search__container">
        <input
          type="text"
          placeholder="search here..."
          value={searchedText}
          onChange={(e, currentFilter) => handleSearchedText(e, currentFilter)}
        />
        <span>Filters:</span>
        <div
          className="filters"
          onChange={(e) => handleSetFilter(e.target.value)}
        >
          <input
            type="radio"
            id="name"
            value="name"
            checked={handleChecked("name")}
          />
            <label htmlFor="name">Name</label> {" "}
          <input
            type="radio"
            id="ingredients"
            value="ingredients"
            checked={handleChecked("ingredients")}
          />
            <label htmlFor="ingredients">Ingredients</label> {" "}
          <input
            type="radio"
            id="cuisine"
            value="cuisine"
            checked={handleChecked("cuisine")}
          />
            <label htmlFor="cuisine">Cuisine</label>
        </div>
      </div>

      <div className="recipes__container">
        {SearchedRecipeData.map((recipe) => (
          <div key={recipe.id} className="recipe__card">
            <img src={recipe.img} alt="Recipe-img" className="recipe__image" />
            <h3>{recipe.name}</h3>

            <div className="buttons">
              <div className="edit__button">
                <i className="fa fa-pencil" aria-hidden="true"></i>
                Edit
              </div>
              <div
                className="delete__button"
                onClick={() => handleDelete(recipe.id)}
              >
                <i className="fa fa-trash" aria-hidden="true"></i>Delete
              </div>
            </div>

            <div className="recipe__cuisine">
              <span className="cuisine__title">Cuisine Type: </span>
              <span className="cuisine__ans">{recipe.cuisineType}</span>
            </div>
            <div className="recipe__ingredients">
              <span className="ingredients__title">Ingredients: </span>
              <span
                className="ingredients__ans"
                onClick={() => handleRecipeCardClick(recipe.id)}
              >
                See Recipe <i class="fa fa-arrow-right" aria-hidden="true"></i>
              </span>
            </div>
            <div className="recipe__instructions">
              <span className="instructions__title">Instructions: </span>
              <span
                className="instructions__ans"
                onClick={() => handleRecipeCardClick(recipe.id)}
              >
                See Recipe{" "}
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
