import Head from 'next/head'
import {Card, CardImg, CardBody, CardText} from 'reactstrap';
import styles from '../styles/Home.module.css'
import React, { useContext, useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { InputGroup, Input, InputGroupText} from "reactstrap";
import RestaurantList from '../components/RestaurantList';
import Cart from '../components/Cart';
import AppContext from '../components/AppContext';
const REVIEWS = gql`
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
export default function Home() {
  const { loading, error, data } = useQuery(REVIEWS);
  const [query, setQuery] = useState('');
  const {user} = useContext(AppContext);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  return (
    <>
      <Head>
        <title>Restaurants | Home</title>
        <meta name='keywords' content='restaurants' />
      </Head>
      <h2 className={styles.title}>Restaurants</h2>
      <div className='search'>
        <InputGroup>
          <InputGroupText>Search</InputGroupText>
          <Input onChange={e => setQuery(e.target.value)} value={query} />
        </InputGroup>
        <RestaurantList query={query} />
        {user && <Cart />}
        {/* {data.restaurants.data.map(restaurant => (
          <Card key={restaurant.id} className={styles.card}>
            <CardImg top={true} style={{height: 200}} src={`http://localhost:1337${restaurant.attributes.image.data.attributes.url}`} />
            <h2 className={styles.title}>{restaurant.attributes.name}</h2>
            <CardBody>
              <CardText>{restaurant.attributes.description}</CardText>
            </CardBody>
          </Card>
        ))} */}
      </div>
    </>
  );
};
