import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../context/theme.context";

function Navbar() {

  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <nav className={"Navbar " + theme}>
      <div>
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/projects"> Projects </NavLink>
      </div>

      <button onClick={toggleTheme}>
        { theme === "light" ? "Dark 🌜" : "Light 🟡" }
      </button>
    </nav>
  );
}

export default Navbar;
