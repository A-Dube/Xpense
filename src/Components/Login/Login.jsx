import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "./../Auth/AuthContext";
import axios from "axios";
import Pic1 from "../../assets/Login.png";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [userID, setUserID] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:8080/auth/login", {
        userID,
        password,
      });

      const data = res.data;
      console.log(data);
      console.log("TOKEN SENT TO LOGIN:", data.jwtToken);

      if (res.status === 200 && data.jwtToken) {
        localStorage.setItem("token", data.jwtToken);
        await login(data.jwtToken);
        toast.success("Login successful!", {
          position: "top-center",
          autoClose: 2000,
          theme: "colored",
        });
        setTimeout(() => navigate("/tracker"), 2000);
      } else {
        toast.warn(data.message || "Login failed", {
          position: "top-center",
          autoClose: 3000,
          theme: "colored",
        });
      }
    } catch (err) {
      console.error("Login Error:", err);
      toast.error("Incorrect username or password!", {
        position: "top-center",
        autoClose: 3000,
        theme: "colored",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex flex-row min-h-screen">
      <div className="flex items-center justify-center w-1/2">
        <div className="border-4 border-[#7cc975] rounded-3xl bg-white inline-block p-3">
          <img src={Pic1} alt="Login Visual" className="rounded-2xl shadow-xl w-full h-auto object-cover"/>
        </div>
      </div>


      <div className="flex items-center justify-center w-1/2">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 w-full max-w-sm bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-2xl"
        >
          <h1 className="text-3xl font-bold text-[#6da95c] mb-2 text-center">
            Welcome Back
          </h1>
          <p className="text-black text-center mb-2">
            Login to continue your journey
          </p>

          <input
            type="text"
            placeholder="Username"
            value={userID}
            onChange={(e) => setUserID(e.target.value)}
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
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#7cc975] hover:shadow-[0_4px_20px_rgba(109,169,92,0.5)]"
            } text-white font-semibold rounded-md w-full transition-all duration-300`}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>

          <p className="text-gray-500 text-sm text-center">OR</p>

          <Link to="/signup" className="w-full">
            <button
              type="button"
              className="px-4 py-2 bg-[#7cc975] text-white font-semibold rounded-md w-full hover:shadow-[0_4px_20px_rgba(77,122,65,0.5)] transition-all duration-300"
            >
              Sign Up
            </button>
          </Link>
        </form>
      </div>

      <ToastContainer />
    </main>
  );
};

export default Login;
