

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import HeroSection from '../HeroSection';
import Link from '@material-ui/core/Link';
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


 export function Profile(props){
    const classes = useStyles();

    return (
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            NickWang@g.ucla.edu
          </Typography>
          <Typography variant="h5" component="h2">
            Nick Wang
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Male
          </Typography>
          <Typography variant="body1" component="p">
            Sleep Hours: 1am - 9am <br></br>
            Budget: 200 <br></br>
            Pet: None <br></br>
            His Apartment Info: 123 Hilgard Rm 123, 1b1b, no parking, no gym <br></br>
            His Roomamtes: <Link href="#" >
    Rick Wang
  </Link>
          <br></br> 
          <br></br>   
          <Typography variant="subtitle1" component = "p">
            Reviews by other Bruins: <br/>
          </Typography>
          </Typography>
          <Typography variant="body2" component="p">
            Nice person and easy to live with 
            <br />
            Wonderful Roomate
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color = "primary">Back</Button>
        </CardActions>
      </Card>
    );
}

export default Profile;
