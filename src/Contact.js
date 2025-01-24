import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="contact">
            <h1>Contact Me</h1>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                <label>Message:</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default Contact;