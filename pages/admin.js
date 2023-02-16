import React from "react";
import { useSession, signOut, getSession } from "next-auth/react";
import AdminHotdogShop from "../components/adminHotdogShop";
// import { HotdogCard } from "../components/hotdogCard";
// import Card from "@mui/material/Card";

const admin = () => {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return (
      <div>
        <div>
          <p>Velkommen, {session.user.name}</p>
          <button onClick={() => signOut()}>Sign Out</button>
        </div>
        <AdminHotdogShop />
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
