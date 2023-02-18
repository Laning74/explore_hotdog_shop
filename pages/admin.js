import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import { Alert, Container, Snackbar } from "@mui/material";
import { useSession, signOut, getSession } from "next-auth/react";
import AddHotdogShop from "../components/addHotdogShop";
import AdminHotdogShop from "../components/adminHotdogShop";
import { HotdogContext } from "../pages/HotdogContext";
import Typography from "@mui/material/Typography";

const admin = () => {
  const [open, setOpen] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");
  const [hotdogShop, sethotdogShop] = useState({
    name_shop: "",
    location: "",
    city: "",
    rating_stars: "",
    image: "",
    latitude: "",
    longitude: "",
  });
  const showAlert = (type, msg) => {
    setAlertType(type);
    setAlertMessage(msg);
    setOpen(true);
  };
  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return (
      <div>
        <div>
          <Typography variant="body1" color="text.secondary">
            Velkommen, {session.user.name}
          </Typography>
          <Button
            variant="contained"
            sx={{ mt: 3, margin: 1 }}
            onClick={() => signOut()}
          >
            Sign Out
          </Button>
        </div>
        <HotdogContext.Provider
          value={{ showAlert, hotdogShop, sethotdogShop }}
        >
          <Container maxWidth="sm">
            <Snackbar
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
              open={open}
              autoHideDuration={3000}
              onClose={handleClose}
            >
              <Alert
                onClose={handleClose}
                severity={alertType}
                sx={{ width: "100%" }}
              >
                {alertMessage}
              </Alert>
            </Snackbar>
            <AddHotdogShop />
            <AdminHotdogShop />
          </Container>
        </HotdogContext.Provider>
      </div>
    );
  } else {
    return (
      <div>
        <p>Du er ikke innlogget!</p>
      </div>
    );
  }
};

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
      },
    };
  }
  return {
    props: { session },
  };
};

export default admin;
