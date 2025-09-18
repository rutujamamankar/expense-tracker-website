import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import AddExpense from "./pages/AddExpense";
import ExpenseList from "./pages/ExpenseList";
import Summary from "./pages/Summary";
import Login from "./pages/Login";
import Register from "./pages/Register";
function App() {
  return (
    <div>
      <NavBar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddExpense />} />
          <Route path="/expenses" element={<ExpenseList />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
