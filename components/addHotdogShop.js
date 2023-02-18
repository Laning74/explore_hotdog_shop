import { addDoc, collection, updateDoc, doc } from "@firebase/firestore";
import { Button, TextField } from "@mui/material";
import { useContext, useRef, useEffect } from "react";
import { db } from "../firebase";
import { HotdogContext } from "../pages/HotdogContext";

const AddHotdogShop = () => {
  const inputAreaRef = useRef();

  const { showAlert, hotdogShop, sethotdogShop } = useContext(HotdogContext);
  const onSubmit = async () => {
    if (hotdogShop?.id) {
      const docRef = doc(db, "hotdogShop", hotdogShop.id);
      const hotdogShopUpdated = { ...hotdogShop };
      delete hotdogShopUpdated.id;
      await updateDoc(docRef, hotdogShopUpdated);
      sethotdogShop({
        name_shop: "",
        location: "",
        city: "",
        rating_stars: "",
        image: "",
        latitude: "",
        longitude: "",
      });
      showAlert(
        "info",
        `Hotdog shop with id ${hotdogShop.id} updated successfully`
      );
    } else {
      const collectionRef = collection(db, "hotdogShop");
      const docRef = await addDoc(collectionRef, {
        ...hotdogShop,
      });
      sethotdogShop({
        name_shop: "",
        location: "",
        city: "",
        rating_stars: "",
        image: "",
        latitude: "",
        longitude: "",
      });
      showAlert(
        "success",
        `Hotdog shop with id ${docRef.id} is added successfully`
      );
    }
  };

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (!inputAreaRef.current.contains(e.target)) {
        console.log("Outside input area");
        sethotdogShop({
          name_shop: "",
          location: "",
          city: "",
          rating_stars: "",
          image: "",
          latitude: "",
          longitude: "",
        });
      } else {
        console.log("Inside input area");
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, []);

  return (
    <div ref={inputAreaRef}>
      <TextField
        fullWidth
        label="name_shop"
        margin="normal"
        value={hotdogShop.name_shop}
        onChange={(e) =>
          sethotdogShop({ ...hotdogShop, name_shop: e.target.value })
        }
      />
      <TextField
        fullWidth
        label="location"
        margin="normal"
        value={hotdogShop.location}
        onChange={(e) =>
          sethotdogShop({ ...hotdogShop, location: e.target.value })
        }
      />
      <TextField
        fullWidth
        label="city"
        margin="normal"
        value={hotdogShop.city}
        onChange={(e) => sethotdogShop({ ...hotdogShop, city: e.target.value })}
      />
      <TextField
        fullWidth
        label="rating_stars"
        margin="normal"
        value={hotdogShop.rating_stars}
        onChange={(e) =>
          sethotdogShop({ ...hotdogShop, rating_stars: e.target.value })
        }
      />
      <TextField
        fullWidth
        label="image Unsplash URL"
        multiline
        maxRows={4}
        margin="normal"
        value={hotdogShop.image}
        onChange={(e) =>
          sethotdogShop({ ...hotdogShop, image: e.target.value })
        }
      />
      <TextField
        fullWidth
        label="latitude"
        margin="normal"
        value={hotdogShop.latitude}
        onChange={(e) =>
          sethotdogShop({ ...hotdogShop, latitude: e.target.value })
        }
      />
      <TextField
        fullWidth
        label="longitude"
        margin="normal"
        value={hotdogShop.longitude}
        onChange={(e) =>
          sethotdogShop({ ...hotdogShop, longitude: e.target.value })
        }
      />
      <Button onClick={onSubmit} variant="contained" sx={{ mt: 3 }}>
        {hotdogShop.id ? "Update hotdogshop" : "Add a new hotdog shop"}
      </Button>
    </div>
  );
};

export default AddHotdogShop;
