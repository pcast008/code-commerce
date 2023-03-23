import { Component } from "react";
import { CartItem } from "../CartItem/CartItem";
import "./Cart.css";
import { data } from "../../data"

export class Cart extends Component {
    render() {
        const cartItems = this.props.cartData.map((item, index) => {
            const dataItem = data.find(elm => elm.id === item.id)
            return <CartItem key={index + 1} id={dataItem.id} title={dataItem.title} price={dataItem.price} quantity={item.quantity} image={dataItem.image} removeFromCart={this.props.removeFromCart} page={this.props.page} />
        }) 

        return (      
            <div className="cart-container">
                <div className="cart-items">
                    {cartItems.length > 0 ? cartItems : <div className="text-body-tertiary empty-cart">Cart is empty</div>}
                </div> 
            </div>
        ) 
    }
}