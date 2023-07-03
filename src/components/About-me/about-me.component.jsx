import "./about-me.styles.scss";
import nhuPic from "../../img/Nhu.jpeg";
import Grid from "@mui/material/Unstable_Grid2";
import Download from "@mui/icons-material/Download";
import Button from "@mui/material/Button";
import CV from "../../img/Nhu-Dao-CV-PDF.pdf";

export default function AboutMe() {
  return (
    <section id="about-me" className="section-about-me">
      <Grid
        container
        spacing={2}
        gap={3}
        direction="row"
        className="about-me-container"
      >
        <Grid xs={1} display="flex" justifyContent="center" alignItems="center">
          <img className="about-me-photo" src={nhuPic} alt="Pic of Nhu" />
        </Grid>

        <Grid
          xs={2}
          container
          display="flex"
          justifyContent="center"
          alignItems="center"
          className="about-me-text"
          flexDirection="column"
        >
          <p>
            As a front-end developer, I am passionate about creating
            visually appealing and user-friendly websites. My skills include:{" "}
            <b>
              HTML5, CSS3, Sass, Javascript ES6, React.js, React Hooks, Git,
              Firebase, Redux.
            </b>
            <Grid
              container
              display="flex"
              flexDirection="column"
              textAlign="left"
              justifyContent="center"
              marginTop={1}
            >
              <p>HTML</p>
              <div class="skill-container">
                <div class="skills html">90%</div>
              </div>
              <p>JavaScript</p>
              <div class="skill-container">
                <div class="skills js">50%</div>
              </div>
              <p>React</p>
              <div class="skill-container">
                <div class="skills react">50%</div>
              </div>
              <p>Web design/CSS/Sass</p>
              <div class="skill-container">
                <div class="skills web-design">60%</div>
              </div>
            </Grid>
            <br />
            I'm also a nail artist and painter by hobby, I am excited to combine
            my passion for web development with my artistic background to
            contribute to innovative projects and collaborate with teams to
            deliver outstanding results.
          </p>
          <br />
          <Button
            className="btn-cv"
            variant="text"
            href={CV}
            target="_blank"
            endIcon={<Download />}
            size="small"
          >
            <span>Check my CV</span>
          </Button>
        </Grid>
      </Grid>
    </section>
  );
}
