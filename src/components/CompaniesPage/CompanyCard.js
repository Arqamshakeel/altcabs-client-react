import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import LocalTaxiIcon from "@material-ui/icons/LocalTaxi";
import { Box, Grid } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    // maxWidth: "100%",
  },
  media: {
    height: 10,
  },
  largeIcon: {
    width: 100,
    height: 100,
  },
});

const CompanyCard = (props) => {
  const classes = useStyles();

  return (
    <div style={{ margin: "20px 0px 0px 0px" }}>
      <Card className={classes.root}>
        <CardActionArea
          onClick={() => {
            props.history.push("/questions/" + props.data._id);
          }}
        >
          <Grid container>
            <Grid item xs={2}>
              <Box display="flex" justifyContent="center" alignItems="center">
                <LocalTaxiIcon
                  style={{
                    color: red[500],
                    fontSize: "60px",
                    marginTop: "40",
                  }}
                />
              </Box>
            </Grid>

            <Grid item xs={10}>
              <CardMedia
                className={classes.media}
                // component="img"
                // image="https://source.unsplash.com/random"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h4"
                  component="h2"
                  color="initial"
                  fontWeight="fontWeightBold"
                >
                  {props.data.company.details.name}
                </Typography>
                <Typography variant="h5" component="p">
                  £{props.data.price}
                </Typography>
                <Typography variant="h6" color="textSecondary" component="p">
                  {props.data.vehicle_type_name}
                </Typography>
              </CardContent>
            </Grid>
          </Grid>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};
export default withRouter(CompanyCard);
