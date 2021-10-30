import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Hotels.css'

const Hotels = () => {
    const [Hotels, setHotels] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/hotels")
            .then(res => res.json())
            .then(data=>setHotels(data))
    }, [])
    


    return (
        <div className="bg-color">
            <div id="services" className="container py-5 ">
                <h1 className="text-center p-5">Our Promise For A New Kind Of Caring</h1>
            <div className="row">
            {
                Hotels?.map(hotel=>
                    <div
                        key={hotel._id}
                        className="col-md-3 g-4">
                    <Card className="h-100 w-100 card-style">
                    <Card.Img className="img-fluid" variant="top" src={hotel.img} />
                    <Card.Body className="d-flex flex-column justify-content-end rounded card-text">
                        <Card.Title className="fw-bold">{hotel.name}</Card.Title>
                        <Card.Text>
                        {hotel.Description.slice(0, 100)}
                        </Card.Text>
                        <Link to={`/service/${hotel._id}`}>
                            <Button className="btn-grad">Book Now</Button>
                        </Link>
                    </Card.Body>
                    </Card>
                </div>)
            }
            </div>
        </div>
        </div>
    );
};

export default Hotels;