import { validateEmail } from "../utils/helpers";
import { useState } from "react";

function Contact() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    // handle change
    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === "email") {
            setEmail(inputValue);
        } else if (inputType === "name") {
            setName(inputValue);
        } else {
            setMessage(inputValue);
        }
    };
    // handle Submission
    const handleFormSubmit = (e) =>{
        e.preventDefault();
        // validate email
        if(!validateEmail(email)){
            setErrorMessage('Email is invalid')
            return
        }
        
        // Todo: This will be handle later on with EmailJS set up
        // for now, it throws and alert to user
        alert(`
            Your Name: ${name}
            Email: ${email}
            Message: ${message}
        `)
        // reset inputs
        setName('')
        setEmail('')
        setMessage('')
        setErrorMessage('')
    }

    return (
        <div className="container-xl">
            <h2>CONTACT</h2>
            <form className="form">
                <div className="mb-3">
                    <label htmlFor="yourName" className="form-label">
                        Your Name
                    </label>
                    <input
                        className="form-control"
                        id="yourName"
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleInputChange}
                        placeholder="First Last"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="emailAddress" className="form-label">
                        Email Address
                    </label>
                    <input
                        className="form-control"
                        id="emailAddress"
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                        placeholder="youremail@email.com"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                        Message
                    </label>
                    <textarea
                        className="form-control"
                        id="message"
                        type="text"
                        name="message"
                        value={message}
                        onChange={handleInputChange}
                        placeholder="Your message in the bottle"
                    />
                </div>

                <button type="submit" class="btn btn-primary" onClick={handleFormSubmit}>
                    Submit
                </button>
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </div>
    );
}

export default Contact;
