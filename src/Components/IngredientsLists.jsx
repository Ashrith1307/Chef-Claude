export default function IngredientsLists(props) {
  return (
    <section className="display-ingre">
      <h1>Ingredients on hand:</h1>
      <ul>{props.ingre_list}</ul>
      {props.renderIngredients.length > 3 && (
        <div className="recipe">
          <div className="recipe-info">
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={props.recipe_btn}>Get a recipe</button>
        </div>
      )}
    </section>
  );
}
