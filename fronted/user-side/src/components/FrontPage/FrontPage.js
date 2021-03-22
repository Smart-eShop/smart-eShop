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
import ProductsCategories from '../Category/ProductsCategories';
import Footer from '../Footer/Footer';



const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
 
  heroContent: {
    backgroundImage:`url(${Image})`,
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
  
  paper:{
    color: "#fffff",
    height: "100px",
    width:"200px",
  },
  discount: {
    color: '#e64a19',
}
}));

const cards = [1, 2, 3,];


export default function Album() {
  const classes = useStyles();

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
        <ProductsCategories/>
        <Container className={classes.cardGrid} maxWidth="lg">
        <Container className={classes.root} component="section">
        <Typography variant="h4" marked="center" align="center" component="h2">
        Populiariausios prekės
      </Typography>
      </Container>
          {/* End hero unit */}
          <Grid container spacing={4}>
            
              <Grid item  xs={4} sm={12} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://www.jabra.com.au/-/media/Images/Products/Jabra-Elite-85h/Product/elite_85h_titanium_01.png?w=540&la=en-AU&hash=9B47FE6AD701B8AAA983C3269910BFB2F22955FD"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h1">
                      Belaidės ausinės
                    </Typography>
                    <Typography>
                    €120.00
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
            <Grid item  xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://brain-images-ssl.cdn.dixons.com/4/2/10199624/u_10199624.jpg"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h1">
                    Nešiojamas kompiuteris
                  </Typography>
                  <Typography>
                  €500.00
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
            <Grid item  xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://www.varle.lt/static/uploads/products/12/tel/televizorius-tv-setlg4k-smart553840x2160wireless_wtunbuI.Jpeg"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h1">
                    Televizorius Samsung
                  </Typography>
                  <Typography>
                  €350.00
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
            </Grid>
            </Container>
        
        <Container className={classes.cardGrid} maxWidth="lg">
        <Container className={classes.root} component="section">
        <Typography variant="h4" marked="center" align="center" component="h2">
        Naujausios prekės
      </Typography>
      </Container>
          {/* End hero unit */}
          <Grid container spacing={4}>
                    {items.map((item) => (
                        <Grid item key={item.id} xs={12} sm={6} md={4}>
                            <Card className={classes.item}>
                                <img
                                    src={imgUrl + item.img[0]}/>
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h1">
                                        {item.title}
                                    </Typography>
                                    <Typography>
                                        {item.price} €
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
