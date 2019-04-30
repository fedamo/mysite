import React from "react";
import { Container, Row, Col } from "reactstrap";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import NavigationLinks from "./NavigationLinks";
import CardImage1 from "./images/chaos.png.png";
import ppcDashImg from "./images/ppc_dashboard.PNG";
import cardConfig from "./data/CardData.js";
import Fade from "react-reveal";
import "../styles/card.css";
import Banner from "../components/banner";
import Zoom from "react-reveal/Zoom";
import Reveal from "react-reveal/Reveal";

class Projects extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <div>
          <NavigationLinks />
        </div>
        <div>
          <Banner />
        </div>

        <div className="div-projects">
          <div className="card-flex">
            {cardConfig.cardData.map((item, index) => (
              <Zoom duration={200}>
                <article className="article-tile">
                  <div
                    style={{
                      background: item.imgUrl,
                      backgroundSize:'contain',
                      backgroundPosition: "center",
                      backgroundRepeat:'no-repeat',
                      borderRadius: "2px 2px 0 0",
                      height: "220px",
                      maxWidth: "100%",
                      boxSizing: "border-box",
                      fontFamily: "Open Sans, sans-serif"
                    }}
                  />
                  <section className="article-body">
                    <p className="article-tags">{item.summary}</p>
                    <h2 className="article-heading">{item.title}</h2>
                    <p className="div-projects-p">{item.desc}</p>
                  </section>
                  <section className="chart">
                    <div
                      className="rating-bar-1 rating-small"
                      data-content1={item.databartext1}
                      data-content3={item.databartext2}
                    />
                    <div
                      className="rating-bar-2 rating-large"
                      data-content2={item.databartext3}
                      data-content4={item.databartext4}
                    />
                  </section>
                  <footer className="article-footer">
                    <ul className="article-links">
                      <li>
                        <a href={item.gitLink} target="_blank" rel="noopener noreferrer">Github</a>
                      </li>
                      <li>
                        <a href={item.demoLink} target="_blank" rel="noopener noreferrer">Demo</a>
                      </li>
                    </ul>
                  </footer>
                </article>
              </Zoom>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
