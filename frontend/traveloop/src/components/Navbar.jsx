import { useNavigate } from "react-router-dom";
import { Plane } from "lucide-react";

export default function Navbar() {
  const Navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");

    Navigate("/login");
  };

  return (
    <div className="bg-slate-900 border-b border-slate-800 px-10 py-5 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <Plane className="text-rose-500" />

        <h1 className="text-2xl font-bold text-white">Traveloop</h1>
      </div>

      <div className="flex items-center gap-4">
        <img
          src={user?.photo}
          alt=""
          className="w-12 h-12 rounded-full border-2 border-rose-500"
        />

        <div>
          <p className="text-white font-semibold">{user?.name}</p>

          <p className="text-slate-400 text-sm">{user?.email}</p>
        </div>

        <button
          onClick={handleLogout}
          className="bg-rose-600 hover:bg-rose-700 text-white px-5 py-2 rounded-xl"
        >
          Logout
        </button>

        <button onClick={() => navigate("/dashboard")}>Dashboard</button>

        <button onClick={() => navigate("/planner")}>Planner</button>
      </div>
    </div>
  );
}
