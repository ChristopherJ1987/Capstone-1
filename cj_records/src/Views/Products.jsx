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
        <div className="records">
            {myJson.map((record) => (
                <div className="record" key={record.id}>
                    <img src={record.front_cover_image} alt="front cover"/>
                    <p>{record.artist}</p>
                    <p>{record.album}</p>
                    <button className="product_button">See More</button>
                </div>
            ))}
        </div>
    )
}

export default Products
