import { NavLink } from "react-router-dom";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

function Home() {
  return (
    <section>
      <Header />
      <div className="home">
        <h2 className="name">Karl</h2>
        <br />
        <NavLink to="/user/12/home">→ Dashboard</NavLink>
        <NavLink to="/user/12">→ UserInfo</NavLink>
        <NavLink to="/user/12/activity">→ Activity</NavLink>
        <NavLink to="/user/12/average-sessions">→ AverageSessions</NavLink>
        <NavLink to="/user/12/performance">→ Performance</NavLink>
      </div>
      <div className="">
        <h2 className="name">Cecilia</h2>
        <br />
        <NavLink to="/user/18/home">→ Dashboard</NavLink>
        <NavLink to="/user/18">→ UserInfo</NavLink>
        <NavLink to="/user/18/activity">→ Activity</NavLink>
        <NavLink to="/user/18/average-sessions">→ AverageSessions</NavLink>
        <NavLink to="/user/18/performance">→ Performance</NavLink>
      </div>
      <SideBar />
    </section>
  );
}

export default Home;
