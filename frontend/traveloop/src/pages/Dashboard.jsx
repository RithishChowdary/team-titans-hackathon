import Navbar from "../components/Navbar";

import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";

import { getUserTrips } from "../services/tripServices";

import {
  MapPin,
  Wallet,
  Calendar,
} from "lucide-react";

export default function Dashboard() {

  const navigate = useNavigate();

  const [trips, setTrips] =
    useState([]);

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  useEffect(() => {

    if (user?.id || user?.uid) {

      fetchTrips();

    }

  }, []);

  const fetchTrips = async () => {

    try {

      const response =
        await getUserTrips(user.id || user.uid);

      console.log(
        "USER TRIPS:",
        response.data
      );

      setTrips(response.data);

    } catch (error) {

      console.log(error);

    }
  };

  function getTripImage(destination) {

    switch (destination) {

      case "Bali":
        return "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2070";

      case "Paris":
        return "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073";

      case "Dubai":
        return "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070";

      case "Tokyo":
        return "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2071";

      case "Maldives":
        return "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=2070";

      case "Switzerland":
        return "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070";

      case "Goa":
        return "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=2070";

      default:
        return "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070";

    }
  }

  return (

    <div className="min-h-screen bg-slate-950">

      <Navbar />

      <div className="p-10">

        <div
          className="h-[320px] rounded-3xl bg-cover bg-center relative overflow-hidden"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070')",
          }}
        >

          <div className="absolute inset-0 bg-black/60"></div>

          <div className="relative z-10 p-10 flex flex-col justify-center h-full">

            <h1 className="text-5xl font-bold text-white w-[700px] leading-tight">

              Your next adventure starts here.

            </h1>

            <p className="text-slate-300 text-lg mt-5 w-[600px]">

              Create beautiful travel plans, manage budgets,
              and organize your dream journeys effortlessly.

            </p>

            <button
              onClick={() =>
                navigate("/create-trip")
              }
              className="mt-8 w-[180px] bg-rose-600 hover:bg-rose-700 px-6 py-4 rounded-2xl text-white font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl"
            >

              Create Trip

            </button>

          </div>

        </div>

        <div className="flex items-center justify-between mt-14 mb-8">

          <h2 className="text-4xl text-white font-bold">

            My Trips

          </h2>

          <div className="text-slate-400">

            {trips.length} Trips

          </div>

        </div>

        {
          trips.length === 0 ? (

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-16 text-center">

              <h2 className="text-3xl text-white font-bold">

                No Trips Yet

              </h2>

              <p className="text-slate-400 mt-4 text-lg">

                Start planning your first adventure.

              </p>

              <button
                onClick={() =>
                  navigate("/create-trip")
                }
                className="mt-8 bg-rose-600 hover:bg-rose-700 px-8 py-4 rounded-2xl text-white font-semibold"
              >

                Create Your First Trip

              </button>

            </div>

          ) : (

            <div className="grid md:grid-cols-3 gap-8">

              {trips.map((trip) => (

                <div
                  key={trip.id}
                  onClick={() =>
                    navigate(`/trip/${trip.id}`)
                  }
                  className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer border border-slate-800"
                >

                  <div className="relative">

                    <img
                      src={getTripImage(
                        trip.destination
                      )}
                      alt=""
                      className="h-[240px] w-full object-cover"
                    />

                    <div className="absolute top-4 right-4 bg-rose-600 text-white px-4 py-2 rounded-xl text-sm font-semibold">

                      Active Trip

                    </div>

                  </div>

                  <div className="p-6">

                    <h3 className="text-3xl text-white font-bold">

                      {trip.title}

                    </h3>

                    <div className="space-y-4 mt-6">

                      <div className="flex items-center gap-3 text-slate-300">

                        <MapPin
                          size={20}
                          className="text-rose-500"
                        />

                        <p className="text-lg">

                          {trip.destination}

                        </p>

                      </div>

                      <div className="flex items-center gap-3 text-slate-300">

                        <Wallet
                          size={20}
                          className="text-rose-500"
                        />

                        <p className="text-lg">

                          ₹ {trip.budget}

                        </p>

                      </div>

                      <div className="flex items-center gap-3 text-slate-300">

                        <Calendar
                          size={20}
                          className="text-rose-500"
                        />

                        <p className="text-lg">

                          {trip.startDate}

                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          )
        }

      </div>

    </div>
  );
}