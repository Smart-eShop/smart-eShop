import React, {useState, useEffect} from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import Footer from '../Footer/Footer';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(4),
    },
}));

const ProductsCategories = ({printCategories, setCategoryId}) => {
    const classes = useStyles();
    console.log(printCategories);
    // const [printCategories, setPrintCategories] = useState([]);

    // const printAllCategories = async () => {
    //   const url = "https://eshopsmart.herokuapp.com/api/categories";
    //   const response = await fetch(url);
    //   const data = await response.json();
    //   console.log(data.Categories);
    //   setPrintCategories(data.Categories);
    // };

    // useEffect(() => {
    //   printAllCategories();
    // }, []);

    return (
        <Container className={classes.root} component="section">
            <Typography variant="h4" marked="center" align="center" component="h2">
                Prekių kategorijos
            </Typography>
            {printCategories.map((category) => (
                <Button href={`/category/${category.id}`} value={category.id} onClick={(e) => setCategoryId(e.currentTarget.value)}>
                    {category.category_name}
                </Button>
            ))}
            {/* <Footer/> */}
        </Container>
    );
}

// ProductsCategories.propTypes = {
//   classes: PropTypes.object.isRequired,
// };
export default ProductsCategories;