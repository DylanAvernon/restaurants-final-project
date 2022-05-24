import {useRouter} from 'next/router';
import { gql, useQuery } from '@apollo/client';
import { useContext, useState } from 'react';
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Row, Col } from 'reactstrap';
import AppContext from './AppContext';
const GET_RESTAURANT_DISHES = gql`
    query($id: ID!) {
        restaurant(id: $id) {
            data {
                id
                attributes {
                    name,
                    dishes {
                        data {
                            id
                            attributes {
                                name
                                description
                                price
                            }
                        }
                    }
                }
            }
        }
    }
`;
const Dishes = ({restId}) => {
    const {loading, error, data} = useQuery(GET_RESTAURANT_DISHES, { variables: {id: restId}});
    const {addItem} = useContext(AppContext);
    const router = useRouter();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;
    if (!data) return <p>Not found</p>;
    if (restId > 0) {
        const dishes = data.restaurant.data.attributes.dishes.data;
        return (
            <>
                {dishes.map(dish => (
                    <Col xs='6' sm='4' key={dish.id}>
                        <Card style={{margin: '0 10px'}}>
                            <CardBody>
                                <CardTitle>{dish.attributes.name}</CardTitle>
                                <CardText>{dish.attributes.description}</CardText>
                            </CardBody>
                            <Button color='info' outline onClick={() => addItem(dish)}>+ Add to Cart</Button>
                        </Card>
                    </Col>
                ))}
            </>
        );   
    }
    else {
        return <h1>No Dishes</h1>
    }
};
export default Dishes;