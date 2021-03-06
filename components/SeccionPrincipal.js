import Tarjeta from "./Tarjeta";
import Grid from "@mui/material/Grid";
import { useState, useEffect } from "react";

const SeccionPrincipal = () => {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setPersonajes(data.results);
      });
  }, []);

  return (
    <Grid container spacing={4} justifyContent="center" sx={{ m: 2 }}>
      {personajes.map((personaje) => (
        <Tarjeta personaje={personaje} />
      ))}
    </Grid>
  );
};
export default SeccionPrincipal;
