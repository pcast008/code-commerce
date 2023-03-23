import { Component } from "react";
import { FormInput } from "../FormInput/FormInput";
import { Button } from "../Button/Button";
import "./PaymentForm.css"

export class PaymentForm extends Component {
    render() {
        const inputData1 = [
            { id: "cardholderName", type: "text", label: "Cardholder Name", placeholder: "Cardholder Name", onChange: this.props.onChange, value: this.props.cardholderName, error: this.props.cardholderNameError, onClick: () => {this.props.clearInput("cardholderName")} },
            { id: "cardNumber", type: "text", label: "Card Number", placeholder: "Card Number", onChange: this.props.onChange, value: this.props.cardNumber, error: this.props.cardNumberError, onClick: () => {this.props.clearInput("cardNumber")}, maxLength: 19, cardType: this.props.cardType }
        ]

        const inputData2 = [
            { id: "cvv", type: "text", label: "CVV", placeholder: "CVV", onChange: this.props.onChange, value: this.props.cvv, error: this.props.cvvError, onClick: () => {this.props.clearInput("cvv")}, maxLength: 3 }
        ]

        const formInputs1 = inputData1.map((input, index) => <FormInput key={index +1 } { ...input } />);
        const formInputs2 = inputData2.map((input, index) => <FormInput key={index +1 } { ...input } />);

        return (
            <div className="shipping-form-container">
                <div className="shipping-form">
                    {formInputs1}
                    <div className="payment-inputs">
                        <div>Expiration Date</div>
                        <div className="form-floating payment-item">
                            <select className={`form-select ${this.props.expMonthError ? "alert alert-danger" : ""}`} id="expMonth" name="expMonth" value={this.props.expMonth} onChange={this.props.onChange}>
                                <option value="">Select a Month</option>
                                <option value="United States">12</option>
                            </select>
                            <label htmlFor="expMonth">Month</label>
                            {this.props.expMonthError ? <div className="input-error-container"><i className="input-error bi bi-exclamation-circle"></i>{this.props.expMonthError}</div> : <div></div>}
                        </div>
                        <div className="form-floating payment-item">
                            <select className={`form-select ${this.props.expYearError ? "alert alert-danger" : ""}`} id="expYear" name="expYear" value={this.props.expYear} onChange={this.props.onChange}>
                                <option value="">Select a Year</option>
                                <option value={2026}>2026</option>
                            </select>
                            <label htmlFor="expYear">Year</label>
                            {this.props.expYearError ? <div className="input-error-container"><i className="input-error bi bi-exclamation-circle"></i>{this.props.expYearError}</div> : <div></div>}
                        </div>
                    </div>
                    {formInputs2}                   
                </div>
                <div className="back-to-cart">
                    <Button 
                        onClick={() => this.props.backToShipping("shipping")}
                        btnClass={"btn-dark"}
                        type="button"
                        buttonText="Back to shipping"
                    />
                </div>
            </div>
            
           
                
     
        )      
    }
}