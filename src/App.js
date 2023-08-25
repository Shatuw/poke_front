import React from "react"
import './App.css';
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Header from "./components/Header.js";
import Pokedex, { loader as pokedexLoader } from "./components/Pokedex.js";
import MonInfo, { loader as pokemonLoader } from "./components/MonInfo";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Header />} >
    <Route index element={<Pokedex />} loader={pokedexLoader} />
    <Route path="/:id" element={<MonInfo />} loader={pokemonLoader} />
  </Route>
));

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
