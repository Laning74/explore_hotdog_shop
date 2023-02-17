import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Button from "@mui/material/Button";

const login = () => {
  const { data: session } = useSession();
  console.log(session);
  if (session) {
    return (
      <>
        <p>Velkommen, {session.user.name}</p>
        <img
          src={session.user.image}
          alt=""
          style={{ width: "75px", borderRadius: "50px" }}
        />
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
        <Button color="inherit" href="/admin">
          Admin
        </Button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
};

export default login;
