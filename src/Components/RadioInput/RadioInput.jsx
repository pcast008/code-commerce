import { Component } from "react";
import { LoginForm } from '../LoginForm/LoginForm';
import { CreateAccountForm } from '../CreateAccountForm/CreateAccountForm';
import { emailValidation, passwordValidation, nameValidation, zipValidation, requiredValidation } from "../../validations";
import "./RadioInput.css";

export class RadioInput extends Component {
    state = {
        radio: "login",
        email: "",
        password: "", 
        createEmail: "",
        createPassword: "",
        confirmPassword: "",
        createFirstName: "",
        createLastName: "",
        createZip: "",
        errors: {
            emailError: "",
            passwordError: "",
            createEmailError: "",
            createPasswordError: "",
            confirmPasswordError: "",
            createFirstNameError: "",
            createLastNameError: "",
            createZipError: "",
        },
        loginFormError: "",
        accountFormError: "",
    }

    onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
        this.handleValidation(name, value);
    }

    handleValidation = (name, value) => {
        switch (name) {
            case "password":
                const passwordError = requiredValidation(value);
                this.setState(state => {
                    return {
                        errors: { ...state.errors , passwordError: passwordError }
                    }
                })

                break;

            case "email":
                const emailError = requiredValidation(value);
                this.setState(state => {
                    return {
                        errors: { ...state.errors , emailError: emailError }
                    }
                })

                break;

            case "createEmail":
                const createEmailError = emailValidation(value);
                this.setState(state => {
                    return {
                        errors: { ...state.errors , createEmailError: createEmailError }
                    }
                })

                break;

            case "createPassword":
                const createPasswordError = passwordValidation(value);
                this.setState(state => {
                    return {
                        errors: { ...state.errors , createPasswordError: createPasswordError }
                    }
                })

                break;    

            case "confirmPassword":
                const confirmPasswordError = passwordValidation(value);
                this.setState(state => {
                    return {
                        errors: { ...state.errors , confirmPasswordError: confirmPasswordError }
                    }
                })

                break;   

            case "createFirstName":
                const createFirstNameError = nameValidation(value);
                this.setState(state => {
                    return {
                        errors: { ...state.errors , createFirstNameError: createFirstNameError }
                    }
                })

                break;   

            case "createLastName":
                const createLastNameError = nameValidation(value);
                this.setState(state => {
                    return {
                        errors: { ...state.errors , createLastNameError: createLastNameError }
                    }
                })

                break;  

            case "createZip":
                const createZipError = zipValidation(value);
                this.setState(state => {
                    return {
                        errors: { ...state.errors , createZipError: createZipError }
                    }
                })

                break;  
        
            default:
                break;
        }
    }

    checkSubmit = () => {
        let isError = false;

        if (this.state.radio === "login") {
            const user = this.props.checkUser(this.state.email, this.state.password);
            if (!user) {
                this.setState({ loginFormError: "Account does not exist!" })
                isError = true;
            } 
        }

        if (this.state.radio === "createAccount") {
            const user = this.props.checkUser(this.state.createEmail, this.state.createPassword, true);
            if (user) {
                this.setState({ accountFormError: "Account already exist!" })
                isError = true;
            } 
        }    
        return isError;
    }

    checkRequired = () => {
        let isError = false;
        let keys = []

        if (this.state.radio === "login") {
            keys = [ ...Object.keys(this.state).filter(val => val === "email" || val === "password") ];
        }

        if (this.state.radio === "createAccount") {
            keys = [ ...Object.keys(this.state).filter(val => val === "createEmail" || val === "createPassword" || val === "createPassword" || val === "confirmPassword" || val === "createFirstName" || val === "createLastName" || val === "createZip") ];
        }    

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

    passwordMatch = () => {
        let isError = false;
        if (this.state.createPassword !== this.state.confirmPassword) {
            this.setState({ accountFormError: "Passwords don't match!" })
            isError = true;
        } else {
            this.setState({ accountFormError: "" })
        }
        return isError;
    }

    createAccountErrors = () => {
        const keys = Object.keys(this.state).filter(val => val === "createEmail" || val === "createPassword" || val === "createPassword" || val === "confirmPassword" || val === "createFirstName" || val === "createLastName" || val === "createZip");

        const value = keys.find(key => this.state.errors[`${key}Error`] !== "")
        const isError = value ? true : false;
        return isError;
    }

    onSubmit = (e) => {
        e.preventDefault();
        const errorCheck = this.checkRequired();
        const passwordErrorCheck = this.passwordMatch();
        const formErrorCheck = this.checkSubmit();
        const createAccountErrorCheck = this.createAccountErrors();

        if (!errorCheck && !formErrorCheck && this.state.radio === "login") {
            this.setState(state => {
                return { 
                    email: "",
                    password: "",
                    errors: { ...state.errors, emailError: "", password: "" },
                    loginFormError: "" 
                }
            })
            this.props.isLoggedIn(true);
        }

        if (!errorCheck && !formErrorCheck && !passwordErrorCheck && !createAccountErrorCheck && this.state.radio === "createAccount") {
            this.props.addUser(
                {
                    email: this.state.createEmail,
                    password: this.state.createPassword,
                    firstName: this.state.createFirstName,
                    lastName: this.state.createLastName,
                    zip: this.state.createZip
                }
            )

            this.setState(state => {
                return { 
                    email: this.state.createEmail,
                    password: this.state.createPassword,
                    createEmail: "",
                    createPassword: "",
                    confirmPassword: "",
                    createFirstName: "",
                    createLastName: "",
                    createZip: "",
                    errors: { 
                        ...state.errors, 
                        createEmailError: "", 
                        createPasswordError: "", 
                        confirmPasswordError: "", 
                        createFirstNameError: "", 
                        createLastNameError: "", 
                        createZipError: "", 
                    },
                    accountFormError: "",
                    radio: "login"
                }
            })
        } 
    }

    clearInput = (input) => {
        this.setState(state => {
            return { 
                [input]: "",
                errors: { ...state.errors, [`${input}Error`]: "" },
            }
        })
    }

    render() {
        return (
            <div className="radio-form-container">
                <div className="radio-container">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="radio" id="login" onChange={this.onChange} value="login" checked={this.state.radio === "login" ? true : false}></input>
                        <label className="form-check-label" htmlFor="login">Login</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="radio" id="createAccount" onChange={this.onChange} value="createAccount" checked={this.state.radio === "createAccount" ? true : false}></input>
                        <label className="form-check-label" htmlFor="createAccount">Create Account</label>
                    </div>
                </div>
                {this.state.radio === "login" ? 
                    <LoginForm 
                        onChange={this.onChange}
                        clearInput={this.clearInput}
                        email={this.state.email}
                        password={this.state.password}
                        emailError={this.state.errors.emailError}
                        passwordError={this.state.errors.passwordError}
                        loginFormError={this.state.loginFormError}
                        onSubmit={this.onSubmit}
                    /> : 
                    <CreateAccountForm 
                        onChange={this.onChange}
                        clearInput={this.clearInput}                   
                        createEmail={this.state.createEmail}
                        createPassword={this.state.createPassword}
                        confirmPassword={this.state.confirmPassword}
                        createFirstName={this.state.createFirstName}
                        createLastName={this.state.createLastName}
                        createZip={this.state.createZip}
                        createEmailError={this.state.errors.createEmailError}
                        createPasswordError={this.state.errors.createPasswordError}
                        confirmPasswordError={this.state.errors.confirmPasswordError}
                        createFirstNameError={this.state.errors.createFirstNameError}
                        createLastNameError={this.state.errors.createLastNameError}
                        createZipError={this.state.errors.createZipError}
                        accountFormError={this.state.accountFormError}
                        onSubmit={this.onSubmit}
                    />}              
            </div>          
        )
    }
}