import React, {useState, useEffect} from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
  },
}));

function ProductsByCategory() {
  const classes = useStyles();
 
  return (
    <Container className={classes.root} component="section">
      <Typography variant="h4" marked="center" align="center" component="h2">
        Prekių kategorijos
      </Typography>
      {/* {printCategories.map((category) => (
        <Button>
{category.category_name}
        </Button>
           ))} */}
    </Container>
  );
}

// ProductsCategories.propTypes = {
//   classes: PropTypes.object.isRequired,
// };
export default ProductsByCategory;