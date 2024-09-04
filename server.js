async function getPokemon() {
    const nameOrId = document.getElementById("pokemon-name").value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${nameOrId}`;

    try {
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error("Pokemon nao encontrado")
        }

        const data = await response.json();
        displayPokemonInfo(data);
    } catch (error) {
        document.getElementById("pokemon-info").innerHTML = `<p> ${error.message} </p>`
    }

}

function displayPokemonInfo(){
    const pokemonInfo = `
        <h2>${pokemon.name.toUpperCase()} (#${pokemon.id}) </h2>
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        <p>altura: ${pokemon.height} cm </p>   
        <p>peso: ${pokemon.weight} kg </p>    
        <p>tipo: ${pokemon.type.map(type => type.type.name)}  </p>    
    `
}

