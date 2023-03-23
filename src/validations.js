export function requiredValidation(value) {  
    if (value === "") {
        return "Required";
        
    } else {
        return "";

    }
}

export function cardNumberValidation(value) {  
    const visaRegex = /4[0-9]{3} [0-9]{4} [0-9]{4} [0-9]{4}/;
    const masterRegex = /(2|5)[0-9]{3} [0-9]{4} [0-9]{4} [0-9]{4}/;
    const discoverRegex = /6[0-9]{3} [0-9]{4} [0-9]{4} [0-9]{4}/;
    const amexRegex = /3[0-9]{3} [0-9]{4} [0-9]{4} [0-9]{4}/; // Did not space out like a traditional amex. Just wanted to the logo to appear.

    if (value === "") {
        return { type: "", error: "Required" };
        
    } else if (value.match(visaRegex)) {
        return { type: "VISA", error: "" };

    } else if (value.match(masterRegex)) {
        return { type: "MASTERCARD", error: "" };

    } else if (value.match(discoverRegex)) {
        return { type: "DISCOVER", error: "" };

    } else if (value.match(amexRegex)) {
        return { type: "AMEX", error: "" };

    } else {
        return { type: "", error: "Invalid card number" };

    }
}

export function emailValidation(value) {
    const regex = /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/;
    
    if (value === "") {
        return "Required";

    } else if (!value.match(regex)) {
        return "Invalid email";
        
    } else {
        return "";

    }
}

export function passwordValidation(value) {
    let errors = [];

    if (value === "") {
        return "Required";
    }

    if (!value.match(/[!@#$%^&*()_+]/)) {
        errors.push("Password must contain at least 1 special character");
    } 
    
    if (!value.match(/[0-9]/)) {
        errors.push("Password must contain at least 1 number");
    }

    if (!value.match(/[a-z]/)) {
        errors.push("Password must contain at least 1 lowercase letter");
    }

    if (!value.match(/[A-Z]/)) {
        errors.push("Password must contain at least 1 uppercase letter");
    }

    if (value.length < 8 || value.length > 20) {
        errors.push("Password must be between 8 and 20 characters");
    }

    if (errors.length > 0) {
        return errors.join(". ").concat(".");

    } else {
        return "";

    }

}

export function telephoneValidation(value) {
    const regex = /[0-9]{10}/;

    if (value === "") {
        return "Required";

    } else if (!value.match(regex)) {
        return "Invalid: Must be 10 digits";
        
    } else {
        return "";

    }
}

export function nameValidation(value) {
    const regex = /^[a-zA-Z ]+$/

    if (value === "") {
        return "Required";

    } else if (!value.match(regex)) {
        return "Invalid: Only letters allowed";
        
    } else {
        return "";

    }
}

export function zipValidation(value) {
    const regex = /^[0-9]+$/

    if (value === "") {
        return "Required";

    } else if (!value.match(regex)) {
        return "Invalid: Only numbers allowed";
        
    } else {
        return "";

    }
}

export function cvvValidation(value) {
    const regex = /^[0-9]{3}$/

    if (value === "") {
        return "Required";

    } else if (!value.match(regex)) {
        return "Invalid: 3 digit combination";
        
    } else {
        return "";

    }
}