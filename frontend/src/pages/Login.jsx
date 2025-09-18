
import { useState } from "react";
import API from "../api"; // ✅ use axios instance with baseURL

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await API.post("/auth/login", form);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("✅ Login successful!");
      window.location.href = "/"; 
    } catch (err) {
      alert(err.response?.data?.message || "❌ Login failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card shadow p-4 col-md-6 mx-auto mt-5">
      <h2 className="mb-3 text-center">🔑 Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="form-control mb-2"
          required
        />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          className="form-control mb-3"
          required
        />
        <button
          type="submit"
          className="btn btn-primary w-100"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}
