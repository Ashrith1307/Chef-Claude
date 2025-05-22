import React from "react";
import IngredientsLists from "./IngredientsLists";
import Show_recipe from "./Show_recipe";
import { getRecipeFromMistral } from "../Ai";

export default function Main() {
  const [renderIngredients, setrenderIngredients] = React.useState([]);
  const [recipe, setRecipe] = React.useState("");

  async function recipeButton() {
    const response = await getRecipeFromMistral(renderIngredients);
    console.log(response);
    setRecipe(response);
  }

  const ingre_list = renderIngredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));
  function form(formData) {
    const new_Ingredients = formData.get("Ingredients");

    setrenderIngredients((prevIngre) => {
      return [...prevIngre, new_Ingredients];
    });
  }

  return (
    <main>
      <form className="ingredients-form" action={form}>
        <input
          type="text"
          placeholder="e.g. Tomato "
          className="input-ingre"
          name="Ingredients"
        />
        <button className="submit-ingre" type="submit">
          + Add Ingredient
        </button>
      </form>
      {renderIngredients.length > 0 && (
        <IngredientsLists
          renderIngredients={renderIngredients}
          ingre_list={ingre_list}
          recipe_btn={recipeButton}
        />
      )}
      {recipe ? <Show_recipe recipe={recipe} /> : null}
    </main>
  );
}
