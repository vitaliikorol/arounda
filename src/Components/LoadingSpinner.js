import React from "react";
import '../Styles/LoadingSpinner.css'

const LoadingSpinner = () => {
    return (
        <div className="loader">
            <div className="inner first" />
            <div className="inner second" />
            <div className="inner third" />
        </div>
    )
}

export default LoadingSpinner;
