import { useContext, useState } from "react";
import { RecipeContext } from "../Context/RecipeContext";

const RecipeDataModal = () => {
  const { newRecipe, setNewRecipe, handleChange, handleNewRecipe } = useContext(
    RecipeContext
  );

  return (
    <div>
      <div
        class="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                Modal title
              </h5>
              <button
                type="button"
                class="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div>
                <label>Recipe Name:</label>
                <textarea
                  id="standard-basic"
                  label="Recipe Name"
                  variant="standard"
                  name="name"
                  value={newRecipe.name}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <label>Recipe Image:</label>
                <textarea
                  id="standard-basic"
                  label="Recipe Name"
                  variant="standard"
                  name="img"
                  value={newRecipe.img}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <label>Recipe ingredients:</label>
                <textarea
                  id="standard-basic"
                  label="Recipe Name"
                  variant="standard"
                  name="ingredients"
                  value={newRecipe.ingredients}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <label>Recipe instructions:</label>
                <textarea
                  id="standard-basic"
                  label="Recipe Name"
                  variant="standard"
                  name="instructions"
                  value={newRecipe.instructions}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <label>Recipe Cuisine:</label>
                <textarea
                  id="standard-basic"
                  label="Recipe Name"
                  variant="standard"
                  name="cuisineType"
                  value={newRecipe.cuisineType}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                onClick={() => {
                  handleNewRecipe();
                }}
                data-bs-dismiss="modal"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDataModal;
