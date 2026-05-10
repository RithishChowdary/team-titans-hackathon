import {
  MapPin,
  Calendar,
  Wallet,
  Plane,
} from "lucide-react";

export default function PublicTripPage() {

  const trip = {
    title: "Europe Adventure",
    destination: "Paris • Rome • Zurich",
    budget: "₹1,20,000",
    duration: "7 Days",
    traveler: "Kiran",
    image:
      "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?q=80&w=2070",
  };

  const itinerary = [
    {
      day: "Day 1",
      city: "Paris",
      activities: [
        "Eiffel Tower Visit",
        "Seine River Cruise",
        "Louvre Museum",
      ],
    },

    {
      day: "Day 2",
      city: "Rome",
      activities: [
        "Colosseum Tour",
        "Trevi Fountain",
        "Vatican Museum",
      ],
    },

    {
      day: "Day 3",
      city: "Zurich",
      activities: [
        "Lake Zurich",
        "Old Town Walk",
        "Swiss Alps Tour",
      ],
    },
  ];

  return (

    <div className="min-h-screen bg-slate-950 text-white">

      {/* HERO SECTION */}

      <div
        className="h-[500px] bg-cover bg-center relative"
        style={{
          backgroundImage:
            `url(${trip.image})`,
        }}
      >

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 h-full flex items-end p-12">

          <div>

            <h1 className="text-6xl font-bold">
              {trip.title}
            </h1>

            <div className="flex gap-6 mt-6 flex-wrap">

              <div className="flex items-center gap-2 text-slate-200">

                <MapPin size={20} />

                <p>{trip.destination}</p>

              </div>

              <div className="flex items-center gap-2 text-slate-200">

                <Calendar size={20} />

                <p>{trip.duration}</p>

              </div>

              <div className="flex items-center gap-2 text-slate-200">

                <Wallet size={20} />

                <p>{trip.budget}</p>

              </div>

            </div>

            <p className="mt-6 text-slate-300 text-lg">
              Shared by {trip.traveler}
            </p>

          </div>

        </div>

      </div>

      {/* ITINERARY SECTION */}

      <div className="max-w-5xl mx-auto py-16 px-6">

        <h2 className="text-4xl font-bold mb-14">
          Trip Itinerary
        </h2>

        <div className="space-y-10">

          {itinerary.map((item, index) => (

            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl hover:scale-[1.02] transition-all duration-300"
            >

              <div className="flex items-center gap-4 mb-6">

                <div className="bg-rose-600 p-4 rounded-2xl">

                  <Plane size={24} />

                </div>

                <div>

                  <h3 className="text-3xl font-bold">
                    {item.day}
                  </h3>

                  <p className="text-slate-400 text-lg">
                    {item.city}
                  </p>

                </div>

              </div>

              <div className="grid md:grid-cols-3 gap-5">

                {item.activities.map(
                  (activity, i) => (

                    <div
                      key={i}
                      className="bg-slate-800 border border-slate-700 p-5 rounded-2xl"
                    >

                      <p className="text-slate-200">
                        {activity}
                      </p>

                    </div>

                  )
                )}

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* FOOTER */}

      <div className="border-t border-slate-800 py-8 text-center text-slate-500">

        Shared using Traveloop

      </div>

    </div>
  );
}