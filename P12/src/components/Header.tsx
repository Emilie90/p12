import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="Nav">
        <img src="/logo.svg" className="logo" />
        <nav>
          <NavLink to="/">Accueil</NavLink>
          <NavLink to="/">Profil</NavLink>
          <NavLink to="/">Réglage</NavLink>
          <NavLink to="/">Communauté</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
