import Layout from '../components/Layout';
import Head from 'next/head'
import '../styles/globals.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import AppContext from '../components/AppContext';
import { useState } from 'react';
import {AppContextProvider} from '../components/AppContext';
function MyApp({ Component, pageProps }) {
  const cache = new InMemoryCache();
  const client = new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache: cache
  });
  

  const addItem = (item) => {
    const newCart = {...cart};
    const existingItemIndex = -1;
    newCart.items.every((element, index) => {
      if (element.id === item.id) {
        existingItemIndex === index;
        return false;
      }
      else return true;
    })
    if (existingItemInde === -1) {
      const newItem = {
        name: item.attributes.name,
        id: item.id,
        description: item.attributes.description,
        price: item.attributes.price,
        quantity: 1
      }
    }
  
    setCart(newCart);
  };
  const removeItem = () => {};
  const [cart, setCart] = useState({items: [], total: 0});
  const [user, setUser] = useState(null);
  return (
      <ApolloProvider client={client}>
          <AppContextProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </AppContextProvider>
      </ApolloProvider>
  );
};

export default MyApp
