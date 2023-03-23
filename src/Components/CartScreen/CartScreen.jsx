import { Component } from "react";
import { Cart } from "../Cart/Cart";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import { Summary } from "../Summary/Summary";
import "./CartScreen.css"

export class CartScreen extends Component {
    render() {
        const checkOutError = this.props.cartData.length > 0 ? <div></div> : <div className="check-out-error-container"><i className="bi bi-exclamation-circle"></i>You must have items in the cart to check out!</div> 

        return (
            <div className="cart-screen-container">
                <ProgressBar width={"25%"} text={"Cart"} />
                <div>
                    {checkOutError}
                    <div className="cart-summary-container">
                        <Cart 
                            cartData={this.props.cartData} 
                            removeFromCart={this.props.removeFromCart} 
                            page={this.props.page}
                        />
                        <Summary 
                            cartData={this.props.cartData} 
                            clearInput={this.props.clearInput}
                            promotion={this.props.promotion}
                            promotionError={this.props.promotionError}
                            onChange={this.props.onChange}
                            cartSubTotal={this.props.cartSubTotal}
                            cartSH={this.props.cartSH}
                            cartDiscount={this.props.cartDiscount}
                            cartTotal={this.props.cartTotal}
                            applyPromotion={this.props.applyPromotion}
                            checkOut={this.props.checkOut}
                        />
                    </div>
                </div>
                
            </div>
        )      
    }
}