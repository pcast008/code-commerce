import { Component } from "react";
import { Button } from "../Button/Button";
import "./ConfirmationForm.css"

export class ConfirmationForm extends Component {
    render() {
        return (
            <div className="confirmation-form-container">
                <div className="confirmation-form-title">CONFIRMATION</div>
                <div className="summary-line-break"></div>
                <i class="bi bi-check2-circle"></i>
                <div>
                    <div className="confirmation-form-text">Congratulations!</div>
                    <div className="confirmation-form-text">Your order is complete.</div>
                </div>
                <Button 
                    btnClass={"btn-dark"}
                    type="button"
                    buttonText="Track Order"
                />
                <Button 
                    onClick={() => this.props.backToShop("shop")}
                    btnClass={"btn-outline-dark"}
                    type="button"
                    buttonText="Back to shop"
                />
            </div>
        )      
    }
}