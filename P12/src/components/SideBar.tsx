import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="SideBar">
      <div className="logo_sidebar">
        <Link to="/">
          <img src="/src/assets/icon1.png" />
        </Link>
        <Link to="/">
          <img src="/src/assets/icon2.png" />
        </Link>
        <Link to="/">
          <img src="/src/assets/icon3.png" />
        </Link>
        <Link to="/">
          <img src="/src/assets/icon4.png" />
        </Link>
      </div>
      <div className="Copyright">Copyright, SportSee 2020</div>
    </div>
  );
};

export default SideBar;
