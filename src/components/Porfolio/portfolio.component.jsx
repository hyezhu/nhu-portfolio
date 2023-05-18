import "./portfolio.styles.scss";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions } from "@mui/material";

import OmniFood from "../../img/omni-food.png";
import LotusTour from "../../img/lotus-tour.png";
import GuessNumber from "../../img/guess-number.png";
import Forkify from "../../img/forkify.png";

export default function Portfolio() {
  return (
    <div id="portfolio">
      <h2>Portfolio</h2>
      <div className="project-links">
        <Card className="card" sx={{ maxWidth: 360 }}>
          <CardActionArea>
            <CardMedia
              className="card-image"
              sx={{ height: 140}}
              image={OmniFood}
              title="omni food"
            />
            <CardContent className="content">
              <p>Start-up: Omnifood - healthy meal service</p>
            </CardContent>
          </CardActionArea>

          <CardActions>
            <Button className="btn" size="small">
              <a
                className="project-link"
                href="https://omnifood-nhu.netlify.app"
              >
                Learn More
              </a>
            </Button>
          </CardActions>
        </Card>
        <Card className="card" sx={{ maxWidth: 360 }}>
          <CardActionArea>
            <CardMedia
              className="card-image"
              sx={{ height: 140 }}
              image={LotusTour}
              title="lotus tour"
            />
            <CardContent className="content">
              <p>Landing page for adventurous tour agency</p>
            </CardContent>
          </CardActionArea>

          <CardActions>
            <Button className="btn" size="small">
              <a
                className="project-link"
                href="https://lotus-tours.netlify.app"
              >
                Learn More
              </a>
            </Button>
          </CardActions>
        </Card>
        <Card className="card" sx={{ maxWidth: 360 }}>
          <CardActionArea>
            <CardMedia
              className="card-image"
              sx={{ height: 140 }}
              image={Forkify}
              title="forkify app"
            />
            <CardContent className="content">
              <p>Web application to look up recipes</p>
            </CardContent>
          </CardActionArea>

          <CardActions>
            <Button className="btn" size="small">
              <a
                className="project-link"
                href="https://forkify-nhu.netlify.app"
              >
                Learn More
              </a>
            </Button>
          </CardActions>
        </Card>
        <Card className="card" sx={{ maxWidth: 360 }}>
          <CardActionArea>
            <CardMedia
              className="card-image"
              sx={{ height: 140 }}
              image={GuessNumber}
              title="number game"
            />
            <CardContent className="content">
              <p>Small fun web game built on Javascript</p>
            </CardContent>
          </CardActionArea>

          <CardActions>
            <Button className="btn" size="small">
              <a
                className="project-link"
                href="https://guess-my-number-nhu.netlify.app"
              >
                Learn More
              </a>
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
