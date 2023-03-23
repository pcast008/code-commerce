import { Component } from "react";
import { PaymentForm } from "../PaymentForm/PaymentForm";
import { PaymentSummary } from "../PaymentSummary/PaymentSummary";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import "./Payment.css"

export class Payment extends Component {
    render() {
        return (
            <div className="shipping-container">
                <ProgressBar width={"75%"} text={"Payment"} />
                <div>
                    <div className="shipping-summary-container">
                        <PaymentForm 
                            backToShipping={this.props.backToShipping} 
                            clearInput={this.props.clearInput}
                            onChange={this.props.onChange} 
                            cardholderName={this.props.cardholderName}
                            cardholderNameError={this.props.cardholderNameError}     
                            cardNumber={this.props.cardNumber}
                            cardNumberError={this.props.cardNumberError} 
                            cardType={this.props.cardType}  
                            expMonth={this.props.expMonth}
                            expMonthError={this.props.expMonthError}   
                            expYear={this.props.expYear}
                            expYearError={this.props.expYearError}   
                            cvv={this.props.cvv}
                            cvvError={this.props.cvvError}  
                        />
                        <PaymentSummary
                            onChange={this.props.onChange} 
                            clearInput={this.props.clearInput}
                            toConfirmation={this.props.toConfirmation}
                            cartData={this.props.cartData} 
                            cartSubTotal={this.props.cartSubTotal}
                            cartSH={this.props.cartSH}
                            cartDiscount={this.props.cartDiscount}
                            cartTotal={this.props.cartTotal}
                            promotion={this.props.promotion}
                            promotionError={this.props.promotionError}
                            applyPromotion={this.props.applyPromotion}
                        />
                    </div>
                </div>     
            </div>
        )      
    }
}