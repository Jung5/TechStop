import React from "react";
import { Button, Card, Col, Image, ListGroup, Row } from "react-bootstrap";
import { Link, Outlet, useParams } from "react-router-dom";
import Rating from "../components/Rating";
import products from "../products";

const ProductScreen = ({ match }) => {
  const { id } = useParams();
  // const product = products.find((product) => product.id === match.params.id)
  // const {image, name} = product

  // console.log(id);

  return (
    <Outlet />
  );
};

export default ProductScreen;

// const ProductScreen = ({match}) => {
//     const {id} = useParams();
//     const product = products.find((product) => product.id === id)
//     const {image, name} = product

//     return <div>{product.name}</div>
// };

// export default ProductScreen;

// (<>
// <Link className='btn btn-dark my-3'>To Main Page</Link>
// <Row>
//     <Col md={6}>
//         <Image src={image} alt={name} />
//     </Col>
//     <Col md={3}>
//     </Col>
// </Row>
//         </>
// )
