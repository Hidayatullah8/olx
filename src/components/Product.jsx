import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../StyleSheet/Product.css';
import Product from '../images/house.jpg'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
      <div className="CardSize" >
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
        image={Product}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Rs 23 000,000
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           5bds-5Ba-8Marla
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          About More
        </Button>
      </CardActions>
    </Card>
    </div>
   
  );
  
}





