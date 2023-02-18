import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Image from "next/image";

const CardFirebase = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const getCards = async () => {
      const cardsCollection = collection(db, "hotdogShop");
      const cardsSnapshot = await getDocs(cardsCollection);
      const cardsList = cardsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCards(cardsList);
    };

    getCards();
  }, []);

  return (
    <Container maxWidth={false} sx={{ padding: 5 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        alignItems="center"
        justifyContent="center"
      >
        {cards.map((card) => (
          <Card key={card.id} sx={{ maxWidth: 345, margin: 0.7 }}>
            <div>
              <Image
                width={300}
                height={200}
                alt={card.name_shop}
                src={card.image}
              />
            </div>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {card.name_shop}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.location}
              </Typography>
              <Rating
                value={parseFloat(card.rating_stars)}
                sx={{ marginTop: "0.5rem" }}
              />
            </CardContent>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

export default CardFirebase;
