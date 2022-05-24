import React, { useContext } from "react";
import { Row, Col } from "reactstrap";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const Checkout = () => {
    const stripePromise = loadStripe(
        "pk_test_51HaLhVGgpfLkdZwmHVQcCOdUzwLWqV7umg9EbicemJqLOcLBPDrPtszruyxf4UzqH0lKwaNj5se3tHldNx92nPjI00Zoi8VgBN"
    );
    return (
        <Row>
            <Col>
                <h1>Checkout</h1>
            </Col>
            <Col>
                <Elements stripe={stripePromise}>

                </Elements>
            </Col>
        </Row>
    );
};
export default Checkout;