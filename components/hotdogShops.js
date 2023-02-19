import { IconButton, ListItem, ListItemText } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteDoc, doc } from "@firebase/firestore";
import { db } from "../firebase";
import { HotdogContext } from "../pages/HotdogContext";
import { useContext } from "react";

const HotdogShops = ({
  id,
  name_shop,
  location,
  city,
  rating_stars,
  image,
  latitude,
  longitude,
}) => {
  const { showAlert, sethotdogShop } = useContext(HotdogContext);

  const deleteHotdogShop = async (id, e) => {
    e.stopPropagation();

    const docRef = doc(db, "hotdogShop", id);
    await deleteDoc(docRef);
    showAlert("error", `Hotdog shop with id ${id} deleted successfully`);
  };

  return (
    <ListItem
      onClick={() =>
        sethotdogShop({
          id,
          name_shop,
          location,
          city,
          rating_stars,
          image,
          latitude,
          longitude,
        })
      }
      sx={{ mt: 2, boxShadow: 4 }}
      style={{ backgroundColor: "#FAFAFA" }}
      secondaryAction={
        <>
          <IconButton onClick={(e) => deleteHotdogShop(id, e)}>
            <DeleteIcon style={{ color: "#e23d23" }} />
          </IconButton>
        </>
      }
    >
      <ListItemText primary={name_shop} secondary={location} />
    </ListItem>
  );
};

export default HotdogShops;
