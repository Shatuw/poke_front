import React from 'react'
import { getPokedex } from '../utils/fetching';
import { Link, useLoaderData } from 'react-router-dom';


export default function Pokedex() {

    const pokedex = useLoaderData();
console.log(pokedex)
  return (
    <div>
        <h1>Pokedex with 809 pokemon! </h1> 
        <ul>
        {
         pokedex.map((pokemon)=>{
                return <li key={pokemon.id}><Link >{pokemon.id} {pokemon.name.english}</Link></li>
            })            
        }
        </ul>
    </div>
  )
}

export function loader(){
    return getPokedex();
}