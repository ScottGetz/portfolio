import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Work from "./components/work/Work";
import Contact from "./components/contact/Contact";
import "./app.scss";

function App() {
    return (
        <div className="app">
            <Navbar />
            <div className="sections">
                <Intro />
                <Portfolio />
                <Work />
                <Contact />
            </div>
        </div>
    );
}

export default App;
