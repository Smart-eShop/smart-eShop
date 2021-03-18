import React, { useState } from 'react'


function ImageUpload() {
    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(false)

    const uploadImage = async e => {
        const accessToken = localStorage.getItem('access_token');
        const files = e.target.files
        console.log(files);
        const data = new FormData()
        data.append('category_id', 1);
        data.append('title', 'asdasdsadasdsadsda');
        data.append('description', 'descriptionInput');
        data.append('keywords', 'keywordsInput');

        data.append('img', files[0])

        data.append('price', 12);
        data.append('discount', 12);
        data.append('quantity', 12);
        data.append('weight', 12);
        data.append('size', 'xl');





        setLoading(true)
        const res = await fetch(
            '	https://eshopsmart.herokuapp.com/api/addItem',
            {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                },
                body: data
            }
        )
        const file = await res.json()

        setImage(file.secure_url)
        setLoading(false)
    }

    return (
        <div className="App">
            <h1>Upload Image</h1>
            <input
                type="file"
                name="file"
                placeholder="Upload an image"
                onChange={uploadImage}
            />
            {loading ? (
                <h3>Loading...</h3>
            ) : (
                <img src={image} style={{ width: '300px' }} />
            )}
        </div>
    )
}

export default ImageUpload