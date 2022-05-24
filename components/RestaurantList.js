import { gql, useQuery } from '@apollo/client';
import { useState } from 'react';
import { Button, Card, CardBody, CardImg, CardText, Container, Row, Col } from 'reactstrap';
import Dishes from './Dishes';
import styles from '../styles/Home.module.css';
const GET_RESTAURANTS = gql`
    query GetRestaurants {
        restaurants {
            data {
                attributes {
                    name,
                    description,
                    image {
                        data {
                            attributes {
                                url
                            }
                        }
                    }
                }
                id
            }
        }
    }
`;
const RestaurantList = (props) => {
    const [restaurantID, setRestaurantID] = useState(0);
    const { loading, error, data } = useQuery(GET_RESTAURANTS);
    if(loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;
    if (!data) return <p>Not Found</p>
    const renderDishes = (restaurantID) => { 
        return <Dishes restId={restaurantID} />;
    };
    const renderRestaurants = restaurants => {
        return (
            <>
                {restaurants.map(restaurant => (
                    <Col xs='6' sm='4' key={restaurant.id}>
                        <Card style={{margin: '0.5rem 0.5rem 20px 0.5rem'}}>
                            <CardImg top={true} style={{height: 200}} src={`http://localhost:1337${restaurant.attributes.image.data.attributes.url}`} />
                            <CardBody>
                                <CardText>{restaurant.attributes.description}</CardText>
                            </CardBody>
                            <div className='card-footer'>
                                <Button color='info' onClick={() => setRestaurantID(restaurant.id)}>{restaurant.attributes.name}</Button>
                            </div>
                        </Card>
                    </Col>
                ))}
            </>
        )
    };

    if (data) {
        const restaurants = props.query === '' ? data.restaurants.data : data.restaurants.data.filter(restaurant => restaurant.attributes.name.toLowerCase().indexOf(props.query.toLowerCase()) !== -1);
        return (
            <Container>
                <Row xs='3'>
                    {renderRestaurants(restaurants)}
                </Row>
                <Row xs='3'>
                    {renderDishes(restaurantID)}
                </Row>
            </Container>
        );
    }
    else {
        return <h1>No Restaurants Found</h1>
    }
};
export default RestaurantList;