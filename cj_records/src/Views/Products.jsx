import React, {useState, useEffect} from 'react';
import '../App.css';
import Records from '../products.json';

function Products() {

    const myJson = Records;
    
    const getData = () => {
        fetch('products.json', {
            headers: {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json'
            }
        })
        .then(function(response) {
            console.log(response)
            return response.json();
        })
        .then(function(myJson) {
            console.log(myJson);
        });
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <h1>Products Page</h1>
            {myJson.map((record) => (
                <div key={record.id}>
                    <p>{record.artist}</p>
                    <p>{record.album}</p>
                    <p>{record.genre}</p>
                    <p>${record.price}.00</p>
                    <p>{record.label}</p>
                    <br/>
                    <img src={record.front_cover_image} alt="front cover"/>
                    <br/>
                    <img src={record.back_cover_image} alt="back cover"/>
                    <hr/>
                </div>
            ))}
        </div>
    )
}

export default Products
