import React from 'react'
import { getPokemon } from '../utils/fetching'
import { useLoaderData } from 'react-router-dom'

export default function MonInfo() {
const pokemon = useLoaderData();
console.log(pokemon);

  return (
    <div>MonInfo</div>
  )
}

export function loader (){
   return getPokemon()
} 