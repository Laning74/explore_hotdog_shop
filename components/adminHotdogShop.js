import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import HotdogShops from "./hotdogShops";

const AdminHotdogShop = () => {
  const [hotdogShop, sethotdogShop] = useState([]);

  useEffect(() => {
    const collectionRef = collection(db, "hotdogShop");

    const q = query(collectionRef, orderBy("name_shop", "asc"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      sethotdogShop(
        querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    });
    return unsubscribe;
  }, []);

  return (
    <div>
      {hotdogShop.map((data) => (
        <HotdogShops
          key={data.id}
          id={data.id}
          name_shop={data.name_shop}
          location={data.location}
          rating_stars={data.rating_stars}
          image={data.image}
          latitude={data.latitude}
          longitude={data.longitude}
        />
      ))}
    </div>
  );
};

export default AdminHotdogShop;
