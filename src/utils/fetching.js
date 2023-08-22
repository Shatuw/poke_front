export async function getPokedex(){
    const getPokedex = await fetch("https://shatuw-pokedex.onrender.com/pokemon")
    if (!getPokedex.ok){
        throw {message : "Failed to fetch Pokedex", status : 500}
    }
    return getPokedex.json();
}

export async function getPokemon(id){
    const pokemon = await fetch(`https://shatuw-pokedex.onrender.com/pokemon/${id}`)
    if (!pokemon.ok){
        throw {message : "Failed to fetch pokemon", status : 500}
    }
    return pokemon.json();
}