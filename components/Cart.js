import { useRouter } from 'next/router';
import { Button, Card, CardBody, CardTitle, Badge, NavItem } from 'reactstrap';
import Link from 'next/link';
import AppContext from './AppContext';
import { useContext } from 'react';
const Cart = () => {
    let isAuthenticated = true;
    let {cart, addItem, removeItem} = useContext(AppContext);
    const router = useRouter();
    const renderItems = () => {
        let {items} = cart;
        if (items && items.length) {
            console.log(items);
            const itemList = items.map(item => {
                if(item.quantity > 0) {
                    return (
                        <div key={item.id}>
                            <div>
                                <span id='item-price'>${item.price}</span>
                                <span id='item-name'>{item.name}</span>
                            </div>
                            <div>
                                <Button>+</Button>
                                <Button onClick={() => removeItem(item)}>-</Button>
                                <span id='item-quantity'>{item.quantity}</span>
                            </div>
                        </div>
                    );
                }
            });
            return itemList;
        }
        else {
            return (
                <div></div>
            );
        }
    };
    const checkoutItems = () => {
        return (
            <div>
                <Badge color='light'>
                    <h5>Total:</h5>
                    <h3>${cart.total}</h3>
                </Badge>
                <Link href='/checkout/'>
                    <Button color='primary'><a>Order</a></Button>
                </Link>
            </div>
        )
    };
    return (
        <div>
            <h1>Cart</h1>
            <Card style={{ padding: "10px 5px" }} className="cart">
                <CardTitle style={{ margin: 10 }}>Your Order:</CardTitle>
                <hr />
                <CardBody style={{ padding: 10 }}>
                <div style={{ marginBottom: 6 }}>
                    <small>Items:</small>
                </div>
                <div>
                    {renderItems()}
                </div>
                <div>
                    {checkoutItems()}
                </div>
                </CardBody>
            </Card>
        </div>
    );
};
export default Cart;
