import React, { useState, useCallback, useContext } from "react";
import styles from "../styles/Home.module.css";
// import PrimaryButtonSmall from "../../components/primaryButton/PrimaryButtonSmall";
// import { foodContext } from "../../components/context/Context";

const Search = () => {
  const [searchMeals, setSearchMeals] = useState("");

  //   const { fetchMeals, meals } = useContext(foodContext);

  //   const handleFetchMeals = useCallback(() => {
  //     fetchMeals(searchMeals);
  //   }, [searchMeals, fetchMeals]);

  return (
    <>
      <header className="header-container"></header>
      <div className="search-meals-container">
        <h1 className="meals-page-title">
          Search for cities where you want to eat hotdogs!
        </h1>

        <div className={styles.searchMeals}>
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Which city do you want to travel to?"
            value={searchMeals}
            onChange={(e) => setSearchMeals(e.target.value)}
          />
          {/* <PrimaryButtonSmall
            onClick={handleFetchMeals}
            text={"Søk etter måltid"}
          /> */}
        </div>
      </div>

      {/* <div className="card-container">
        {meals ? (
          <CardMeal />
        ) : (
          <h2>No meals with that name in the database, try again!</h2>
        )}
      </div> */}
    </>
  );
};

export default Search;
