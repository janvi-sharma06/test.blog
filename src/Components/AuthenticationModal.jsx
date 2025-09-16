// src/Components/Auth/AuthModal.jsx
import React, { useEffect, useState } from "react";
import "./AuthenticationModal.css";

const AuthenticationModal = ({ showModal, closeModal, isLogin }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        name: "",
        password: "",
    });

    const togglePassword = () => setShowPassword((prev) => !prev);

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted data:", formData);
        closeModal();
        setFormData({
            email: "",
            name: "",
            password: "",
        });
    };
    useEffect(() => {
        if (showModal) {
            setFormData({
                email: "",
                name: "",
                password: "",
            });
            setShowPassword(false); 
        }
    }, [showModal, isLogin]);

    if (!showModal) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-btn" onClick={closeModal}>×</button>
                <h2>{isLogin ? "Login" : "Sign Up"}</h2>

                <form onSubmit={handleSubmit} className="auth-form">
                    {!isLogin && (
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                        </div>
                    )}

                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <div className="password-input">
                            <input type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} required />
                            <button type="button" className="toggle-btn" onClick={togglePassword} >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>
                    </div>

                    <button type="submit" className="submit-btn">
                        {isLogin ? "Login" : "Sign Up"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AuthenticationModal;
