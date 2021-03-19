import React, { useState } from 'react'

const FileUpload = () => {
    const [file, setFile] = useState([]);
    const [fileName, setFileName] = useState('Pasirinkti failą');

    const onChange = e => {

        for (let i = 0; i < e.target.files.length; i++) {
            file[i] = e.target.files[i];
            console.log(file[i]);
        }
        console.log(file[1]);
    }

    const onSubmit = async e => {
        console.log('submit');
        console.log(file[1]);
        console.log(file.length);

        e.preventDefault();


        const formData = new FormData();
        for (let i = 0; i < file.length; i++) {
            formData.append('img', file[i]);
        }

        for (var pair of formData.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }
    }

    return (
        <>
            <form>

                <div className='custom-file'>
                    <input multiple type="file" className='custom-file-input' id='customFile' onChange={onChange} />
                    <label htmlFor="customFile">{fileName}</label>
                </div>
                <input
                    onClick={onSubmit}
                    type='submit'
                    value='Upload'
                    className='btn btn-primary btn-block mt-4'
                />
            </form>
        </>
    )

}

export default FileUpload

