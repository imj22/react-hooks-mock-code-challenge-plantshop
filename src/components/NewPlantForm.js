import React, {useState} from "react";

function NewPlantForm({addNewPlant, baseUrl}) {
  const [plantName, setPlantName] = useState("")
  const [plantImage, setPlantImage] = useState("")
  const [plantPrice, setPlantPrice] = useState(0)

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newPlant = {
      name: plantName, 
      image : plantImage, 
      price: plantPrice,
    }
    console.log("new submitted item:", e.target.value)
    fetch(baseUrl + "/plants", {
      method: "POST", 
      headers: {
        "Content-Type" : "application/json",
      }, body: JSON.stringify(newPlant)
    })
      .then(r => r.json())
      .then(newPlant => addNewPlant(newPlant))
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={e => handleFormSubmit(e)}>
        <input type="text" name="name" placeholder="Plant name" onChange={e => setPlantName(e.target.value)}/>
        <input type="text" name="image" placeholder="Image URL" onChange={e => setPlantImage(e.target.value)}/>
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={e => setPlantPrice(e.target.value)}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
