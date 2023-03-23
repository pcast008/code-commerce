import { Component } from "react";
import { Button } from "../Button/Button";
import { CartItem } from "../CartItem/CartItem";
import "./ShippingSummary.css";
import { data } from "../../data";

export class ShippingSummary extends Component {
    render() {
        const cartItems = this.props.cartData.map((item, index) => {
            const dataItem = data.find(elm => elm.id === item.id)
            return <CartItem key={index + 1} id={dataItem.id} title={dataItem.title} price={dataItem.price} quantity={item.quantity} image={dataItem.image} />
        })

        return (
            <div className="shipping-summary">
                <div className="shipping-summary-title">SUMMARY</div>
                <div className="shipping-summary-line-break"></div>
                <div className="shipping-summary-form">
                    {cartItems}
                    <div className="shipping-summary-line-break"></div>
                    <ul className="shipping-summary-items-container">
                        <li className="shipping-summary-item"><span>Cart Subtotal:</span><span>{this.props.cartSubTotal}</span></li>
                        <li className="shipping-summary-item"><span>Shipping & Handling:</span><span>{this.props.cartSH}</span></li>
                        <li className="shipping-summary-item"><span>Discount:</span><span className="text-success-emphasis">{this.props.cartDiscount}</span></li>
                        <li className="shipping-summary-item"><span>Cart Total:</span><span>{this.props.cartTotal}</span></li>
                    </ul>
                    <div className="shipping-summary-line-break"></div>
                    <Button 
                        onClick={this.props.toPayment}
                        btnClass={"btn-outline-danger"}
                        type="submit"
                        buttonText="Payment"
                    />
                </div>  
            </div>
        )
    }
}