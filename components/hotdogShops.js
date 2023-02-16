import { IconButton, ListItem, ListItemText } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { deleteDoc, doc } from "@firebase/firestore";
import { db } from "../firebase";
import { HotdogContext } from "../pages/HotdogContext";
import { useContext } from "react";

const HotdogShops = ({ id, name_shop, location, rating_stars }) => {
  const { showAlert, sethotdogShop } = useContext(HotdogContext);

  const deleteHotdogShop = async (id, e) => {
    e.stopPropagation();

    const docRef = doc(db, "hotdogShop", id);
    await deleteDoc(docRef);
    showAlert("error", `Hotdog shop with id ${id} deleted successfully`);
  };

  return (
    <ListItem
      onClick={() => sethotdogShop({ id, name_shop, location, rating_stars })}
      sx={{ mt: 3, boxShadow: 3 }}
      style={{ backgroundColor: "#FAFAFA" }}
      secondaryAction={
        <>
          <IconButton onClick={(e) => deleteHotdogShop(id, e)}>
            <DeleteIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </>
      }
    >
      <ListItemText
        primary={name_shop}
        secondary={`${location} \n ${rating_stars}`}
      />
    </ListItem>
  );
};

export default HotdogShops;
