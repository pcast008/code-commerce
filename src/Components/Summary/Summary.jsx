import { Component } from "react";
import { Button } from "../Button/Button";
import "./Summary.css"

export class Summary extends Component {
    render() {
        const disabledClass = this.props.cartData.length > 0 ? "" : "disabled";

        return (
            <div className="summary">
                <div className="summary-title">SUMMARY</div>
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
                        onClick={() => {this.props.checkOut("shipping")}}
                        btnClass={"btn-outline-danger " + disabledClass}
                        type="submit"
                        buttonText="Check Out"
                    />
                </div>     
            </div>
        )
    }
}