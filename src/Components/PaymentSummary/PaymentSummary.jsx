import { Component } from "react";
import { Button } from "../Button/Button";
import { FormInput } from "../FormInput/FormInput";
import "./PaymentSummary.css"
import { data } from "../../data";
import { CartItem } from "../CartItem/CartItem";

export class PaymentSummary extends Component {
    render() {
        const disabledClass = this.props.cartData.length > 0 ? "" : "disabled";
        const cartItems = this.props.cartData.map((item, index) => {
            const dataItem = data.find(elm => elm.id === item.id)
            return <CartItem key={index + 1} id={dataItem.id} title={dataItem.title} price={dataItem.price} quantity={item.quantity} image={dataItem.image} />
        })

        return (
            <div className="summary">
                <div className="summary-title">SUMMARY</div>
                <div className="summary-line-break"></div>
                {cartItems}
                <div className="summary-line-break"></div>
                <form action="">
                    <div className="promotion">
                        <div className="promotion-item">
                            <FormInput 
                                id={"promotion"}
                                type={"text"}
                                label={"Promotion"}
                                placeholder={"Promotion"}
                                onChange={this.props.onChange}
                                value={this.props.promotion}
                                error={this.props.promotionError}
                                onClick={() => {this.props.clearInput("promotion")}}
                            />
                        </div>
                        <div className="promotion-item">
                            <Button 
                                onClick={this.props.applyPromotion}
                                btnClass="btn-outline-success"
                                type="submit"
                                buttonText="Apply"
                            />
                        </div>         
                    </div>
                </form>
                <div className="summary-form">
                    <div className="summary-line-break"></div>
                    <ul className="summary-items-container">
                        <li className="summary-item"><span>Cart Subtotal:</span><span>{this.props.cartSubTotal}</span></li>
                        <li className="summary-item"><span>Shipping & Handling:</span><span>{this.props.cartSH}</span></li>
                        <li className="summary-item"><span>Discount:</span><span className="text-success-emphasis">{this.props.cartDiscount}</span></li>
                        <li className="summary-item"><span>Cart Total:</span><span>{this.props.cartTotal}</span></li>
                    </ul>
                    <div className="summary-line-break"></div>
                    <Button 
                        onClick={() => {this.props.toConfirmation("confirmation")}}
                        btnClass={"btn-outline-danger " + disabledClass}
                        type="button"
                        buttonText={`Pay $${this.props.cartTotal}`}
                    />
                </div>     
            </div>
        )
    }
}

