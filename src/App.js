import "./styles.css";

import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import RecipeDetails from "./Pages/RecipeDetails/RecipeDetails";

export default function App() {
  return (
    <div className="App">
      <h2>Recipe Organizer</h2>
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/recipe/:recipeID" element={<RecipeDetails />}></Route>
      </Routes>
    </div>
  );
}
