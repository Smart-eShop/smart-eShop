import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  cartItems,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 260,
  },
  cardContent: {
    display: "flex",
    justifyContent: "left",
    
  },
  cartActions: {
    justifyContent: "space-between",
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(10),
  },
  buttons: {
    display: "flex",
    alignItems: "center",
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(10),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(10),
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(10),
    
  },
  cardMedia: {
    width: "100%", // 16:9
  },
  discount: {
    color: "#e64a19",
  },
  
}));

const CartItem = ({
  item,
  onUpdateCartQty,
  onRemoveFromCart,
  cartItems,
  plusCart,
  minusCart,
}) => {
  const classes = useStyles();

  console.log("kast u", item);

  function increase(item) {
    item.quantity < 1 ? alert("nebebėra prekės") : (item.quantity += 1);
    console.log("increase", item.quantity);
  }
  function decrease(item) {
    item.quantity === 0 ? alert("nebebėra prekės") : (item.quantity -= 1);
    console.log("decrease", item.quantity);
  }

  function deleteITM(item) {
    console.log("delete", item);
    localStorage.removeItem(item.title);
    localStorage.removeItem(item.id);
    localStorage.removeItem(item.user);
  }
  // console.log("cartitem", cartItems);
  // cartItems[0].category.category_name =
  //   "mano kategorija kuria katik sugalvojau";
  // console.log("cartitem", cartItems[0].category.category_name);
  // console.log("cartitem", cartItems);

  const imgUrl = "https://eshopsmart.herokuapp.com/images/";
  // console.log(cartItems);

  const handleUpdateCartQty = (lineItemId, newQuantity) =>
    onUpdateCartQty(lineItemId, newQuantity);

  const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);

  return (
    <Card >
      {cartItems.map((item) => (
        <div className={classes.cardContent}>
          <img  className={classes.media}
            src={imgUrl + item.img}
            alt="nuotrauka"
            style={{ width: "200px", height: "200px" }}
          />
          <Typography className={classes.card} gutterBottom variant="h5" component="h1">
               {item.title}
          </Typography>
          {/* <Typography  >{item?.price} € Kaina</Typography>
          <Typography  >Kiekis: {item.quantity}</Typography>
          <Typography className={classes.discount}>
            Nuolaida {item.discount} %
          </Typography>
          <Typography className={classes.discount}></Typography> */}
          <CardContent className={classes.cardContent}></CardContent>
          <CardActions className={classes.cardActions}>
            <div className={classes.buttons}>
              <Button
                onClick={() => minusCart(item)}
                type="button"
                size="small"
              >
                -
              </Button>
              <Typography >&nbsp;Kiekis&nbsp;</Typography>
              <Button onClick={() => plusCart(item)} type="button" size="small">
                +
              </Button>
            </div>
          </CardActions>
        </div>
      ))}
    </Card>
  );
};

export default CartItem;
