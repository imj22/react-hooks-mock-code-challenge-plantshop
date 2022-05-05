import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const baseUrl = "http://localhost:6001"
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch(baseUrl + "/plants")
      .then(r => r.json())
      .then(plantsData => setPlants(plantsData))
  }, [])

  const handleSearchChange = (e) => {
    console.log(e.target.value)
    setSearch(e.target.value)
  }

  const addNewPlant = (newPlant) => {
    const updatedPlants = [...plants, newPlant]
    setPlants(updatedPlants)
  }

  const filterPlantsViaSearch = plants.filter(plant => plant.name.toLowerCase().includes(search.toLowerCase()))

  // console.log(filterPlantsViaSearch)
  return (
    <main>
      <NewPlantForm baseUrl={baseUrl} addNewPlant={addNewPlant}/>
      <Search onSearchChange={handleSearchChange} search={search}/>
      <PlantList plants={filterPlantsViaSearch}/>
    </main>
  );
}

export default PlantPage;
