import { Component } from "react";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import { ShippingForm } from "../ShippingForm/ShippingForm";
import { ShippingSummary } from "../ShippingSummary/ShippingSummary";
import "./Shipping.css"

export class Shipping extends Component {
    render() {
        return (
            <div className="shipping-container">
                <ProgressBar width={"50%"} text={"Delivery"} />
                <div>
                    <div className="shipping-summary-container">
                        <ShippingForm 
                            backToCart={this.props.backToCart}
                            clearInput={this.props.clearInput}
                            onChange={this.props.onChange}
                            addressTitle={this.props.addressTitle}
                            addressTitleError={this.props.addressTitleError}
                            legalName={this.props.legalName}
                            legalNameError={this.props.legalNameError}
                            shippingAddress={this.props.shippingAddress}
                            shippingAddressError={this.props.shippingAddressError}
                            shippingZip={this.props.shippingZip}
                            shippingZipError={this.props.shippingZipError}
                            cell={this.props.cell}
                            cellError={this.props.cellError}
                            telephone={this.props.telephone}
                            telephoneError={this.props.telephoneError}
                            country={this.props.country}
                            countryError={this.props.countryError}
                            state={this.props.state}
                            stateError={this.props.stateError}
                            city={this.props.city}
                            cityError={this.props.cityError}
                            cartSH={this.props.cartSH}
                            cartSHError={this.props.cartSHError}
                        />
                        <ShippingSummary
                            toPayment={this.props.toPayment}
                            cartData={this.props.cartData} 
                            cartSubTotal={this.props.cartSubTotal}
                            cartSH={this.props.cartSH}
                            cartDiscount={this.props.cartDiscount}
                            cartTotal={this.props.cartTotal}
                        />
                    </div>
                </div>     
            </div>
        )      
    }
}