import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Home from "./pages/home";
import "./style/index.scss";
function App() {
  return (
    <div>
      <Header />
      <SideBar />
      <Home />
    </div>
  );
}

export default App;
