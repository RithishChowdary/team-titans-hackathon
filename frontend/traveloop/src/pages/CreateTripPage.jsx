import { useState } from "react";

import { destinations } from "../data/destinations";

import { useNavigate } from "react-router-dom";

import {
  Wallet,
  Users,
  Calendar,
  Plane,
  MapPin,
  Sparkles,
} from "lucide-react";

import Navbar from "../components/Navbar";

import { createTrip } from "../services/tripServices";

export default function CreateTripPage() {

  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState({

      title: "",

      destination: "",

      budget: "",

      travelers: "",

      startDate: "",

      endDate: "",

      userId: user?.id || user?.uid,

    });

  function handleChange(e) {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value,

    });
  }

  const selectedDestination =
    destinations.find(

      (d) =>
        d.name ===
        formData.destination

    );

  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);

    try {

      const payload = {

        ...formData,

        budget: Number(
          formData.budget
        ),

        travelers: Number(
          formData.travelers
        ),

      };

      console.log(
        "PAYLOAD:",
        payload
      );

      const response =
        await createTrip(payload);

      console.log(
        "TRIP RESPONSE:",
        response.data
      );

      alert(
        "Trip Created Successfully"
      );

      navigate(
        `/trip/${response.data.id}`
      );

    } catch (error) {

      console.log(error);

      alert(
        "Failed to create trip"
      );

    } finally {

      setLoading(false);

    }
  };

  return (

    <div className="min-h-screen bg-slate-950">

      <Navbar />

      <div className="p-6 md:p-10">

        <div
          className="h-[300px] rounded-[32px] bg-cover bg-center relative overflow-hidden mb-12 shadow-2xl"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070')",
          }}
        >

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>

          <div className="relative z-10 p-10 flex flex-col justify-center h-full">

            <div className="flex items-center gap-4">

              <div className="bg-rose-600 p-4 rounded-2xl">

                <Plane
                  size={36}
                  className="text-white"
                />

              </div>

              <div>

                <h1 className="text-5xl font-black text-white">

                  Create New Trip

                </h1>

                <p className="text-slate-300 mt-2 text-lg">

                  Design your dream travel experience.

                </p>

              </div>

            </div>

          </div>

        </div>

        <div className="max-w-5xl mx-auto bg-slate-900 border border-slate-800 rounded-[32px] shadow-2xl overflow-hidden">

          <div className="grid lg:grid-cols-2">

            <div className="p-10">

              <div className="flex items-center gap-3 mb-8">

                <Sparkles className="text-rose-500" />

                <h2 className="text-3xl font-bold text-white">

                  Trip Details

                </h2>

              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
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
                    required
                    className="w-full bg-slate-800 border border-slate-700 text-white p-4 rounded-2xl outline-none focus:border-rose-500"
                  />

                </div>

                <div>

                  <label className="text-slate-300 block mb-3 font-semibold flex items-center gap-2">

                    <MapPin size={18} />

                    Destination

                  </label>

                  <select
                    name="destination"
                    value={
                      formData.destination
                    }
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-800 border border-slate-700 text-white p-4 rounded-2xl outline-none focus:border-rose-500"
                  >

                    <option value="">
                      Select Destination
                    </option>

                    {destinations.map(
                      (place) => (

                        <option
                          key={place.name}
                          value={place.name}
                        >

                          {place.name} -{" "}
                          {place.country}

                        </option>

                      )
                    )}

                  </select>

                </div>

                <div className="grid md:grid-cols-2 gap-5">

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
                      required
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
                      required
                      className="w-full bg-slate-800 border border-slate-700 text-white p-4 rounded-2xl outline-none focus:border-rose-500"
                    />

                  </div>

                </div>

                <div className="grid md:grid-cols-2 gap-5">

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
                      required
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
                      required
                      className="w-full bg-slate-800 border border-slate-700 text-white p-4 rounded-2xl outline-none focus:border-rose-500"
                    />

                  </div>

                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-rose-600 hover:bg-rose-700 text-white py-4 rounded-2xl text-lg font-bold transition-all duration-300 hover:scale-105 shadow-lg disabled:opacity-50"
                >

                  {
                    loading
                      ? "Creating Trip..."
                      : "Create Trip"
                  }

                </button>

              </form>

            </div>

            <div className="bg-slate-950 border-l border-slate-800 p-8 flex flex-col justify-center">

              {
                selectedDestination ? (

                  <div>

                    <img
                      src={
                        selectedDestination.image
                      }
                      alt=""
                      className="w-full h-[300px] object-cover rounded-3xl shadow-2xl"
                    />

                    <div className="mt-8">

                      <h2 className="text-4xl font-black text-white">

                        {
                          selectedDestination.name
                        }

                      </h2>

                      <p className="text-rose-500 text-xl mt-2">

                        {
                          selectedDestination.country
                        }

                      </p>

                      <p className="text-slate-400 mt-6 text-lg leading-relaxed">

                        Explore breathtaking landscapes,
                        unforgettable experiences,
                        luxurious stays, and create
                        memories that last forever.

                      </p>

                    </div>

                  </div>

                ) : (

                  <div className="text-center">

                    <div className="bg-slate-800 w-24 h-24 rounded-full flex items-center justify-center mx-auto">

                      <Plane
                        size={40}
                        className="text-rose-500"
                      />

                    </div>

                    <h2 className="text-3xl font-bold text-white mt-8">

                      Select Destination

                    </h2>

                    <p className="text-slate-400 mt-4 text-lg">

                      Choose your dream destination
                      to preview the experience.

                    </p>

                  </div>

                )
              }

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}