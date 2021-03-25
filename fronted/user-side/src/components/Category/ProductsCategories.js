import React from 'react';
import Footer from "../Footer/Footer";
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(15),
        marginBottom: theme.spacing(8),
    },
    title:{
        marginBottom: theme.spacing(8),
    },
    button: {
        margin: theme.spacing(1),
        width: 230,
        height: 80,
        bgcolor: 'primary.dark',
        ':hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
        },
        marginBottom: theme.spacing(8),
    },

}));

const ProductsCategories = ({printCategories, setCategoryId, items, addCart, categoryId}) => {
    const classes = useStyles();

    console.log(categoryId);
    const getCatId = (e,id) => {
        console.log("gaunu id gal" + id)
        setCategoryId(id);
    }

    console.log(items);
    const imgUrl = 'https://eshopsmart.herokuapp.com/images/'

    return (
        <div>
            <Container className={classes.root} component="section">
                <Typography  className={classes.title} variant="h4" marked="center" align="center" component="h2">
                    Prekių kategorijos
                </Typography>
                {printCategories.map((category) => (

                        <button  variant='outlined' className={classes.button} type="submit" value={category.id}
                                onClick={(e) => setCategoryId(category.id)}
                                component={Link} to ={`/category/${category.id}`}
                                placeholder={category.category_name} >
                                    
                            <a> {category.category_name} </a>
                    
                        </button>
                        // <Button  component={Link} to ={`/category/${category.id}`} size="large"
                        // type="button">{category.category_name}</Button>

                ))}
                    {items.map((item) => {
                        if(item.category.id == categoryId){
                            return (
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
                            )
                        }
                    })}

                {/*<Footer/>*/}
            </Container>
        </div>
    );
};

export default ProductsCategories;