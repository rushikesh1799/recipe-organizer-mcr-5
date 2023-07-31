import { createContext, useEffect, useState } from "react";
import recipes from "../db/recipes";

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [recipesData, setRecipesData] = useState(recipes);
  const [currentFilter, setCurrentFilter] = useState("name");
  const [searchedText, setSearchedText] = useState("");

  const [recipesLocalStorage, setRecipesLocalStorage] = useState([]);

  useEffect(() => {
    setRecipesLocalStorage(JSON.parse(localStorage.getItem("allRecipes")));
    console.log("recipesLocalStorage", recipesLocalStorage);
  }, [recipesData]);

  if (!localStorage.getItem("allRecipes")) {
    localStorage.setItem("allRecipes", JSON.stringify(recipesData));
  }

  const handleDelete = (recipeID) => {
    const updatedRecipesData = recipesData.filter(
      (recipe) => recipe.id !== recipeID
    );
    localStorage.setItem("allRecipes", JSON.stringify(updatedRecipesData));
    setRecipesData(updatedRecipesData);
  };

  const handleSetFilter = (filterValue) => {
    setCurrentFilter(filterValue);
  };

  const handleSearchedText = (e) => {
    setSearchedText(e.target.value);
  };

  const SearchedRecipeData =
    currentFilter === "name"
      ? recipesLocalStorage.filter((recipe) =>
          recipe.name.toLowerCase().includes(searchedText)
        )
      : currentFilter === "ingredients"
      ? recipesLocalStorage.filter((recipe) =>
          recipe.ingredients.toLowerCase().includes(searchedText)
        )
      : currentFilter === "cuisine"
      ? recipesLocalStorage.filter((recipe) =>
          recipe.cuisineType.toLowerCase().includes(searchedText)
        )
      : recipesLocalStorage;

  // console.log("SearchedRecipeData", SearchedRecipeData);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const [newRecipe, setNewRecipe] = useState({
    id: getRandomInt(100),
    name: "",
    cuisineType: "",
    img: "",
    ingredients: "",
    instructions: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewRecipe((prev) => ({ ...prev, [name]: value }));
  };

  const handleNewRecipe = () => {
    if (
      newRecipe.name === "" ||
      newRecipe.cuisine === "" ||
      newRecipe.recipeImg === "" ||
      newRecipe.ingredients === "" ||
      newRecipe.instructions === ""
    ) {
      alert("Please fill all fields!");
    } else {
      const getRecipes = JSON.parse(localStorage.getItem("allRecipes"));
      getRecipes.push(newRecipe);
      localStorage.setItem("allRecipes", JSON.stringify(getRecipes));
      setRecipesData((prev) => [...prev, newRecipe]);
    }
  };

  return (
    <RecipeContext.Provider
      value={{
        handleDelete,
        handleSetFilter,
        newRecipe,
        setNewRecipe,
        setSearchedText,
        recipesData,
        currentFilter,
        searchedText,
        handleSearchedText,
        SearchedRecipeData,
        handleChange,
        handleNewRecipe,
        recipesLocalStorage
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};
