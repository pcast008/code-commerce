import { Component } from "react";
import "./ConfirmationSummary.css"
import { data } from "../../data";
import { CartItem } from "../CartItem/CartItem";
import { CARDICON } from "../../constants";

export class ConfirmationSummary extends Component {
    render() {
        const cartItems = this.props.cartData.map((item, index) => {
            const dataItem = data.find(elm => elm.id === item.id)
            return <CartItem key={index + 1} id={dataItem.id} title={dataItem.title} price={dataItem.price} quantity={item.quantity} image={dataItem.image} />
        })

        return (
            <div className="summary">
                <div className="summary-title">SUMMARY</div>
                <div className="summary-line-break"></div>
                {cartItems}
                <div className="summary-form">
                    <div className="summary-line-break"></div>
                    <ul className="summary-items-container">
                        <li className="summary-item"><span>Cart Subtotal:</span><span>{this.props.cartSubTotal}</span></li>
                        <li className="summary-item"><span>Shipping & Handling:</span><span>{this.props.cartSH}</span></li>
                        <li className="summary-item"><span>Discount:</span><span className="text-success-emphasis">{this.props.cartDiscount}</span></li>
                        <li className="summary-item"><span>Cart Total:</span><span>{this.props.cartTotal}</span></li>
                    </ul>
                    <div className="summary-line-break"></div>
                    <div className="">
                        <div>
                            <div className="summary-title">SHIPPING</div>
                            <div><a href="#">View Shipping Details</a></div>
                        </div>        
                        {parseInt(this.props.cartSH) === 5 ? <div><span>STANDARD</span> Delivery in 4-6 Business Days</div> : <div><span>EXPRESS</span> Delivery in 1-3 Business Days</div>}        
                    </div>
                    <div className="summary-line-break"></div>
                    <div className="">
                        <div>
                            <div className="summary-title">PAYMENT</div>
                            <div><a href="#">View Payment Details</a></div>
                        </div> 
                        <div><div className="card-icon-confirmation"><img src={CARDICON[this.props.cardType]} alt="" /></div> {this.props.cardType} Total payment: ${this.props.cartTotal}</div>    
                    </div>
                </div>     
            </div>
        )
    }
}

