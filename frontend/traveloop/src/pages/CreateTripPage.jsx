import { useState } from "react";

import { createTrip } from "../services/tripServices";

export default function CreateTripPage() {

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const [formData, setFormData] = useState({
    title: "",
    budget: "",
    travelers: "",
    startDate: "",
    endDate: "",
    userId: user.uid,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response =
        await createTrip(formData);

      console.log(response.data);

      alert("Trip Created Successfully");

    } catch (error) {

      console.log(error);

    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-xl shadow-lg">

      <h1 className="text-3xl font-bold mb-6">
        Create Trip
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >

        <input
          type="text"
          name="title"
          placeholder="Trip Name"
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="number"
          name="budget"
          placeholder="Budget"
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        <button
          className="bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Create Trip
        </button>

      </form>

    </div>
  );
}