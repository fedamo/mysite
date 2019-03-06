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

const styles = theme => ({
 
  media: {
    height: '40%',
    paddingTop: "40.25%" // 16:9
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
 
  
});

class Projects extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      
      <div style = {{height: '100%', paddingLeft: 30, paddingRight: 30, background: '#DBDBDB'}}>
        <NavigationLinks/>
        
        <h1 style={{color: 'white', fontFamily: 'sans-serif', fontSize: 60, background: '#606c88'}}>  Projects</h1>
        
      <div >
      
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap:'wrap'}}>
        {cardConfig.cardData.map((item, index) => (
        
          <Card className="carddiv">
            
            <CardHeader 
              avatar={
                <Avatar aria-label={item.avatarLabel} style={{backgroundColor:item.avatarColor}}>
                  {item.avatarLetter}
                </Avatar>
              }
              
              title={item.title}
              subheader="September 14, 2016"
              style = {{fontSize: 20}}
            />

            <CardMedia 
              className={classes.media}
              image={item.img}
              title={item.title}
            />

            <CardContent>
              <Typography  style= {{ fontSize: 14 }} component="p">{item.summary}</Typography>
            </CardContent>
            
            <CardActions className={classes.actions} disableActionSpacing>
              <Button  color="inherit" href={item.gitLink} size="large" color="primary">
               Github
              </Button>
              <Button  color="inherit" href={item.demoLink} target="_blank" size="large" color="primary">
                Demo
              </Button>
              <IconButton
                className={classnames(classes.expand, {
                  [classes.expandOpen]: this.state.expanded
                })}
                onClick={this.handleExpandClick}
                aria-expanded={this.state.expanded}
                aria-label="Show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
              <CardContent >
                <Typography style= {{ fontSize: 14 }} paragraph >{item.desc}</Typography>
              </CardContent>
            </Collapse>
          </Card>
          
        ))}
      </div>
    
      </div>
      </div>

     
     
    );
  }
}

Projects.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Projects);
