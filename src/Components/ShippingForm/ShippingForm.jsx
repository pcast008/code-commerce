import { Component } from "react";
import { FormInput } from "../FormInput/FormInput";
import { Button } from "../Button/Button";
import "./ShippingForm.css"

export class ShippingForm extends Component {
    render() {
        const inputData1 = [
            { id: "addressTitle", type: "text", label: "Address Title", placeholder: "Address Title", onChange: this.props.onChange, value: this.props.addressTitle, error: this.props.addressTitleError, onClick: () => {this.props.clearInput("addressTitle")} },
            { id: "legalName", type: "text", label: "Legal Name", placeholder: "Legal Name", onChange: this.props.onChange, value: this.props.legalName, error: this.props.legalNameError, onClick: () => {this.props.clearInput("legalName")} },
            { id: "shippingAddress", type: "text", label: "Address", placeholder: "Address", onChange: this.props.onChange, value: this.props.shippingAddress, error: this.props.shippingAddressError, onClick: () => {this.props.clearInput("shippingAddress")} }
        ]

        const inputData2 = [
            { id: "cell", type: "tel", label: "Cell Phone", placeholder: "Cell Phone", onChange: this.props.onChange, value: this.props.cell, error: this.props.cellError, onClick: () => {this.props.clearInput("cell")}, maxLength: 10 },
            { id: "telephone", type: "tel", label: "Telephone", placeholder: "Telephone", onChange: this.props.onChange, value: this.props.telephone, error: this.props.telephoneError, onClick: () => {this.props.clearInput("telephone")}, maxLength: 10 }
        ]

        const formInputs1 = inputData1.map((input, index) => <FormInput key={index + 1} { ...input } />);
        const formInputs2 = inputData2.map((input, index) => <FormInput key={index + 1} { ...input } />);

        return (
            <div className="shipping-form-container">
                <div className="shipping-form" action="">
                    {formInputs1}
                    <div className="select-inputs">
                        <div className="select-item">
                            <FormInput 
                                id={"shippingZip"}
                                type={"text"}
                                label={"Zip Code"}
                                placeholder={"Zip Code"}
                                onChange={this.props.onChange}
                                value={this.props.shippingZip}
                                error={this.props.shippingZipError}
                                onClick={() => {this.props.clearInput("shippingZip")}}
                                className={""}
                                maxLength={5}
                            />
                        </div>
                        <div className="form-floating select-item">
                            <select className={`form-select ${this.props.countryError ? "alert alert-danger" : ""}`} id="country" name="country" value={this.props.country} onChange={this.props.onChange}>
                                <option value="">Select a country</option>
                                <option value="United States">United States</option>
                            </select>
                            <label htmlFor="country">Country</label>
                            {this.props.countryError ? <div className="input-error-container"><i className="input-error bi bi-exclamation-circle"></i>{this.props.countryError}</div> : <div></div>}
                        </div>
                        <div className="form-floating select-item">
                            <select className={`form-select ${this.props.stateError ? "alert alert-danger" : ""}`} id="state" name="state" value={this.props.state} onChange={this.props.onChange}>
                                <option value="">Select a State</option>
                                <option value="Florida">Florida</option>
                            </select>
                            <label htmlFor="state">State</label>
                            {this.props.stateError ? <div className="input-error-container"><i className="input-error bi bi-exclamation-circle"></i>{this.props.stateError}</div> : <div></div>}
                        </div>
                        <div className="form-floating select-item">
                            <select className={`form-select ${this.props.cityError ? "alert alert-danger" : ""}`} id="city" name="city" value={this.props.city} onChange={this.props.onChange}>
                                <option value="">Select a City</option>
                                <option value="Land O Lakes">Land O Lakes</option>
                            </select>
                            <label htmlFor="city">City</label>
                            {this.props.cityError ? <div className="input-error-container"><i className="input-error bi bi-exclamation-circle"></i>{this.props.cityError}</div> : <div></div>}
                        </div>
                    </div>
                    {formInputs2}
                    <div className="shipping-form-line-break"></div>
                    <div className="shipping-method-container">
                        <div className="shipping-text">SHIPPING METHOD</div>
                        <div className="shipping-input">
                            <div className="shipping-radios">
                                <input id="standard" name={"cartSH"} type="radio" value={5} onChange={this.props.onChange} defaultChecked={this.props.cartSH === 5 ? "checked" : ""} autoComplete="off"/>
                                <label className="shipping-text" htmlFor="standard">STANDARD</label>
                            </div>
                            <div>Delivery in 4-6 Business Days - $5</div>
                        </div>
                        <div className="shipping-input">
                            <div className="shipping-radios">
                                <input id="express" name={"cartSH"} type="radio" value={20} onChange={this.props.onChange} defaultChecked={this.props.cartSH === 20 ? "checked" : ""} autoComplete="off"/>
                                <label className="shipping-text" htmlFor="express">EXPRESS  </label>
                            </div>
                            <div>Delivery in 1-3 Business Days - $20</div>
                        </div>
                        
                    </div>   
                    {this.props.cartSHError ? <div className="shipping-input-error-container alert"><i className="input-error bi bi-exclamation-circle"></i>{this.props.cartSHError}</div> : <div></div>}              
                </div>
                <div className="back-to-cart">
                    <Button 
                        onClick={() => this.props.backToCart("cart")}
                        btnClass={"btn-dark back-to-cart-btn"}
                        type="button"
                        buttonText="Back to cart"
                    />
                </div>
            </div>
            
           
                
     
        )      
    }
}