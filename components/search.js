import { useState } from "react";
import TextField from "@mui/material/TextField";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
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
      const q = query(cardsCollection, where("city", "==", searchQuery));
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
        <TextField
          label="Search for cities with good hot dogs..."
          value={searchQuery}
          onChange={handleInputChange}
          sx={{
            width: "400px",
            marginRight: 2,
            boxShadow: 3,
            backgroundColor: "white",
            borderRadius: "8px",
          }}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "#f2ae14",
            color: "#2d4151",
            height: 55,
            "&:hover": {
              backgroundColor: "#e88c03",
            },
          }}
        >
          Search
        </Button>
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
                <Rating
                  value={parseFloat(card.rating_stars)}
                  sx={{ marginTop: "0.5rem" }}
                />
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
