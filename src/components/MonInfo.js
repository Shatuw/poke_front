import React from 'react'
import { getPokemon, getPokePic } from '../utils/fetching'
import { useLoaderData } from 'react-router-dom'
import { Card, CardContent, CardMedia, Typography, CardActions, Button } from '@mui/material';

export default function MonInfo() {
  const pokemon = useLoaderData();
  //console.log(pokemon);

  return (
    <Card sx={{ maxWidth: 230, margin: "auto" }}>
      <CardMedia
        sx={{ height: 200 }}
        image={pokemon.pokepic.sprites.front_default} tilte="pokemon image" />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div">{pokemon.pokemon.id}. {pokemon.pokemon.name.english} </Typography>
        <p>Pokemontype: {pokemon.pokemon.type.map((type) => ` ${type}`)}</p>
        <h4>Base stats:</h4>
        <div>
          <p>Health: {pokemon.pokemon.base.HP}</p>
          <p>Attack: {pokemon.pokemon.base.Attack}</p>
          <p>Defense: {pokemon.pokemon.base.Defense}</p>
          <p>Sp. Attack: {pokemon.pokemon.base["Sp. Attack"]}</p>
          <p>Sp. Defense: {pokemon.pokemon.base["Sp. Defense"]}</p>
          <p>Speed: {pokemon.pokemon.base.Speed}</p>
        </div>
      </CardContent>
      <CardActions >
        <Button sx={{margin : "auto"}} variant='contained' size="small">Fight!</Button>
      </CardActions>
    </Card>
  )
}

export function loader({ params }) {
  const pokePicPromise = getPokePic(params.id)
  const pokemonPromise = getPokemon(params.id)

  return Promise.all([pokemonPromise, pokePicPromise]).then(([pokemon, pokepic]) => {
    return { pokemon, pokepic }
  })

} 