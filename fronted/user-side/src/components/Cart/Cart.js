import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import CartItem from './CartItem';



const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: '5%',
  },
  emptyButton: {
    minWidth: '150px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '20px',
    },
  },
  checkoutButton: {
    minWidth: '150px',
  },
  link: {
    textDecoration: 'none',
  },
  cardDetails: {
    display: 'flex',
    marginTop: '10%',
    width: '100%',
    justifyContent: 'space-between',
  },
  
}));

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
  const classes = useStyles();

  const handleEmptyCart = () => onEmptyCart();

  const renderEmptyCart = () => (
    <Typography variant="subtitle1">You have no items in your shopping cart,
      <Link className={classes.link} to="/">start adding some</Link>!
    </Typography>
  );

//   if (!cart.line_items) return 'Loading';

  // const renderCart = () => (
  //   <>
  //     <Grid container spacing={3}>
        
  //         <Grid item xs={12} sm={4}>
  //           <CartItem onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
  //         </Grid>

  //     </Grid>
      {/* <div className={classes.cardDetails}>
        <Typography variant="h4">Iš viso: </Typography>
        <div>
          <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty cart</Button>
          <Button className={classes.checkoutButton} component={Link} to="/checkout" size="large" type="button" variant="contained" color="primary">Checkout</Button>
        </div>
      </div> */}
    // </>
  // );

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h5" gutterBottom>Your Shopping Cart</Typography>
      <CartItem/>
      <div className={classes.cardDetails}>
        <Typography variant="h4">Iš viso: </Typography>
        <div>
          <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty cart</Button>
          <Button className={classes.checkoutButton} component={Link} to="/checkout" size="large" type="button" variant="contained" color="primary">Checkout</Button>
        </div>
      </div>
    </Container>
  );
};

export default Cart;