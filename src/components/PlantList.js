import React from "react";
import PlantCard from "./PlantCard"

function PlantList({plants}) {
  
  const plantsToDisplay = plants.map(plant => <PlantCard plant={plant} key={plant.id}/>)
  
  return (
    <ul className="cards">
      {/* render PlantCards components in here */}
      {plantsToDisplay}
    </ul>
  );
}

export default PlantList;
