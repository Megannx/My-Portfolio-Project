import { useState } from 'react';
import './Contact.css'; 
import emailjs from 'emailjs-com'; // Import EmailJS

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '', 
    });

    const [successMessage, setSuccessMessage] = useState(''); // State for success message

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Send email using EmailJS
        emailjs.send('service_pqsr5zw', 'template_1bjs3ld', formData, '6CkRwrizuec5ncgHe')
            .then((response) => {
                console.log('Email sent successfully:', response);
                setSuccessMessage('Your message has been successfully submitted! I will reply to your email shortly.'); // Update success message
            }, (error) => {
                console.error('Failed to send email:', error);
                // Optionally show an error message to the user
            });

        // Reset form fields
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="contact">
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="4" 
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            {successMessage && <p className="success-message">{successMessage}</p>} {/* Display success message */}
        </div>
    );
};

export default Contact;
