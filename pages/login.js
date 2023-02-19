import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { Container, Box } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "../styles/Home.module.css";

const login = () => {
  const { data: session } = useSession();
  console.log(session);
  if (session) {
    return (
      <>
        <Container maxWidth="sm" className={styles.main}>
          <Box
            alignItems="center"
            justifyContent="center"
            sx={{ marginTop: "100px" }}
          >
            <Typography variant="h4" color="text.secondary  ">
              Welcome, {session.user.name}
            </Typography>
            <img
              src={session.user.image}
              alt=""
              style={{ width: "75px", borderRadius: "50px" }}
            />
            <Typography variant="body1" color="text.secondary">
              Signed in as {session.user.email}
            </Typography>
            <br />
            <Typography variant="body1" color="text.secondary">
              Go to the Admin page to manage Hotdog Shops
            </Typography>
            <br />

            <Button
              variant="contained"
              sx={{
                mt: 3,
                margin: 1,
                backgroundColor: "#f2ae14",
                color: "#2d4151",
                "&:hover": {
                  backgroundColor: "#e88c03",
                },
              }}
              onClick={() => signOut()}
            >
              Sign out
            </Button>
            <Button
              variant="contained"
              sx={{
                mt: 3,
                margin: 1,
                backgroundColor: "#244154",
                "&:hover": {
                  backgroundColor: "#375163",
                },
              }}
              href="/admin"
            >
              Admin
            </Button>
          </Box>
        </Container>
      </>
    );
  }
  return (
    <>
      <Container maxWidth="sm" className={styles.main}>
        <Box
          alignItems="center"
          justifyContent="center"
          sx={{ marginTop: "100px" }}
        >
          <Typography variant="h4" color="text.secondary  ">
            Not signed in
          </Typography>
          <br />

          <Button
            variant="contained"
            sx={{
              mt: 3,
              margin: 1,
              backgroundColor: "#f2ae14",
              color: "#2d4151",
              "&:hover": {
                backgroundColor: "#e88c03",
              },
            }}
            onClick={() => signIn()}
          >
            Sign in
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default login;
