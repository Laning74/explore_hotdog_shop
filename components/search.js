import { useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Image from "next/image";

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [cards, setCards] = useState([]);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const getCards = async () => {
      const cardsCollection = collection(db, "hotdogShop");
      const q = query(cardsCollection, where("location", "==", searchQuery));
      const querySnapshot = await getDocs(q);
      const cardsList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCards(cardsList);
    };
    getCards();
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={searchQuery} onChange={handleInputChange} />
        <button type="submit">Search</button>
      </form>

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
                <Rating value={parseFloat(card.rating_stars)} />
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
