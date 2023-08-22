import React from 'react'
import { getPokemon } from '../utils/fetching'
import { useLoaderData } from 'react-router-dom'

export default function MonInfo() {
const pokemon = useLoaderData();
//console.log(pokemon);

  return (
    <div>
        <h1>{pokemon.id}. {pokemon.name.english} </h1>
        <p>Pokemontype: {pokemon.type.map((type) => ` ${type}`)}</p>
        <p>base stats:</p>
        <ul>
            <li>Health: {pokemon.base.HP}</li>
            <li>Attack: {pokemon.base.Attack}</li>
            <li>Defense: {pokemon.base.Defense}</li>
            <li>Sp. Attack: {pokemon.base["Sp. Attack"]}</li>
            <li>Sp. Defense: {pokemon.base["Sp. Defense"]}</li>
            <li>Speed: {pokemon.base.Speed}</li>
        </ul>
    </div>
  )
}

export function loader ({params}){
   return getPokemon(params.id)
} 