import "./about-me.styles.scss";
import nhuPic from "../../img/Nhu.jpeg";
import Grid from "@mui/material/Grid";
import Download from "@mui/icons-material/Download";
import Button from "@mui/material/Button";
import CV from "../../img/Nhu-Dao-CV.pdf";

export default function AboutMe() {
  return (
    <div>
      <section id="about-me" className="section-about-me">
        <h2 className="heading-secondary">About Me</h2>
        <Grid
          container
          spacing={1}
          direction="row"
          justifyContent="center"
          alignItems="center"
          className="about-me-container"
        >
          <Grid item xs={4}>
            <img className="about-me-photo" src={nhuPic} alt="Pic of Nhu" />
          </Grid>
          <Grid item xs={8}>
            <div className="about-me-text">
              <p>
                As a junior web front-end developer, I am passionate about
                creating visually appealing and user-friendly websites. I pay
                meticulous attention to details, make sure every element is
                perfectly aligned and visually consistent. My problem sovling
                skills rely very much on logical thinking, patience and
                solution-oriented approach. I like to break down a complex
                problem into smaller pieces and manage to tackle every step.
              </p>
              <br />
              <p>
                I'm currently working as a professional nail artist, I run my
                own business in this field, where I apply my attention to
                details and passion to design unique nail art. This work has
                brought me ability in time management, client communication and
                delivering high quality work.
              </p>
              <br />
              <p>
                I am excited to combine my passion for web development with my
                artistic background to contribute to innovative projects and
                collaborate with teams to deliver outstanding results.
              </p>
              <br/>
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
            </div>
          </Grid>
        </Grid>
      </section>
    </div>
  );
}
