import React from 'react';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Footer from "../Footer/Footer";

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(4),
    },
}));

const ProductsCategories = ({printCategories, setCategoryId, categoryId}) => {
    const classes = useStyles();
    console.log(categoryId);
    const getCatId = (e,id) => {
        console.log("gaunu id gal" + id)
        setCategoryId(id);
    }

    return (
        <div>
            <Container className={classes.root} component="section">
                <Typography variant="h4" marked="center" align="center" component="h2">
                    Prekių kategorijos
                </Typography>
                {printCategories.map((category) => (

                        <button type="submit" value={category.id}
                                onClick={(e) => setCategoryId(e.currentTarget.value)}>
                            <a href={`/category/${category.id}`}> {category.category_name}  </a>
                        </button>

                ))}
                {/*<Footer/>*/}
            </Container>
        </div>
    );
};

export default ProductsCategories;