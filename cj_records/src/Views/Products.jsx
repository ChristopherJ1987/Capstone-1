import React, {useState, useEffect} from 'react';
import '../App.css';
import Records from '../products.json';
import Modal from 'react-bootstrap/Modal';

function Products() {

    const myJson = Records;
    const [show, setShow] = useState(false);
    const [item, setItem] = useState({
        "id": 0,
        "artist": "",
        "album": "",
        "serialNumber": 0,
        "price": 0.0,
        "label": "",
        "genre": "",
        "quantity": 0,
        "front_cover_image": "",
        "back_cover_image": ""
    });

    const handleClose = () => setShow(false);
    const handleShow = (item) => {
        setItem(item);
        setShow(true);
    };

    const getData = () => {
        fetch('products.json', {
            headers: {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json'
            }
        })
        .then(function(response) {
            return response.json();
        })
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="records">
            {myJson.map((record) => (
                <div className="recordBox" key={record.id}>
                    <img src={record.front_cover_image} alt="front cover"/>
                    <p>{record.artist}</p>
                    <p>{record.album}</p>
                    <button className="product_button" onClick={() => handleShow(record)}>More Details</button>
                    <br></br>
                    <button className="product_button">Add to Cart</button>
                    <Modal className="modal" show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Album Info</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>{item.artist}</Modal.Body>
                        <Modal.Footer>
                        </Modal.Footer>
                    </Modal>
                </div>
            ))}
        </div>
    )
}

export default Products
