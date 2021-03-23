import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  media: {
    height: 260,
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'left',
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
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


const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  const classes = useStyles();

  const handleUpdateCartQty = (lineItemId, newQuantity) => onUpdateCartQty(lineItemId, newQuantity);

  const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);

  return (
    <Card className="cart-item">
      <Card className={classes.cardMedia}>
        Nuotrauka
        {/* <img
          src={imgUrl + item.img[0]} alt="nuotrauka" style={{ width: "500px", height: "200px" }} /> */}
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h1">
            {/* {item.title} */} Pavadinimas
          </Typography>
          <Typography>
            {/* {item.price} € */} Kaina
                                    </Typography>
          <Typography className={classes.discount}>
            {/* - {item.discount}% */} Nuolaida
                                    </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <div className={classes.buttons}>
            <Button type="button" size="small">-</Button>
            <Typography>&nbsp;Kiekis&nbsp;</Typography>
            <Button type="button" size="small" >+</Button>
          </div>
          <Button variant="contained" type="button" color="secondary" >Ištrinti</Button>
        </CardActions>
      </Card>
      </Card>
  );
};

export default CartItem;