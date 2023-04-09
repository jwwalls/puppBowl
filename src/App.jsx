//import RRoutes from "./components/Routes";
import "./App.css";
import Nav from "./components/Nav";
import RRoutes from "./components/Routes";
import Form from "./components/Form";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
          <div className="Navbar">
            <Nav />
            </div>
            <div className="headerImg">
                <img src="/src/components/posters/main.png" alt="" />{" "}
            </div>
            <div className="mainBody">
                <RRoutes />
                
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    );
}

export default App;
