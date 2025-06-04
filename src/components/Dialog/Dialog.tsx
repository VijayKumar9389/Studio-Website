import React, { useState } from 'react';
import './Dialog.scss';

interface ContactFormDialogProps {
    isOpen: boolean;
    toggle: () => void;
}

const ContactFormDialog: React.FC<ContactFormDialogProps> = ({ isOpen, toggle }) => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({ name: '', email: '', message: '' });

    const validate = () => {
        let valid = true;
        const newErrors = { name: '', email: '', message: '' };

        if (!form.name.trim()) {
            newErrors.name = 'Name is required';
            valid = false;
        }
        if (!form.email.trim()) {
            newErrors.email = 'Email is required';
            valid = false;
        }
        if (!form.message.trim()) {
            newErrors.message = 'Message is required';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            console.log('Form submitted:', form);
            toggle(); // Close dialog
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    if (!isOpen) return null;

    return (
        <div className="contact-modal">
            <div className="modal-backdrop" onClick={toggle}></div>
            <div className="modal-content">
                <button className="close-button" onClick={toggle}>×</button>
                <h2>Contact Us</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" name="name" value={form.name} onChange={handleChange} />
                        {errors.name && <span className="error">{errors.name}</span>}
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" name="email" value={form.email} onChange={handleChange} />
                        {errors.email && <span className="error">{errors.email}</span>}
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea name="message" rows={4} value={form.message} onChange={handleChange}></textarea>
                        {errors.message && <span className="error">{errors.message}</span>}
                    </div>
                    <button type="submit" className="submit-button">Send</button>
                </form>
            </div>
        </div>
    );
};

export default ContactFormDialog;