import Layout from '../components/Layout';
import Head from 'next/head'
import '../styles/globals.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import AppContext from '../components/AppContext';
import { useState } from 'react';
function MyApp({ Component, pageProps }) {
  const cache = new InMemoryCache();
  const client = new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache: cache
  });
  const isAuthenticated = true;
  const user = false;
  const setUser = () => {};
  const addItem = (item) => {
    const newItem = {
      name: item.attributes.name,
      id: item.id,
      description: item.attributes.description,
      price: item.attributes.price,
      quantity: 1
    }
    const newCart = {...cart};
    newCart.items.push(newItem);
    setCart(newCart);
  };
  const removeItem = () => {};
  const [cart, setCart] = useState({items: [], total: 0})
  return (
      <ApolloProvider client={client}>
        <AppContext.Provider value={{isAuthenticated, user, removeItem, setUser, addItem, cart}}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AppContext.Provider>
      </ApolloProvider>
  );
};

export default MyApp
