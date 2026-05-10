import { Plane } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { syncUser } from "../services/userServices";
import { signInWithPopup } from "firebase/auth";

import { auth, googleProvider } from "../services/firebase";

export default function LoginPage() {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);

      const user = result.user;

      console.log(user);

      const response = await syncUser({
        firebaseUid: user.uid,

        name: user.displayName,

        email: user.email,
      });

      localStorage.setItem("user", JSON.stringify(response.data));

      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070')",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 bg-white/10 backdrop-blur-lg border border-white/20 p-10 rounded-3xl shadow-2xl w-[400px]">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Plane size={40} className="text-rose-500" />

          <h1 className="text-4xl font-bold text-white">Traveloop</h1>
        </div>

        <p className="text-slate-300 text-center mb-8">
          Plan journeys beautifully
        </p>

        <button
          onClick={handleGoogleLogin}
          className="w-full bg-rose-600 hover:bg-rose-700 text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
}
