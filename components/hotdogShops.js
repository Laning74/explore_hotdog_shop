import { ListItem, ListItemText } from "@mui/material";

const HotdogShops = ({ id, name_shop, location, rating_stars }) => {
  return (
    <ListItem
      sx={{ mt: 3, boxShadow: 3, height: "100px" }}
      style={{ backgroundColor: "#FAFAFA" }}
    >
      <ListItemText
        primary={name_shop}
        secondary={`${location} \n ${rating_stars}`}
      />
    </ListItem>
  );
};

export default HotdogShops;
