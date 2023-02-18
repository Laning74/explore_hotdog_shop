import * as React from "react";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Rating from "@mui/material/Rating";
// import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// import Link from "next/link";
import Image from "next/image";

export const HotdogCard = ({ data, index }) => (
  <Container maxWidth={false} sx={{ padding: 5 }} key={index}>
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      alignItems="center"
      justifyContent="center"
    >
      {data?.map((ev) => (
        <Card sx={{ maxWidth: 345, margin: 0.7 }}>
          <div>
            <Image width={300} height={200} alt={ev.name_shop} src={ev.image} />
          </div>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {ev.name_shop}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {ev.location}
            </Typography>
            <Rating value={ev.rating_stars} />
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      ))}
    </Grid>
  </Container>
);
