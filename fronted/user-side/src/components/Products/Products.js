import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ShowProduct from '../Products/ShowProduct';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import CardHeader from '@material-ui/core/CardHeader';
import { shadows } from '@material-ui/system';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles(theme => ({
    pageTtitle: {
margin: '50px',
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
        paddingTop: '40%', // 16:9
      },
      cardContent: {
        flexGrow: 1,
      },
      discount: {
          color: '#e64a19',
      }
}));

export default function Products({printSingleItem, items}) {
 const classes = useStyles();

//  const [printImg, setPrintImg] = useState([]);


//  const printImages = async() => {
//      const url = 'https://eshopsmart.herokuapp.com/images/';
//      const response = await fetch(url);
//      const data = await response.json();
//      console.log(data.Images);
//      setPrintImg(data.Images);
//  }
 
//      useEffect(() => {
//          printImages();
//      }, [])
 
// const [items, setItems] = useState([]);
//  const printItems = async() => {
//     //  pakeisti vietoje sk i id!!!!!!! ${id}  
//     //ant korteles on click paduoda funkcija mano ir i skliaust iraso ka ismapins id
//     const url = 'https://eshopsmart.herokuapp.com/api/items';
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data.items);
//     setItems(data.items);
  
// }
//     useEffect(() => {
//         printItems();
//     }, [])

//     const [item, setItem] = useState({});
//     const printSingleItem = async(id) => {
//        //  pakeisti vietoje sk i id!!!!!!! ${id}  
//        //ant korteles on click paduoda funkcija mano ir i skliaust iraso ka ismapins id
//        const url = 'https://eshopsmart.herokuapp.com/api/item/';
//        const response = await fetch(url + id);
//        const data = await response.json();
//        console.log(data.item);
//        setItem(data.item);
     
//    }
//        useEffect(() => {
//            printSingleItem();
//        }, [])

    const url = 'https://eshopsmart.herokuapp.com/images/';

  return (
<React.Fragment>
<Container className={classes.cardGrid} maxWidth="lg">
<Typography variant='h3' align="center"  className={classes.pageTtitle} gutterBottom>Prekių katalogas</Typography>
<div style={{ width: 300 }}>
    
      <Autocomplete
        freeSolo
        id="Paieška"
        disableClearable
        options={items.map((item) => item.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Prekių paieška"
            margin="normal"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: 'search' }}
          />
        )}
      />
    </div>

  {/* End hero unit */}
  <Grid container spacing={4}>
  {items.map((item) => (
      <Grid item key={item} xs={12} sm={6} md={4}>
        <Card className={classes.item}>
          <img src={url +item.img[1]} />
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
            <Button size="small" color="primary" onClick={()=>printSingleItem(item.id)}>
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
</React.Fragment>
  );
}
