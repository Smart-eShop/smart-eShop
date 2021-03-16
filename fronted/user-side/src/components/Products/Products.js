import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ShowProduct from '../Products/ShowProduct';


// const useStyles = makeStyles(theme => ({
//     name: {
//         color: '#000',
//         fontSize: '20px',
//         fontWeight: '600',
//         marginBottom: 0
//     },
// }));

export default function Products({printSingleItem, items}) {
//  const classes = useStyles();
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

      
  return (
    <>
    <Grid item>
        <h3>Prekė</h3>
    </Grid>
  
    <Grid container item justify="space-between">
    {items.map((item) => (
        <Grid key={item.id} item xs={12} md={5}  >
            <Grid container item direction='column' align="center" className="p-4 bg-white">
                <Grid item className="text">
                    <h2>{item.title}</h2>                                
                    <p>{item.description}</p>
                    <a onClick={()=>printSingleItem(item.id)}>dfghj</a>
                </Grid>
            </Grid>
        </Grid>
    ))}
    </Grid>
</>
  );
}
