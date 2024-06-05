import React from "react";
import Wrapper from "../assets/wrappers/CocktailList";
import CocktailCard from "./CocktailCard";

const CocktailList = ({ drinks }) => {
  if (!drinks) {
    return (
      <h3 style={{ textAlign: "center" }}>No matching cocktails found...</h3>
    );
  }

  const formattedDrinks = drinks.map((item) => {
    const { idDrink, strDrink, strAlcoholic, strGlass, strDrinkThumb } = item;

    return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass,
    };
  });

  return (
    <Wrapper>
      {formattedDrinks.map((item) => {
        return <CocktailCard key={item.id} {...item} />
      })}
    </Wrapper>
  );
};

export default CocktailList;
