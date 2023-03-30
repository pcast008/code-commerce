import { Component } from "react";
import { ConfirmationForm } from "../ConfirmationForm/ConfirmationForm";
import { ConfirmationSummary } from "../ConfirmationSummary/ConfirmationSummary";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import "./Confirmation.css"

export class Confirmation extends Component {
    render() {
        return (
            <div className="shipping-container">
                <ProgressBar width={"100%"} text={"Confirmation"} />
                <div>
                    <div className="shipping-summary-container">
                        <ConfirmationForm 
                            backToShop={this.props.backToShop}
                        />
                        <ConfirmationSummary
                            cartData={this.props.cartData} 
                            cartSubTotal={this.props.cartSubTotal}
                            cartSH={this.props.cartSH}
                            cartDiscount={this.props.cartDiscount}
                            cartTotal={this.props.cartTotal}
                            cardType={this.props.cardType}
                            cardNumber={this.props.cardNumber}
                        />
                    </div>
                </div>     
            </div>
        )      
    }
}