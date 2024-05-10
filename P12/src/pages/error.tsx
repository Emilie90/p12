import { NavLink } from "react-router-dom";

function Error() {
  return (
    <section className="">
      <h2 className="">404</h2>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <NavLink to="/accueil" className="">
        Retourner sur la page d’accueil
      </NavLink>
    </section>
  );
}

export default Error;
