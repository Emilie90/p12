import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Index from "./pages";
import "./style/index.scss";
function App() {
  return (
    <div>
      <Header />
      <SideBar />
      <Index />
    </div>
  );
}

export default App;
