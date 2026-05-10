import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import {
  MapPin,
  Wallet,
  Calendar,
  Users,
} from "lucide-react";

import Navbar from "../components/Navbar";

import { getTripById } from "../services/tripServices";

import {
  addStop,
  getStops,
  deleteStop,
} from "../services/stopServices";

export default function TripPlannerPage() {

  const { id } = useParams();

  const [trip, setTrip] =
    useState(null);

  const [stops, setStops] =
    useState([]);

  const [cityName, setCityName] =
    useState("");

  useEffect(() => {

    fetchTrip();

    fetchStops();

  }, []);

  const fetchTrip = async () => {

    try {

      const response =
        await getTripById(id);

      console.log(
        "TRIP:",
        response.data
      );

      setTrip(response.data);

    } catch (error) {

      console.log(error);

    }
  };

  const fetchStops = async () => {

    try {

      const response =
        await getStops(id);

      console.log(
        "STOPS:",
        response.data
      );

      setStops(response.data);

    } catch (error) {

      console.log(error);

    }
  };

  const handleAddStop =
    async () => {

      if (!cityName) {

        alert("Enter city name");

        return;
      }

      try {

        const payload = {
          cityName,
        };

        const response =
          await addStop(
            id,
            payload
          );

        setStops([
          ...stops,
          response.data,
        ]);

        setCityName("");

      } catch (error) {

        console.log(error);

      }
    };

  const handleDeleteStop =
    async (stopId) => {

      try {

        await deleteStop(stopId);

        setStops(
          stops.filter(
            (stop) =>
              stop.id !== stopId
          )
        );

      } catch (error) {

        console.log(error);

      }
    };

  if (!trip) {

    return (
      <div className="text-white p-10">
        Loading...
      </div>
    );
  }

  return (

    <div className="min-h-screen bg-slate-950">

      <Navbar />

      <div className="p-10">

        <div className="bg-slate-900 rounded-3xl p-10 border border-slate-800">

          <h1 className="text-5xl font-bold text-white">

            {trip.title}

          </h1>

          <p className="text-slate-400 mt-3 text-lg">

            Your personalized trip plan

          </p>

          <div className="grid md:grid-cols-4 gap-6 mt-10">

            <div className="bg-slate-800 p-6 rounded-2xl">

              <div className="flex items-center gap-3 text-rose-500">

                <MapPin />

                <h3 className="font-semibold">
                  Destination
                </h3>

              </div>

              <p className="text-white text-xl mt-4">

                {trip.destination}

              </p>

            </div>

            <div className="bg-slate-800 p-6 rounded-2xl">

              <div className="flex items-center gap-3 text-rose-500">

                <Wallet />

                <h3 className="font-semibold">
                  Budget
                </h3>

              </div>

              <p className="text-white text-xl mt-4">

                ₹ {trip.budget}

              </p>

            </div>

            <div className="bg-slate-800 p-6 rounded-2xl">

              <div className="flex items-center gap-3 text-rose-500">

                <Calendar />

                <h3 className="font-semibold">
                  Dates
                </h3>

              </div>

              <p className="text-white text-md mt-4">

                {trip.startDate}

              </p>

              <p className="text-white text-md">

                {trip.endDate}

              </p>

            </div>

            <div className="bg-slate-800 p-6 rounded-2xl">

              <div className="flex items-center gap-3 text-rose-500">

                <Users />

                <h3 className="font-semibold">
                  Travelers
                </h3>

              </div>

              <p className="text-white text-xl mt-4">

                {trip.travelers}

              </p>

            </div>

          </div>

        </div>

        {/* STOPS SECTION */}

        <div className="mt-12">

          <h2 className="text-3xl text-white font-bold mb-6">

            Trip Stops

          </h2>

          <div className="flex gap-4 mb-8">

            <input
              type="text"
              placeholder="Add City"
              value={cityName}
              onChange={(e) =>
                setCityName(
                  e.target.value
                )
              }
              className="flex-1 bg-slate-800 border border-slate-700 text-white p-4 rounded-2xl outline-none"
            />

            <button
              onClick={handleAddStop}
              className="bg-rose-600 hover:bg-rose-700 px-6 rounded-2xl text-white font-semibold"
            >

              Add Stop

            </button>

          </div>

          {
            stops.length === 0 ? (

              <p className="text-slate-400">

                No stops added yet.

              </p>

            ) : (

              <div className="grid md:grid-cols-3 gap-6">

                {stops.map((stop) => (

                  <div
                    key={stop.id}
                    className="bg-slate-900 border border-slate-800 p-6 rounded-2xl"
                  >

                    <h3 className="text-2xl text-white font-bold">

                      {stop.cityName}

                    </h3>

                    <button
                      onClick={() =>
                        handleDeleteStop(
                          stop.id
                        )
                      }
                      className="mt-5 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-xl text-white"
                    >

                      Delete

                    </button>

                  </div>

                ))}

              </div>

            )
          }

        </div>

      </div>

    </div>
  );
}