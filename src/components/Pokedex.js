import React from 'react'
import { getPokedex } from '../utils/fetching';
import { Link, useLoaderData } from 'react-router-dom';
import { Box, Typography } from '@mui/material';



export default function Pokedex() {

  const pokedex = useLoaderData();
  //console.log(pokedex)
  return (
      <Box sx={{ bgcolor: "#cfe8Fc", height: "80vh", width: "50%", p: 2, overflow: "auto", borderRadius: 2, margin: "auto" }}>
        <h1>Choose one of 809 bloodthirsty contestants!</h1>
        <div>
          {
            pokedex.map((pokemon) => {
              return <Link to={`/${pokemon.id}`} key={pokemon.id}><Typography sx={{ border: 1, borderRadius: 2, m: 2, bgcolor: "#ffffff", p: 1, display: "flex", borderColor: "#666666" }} ><Box sx={{ width: "15%" }}>{pokemon.id}.</Box> <Box sx={{ width: "75%" }}>{pokemon.name.english}</Box></Typography></Link>
            })
          }
        </div>
      </Box>    
  )
}

export function loader() {
  return getPokedex();
}