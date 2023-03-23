import { Component } from "react";
import { FormInput } from "../FormInput/FormInput";
import { Button } from "../Button/Button";

export class CreateAccountForm extends Component {
    render() {
        const inputData = [
            { id: "createEmail", type: "email", label: "Email", placeholder: "Email", onChange: this.props.onChange, value: this.props.createEmail, error: this.props.createEmailError, onClick: () => {this.props.clearInput("createEmail")} },
            { id: "createPassword", type: "password", label: "Password", placeholder: "Password", onChange: this.props.onChange, value: this.props.createPassword, error: this.props.createPasswordError, maxLength: 20 },
            { id: "confirmPassword", type: "password", label: "Confirm Password", placeholder: "Confirm Password", onChange: this.props.onChange, value: this.props.confirmPassword, error: this.props.confirmPasswordError, maxLength: 20 },
            { id: "createFirstName", type: "text", label: "First Name", placeholder: "First Name", onChange: this.props.onChange, value: this.props.createFirstName, error: this.props.createFirstNameError },
            { id: "createLastName", type: "text", label: "Last Name", placeholder: "Last Name", onChange: this.props.onChange, value: this.props.createLastName, error: this.props.createLastNameError },
            { id: "createZip", type: "text", label: "Zip", placeholder: "Zip", onChange: this.props.onChange, value: this.props.createZip, error: this.props.createZipError, maxLength: 5 }
        ]

        const formInputs = inputData.map(input => <FormInput { ...input } />);

        return (
            <form className="form-container" onSubmit={this.props.onSubmit} noValidate>
                {this.props.accountFormError ? <div className="form-error input-error-container"><i className="input-error bi bi-exclamation-circle"></i>{this.props.accountFormError}</div> : <div></div>}
                {formInputs}
                <Button
                    buttonText={"Create Account"}
                    btnClass={"btn-dark"}
                    type={"submit"}
                />
                <div className="separator-container">
                    <div className="divider"></div>
                    <div className="divider-text">or</div>
                    <div className="divider"></div>
                </div>
                <div className="d-grid">
                    <button id="fb" className="btn facebook-button" disabled>
                    <i className="bi bi-facebook"></i>
                        <div>Sign In with Facebook</div>
                    </button>
                </div>
            </form>
        )
    }
}