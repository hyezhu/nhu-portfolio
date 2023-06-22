import "./portfolio.styles.scss";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Grid from "@mui/material/Grid";

import OmniFood from "../../img/omni-food.png";
import LotusTour from "../../img/lotus-tour.png";
import GuessNumber from "../../img/guess-number.png";
import Forkify from "../../img/forkify.png";

export default function Portfolio() {
  return (
    <div id="portfolio" className="project-links">
      <Grid
        container
        spacing={4}
        gap={3}
        justifyContent="center"
        alignItems="center"
        direction="row"
      >
        <Card className="card" sx={{ maxWidth: 360 }}>
          <CardActionArea>
            <a
              href="https://omnifood-nhu.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              <CardMedia
                className="card-image"
                sx={{ height: 140 }}
                image={OmniFood}
                title="omni food"
              />
            </a>

            <CardContent className="content">
              <h4>Start-up: Omnifood - healthy meal</h4>
              <br />
              <p>
                <i>
                  Implemented fluid layout and media query to build a responsive
                  website using HTML, CSS and Javascript (for sticky menu)
                </i>
              </p>
            </CardContent>
          </CardActionArea>

          <CardActions>
            <Button className="btn" size="small">
              <a
                className="project-link"
                href="https://omnifood-nhu.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                Learn More
              </a>
            </Button>
          </CardActions>
        </Card>
        <Card className="card" sx={{ maxWidth: 360 }}>
          <CardActionArea>
            <a
              href="https://lotus-tours.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              <CardMedia
                className="card-image"
                sx={{ height: 140 }}
                image={LotusTour}
                title="lotus tour"
              />
            </a>

            <CardContent className="content">
              <h4>Tour agency's landing page</h4>
              <br />
              <p>
                <i>
                  Responsive web page with animations, applying image
                  optimaztion and browser compatibility using HTML and Sass
                </i>
              </p>
            </CardContent>
          </CardActionArea>

          <CardActions>
            <Button className="btn" size="small">
              <a
                className="project-link"
                href="https://lotus-tours.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                Learn More
              </a>
            </Button>
          </CardActions>
        </Card>
        <Card className="card" sx={{ maxWidth: 360 }}>
          <CardActionArea>
            <a
              href="https://forkify-nhu.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              <CardMedia
                className="card-image"
                sx={{ height: 140 }}
                image={Forkify}
                title="forkify app"
              />
            </a>

            <CardContent className="content">
              <h4>Recipe web application</h4>
              <br />
              <p>
                <i>
                  Worked with APIs and data storage. Implemented function where
                  user can upload their own recipe. Project used HTML, CSS and
                  Javascript
                </i>
              </p>
            </CardContent>
          </CardActionArea>

          <CardActions>
            <Button className="btn" size="small">
              <a
                className="project-link"
                href="https://forkify-nhu.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                Learn More
              </a>
            </Button>
          </CardActions>
        </Card>
        <Card className="card" sx={{ maxWidth: 360 }}>
          <CardActionArea>
            <a
              href="https://ad-insight.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              <CardMedia
                className="card-image"
                sx={{ height: 140 }}
                image={GuessNumber}
                title="number game"
              />
            </a>

            <CardContent className="content">
              <h4>Data Analytic Platform</h4>
              <br />
              <p>
                <i>
                  Data Analytic Platform centralized ads performance data
                  analysis. The project is still going on and this is the
                  dashboard I've built so far, using React (Javascript) and
                  Material UI.
                </i>
              </p>
            </CardContent>
          </CardActionArea>

          <CardActions>
            <Button className="btn" size="small">
              <a
                className="project-link"
                href="https://ad-insight.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                Learn More
              </a>
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </div>
  );
}
