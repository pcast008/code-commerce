import './App.css';
import { Component } from 'react';
import { NavBar } from './Components/NavBar/NavBar';
import { RadioInput } from './Components/RadioInput/RadioInput';
import { Shop } from './Components/Shop/Shop';
import { CartScreen } from "./Components/CartScreen/CartScreen";
import { data } from "./data"
import { Shipping } from './Components/Shipping/Shipping';
import { cardNumberValidation, cvvValidation, nameValidation, requiredValidation, telephoneValidation, zipValidation } from './validations';
import { Payment } from './Components/Payment/Payment';
import { Confirmation } from './Components/Confirmation/Confirmation';

export class App extends Component {
    state = {
        users: [
            {
                email: "info@devslopes.com",
                password: "Devslopes123!",
                firstName: "John",
                lastName: "Doe",
                zip: "55555"
            }
        ],
        cart: [
            // { id: 1, price: 200, quantity: 2 },
            // { id: 2, price: 75, quantity: 1 },
            // { id: 3, price: 120, quantity: 1 },
        ],
        cartTotalItems: 0,
        cartSubTotal: "",
        cartSH: "",
        cartDiscount: "",
        cartTotal: "",
        page: "login",
        loggedIn: true,
        promotion: "",
        promotionError: "",
        promotionApplied: "",
        promotionCodes: [
            { name: "DEV2023", value: .10},
            { name: "ONEFREEREACT", value: 350},
        ],
        addressTitle: "",
        legalName: "", 
        shippingAddress: "",
        shippingZip: "",
        country: "",
        state: "",
        city: "",
        cell: "",
        telephone: "",
        cardholderName: "",
        cardNumber: "",
        cardType: "",
        expMonth: "",
        expYear: "",
        cvv: "",
        errors: {
            addressTitleError: "",
            legalNameError: "",
            shippingAddressError: "",
            createPasswordError: "",
            shippingZipError: "",
            countryError: "",
            stateError: "",
            cityError: "",
            cellError: "",
            telephoneError: "",
            cardholderNameError: "",
            cardNumberError: "",
            expMonthError: "",
            expYearError: "",
            cvvError: "",
            cartSHError: ""
        },
    }

    checkPaymentRequired = () => {
        let isError = false;
        const keys = Object.keys(this.state).filter(key => {
            return key === "cardholderName"
                || key === "cardNumber"
                || key === "expMonth"
                || key === "expYear"
                || key === "cvv"
        });  

        keys.forEach(key => {
            if(!this.state[key]) {
                this.setState(state => {
                    return { 
                        errors: { ...state.errors, [`${key}Error`]: "Required" },
                    }
                })
                isError = true;
            } 
        })

        return isError;
    }

    checkPaymentErrors = () => {
        const keys = Object.keys(this.state).filter(key => {
            return key === "cardholderName"
                || key === "cardNumber"
                || key === "expMonth"
                || key === "expYear"
                || key === "cvv"
        }); 
        
        const value = keys.find(key => this.state.errors[`${key}Error`] !== "")
        const isError = value ? true : false;
        return isError;
    }

    toConfirmationSubmit = () => {
        const isRequiredErrors = this.checkPaymentRequired();
        const isPaymentErrors = this.checkPaymentErrors();

        if (isRequiredErrors || isPaymentErrors) {
            return
        } else {
            const keys = Object.keys(this.state).filter(key => {
                return key === "cardholderName"
                || key === "cardNumber"
                || key === "expMonth"
                || key === "expYear"
                || key === "cvv"
            });
    
            keys.forEach(key => {
                this.setState(state => {
                    return { 
                        errors: { ...state.errors, [`${key}Error`]: "" },
                    }
                })
            })
            this.updatePage("confirmation")
        }
    }

    checkShippingRequired = () => {
        let isError = false;
        const keys = Object.keys(this.state).filter(key => {
            return key === "addressTitle"
                || key === "legalName"
                || key === "shippingAddress"
                || key === "shippingZip"
                || key === "country"
                || key === "state"
                || key === "city"
                || key === "cell"
                || key === "telephone"
                || key === "cartSH"
        });

        keys.forEach(key => {
            if(!this.state[key]) {
                this.setState(state => {
                    return { 
                        errors: { ...state.errors, [`${key}Error`]: "Required" },
                    }
                })
                isError = true;
            } 
        })

        return isError;
    } 

    checkShippingErrors = () => {
        const keys = Object.keys(this.state).filter(key => {
            return key === "addressTitle"
                || key === "legalName"
                || key === "shippingAddress"
                || key === "shippingZip"
                || key === "country"
                || key === "state"
                || key === "city"
                || key === "cell"
                || key === "telephone"
                || key === "cartSH"
        });
        
        const value = keys.find(key => this.state.errors[`${key}Error`] !== "")
        const isError = value ? true : false;
        return isError;
    }

    toPayment = () => {
        const isRequiredErrors = this.checkShippingRequired();
        const isShippingErrors = this.checkShippingErrors();

        if (isRequiredErrors || isShippingErrors) {
            return
        } else {
            const keys = Object.keys(this.state).filter(key => {
                return key === "addressTitle"
                    || key === "legalName"
                    || key === "shippingAddress"
                    || key === "shippingZip"
                    || key === "country"
                    || key === "state"
                    || key === "city"
                    || key === "cell"
                    || key === "telephone"
                    || key === "cartSH"
            });
    
            keys.forEach(key => {
                this.setState(state => {
                    return { 
                        errors: { ...state.errors, [`${key}Error`]: "" },
                    }
                })
            })
            this.updatePage("payment")
        }
    }

    applyPromotion = (e) => {
        e.preventDefault();

        if (this.state.promotionApplied) {
            this.setState({ promotionError: `${this.state.promotionApplied} already applied!` })

        } else {
            const code = this.state.promotionCodes.find(code => code.name.toLocaleLowerCase() === this.state.promotion.toLowerCase());
            const reactExists = this.state.cart.find(item => item.id === 4);

            if (!code) {
                this.setState({ promotionError: "Invalid promotion" })
            } else {
                if (code.name.toLowerCase() === "DEV2023".toLowerCase()) {
                    this.setState(state => {
                        return { 
                            promotionApplied: code.name, 
                            cartDiscount: state.cartSubTotal * code.value * -1, 
                            promotionError: ""
                        }
                    })
                }
    
                if (code.name.toLowerCase() === "ONEFREEREACT".toLowerCase()) {
                    if (reactExists) {
                        this.setState(state => {
                            return { 
                                promotionApplied: code.name, 
                                cartDiscount: code.value * -1,
                                promotionError: ""
                            }
                        })
                    } else {
                        this.setState({ promotionError: "Add React to the cart!" });
                    }
                }
                this.updateCartTotal();
            }
        }
    }

    updatePromotion = () => {
        if (this.state.promotionApplied) {
            const code = this.state.promotionCodes.find(code => code.name.toLocaleLowerCase() === this.state.promotion.toLowerCase());

            if (code.name.toLowerCase() === "DEV2023".toLowerCase()) {
                this.setState(state => {
                    return { 
                        cartDiscount: state.cartSubTotal * code.value * -1, 
                    }
                })
            } else if (code.name.toLowerCase() === "ONEFREEREACT".toLowerCase()) {
                this.setState(state => {
                    return { 
                        cartDiscount: code.value * -1,
                    }
                })            
            } 
        } else return;
    }

    onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.handleValidation(name, value);

        if (name === "cartSH") {
            this.setState({ [name]: value });
            this.updateCartTotal();

        } else if (name === "cardNumber") {
            if (value.length && value.match(/[0-9]+/)) {
                this.setState(state => {
                    return {
                        [name]: value.match(/[0-9]{1,4}/g).join(" ")
                    }
                })
            } else {
                this.setState({ [name]: value });
            }
        } else {
            this.setState({ [name]: value });
        }
    }

    handleValidation = (name, value) => {
        switch (name) {
            case "cartSH":
                const cartSHError = requiredValidation(value);
                this.setState(state => {
                    return {
                        errors: { ...state.errors , cartSHError: cartSHError }
                    }
                })

                break; 

            case "city":
                const cityError = requiredValidation(value);
                this.setState(state => {
                    return {
                        errors: { ...state.errors , cityError: cityError }
                    }
                })

                break; 

            case "state":
                const stateError = requiredValidation(value);
                this.setState(state => {
                    return {
                        errors: { ...state.errors , stateError: stateError }
                    }
                })

                break;  

            case "country":
                const countryError = requiredValidation(value);
                this.setState(state => {
                    return {
                        errors: { ...state.errors , countryError: countryError }
                    }
                })

                break;  

            case "shippingAddress":
                const shippingAddressError = requiredValidation(value);
                this.setState(state => {
                    return {
                        errors: { ...state.errors , shippingAddressError: shippingAddressError }
                    }
                })

                break;  

            case "addressTitle":
                const addressTitleError = requiredValidation(value);
                this.setState(state => {
                    return {
                        errors: { ...state.errors , addressTitleError: addressTitleError }
                    }
                })

                break;  

            case "cvv":
                const cvvError = cvvValidation(value);
                this.setState(state => {
                    return {
                        errors: { ...state.errors , cvvError: cvvError }
                    }
                })

                break;  

            case "cardholderName":
                const cardholderNameError = nameValidation(value);
                this.setState(state => {
                    return {
                        errors: { ...state.errors , cardholderNameError: cardholderNameError }
                    }
                })

                break;  

            case "cardNumber":
                const card = cardNumberValidation(value);
                this.setState(state => {
                    return {
                        errors: { ...state.errors , cardNumberError: card.error },
                        cardType: card.type
                    }
                })

                break;  

            case "expMonth":
                const expMonthError = requiredValidation(value);
                this.setState(state => {
                    return {
                        errors: { ...state.errors , expMonthError: expMonthError }
                    }
                })

                break;  
                 
            case "expYear":
                const expYearError = requiredValidation(value);
                this.setState(state => {
                    return {
                        errors: { ...state.errors , expYearError: expYearError }
                    }
                })

                break;  

            case "telephone":
                const telephoneError = telephoneValidation(value);
                this.setState(state => {
                    return {
                        errors: { ...state.errors , telephoneError: telephoneError }
                    }
                })

                break;  

            case "cell":
                const cellError = telephoneValidation(value);
                this.setState(state => {
                    return {
                        errors: { ...state.errors , cellError: cellError }
                    }
                })

                break;  

            case "legalName":
                const legalNameError = nameValidation(value);
                this.setState(state => {
                    return {
                        errors: { ...state.errors , legalNameError: legalNameError }
                    }
                })

                break;    

            case "shippingZip":
                const shippingZipError = zipValidation(value);
                this.setState(state => {
                    return {
                        errors: { ...state.errors , shippingZipError: shippingZipError }
                    }
                })

                break;   
   
            default:
                break;
        }
    }

    clearInput = (input) => {
        if (input === "cardNumber") {
            this.setState(state => {
                return { 
                    [input]: "",
                    [`${input}Error`]: "",
                    cardType: ""
                }
            })
        } else {
            this.setState(state => {
                return { 
                    [input]: "",
                    [`${input}Error`]: ""
                }
            })
        }
    }

    findCartItem = (id) => {
        return this.state.cart.find(elm => elm.id === id);
    }

    findDataItem = (id) => {
        return data.find(elm => elm.id === id);
    }

    updateCartQuantity = () => {
        this.setState(state => {
            const totalQuantity = state.cart.reduce((acc, cv) => (acc +=  cv.quantity), 0);
            return { cartTotalItems: totalQuantity }
        });
    }

    updateCartSubTotal = () => {
        this.setState(state => {
            const totalPrice = state.cart.reduce((acc, cv) => (acc +=  cv.price * cv.quantity), 0);
            return { 
                cartSubTotal: totalPrice 
            }
        });
    }

    updateCartTotal = () => {
        this.setState(state => {
            return { 
                cartTotal: parseInt(state.cartSubTotal) + parseInt(state.cartSH || 0) + parseInt(state.cartDiscount || 0), 
            }
        });
    }

    addToCart = (id) => {
        const item = this.findCartItem(id);
        const dataItem = this.findDataItem(id);
        const i = this.state.cart.indexOf(item);
        
        if (item) {
            const cartItem = { id: dataItem.id, price: dataItem.price, quantity: this.state.cart[i].quantity + 1 };  
            this.setState(state => {
                state.cart.splice(i, 1, cartItem);
                return {
                    cart: [ ...state.cart ]              
                }
            })
        } 
        else {
            this.setState(state => {
                return {
                    cart: [ ...state.cart, { id: dataItem.id, price: dataItem.price, quantity: 1 } ]
                }
            })
        }

        this.updateCartQuantity();
        this.updateCartSubTotal();
        this.updatePromotion();
        this.updateCartTotal();
    }

    removeFromCart = (id) => {
        const item = this.findCartItem(id);
        const dataItem = this.findDataItem(id);
        const i = this.state.cart.indexOf(item);

        if (item.quantity > 1) {         
            const cartItem = { id: dataItem.id, price: dataItem.price, quantity: this.state.cart[i].quantity - 1 };  
            this.setState(state => {
                state.cart.splice(i, 1, cartItem);
                return {
                    cart: [ ...state.cart ]              
                }
            })
        } 
        else {
            this.setState(state => {
                state.cart.splice(i, 1);
                return {
                    cart: [ ...state.cart ]
                }
            })
        }
        
        this.updateCartQuantity();
        this.updateCartSubTotal();
        this.updatePromotion();
        this.updateCartTotal();
    }

    checkUser = (email, password, creatingAccount = false) => {
        if (creatingAccount) {
            for (const user of this.state.users) {
                if (user.email === email) {
                    return true;
                }
            }
        } else {
            for (const user of this.state.users) {
                if (user.email === email && user.password === password) {
                    return true;
                }
            }
        }      
        return false;
    }

    updatePage = (page) => {
        this.setState({ page: page });
    }

    signOut = () => {
        this.setState(state => {
            return {
                cart: [],
                cartTotalItems: 0,
                cartSubTotal: "",
                cartSH: "",
                cartDiscount: "",
                cartTotal: "",
                page: "login",
                loggedIn: false,
                promotion: "",
                promotionError: "",
                promotionApplied: "",
                addressTitle: "",
                legalName: "", 
                shippingAddress: "",
                shippingZip: "",
                country: "",
                state: "",
                city: "",
                cell: "",
                telephone: "",
                cardholderName: "",
                cardNumber: "",
                cardType: "",
                expMonth: "",
                expYear: "",
                cvv: ""
            }
        });
    }

    addUser = (user) => {
        this.setState(state => {
            return {
                users: [
                    ...state.users, 
                    {
                        email: user.email,
                        password: user.password,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        zip: user.zip
                    }
                ]
            }
        })
    }

    isLoggedIn = (loggedIn) => {
        if (loggedIn) {
            this.setState({ page: "cart", loggedIn: true });
        }
    }

    handlePageLoad = (page) => {
        switch (page) {
            case "login":
                return <RadioInput 
                            checkUser={this.checkUser} 
                            isLoggedIn={this.isLoggedIn} 
                            addUser={this.addUser} 
                        /> 

            case "shop":
                return <Shop 
                            addToCart={this.addToCart} 
                            removeFromCart={this.removeFromCart} 
                            findCartItem={this.findCartItem} 
                        />  
        
            case "cart":
                return <CartScreen 
                            page={this.state.page}
                            cartData={this.state.cart} 
                            removeFromCart={this.removeFromCart} 
                            clearInput={this.clearInput}
                            promotion={this.state.promotion}
                            promotionError={this.state.promotionError}
                            onChange={this.onChange}
                            cartSubTotal={this.state.cartSubTotal}
                            cartSH={this.state.cartSH}
                            cartDiscount={this.state.cartDiscount}
                            cartTotal={this.state.cartTotal}
                            applyPromotion={this.applyPromotion}
                            checkOut={this.updatePage}
                            checkOutError={this.state.checkOutError}
                        />

            case "shipping":
                return <Shipping 
                            backToCart={this.updatePage} 
                            cartData={this.state.cart}
                            clearInput={this.clearInput}
                            onChange={this.onChange}
                            cartSubTotal={this.state.cartSubTotal}
                            cartSH={this.state.cartSH}
                            cartSHError={this.state.errors.cartSHError}
                            cartDiscount={this.state.cartDiscount}
                            cartTotal={this.state.cartTotal}
                            toPayment={this.toPayment}
                            addressTitle={this.state.addressTitle}
                            addressTitleError={this.state.errors.addressTitleError}
                            legalName={this.state.legalName}
                            legalNameError={this.state.errors.legalNameError}
                            shippingAddress={this.state.shippingAddress}
                            shippingAddressError={this.state.errors.shippingAddressError}
                            shippingZip={this.state.shippingZip}
                            shippingZipError={this.state.errors.shippingZipError}
                            cell={this.state.cell}
                            cellError={this.state.errors.cellError}
                            telephone={this.state.telephone}
                            telephoneError={this.state.errors.telephoneError}
                            country={this.state.country}
                            countryError={this.state.errors.countryError}
                            state={this.state.state}
                            stateError={this.state.errors.stateError}
                            city={this.state.city}
                            cityError={this.state.errors.cityError}
                        />   
                        
            case "payment":
                return <Payment 
                            backToShipping={this.updatePage} 
                            cartData={this.state.cart}
                            clearInput={this.clearInput}
                            onChange={this.onChange}
                            cartSubTotal={this.state.cartSubTotal}
                            cartSH={this.state.cartSH}
                            cartDiscount={this.state.cartDiscount}
                            cartTotal={this.state.cartTotal}
                            toConfirmation={this.toConfirmationSubmit}     
                            cardholderName={this.state.cardholderName}
                            cardholderNameError={this.state.errors.cardholderNameError}     
                            cardNumber={this.state.cardNumber}
                            cardNumberError={this.state.errors.cardNumberError}  
                            cardType={this.state.cardType} 
                            expMonth={this.state.expMonth}
                            expMonthError={this.state.errors.expMonthError}   
                            expYear={this.state.expYear}
                            expYearError={this.state.errors.expYearError}   
                            cvv={this.state.cvv}
                            cvvError={this.state.errors.cvvError}   
                            promotion={this.state.promotion}                                             
                            promotionError={this.state.promotionError}                                             
                            applyPromotion={this.applyPromotion}                                             
                        />

            case "confirmation":
                return <Confirmation
                            backToShop={this.updatePage} 
                            cartData={this.state.cart}
                            cartSubTotal={this.state.cartSubTotal}
                            cartSH={this.state.cartSH}
                            cartDiscount={this.state.cartDiscount}
                            cartTotal={this.state.cartTotal}   
                            cardType={this.state.cardType}                              
                        />
            default:
                break;
        }
    }

    render() {
        return (
            <div className="App">
                <NavBar 
                    page={this.state.page} 
                    loggedIn={this.state.loggedIn}
                    updatePage={this.updatePage}
                    signOut={this.signOut}
                    cartTotalItems={this.state.cartTotalItems}
                />
                {this.handlePageLoad(this.state.page)}     
            </div>
          );
    }
}