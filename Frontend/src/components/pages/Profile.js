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


export function Profile(props) {
  const [state, setState] = React.useState({
    user: {},
    userinfo: {},
    loading: true
  })

  React.useEffect(() => {
    const fetchThings = async () => {
      const _userinfo = await fetch("http://localhost:3000/userinfo/1");
      const _user = await fetch("http://localhost:3000/users/1");
      const userjson = await _user.json();
      const userinfojson = await _userinfo.json();
      setState({
        user: userjson,
        userinfo: userinfojson
      })
    }
  
    fetchThings();
  }, []);

  const classes = useStyles();

  if (state.loading) {
    return null;
  }
  return (
  <Card className={classes.root}>
    <CardContent>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
        {state.user.Email}
      </Typography>
      <Typography variant="h5" component="h2">
        {state.user.Name}
      </Typography>
      <Typography className={classes.pos} color="textSecondary">
        {state.userinfo.Gender}
      </Typography>
      <Typography variant="body1" component="p">
        Sleep Hours: {state.userinfo.SleepStart}:00 - {state.userinfo.SleepEnd}:00 <br></br>
        Budget: {state.userinfo.BudgetLow} - {state.userinfo.BudgetHigh} <br></br>
        { parseInt(state.userinfo.Pet) === 0 ? (<div> Pet: None </div> ) : (<div> Pet: Yes </div>) } <br></br>
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