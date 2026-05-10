import { useState } from "react";

import { useNavigate } from "react-router-dom";

import {
  Wallet,
  Users,
  Calendar,
  Plane,
  MapPin,
} from "lucide-react";

import Navbar from "../components/Navbar";

import { createTrip } from "../services/tripServices";

export default function CreateTripPage() {

  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const [formData, setFormData] = useState({

    title: "",

    destination: "",

    budget: "",

    travelers: "",

    startDate: "",

    endDate: "",

    userId: user.id,

  });

  function handleChange(e) {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,

    });
  }

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const payload = {

        ...formData,

        budget: Number(formData.budget),

        travelers: Number(
          formData.travelers
        ),

      };

      const response =
        await createTrip(payload);

      console.log(response.data);

      alert(
        "Trip Created Successfully"
      );

      navigate(
        `/trip/${response.data.id}`
      );

    } catch (error) {

      console.log(error);

      alert("Failed to create trip");

    }
  };

  return (

    <div className="min-h-screen bg-slate-950">

      <Navbar />

      <div className="p-10">

        <div
          className="h-[250px] rounded-3xl bg-cover bg-center relative overflow-hidden mb-10"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070')",
          }}
        >

          <div className="absolute inset-0 bg-black/60"></div>

          <div className="relative z-10 p-10">

            <div className="flex items-center gap-4">

              <Plane
                size={45}
                className="text-rose-500"
              />

              <h1 className="text-5xl font-bold text-white">
                Create New Trip
              </h1>

            </div>

            <p className="text-slate-300 mt-4 text-lg">
              Plan your dream journey beautifully.
            </p>

          </div>

        </div>

        <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-800 p-10 rounded-3xl shadow-2xl">

          <form
            onSubmit={handleSubmit}
            className="space-y-8"
          >

            <div>

              <label className="text-slate-300 block mb-3 font-semibold">
                Trip Name
              </label>

              <input
                type="text"
                name="title"
                placeholder="Bali Adventure"
                value={formData.title}
                onChange={handleChange}
                className="w-full bg-slate-800 border border-slate-700 text-white p-4 rounded-2xl outline-none focus:border-rose-500"
              />

            </div>

            <div>

              <label className="text-slate-300 block mb-3 font-semibold flex items-center gap-2">
                <MapPin size={18} />
                Destination
              </label>

              <input
                type="text"
                name="destination"
                placeholder="Indonesia"
                value={formData.destination}
                onChange={handleChange}
                className="w-full bg-slate-800 border border-slate-700 text-white p-4 rounded-2xl outline-none focus:border-rose-500"
              />

            </div>

            <div className="grid md:grid-cols-2 gap-6">

              <div>

                <label className="text-slate-300 block mb-3 font-semibold flex items-center gap-2">
                  <Wallet size={18} />
                  Budget
                </label>

                <input
                  type="number"
                  name="budget"
                  placeholder="50000"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full bg-slate-800 border border-slate-700 text-white p-4 rounded-2xl outline-none focus:border-rose-500"
                />

              </div>

              <div>

                <label className="text-slate-300 block mb-3 font-semibold flex items-center gap-2">
                  <Users size={18} />
                  Travelers
                </label>

                <input
                  type="number"
                  name="travelers"
                  placeholder="2"
                  value={formData.travelers}
                  onChange={handleChange}
                  className="w-full bg-slate-800 border border-slate-700 text-white p-4 rounded-2xl outline-none focus:border-rose-500"
                />

              </div>

            </div>

            <div className="grid md:grid-cols-2 gap-6">

              <div>

                <label className="text-slate-300 block mb-3 font-semibold flex items-center gap-2">
                  <Calendar size={18} />
                  Start Date
                </label>

                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  className="w-full bg-slate-800 border border-slate-700 text-white p-4 rounded-2xl outline-none focus:border-rose-500"
                />

              </div>

              <div>

                <label className="text-slate-300 block mb-3 font-semibold flex items-center gap-2">
                  <Calendar size={18} />
                  End Date
                </label>

                <input
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                  className="w-full bg-slate-800 border border-slate-700 text-white p-4 rounded-2xl outline-none focus:border-rose-500"
                />

              </div>

            </div>

            <button
              className="w-full bg-rose-600 hover:bg-rose-700 text-white py-4 rounded-2xl text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Create Trip
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}