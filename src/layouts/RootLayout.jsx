import { NavLink, Outlet, useLocation, useNavigation } from "react-router-dom";

function Spinner() {
  return (
    <div className="flex justify-center py-24" role="status" aria-label="Loading">
      <span className="loading loading-spinner loading-lg text-secondary"></span>
    </div>
  );
}

export default function RootLayout() {
  const navigation = useNavigation(); // "idle" | "loading" | "submitting"
  const location = useLocation();

  const linkClass = ({ isActive }) =>
    isActive ? "text-secondary font-semibold" : "hover:text-secondary";

  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <header className="navbar bg-base-200 border-b border-base-300 px-4 md:px-8">
        <div className="flex-1">
          <NavLink to="/" className="font-display text-2xl text-primary">
            Ringside Roster
          </NavLink>
        </div>
        <nav>
          <ul className="menu menu-horizontal gap-1">
            <li>
              <NavLink to="/" end className={linkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/wrestlers" className={linkClass}>
                Wrestlers
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8 md:px-8">
        {navigation.state === "loading" ? <Spinner /> : <Outlet />}
      </main>

      <footer className="border-t border-base-300 px-4 py-4 text-center text-sm opacity-60">
        You are at {location.pathname}
      </footer>
    </div>
  );
}
