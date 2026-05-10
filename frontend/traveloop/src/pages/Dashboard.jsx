import Navbar from "../components/Navbar";

import {
  MapPin,
  Wallet,
  Calendar,
} from "lucide-react";

export default function Dashboard() {

  const trips = [
    {
      id: 1,
      title: "Bali Adventure",
      budget: 50000,
      days: 5,
      city: "Indonesia",
      image:
        "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?q=80&w=2070",
    },

    {
      id: 2,
      title: "Paris Escape",
      budget: 90000,
      days: 7,
      city: "France",
      image:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073",
    },

    {
      id: 3,
      title: "Dubai Luxury",
      budget: 120000,
      days: 4,
      city: "UAE",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070",
    },
  ];

  return (

    <div className="min-h-screen bg-slate-950">

      <Navbar />

      <div className="p-10">

        <div
          className="h-[300px] rounded-3xl bg-cover bg-center relative overflow-hidden"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070')",
          }}
        >

          <div className="absolute inset-0 bg-black/50"></div>

          <div className="relative z-10 p-10">

            <h1 className="text-5xl font-bold text-white w-[600px] leading-tight">
              Your next adventure starts here.
            </h1>

            <button className="mt-8 bg-rose-600 hover:bg-rose-700 px-6 py-3 rounded-xl text-white font-semibold">
              Create Trip
            </button>

          </div>

        </div>

        <h2 className="text-3xl text-white font-bold mt-12 mb-8">
          My Trips
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {trips.map((trip) => (

            <div
              key={trip.id}
              className="bg-slate-900 rounded-3xl overflow-hidden shadow-xl hover:scale-105 transition-all duration-300"
            >

              <img
                src={trip.image}
                alt=""
                className="h-[220px] w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl text-white font-bold">
                  {trip.title}
                </h3>

                <div className="space-y-3 mt-5">

                  <div className="flex items-center gap-3 text-slate-300">

                    <MapPin size={18} />

                    <p>{trip.city}</p>

                  </div>

                  <div className="flex items-center gap-3 text-slate-300">

                    <Wallet size={18} />

                    <p>₹ {trip.budget}</p>

                  </div>

                  <div className="flex items-center gap-3 text-slate-300">

                    <Calendar size={18} />

                    <p>{trip.days} Days</p>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}