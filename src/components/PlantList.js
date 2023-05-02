import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ theList }) { 
  
  const allCards = theList.map(e => <PlantCard item={e} key={e.id} />)
  
  return (
    <ul className="cards">{allCards}</ul>
  );
}

export default PlantList;
