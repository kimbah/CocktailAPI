class CocktailDB {
	// Save the recipes into local storage
	saveIntoDB ( drink ) {
		const drinks = this.getFromDB();

		drinks.push( drink );

		// Add new array into local storage
		localStorage.setItem( 'drinks', JSON.stringify( drinks ) );
	}

	// Removes elements from local storage
	removeFromDB ( id ) {
		const drinks = this.getFromDB();

		// Loop
		drinks.forEach( ( drink, index ) => {
			if ( id === drink.id ) {
				drinks.splice( index, 1 );
			}
		} );
		// Set the array into local storage
		localStorage.setItem( 'drinks', JSON.stringify( drinks ) );
	}

	// Return recipes from local storage
	getFromDB () {
		let drinks;
		// Check from local storage

		if ( localStorage.getItem( 'drinks' ) === null ) {
			drinks = [];
		} else {
			drinks = JSON.parse( localStorage.getItem( 'drinks' ) );
		}
		return drinks;
	}
}
