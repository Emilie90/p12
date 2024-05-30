import { NavLink } from "react-router-dom";

function Home() {
  return (
    <section>
      <div className="home">
        <h2 className="name">Karl</h2>

        <li>
          <NavLink to="/user/12">Dashboard</NavLink>
        </li>

        <h2 className="name">Cecilia</h2>

        <li>
          <NavLink to="/user/18">Dashboard</NavLink>
        </li>
      </div>
    </section>
  );
}

export default Home;
