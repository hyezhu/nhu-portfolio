import logo from "./logo.svg";
import "./App.scss";
import Navigation from "./components/Navigation/navigation.component";
import AboutMe from "./components/About-me/about-me.component";
import Education from "./components/Education/education.component";
import Experience from "./components/Experience/experience.component";
import Contact from "./components/Contact/contact.component";
import Portfolio from "./components/Porfolio/portfolio.component";
import Header from "./components/header/header.component";
import Avatar from "@mui/material/Avatar";
import nhuPic from "./img/Nhu.jpeg";
import Container from "@mui/material/Container";
function App() {
  return (
    <div className="App">
      <Container>
        <Navigation />
        <Header />
        <AboutMe />
        {/* <Avatar src={nhuPic} alt="my pic" variant="circular" sizes="100px" /> */}
        {/* <Education />
        <Experience /> */}
        <Portfolio />
        <Contact />
        <footer>Copyright by Nhu Dao, 2023</footer>
      </Container>
    </div>
  );
}

export default App;
