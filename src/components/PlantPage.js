import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [theList, setTheList] = useState([]);
  const [plantName, setPlantName] = useState("");
  const [plantImage, setPlantImage] = useState("");
  const [plantPrice, setPlantPrice] = useState("");

  useEffect(() => {
    fetch(`http://localhost:6001/plants`)
      .then(resp => resp.json())
      .then(data => setTheList(data))
  }, [])

  function searchPlants(string) {
    fetch(`http://localhost:6001/plants`)
      .then(resp => resp.json())
      .then(data => {
        const searchedList = data.filter(e => e.name.toLowerCase().includes(string.toLowerCase()));
        setTheList(searchedList);
      })
  }

  function changeName(e) {
    setPlantName(e.target.value)
  }
  
  function changeImage(e) {
    setPlantImage(e.target.value)
  }
  
  function changePrice(e) {
    setPlantPrice(e.target.value)
  }

  function addPlant() {
    fetch(`http://localhost:6001/plants`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: plantName,
        image: plantImage,
        price: plantPrice
      })
    })
      .then(resp => resp.json())
      .then(data => {
        setTheList([...theList, data])
      })
  }

  return (
    <main>
      <NewPlantForm
        plantName={plantName}
        plantImage={plantImage}
        plantPrice={plantPrice}
        changeName={changeName}
        changeImage={changeImage}
        changePrice={changePrice}
        addPlant={addPlant}
      />
      <Search searchPlants={searchPlants} />
      <PlantList theList={theList} />
    </main>
  );
}

export default PlantPage;
