import React from "react";
import styles from "./styles";

import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Card from "~/components/Card/Card.jsx";
import CardBody from "~/components/Card/CardBody.jsx";
import CardHeader from "~/components/Card/CardHeader.jsx";
import CardFooter from "~/components/Card/CardFooter.jsx";
import Button from "~/components/CustomButtons/Button.jsx";
import { makeStyles } from '@material-ui/core/styles';

import cardsStyle from "~/assets/jss/material-kit-pro-react/views/componentsSections/sectionCards.jsx";
import axios from 'axios';
import Paper from '@material-ui/core/Paper';

/*const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

const style = {
  ...cardsStyle
};
*/




class CardNew extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      players:[{name:""}],
      teams:[{name:""}]
    };
//console.log("THis is the name is card new "+props.name)
  //  this.handleClick = this.handleClick.bind(this);

//   this.handleClick = this.handleClick.bind(this);
  }
  componentWillMount()
  {

    this.setState({players:[{name:""}]})
  }

  componentDidMount()
  {




  }

    render() {
  //    console.log("This is the name in card name render "+this.props.name)
  //
//  const classes = useStyles();


//this.setState({players:[{"name":""}]})

//var fetch = require("fetch").fetchUrl;

//  let url = 'localhost:3008/players';

var imageUrl="http://localhost:3008/"+this.props.image+""

    return (
        <div >

                <Paper style={{ maxWidth: "20vw" }} >
          <Card profile  raised color="success">

    <CardHeader image>
      <a href="#pablo" onClick={e => e.preventDefault()}>
        <img
          src={imageUrl}
          alt="..."
        />
      </a>
      <div
        className={cardsStyle.coloredShadow}
        style={{
          opacity: "1"
        }}
      />
    </CardHeader>
    <CardBody>
      <h4 className={cardsStyle.cardTitle}>Name:{" "}{this.props.name}</h4>
      <h4>
      Team:{" "} {this.props.teamName}
    </h4>
      <h4 >
      College:{" "} {this.props.college}
    </h4>
      <h4 >
      Position:{" "} {this.props.position}
    </h4>
    </CardBody>
    <CardFooter profile className={cardsStyle.justifyContentCenter}>

    </CardFooter>

  </Card>
    </Paper>
          {/*  <div style={styles.name}>Gordon "Snake" Hayward</div>
            <img src="http://localhost:3008/gordon_hayward.png" alt="player_image" />

            <div>Boston Celtics</div> */}
        </div>
    );
};

}
export default CardNew;
