import React, {useState} from "react";

function PlantCard({plant: {id, image, name, price}}) {
  const [buttonText, setButtonText] = useState("In Stock")
  const [buttonClass, setButtonClass] = useState ("primary")

  const handleInStockClick = () => {
    buttonText === "In Stock" ? setButtonText("Out of Stock") : setButtonText("In Stock") 
    buttonClass === "primary" ? setButtonClass("") : setButtonClass("primary")
  }
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
        <button className={buttonClass} onClick={handleInStockClick}>{buttonText}</button>
    </li>
  );
}

export default PlantCard;
