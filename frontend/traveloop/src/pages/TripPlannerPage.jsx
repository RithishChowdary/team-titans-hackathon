import {
  MapPin,
  Calendar,
  Plus,
  Plane,
} from "lucide-react";

export default function TripPlannerPage() {
 async function addStop(tripId, stopData) {
    // Implementation for adding a stop to a trip
  }

  return (

    <div className="min-h-screen bg-slate-950 text-white">

      {/* TOP HERO */}

      <div
        className="h-[350px] bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070')",
        }}
      >

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 h-full flex items-end px-12 pb-12">

          <div>

            <h1 className="text-6xl font-bold">
              Europe Adventure
            </h1>

            <p className="text-slate-300 mt-4 text-xl">
              Multi-city travel itinerary planner
            </p>

          </div>

        </div>

      </div>

      {/* MAIN CONTENT */}

      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* TOP ACTION BAR */}

        <div className="flex justify-between items-center mb-12 flex-wrap gap-5">

          <div>

            <h2 className="text-4xl font-bold">
              Trip Timeline
            </h2>

            <p className="text-slate-400 mt-2">
              Organize cities and activities beautifully
            </p>

          </div>

          <button
            className="bg-rose-600 hover:bg-rose-700 px-6 py-4 rounded-2xl flex items-center gap-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
          >

            <Plus size={22} />

            Add Stop

          </button>

        </div>

        {/* TIMELINE */}

        <div className="relative border-l-2 border-slate-700 ml-5 space-y-14">

          {stops.map((stop, index) => (

            <div
              key={index}
              className="relative pl-12"
            >

              {/* TIMELINE DOT */}

              <div className="absolute left-[-18px] top-5 bg-rose-600 p-3 rounded-full">

                <Plane size={18} />

              </div>

              {/* CARD */}

              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl hover:scale-[1.02] transition-all duration-300">

                {/* HEADER */}

                <div className="flex justify-between items-center flex-wrap gap-4">

                  <div>

                    <h3 className="text-4xl font-bold">
                      {stop.city}
                    </h3>

                    <div className="flex items-center gap-2 mt-3 text-slate-400">

                      <MapPin size={18} />

                      <p>{stop.country}</p>

                    </div>

                  </div>

                  <div className="flex items-center gap-3 text-slate-300 bg-slate-800 px-5 py-3 rounded-2xl">

                    <Calendar size={18} />

                    <p>{stop.date}</p>

                  </div>

                </div>

                {/* ACTIVITIES */}

                <div className="mt-10">

                  <h4 className="text-2xl font-semibold mb-6">
                    Activities
                  </h4>

                  <div className="grid md:grid-cols-3 gap-5">

                    {stop.activities.map(
                      (activity, i) => (

                        <div
                          key={i}
                          className="bg-slate-800 border border-slate-700 p-5 rounded-2xl hover:border-rose-500 transition-all"
                        >

                          <p className="text-slate-200">
                            {activity}
                          </p>

                        </div>

                      )
                    )}

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