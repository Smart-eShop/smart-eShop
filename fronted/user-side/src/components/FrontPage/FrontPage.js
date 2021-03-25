import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Image from '../FrontPage/frontpage1.png';

import Category from '../Category/Category'
// import Footer from '../Footer/Footer';



const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },

  heroContent: {
    backgroundImage: `url(${Image})`,
    backgroundColor: '#fffff', // Average color of the background image.
    backgroundPosition: 'center',
    padding: theme.spacing(35, 0, 40),

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

  paper: {
    color: "#fffff",
    height: "100px",
    width: "200px",
  },
  discount: {
    color: '#e64a19',
  },
  pop: {
    marginBottom: '100px'
  }
}));




export default function FrontPage({addCart}) {
  const classes = useStyles();

  const [popularItems, setPopularItems] = useState([]);
  const reducedPopularItems = [];

  const printPopularItems = async () => {
    const url = 'https://eshopsmart.herokuapp.com/api/popular-items';
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    
       data.items.forEach(items => {
          if (reducedPopularItems.length < 3) {
            reducedPopularItems.push(items)
        }
    })
        setPopularItems(reducedPopularItems);
        console.log(reducedPopularItems);

  }

  useEffect(() => {
    printPopularItems();
  }, []);



  const [items, setItems] = useState([]);

  const reducedOptions = [];
  const printItems = async () => {
    const url = 'https://eshopsmart.herokuapp.com/api/items';
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    data.items.forEach(item => {
      if (reducedOptions.length < 3) {
        reducedOptions.push(item)
      }
    });
    setItems(reducedOptions);
    console.log(reducedOptions);

  }

  useEffect(() => {
    printItems();
  }, []);

  const imgUrl = 'https://eshopsmart.herokuapp.com/images/';


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


        <Category />


        <Container className={classes.cardGrid} maxWidth="lg">
          <Container className={classes.root} component="section">
            <Typography variant="h4" marked="center" align="center" component="h2" className={classes.pop}>
              Populiariausios prekės
      </Typography>
          </Container>
           <Grid container spacing={4}>
           {popularItems.map((itemp) => (
              <Grid item key={itemp.id} xs={12} sm={6} md={4}>
                <Card className={classes.item}>
                  <img
                    src={imgUrl + itemp.img[0]} alt="nuotrauka" />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h1">
                      {itemp.title}
                    </Typography>
                    <Typography>
                      {itemp.price} €
                                    </Typography>
                    <Typography className={classes.discount}>
                      - {itemp.discount}%
                                    </Typography>
                  </CardContent>
                  <CardActions>
                    {/* <Link to={`/products/${item.id}`}>Peržiūrėti</Link> */}
                    <Button href={`/products/${itemp.id}`} size="small" color="primary">
                      Peržiūrėti
                                    </Button>
                                    <Button onClick={() =>addCart(itemp)} size="small" color="primary">Į
                                        krepšelį</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        <Container className={classes.cardGrid} maxWidth="lg">
          <Container className={classes.root} component="section">
            <Typography variant="h4" marked="center" align="center" component="h2" className={classes.pop}>
              Naujausios prekės
      </Typography>
          </Container>
          {/* End hero unit */}
          <Grid container spacing={4}>
            {items.map((item) => (
              <Grid item key={item.id} xs={12} sm={6} md={4}>
                <Card className={classes.item}>
                  <img
                    src={imgUrl + item.img[0]} alt="nuotrauka" />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h1">
                      {item.title}
                    </Typography>
                    <Typography>
                    € {item.price}
                                    </Typography>
                    <Typography className={classes.discount}>
                      - {item.discount}%
                                    </Typography>
                  </CardContent>
                  <CardActions>
                    {/* <Link to={`/products/${item.id}`}>Peržiūrėti</Link> */}
                    <Button href={`/products/${item.id}`} size="small" color="primary">
                      Peržiūrėti
                                    </Button>
                                    <Button onClick={() =>addCart(item)} size="small" color="primary">Į
                                        krepšelį</Button>
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



