import React, { useState } from "react";
import api from "../utils/api";

const CreateAddressPage = () => {
  const [form, setForm] = useState({
    name: "",
    planet: "",
    lot: "",
    description: "",
    phone: "",
    coordinates: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/address", form);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add New Address</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="border p-2 mb-4 w-full"
        />
        <input
          type="text"
          name="planet"
          placeholder="Planet"
          onChange={handleChange}
          className="border p-2 mb-4 w-full"
        />
        <input
          type="number"
          name="lot"
          placeholder="Lot"
          onChange={handleChange}
          className="border p-2 mb-4 w-full"
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          onChange={handleChange}
          className="border p-2 mb-4 w-full"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
          className="border p-2 mb-4 w-full"
        />
        <input
          type="text"
          name="coordinates"
          placeholder="Coordinates"
          onChange={handleChange}
          className="border p-2 mb-4 w-full"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Add Address
        </button>
      </form>
    </div>
  );
};

export default CreateAddressPage;
