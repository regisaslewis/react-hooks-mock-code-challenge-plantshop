import React from "react";

function NewPlantForm({
  plantName,
  plantImage,
  plantPrice,
  changeName,
  changeImage,
  changePrice,
  addPlant
}) {
  
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={addPlant}>
        <input type="text" onChange={changeName} value={plantName} name="name" placeholder="Plant name" />
        <input type="text" onChange={changeImage} value={plantImage} name="image" placeholder="Image URL" />
        <input type="number" onChange={changePrice} value={plantPrice} name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
