import React from 'react';
// import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
// import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
// import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
// import CardHeader from '@material-ui/core/CardHeader';
import Image from '../FrontPage/frontpage1.png';
// import Logo from '../FrontPage/Smart_Shopping.png'



const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
 
  heroContent: {
    backgroundImage:`url(${Image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    padding: theme.spacing(30, 0, 15),
    // opacity: 0.9,
    font:'',
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(10),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  
  paper:{
    color: "#fffff",
    height: "100px",
    width:"200px",

  },
}));

const cards = [1, 2, 3,];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      {/* <AppBar position="relative" color="#212121">
        <Toolbar>
        
          
        </Toolbar>
      </AppBar> */}
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
        
             <Typography variant='h2' align="center" color="#inherit" gutterBottom>SMART SHOP </Typography>
            <Typography variant="h6" align='center' color="#inherit" paragraph>
            Nestovėk eilėse! Apsipirk pas mus greičiau ir pigiau!
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="inherit" href="/products">
                    Prekių katalogas
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="inherit" href="/about">
                    Apie mus
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
       
        <Container className={classes.cardGrid} maxWidth="lg">
        <Typography variant='h4' align="justify" color="#inherit" gutterBottom>Populiariausios prekės:</Typography>
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h1">
                      Prekės pavadinimas
                    </Typography>
                    
                    <Typography>
                    €12.00
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Peržiūrėti
                    </Button>
                    <Button size="small" color="primary">
                      Pirkti
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        <Container className={classes.cardGrid} maxWidth="lg">
        <Typography variant='h4' align="justify" color="inherit" gutterBottom>Naujausios prekės:</Typography>
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h1">
                      Prekės pavadinimas
                    </Typography>
                    
                    <Typography>
                    € 12.00
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Peržiūrėti
                    </Button>
                    <Button size="small" color="primary">
                      Pirkti
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
     
    </React.Fragment>
  );
}
