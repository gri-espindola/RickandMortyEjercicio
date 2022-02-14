import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";

const Tarjeta = (props) => {
  const { personajes } = props;

  console.log(props);

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="auto"
            image={personajes.image}
            alt={personajes.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <label>Nombre: {personajes.name}</label>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <label>Especie: {personajes.species}</label>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <label>Género: {personajes.gender}</label>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <label>Estado: {personajes.status}</label>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default Tarjeta;
