import React from 'react';
import { Button, Card, Col, Image, ListGroup, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Rating from '../components/Rating';
import products from '../products';

const ProductScreen = ({match}) => {
    

    return (<>
    <Link className='btn btn-dark my-3'>To Main Page</Link>
    <Row>
        <Col md={6}>
            {/* <Image src={product.image} alt={product.name} /> */}
        </Col>
        <Col md={3}>
        </Col>
    </Row>
            </>
    )
};

export default ProductScreen; 