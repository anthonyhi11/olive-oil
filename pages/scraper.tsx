import {useState} from "react";
import Header from "../components/SiteNavigation/Header";

function Scraper() {

	interface IRecipe {
		name: string;
		ingredients: string[];
		instructions: string[];
	}
	
	const [url, setUrl] = useState<string | null>(null);
	const [recipe, setRecipe] = useState<IRecipe | null>(null);

	// test https://www.allrecipes.com/recipe/222218/nanas-southern-coleslaw/

	const recipeIngredients = recipe?.ingredients.map((ingredient) => {
		return <li>{ingredient}</li>;
	});

	const recipeInstructions = recipe?.instructions.map((instruction) => {
		return <li>{instruction}</li>;
	});

	async function scrape() {
		fetch(`/api/scraper`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(url),
		}).then((res) => res.json().then((res) => setRecipe(res.recipe.response)));
	}
	return (
		<>
			<Header active="/scraper" />
			<h2>Scrape away</h2>
			<input
				type="text"
				placeholder="Paste URL"
				onChange={(e) => setUrl(e.target.value)}
			/>
			<button onClick={() => scrape()}>Parse!</button>
			{recipe !== null ? (
				<div>
					<h2>{recipe.name}</h2>
					<ul>{recipeIngredients}</ul>
					<h3>Instructions</h3>
					<ul>{recipeInstructions}</ul>
				</div>
			) : null}
		</>
	);
}

export default Scraper;
