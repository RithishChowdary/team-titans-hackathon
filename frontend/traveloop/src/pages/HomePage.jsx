import { useNavigate } from "react-router-dom";
import {
  Plane,
  Map,
  Wallet,
  Calendar,
} from "lucide-react";

export default function HomePage() {
  const Navigate = useNavigate();

  return (

    <div className="min-h-screen bg-slate-950 text-white">

      {/* NAVBAR */}

      <div className="flex justify-between items-center px-10 py-6 border-b border-slate-800">

        <div className="flex items-center gap-3">

          <Plane
            size={35}
            className="text-rose-500"
          />

          <h1 className="text-3xl font-bold">
            Traveloop
          </h1>

        </div>

        <div className="flex items-center gap-5">

          <button
            className="text-slate-300 hover:text-white transition-all"
          >
            Features
          </button>

          <button
            className="text-slate-300 hover:text-white transition-all"
          >
            Explore
          </button>

          <button
            className="bg-rose-600 hover:bg-rose-700 px-5 py-2 rounded-xl transition-all"
            onClick={() => Navigate("/login")}
          >
            Login
          </button>

        </div>

      </div>

      {/* HERO SECTION */}

      <div
        className="h-[650px] bg-cover bg-center relative flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070')",
        }}
      >

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 px-14 max-w-4xl">

          <h1 className="text-7xl font-bold leading-tight">

            Personalized
            <span className="text-rose-500">
              {" "}Travel Planning
            </span>

            <br />

            Made Easy

          </h1>

          <p className="text-slate-300 text-xl mt-8 leading-relaxed w-[700px]">

            Plan multi-city trips, manage budgets,
            discover activities, and organize your
            entire journey beautifully in one place.

          </p>

          <div className="flex gap-5 mt-10">

            <button
                onClick={() => Navigate("/login")
              }
              className="bg-rose-600 hover:bg-rose-700 px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Start Planning
            </button>

            <button
              className="bg-white/10 backdrop-blur-lg border border-white/20 px-8 py-4 rounded-2xl text-lg hover:bg-white/20 transition-all"
            >
              Explore Trips
            </button>

          </div>

        </div>

      </div>

      {/* FEATURES SECTION */}

      <div className="px-14 py-20">

        <h2 className="text-4xl font-bold text-center mb-16">
          Why Choose Traveloop?
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          {/* CARD 1 */}

          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:scale-105 transition-all duration-300 shadow-xl">

            <Map
              size={45}
              className="text-rose-500 mb-5"
            />

            <h3 className="text-2xl font-bold mb-4">
              Multi-City Planning
            </h3>

            <p className="text-slate-400 leading-relaxed">
              Create beautiful itineraries across
              multiple destinations effortlessly.
            </p>

          </div>

          {/* CARD 2 */}

          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:scale-105 transition-all duration-300 shadow-xl">

            <Wallet
              size={45}
              className="text-rose-500 mb-5"
            />

            <h3 className="text-2xl font-bold mb-4">
              Budget Tracking
            </h3>

            <p className="text-slate-400 leading-relaxed">
              Track travel expenses and manage
              trip budgets smartly.
            </p>

          </div>

          {/* CARD 3 */}

          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:scale-105 transition-all duration-300 shadow-xl">

            <Calendar
              size={45}
              className="text-rose-500 mb-5"
            />

            <h3 className="text-2xl font-bold mb-4">
              Smart Scheduling
            </h3>

            <p className="text-slate-400 leading-relaxed">
              Organize activities, dates, and
              travel timelines professionally.
            </p>

          </div>

          {/* CARD 4 */}

          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:scale-105 transition-all duration-300 shadow-xl">

            <Plane
              size={45}
              className="text-rose-500 mb-5"
            />

            <h3 className="text-2xl font-bold mb-4">
              Public Sharing
            </h3>

            <p className="text-slate-400 leading-relaxed">
              Share your travel plans easily with
              friends and family.
            </p>

          </div>

        </div>

      </div>

      {/* FOOTER */}

      <div className="border-t border-slate-800 py-8 text-center text-slate-500">

        © 2026 Traveloop — Plan journeys beautifully.

      </div>

    </div>
  );
}