import "./App.scss";
import AboutMe from "./components/About-me/about-me.component";
import Contact from "./components/Contact/contact.component";
import Portfolio from "./components/Porfolio/portfolio.component";
import Header from "./components/header/header.component";
import Navigation from "./components/Navigation/navigation.component";
import Container from "@mui/material/Container";
function App() {
  return (
    <div className="App">
      <Container fixed disableGutters>
        <header>
          <Navigation />
          <Header />
        </header>

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
