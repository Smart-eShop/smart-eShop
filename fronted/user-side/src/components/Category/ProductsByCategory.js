import React, {useState, useEffect} from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';


const useStyles = makeStyles(theme => ({
  categoryName: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(9),
  },
  pageTtitle: {
    marginTop: '100px',
    marginBottom: '50px',
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
    width: '100%', // 16:9
},
cardContent: {
    flexGrow: 1,
},
discount: {
    color: '#e64a19',
}
}));

function ProductsByCategory({addCart, items, printCategories}) {
  const classes = useStyles();
 console.log(items);
 console.log(printCategories)

 const imgUrl = 'https://eshopsmart.herokuapp.com/images/'
  return (
    <React.Fragment>
    <Container className={classes.cardGrid} maxWidth="lg">
      <Typography variant="h4" marked="center" align="center" component="h2" className={classes.categoryName}>
        Kategorijos pavadinimas
      </Typography>
      <Grid container spacing={4}>
      {items.map((item) => (
      <Grid item key={item.id} xs={12} sm={6} md={4}>
                            <Card className={classes.cardMedia}>
                                <img
                                    src={imgUrl + item.img[0]} alt="nuotrauka"
                                    style={{width: "500px", height: "300px"}}/>
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

                                    <Button onClick={() => addCart(item)} size="small" color="primary">Į
                                        krepšelį</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        ))}

      {/* {printCategories.map((category) => (
        <Button>
{category.category_name}
        </Button>
           ))} */}
   </Grid>
            </Container>
        </React.Fragment>
    );
}

// ProductsCategories.propTypes = {
//   classes: PropTypes.object.isRequired,
// };
export default ProductsByCategory;