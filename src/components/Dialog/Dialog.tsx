import React, { useState } from 'react';
import './Dialog.scss';
import {MdClose} from "react-icons/md";

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
        <div className="contact-modal-backdrop" onClick={toggle} role="dialog" aria-modal="true" aria-labelledby="dialog-title">
            <div
                className="contact-modal-container"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
                <header className="contact-modal-header">
                    <h2 id="dialog-title" className="contact-modal-title">
                        Contact Us
                    </h2>
                    <button aria-label="Close dialog" className="contact-modal-close" onClick={toggle}>
                        <MdClose size={24} />
                    </button>
                </header>

                <form onSubmit={handleSubmit} className="contact-modal-form" noValidate>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input id="name" type="text" name="name" value={form.name} onChange={handleChange} />
                        {errors.name && <span className="error">{errors.name}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" name="email" value={form.email} onChange={handleChange} />
                        {errors.email && <span className="error">{errors.email}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows={4} value={form.message} onChange={handleChange}></textarea>
                        {errors.message && <span className="error">{errors.message}</span>}
                    </div>

                    <button type="submit" className="submit-button">
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactFormDialog;