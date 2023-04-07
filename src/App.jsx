//import RRoutes from "./components/Routes";
import "./App.css";
import Nav from "./components/Nav";
import RRoutes from "./components/Routes";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="headerImg">
        <img src="/src/components/posters/main.png" alt="" />{" "}
      </div>
      <div className="mainBody">
        <RRoutes />
        <div className="posterBox">
        <div className="poster1"><img src="/src/components/posters/poster1.png" alt="" />{" "}</div>
        <div className="poster2" ><img src="/src/components/posters/poster2.png" alt="" />{" "}</div>
        </div>
        
      </div>
      <div className="footer">

      </div>
    </div>
  );
}

export default App;
