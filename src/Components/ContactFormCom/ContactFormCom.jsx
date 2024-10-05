import React, { useState } from "react";
import './ContactFormCom.css';

const ContactFormCom = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
    });

    const [responseMessage, setResponseMessage] = useState("");  // For feedback
    const [loading, setLoading] = useState(false);  // Loading state

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true); // Start loading animation

        // Get CSRF token from cookie
        const csrfToken = document.cookie.split('; ')
            .find(row => row.startsWith('csrftoken'))
            ?.split('=')[1];

        fetch('http://127.0.0.1:8000/submit-contact-form/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrfToken,
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                console.log("Form submitted successfully!");
                // Clear form after successful submission
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    company: "",
                    message: "",
                });
                setResponseMessage("Message sent successfully!");
            } else {
                console.error("Error:", data.message);
                setResponseMessage("There was an error submitting the form.");
            }
        })
        .catch((error) => {
            console.error("Error:", error);
            setResponseMessage("Can't send please try again.");
        })
        .finally(() => {
            setLoading(false);  // End loading animation
        });
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit} data-aos={"fade-right"}>
            <h2 className="sendUs">Send us a message</h2>

            <div className="form-row first">
                <div className="form-group">
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        autoComplete="name"
                        placeholder="Name" 
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        autoComplete="organization"
                        placeholder="Company Name" 
                    />
                </div>
            </div>

            <div className="form-row">
                <div className="form-group">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        autoComplete="email"
                        placeholder="Email Address" 
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        autoComplete="tel"
                        placeholder="Phone Number" 
                    />
                </div>
            </div>

            <div className="form-group">
                <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    autoComplete="off"
                    placeholder="Leave Message Here..." 
                ></textarea>
            </div>

            <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? <div className="loading-spinner"></div> : "Send Message"}
            </button>

            {/* Feedback message */}
            {responseMessage && <p style={{
                // responseMessage?
                fontSize:"13px",
                position:"absolute",
                bottom:"-5px",
                left:"50%",
                transform:"translateX(-50%)",
                width:"100%",
                textAlign:"center"
            }}>
                {responseMessage}
            </p>}
        </form>
    );
}

export default ContactFormCom;
