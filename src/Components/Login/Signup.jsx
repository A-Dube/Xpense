import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth/AuthContext";
import { toast } from "react-toastify";
import axios from "axios";
import Pic1 from "../../assets/Login.png";

const Signup = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userID, setUserID] = useState("");
  const [contact, setContact] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:8080/auth/signup", {
        name,
        email,
        password,
        contact,
        userID,
      });

      const data = response.data;

      if (response.status === 201) {
        login(data.jwtToken);
        navigate("/tracker");
      } else {
        alert(data.message || "Signup failed");
      }
    } catch (err) {
      console.error("Signup error:", err);
      alert("Signup failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex flex-row min-h-screen bg-gradient-to-tr from-[#48b164] via-[#87f48d] to-[#27bc2f]">
      <div className="flex items-center justify-center w-1/2 p-10">
        <img
          src={Pic1}
          alt="Signup visual"
          className="rounded-3xl shadow-[0_4px_40px_rgba(109,169,92,0.4)] w-full h-auto object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>

      <div className="flex items-center justify-center w-1/2">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-5 w-full max-w-sm bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-[#6da95c]"
        >
          <h1 className="text-4xl font-extrabold text-[#6da95c] text-center">
            Create Account
          </h1>
          <p className="text-[#3a7a56] text-center mb-2">
            Join Xpense and take control of your finances
          </p>

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-4 py-3 border border-[#a3d9a5] rounded-xl w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#6da95c]"
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-3 border border-[#a3d9a5] rounded-xl w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#6da95c]"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-3 border border-[#a3d9a5] rounded-xl w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#6da95c]"
            required
          />

          <input
            type="text"
            placeholder="Contact Number"
            value={contact}
            onChange={(e) => setContact(e.target.value.replace(/\D/g, ""))}
            className="px-4 py-3 border border-[#a3d9a5] rounded-xl w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#6da95c]"
            required
          />

          <input
            type="text"
            placeholder="User ID"
            value={userID}
            onChange={(e) => setUserID(e.target.value)}
            className="px-4 py-3 border border-[#a3d9a5] rounded-xl w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#6da95c]"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className={`px-4 py-3 text-white font-semibold rounded-xl w-full transition-all duration-300 ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-[#7cc975] via-[#6da95c] to-[#4a7c41] hover:shadow-[0_4px_20px_rgba(109,169,92,0.5)]"
            }`}
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>

          <p className="text-gray-500 text-sm text-center font-medium">OR</p>

          <Link to="/ulogin" className="w-full">
            <button
              type="button"
              className="px-4 py-3 w-full text-white font-semibold rounded-xl bg-gradient-to-r from-[#6da95c] via-[#4a7c41] to-[#2e5a2d] hover:shadow-[0_4px_20px_rgba(77,122,65,0.5)] transition-all duration-300"
            >
              Sign In
            </button>
          </Link>
        </form>
      </div>
    </main>
  );
};

export default Signup;
