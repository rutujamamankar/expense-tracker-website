import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();

  const isActive = (path) => (location.pathname === path ? "active fw-bold text-primary" : "");

  return (
    <nav className="navbar navbar-light bg-light shadow-sm">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Brand */}
        <Link className="navbar-brand fw-bold text-primary" to="/">
          💰 ExpenseTracker
        </Link>
        {/* Horizontal Navigation */}
        <ul className="nav">
          <li className="nav-item">
            <Link className={`nav-link ${isActive("/")}`} to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${isActive("/add")}`} to="/add">
              Add Expense
            </Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${isActive("/expenses")}`} to="/expenses">
              Expenses
            </Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${isActive("/summary")}`} to="/summary">
              Summary
            </Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${isActive("/login")}`} to="/login">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${isActive("/register")}`} to="/register">
              Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
