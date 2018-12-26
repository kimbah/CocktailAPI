class CockAPI {
	async getDrinksByName ( name ) {
		// Search by name
		const apiResponse = await fetch( `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}` );
		// Returns a json reponse
		const cocktails = await apiResponse.json();

		return {
			cocktails
		};
	}

	// Get recipes by ingredient
	async getDrinksByIngredient ( ingredient ) {
		// Search by ingredient
		const apiResponse = await fetch( `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}` );

		// Wait for response then return JSON
		const cocktails = await apiResponse.json();

		return {
			cocktails
		};
	}

	// Get single recipe
	async getSingleRecipe ( id ) {
		// Search by ingredient
		const apiResponse = await fetch( `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}` );

		// Wait for response then return JSON
		const recipe = await apiResponse.json();

		return {
			recipe
		};
	}

	// Retrieve cocktail categories from REST API
	async getCategories () {
		const apiResponse = await fetch( 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list' );

		// Wait for response then return JSON
		const categories = await apiResponse.json();

		return {
			categories
		};
	}

	// Get drinks by Category
	async getDrinksByCategory ( category ) {
		// Search by category
		const apiResponse = await fetch( `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}` );

		// Wait for response then return JSON
		const cocktails = await apiResponse.json();

		return {
			cocktails
		};
	}

	// Get Alcoholic or non-Alcoholic drinks
	async getDrinkByAlcohol ( term ) {
		// Search by category
		const apiResponse = await fetch( `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${term}` );

		// Wait for response then return JSON
		const cocktails = await apiResponse.json();

		return {
			cocktails
		};
	}
}
