// components/ClinicServiceBox.jsx
import React from 'react';
import "./Box.css";

const ClinicServiceBox = ({ id, title, icon, isActive, onClick }) => {
    return (
        <div
            className={`box flex flex-col cursor-pointer text-center transition-all duration-300 ease-in-out ${isActive ? 'active' : ''}`}
            onClick={() => onClick(id)}
        >
            <i className={`fas ${icon} mb-2`}></i>
            <span className="text-center">{title}</span>
        </div>
    );
};

export default ClinicServiceBox;
