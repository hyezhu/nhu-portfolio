import "./App.scss";
import AboutMe from "./components/About-me/about-me.component";
import Contact from "./components/Contact/contact.component";
import Portfolio from "./components/Porfolio/portfolio.component";
import Header from "./components/header/header.component";

function App() {
  return (
    <div className="App">
      <div>
        <header>
          <Header />
        </header>
        <div className="h2-container">
          <h2 className="heading-secondary">About Me</h2>
        </div>

        <AboutMe />
        {/* <Avatar src={nhuPic} alt="my pic" variant="circular" sizes="100px" /> */}
        {/* <Education />
        <Experience /> */}
        <div className="h2-container">
          <h2 className="heading-secondary">Portfolio</h2>
        </div>

        <Portfolio />
        <Contact />
        <footer>Copyright by Nhu Dao, 2023</footer>
      </div>
    </div>
  );
}

export default App;
