import React, { useState } from 'react'
import axios from 'axios';


function ImageUpload() {
    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(false)


    const data = new FormData()
    data.append('category_id', 1);
    data.append('title', 'asdasdsadasdsadsda');
    data.append('description', 'descriptionInput');
    data.append('keywords', 'keywordsInput');



    data.append('price', 12);
    data.append('discount', 12);
    data.append('quantity', 12);
    data.append('weight', 12);
    data.append('size', 'xl');


    const upload = (e) => {

        const files = e.target.files
        console.log(files);
        data.append('img', files[0])

    }

    const uploadImage = async e => {

        e.preventDefault();
        const accessToken = localStorage.getItem('access_token');








        for (var pair of data.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }





        setLoading(true)
        axios({
            method: "post",
            url: 'https://eshopsmart.herokuapp.com/api/addItem',
            data: data,
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${accessToken}`,
            },
        })
            .then(function (response) {
                //handle success
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });


        // const res = await fetch(
        //     '	https://eshopsmart.herokuapp.com/api/addItem',
        //     {
        //         method: 'POST',
        //         headers: {
        //             'Authorization': `Bearer ${accessToken}`,
        //         },
        //         body: data
        //     }
        // )
        // const file = await res.json()

        // setImage(file.secure_url)
        setLoading(false)
    }

    return (
        <div className="App">
            <h1>Upload Image</h1>
            <input
                type="file"
                name="file"
                placeholder="Upload an image"
                onChange={upload}

            />
            <button onClick={uploadImage}>siusti</button>
            {loading ? (
                <h3>Loading...</h3>
            ) : (
                <img src={image} style={{ width: '300px' }} />
            )}
        </div>
    )
}

export default ImageUpload