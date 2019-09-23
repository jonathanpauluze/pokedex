let pokeContainer = document.querySelector('.poke-container')
let api = 'https://pokeapi.co/api/v2/pokemon'

const fetchPokemonList = async () => {
	let list = await fetch(api)
	list = await list.json()
	// console.log(list) 

	getPokemon(list.results)
}

const getPokemon = (pokemonList) => {
	pokemonList.forEach( async (pokemon) => {
		let pokemonData = await fetch(pokemon.url)
		pokemonData = await pokemonData.json()
		// console.log(pokemonData)

		createPokemonCard(pokemonData)
	})
}

const createPokemonCard = (pokemon) => {
	let pokeId = pokemon.id.toString().padStart(3, '0')
	let pokeType = pokemon.types[pokemon.types.length - 1].type.name

	pokeContainer.innerHTML += `
		<div class="poke-card ${pokeType}">
			<img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png"/>
			<p>#${pokeId}</p>
			<h2>${pokemon.name.toUpperCase()}</h2>
			<p>Type: ${pokeType.toUpperCase()}</p>
		</div>
	`
}

fetchPokemonList()