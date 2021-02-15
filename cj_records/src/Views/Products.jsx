import React, {useState, useEffect} from 'react';
import '../App.css';
import Records from '../products.json';
import Modal from 'react-bootstrap/Modal';

function Products() {
    
    const myJson = Records;

    const [searchTerm, setSearchTerm] = useState('');

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
    
    const [cart, setCart] = useState({cartItems: []});
    const handleSubmit = (newItem) => {
        const newCart = {...cart};
        const inCart = newCart.cartItems.find(x => x.item.id == newItem.id);
        if(inCart) {
            inCart.count = inCart.count + 1;
        }
        else {
            const cartItem = {count : 1, item : newItem};
            newCart.cartItems.push(cartItem);
        }
        setCart(newCart);
    }

    return (
        <>
        <input 
            className="searchBar" 
            type="text" 
            placeholder="Search Artists" 
            onChange={event => {
                setSearchTerm(event.target.value)
            }} 
        />
        <div className="records">
            {myJson.filter((val) => {
                if(searchTerm == "") {
                    return val
                }
                else if(val.artist.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return val
                }
            }).map((record) => (
                <div className="recordBox" key={record.id}>
                    <img src={record.front_cover_image} alt="front cover"/>
                    <p>{record.artist}</p>
                    <p>{record.album}</p>
                    <button className="product_button" onClick={() => handleShow(record)}>More Details</button>
                    <br />
                    <button className="product_button" onClick={() => handleSubmit(record)}>Add to Cart</button>
                    <Modal className="modal" show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title className="modalTitle">Album Info</Modal.Title>
                            <Modal.Body className="modalBody">
                                <p>Artist: {item.artist}</p>
                                <p>Album: {item.album}</p>
                                <p>Label: {item.label}</p>
                                <p>Genre: {item.genre}</p>
                                <p>${item.price}.00</p>
                                <img className="modalImg" src={item.front_cover_image}></img>
                                <img className="modalImg" src={item.back_cover_image}></img>
                            </Modal.Body>
                        </Modal.Header>
                        <Modal.Footer />
                    </Modal>
                </div>
            ))}
        </div>
        </>
    )
}

export default Products
