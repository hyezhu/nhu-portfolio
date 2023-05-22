import "./about-me.styles.scss";
import nhuPic from "../../img/Nhu.jpeg";
import Grid from "@mui/material/Unstable_Grid2";
import Download from "@mui/icons-material/Download";
import Button from "@mui/material/Button";
import CV from "../../img/Nhu-Dao-CV.pdf";

export default function AboutMe() {
  return (
    <section id="about-me" className="section-about-me">
      <Grid
        container
        spacing={2}
        gap={3}
        justifyContent="center"
        alignItems="center"
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
            As a junior web front-end developer, I am passionate about creating
            visually appealing and user-friendly websites. I pay meticulous
            attention to details, make sure every element is perfectly aligned
            and visually consistent. My skills include:{" "}
            <b>
              HTML5, CSS3, Sass, Javascript ES6, React.js, React Hooks, Git,
              Firebase, Redux.
            </b>
            <br />
            I'm currently working as a professional nail artist, where I apply
            my attention to details and passion to design unique nail art. This
            work has brought me ability in time management, client communication
            and delivering high quality work.
            <br />I am excited to combine my passion for web development with my
            artistic background to contribute to innovative projects and
            collaborate with teams to deliver outstanding results.
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
            <span>Download my CV</span>
          </Button>
        </Grid>
      </Grid>
    </section>
  );
}
