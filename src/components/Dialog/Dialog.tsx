import React from 'react';
import './Dialog.scss';
import { MdClose } from 'react-icons/md';
import { IoCallOutline, IoLocationOutline, IoMailOutline } from 'react-icons/io5';
import resumePDF from '../../assets/resume.pdf';

interface ContactFormDialogProps {
    isOpen: boolean;
    toggle: () => void;
}

const ContactFormDialog: React.FC<ContactFormDialogProps> = ({ isOpen, toggle }) => {
    if (!isOpen) return null;

    const stopPropagation = (e: React.MouseEvent) => e.stopPropagation();

    return (
        <div
            className="contact-modal-backdrop"
            onClick={toggle}
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-dialog-title"
        >
            <div className="contact-modal-container" onClick={stopPropagation}>
                <header className="contact-modal-header">
                    <h2 id="contact-dialog-title" className="contact-modal-title">
                        Contact Me
                    </h2>
                    <button
                        className="contact-modal-close"
                        onClick={toggle}
                    >
                        <MdClose size={20} />
                    </button>
                </header>

                <section className="contact-modal-body">
                    <div className="contact-info">
                        <div className="contact-item">
                            <IoLocationOutline className="contact-icon" />
                            <span>Saskatoon, SK</span>
                        </div>
                        <div className="contact-item">
                            <IoCallOutline className="contact-icon" />
                            <a href="tel:+13069945031">+1 (306) 994-5031</a>
                        </div>
                        <div className="contact-item">
                            <IoMailOutline className="contact-icon" />
                            <a href="mailto:VijayMKumar9389@gmail.com">VijayMKumar9389@gmail.com</a>
                        </div>
                    </div>

                    <div className="contact-actions">
                        <a
                            href={resumePDF}
                            download="VijayKumar_Resume.pdf"
                            className="btn"
                        >
                            Download Resume
                        </a>
                        <a
                            href="https://github.com/VijayKumar9389"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn"
                        >
                            View GitHub
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ContactFormDialog;