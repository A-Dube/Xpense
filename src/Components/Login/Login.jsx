import { React, useState } from "react";
import { Link } from "react-router-dom";
import Pic1 from "../../assets/Login.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  };

  return (
    <main className="flex flex-row min-h-screen bg-gradient-to-tr from-[#f0fff4] via-[#d7ffd9] to-[#b8f5bb]">
      <div className="flex items-center justify-center w-1/2 p-10">
        <img src={Pic1} className="rounded-2xl shadow-2xl w-full h-auto object-cover" />
      </div>
      <div className="flex items-center justify-center w-1/2">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 w-full max-w-sm bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-2xl"
        >
          <h1 className="text-3xl font-bold text-[#93dd32] mb-2 text-center">Welcome Back</h1>
          <p className="text-black text-center mb-2">Login to continue your journey</p>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#7db56d]"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#7db56d]"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className={`px-4 py-2 ${
              loading ? "bg-gray-400" : "bg-lime-400 hover:bg-[#6da95c]"
            } text-white font-semibold rounded-md w-full transition-all duration-300`}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
          <p className="text-gray-500 text-sm text-center">OR</p>
          <Link to="/signup" className="w-full">
            <button
              type="button"
              className="px-4 py-2 bg-lime-400 text-white font-semibold rounded-md w-full hover:bg-[#6da95c] transition-all duration-300"
            >
              Sign Up
            </button>
          </Link>
        </form>
      </div>
    </main>
  );
};

export default Login;
