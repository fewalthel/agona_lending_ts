import React from "react";
import './RunningLines.css';

export const TopRunningLine: React.FC = () => {
    return (
        <div className="container running-line" id="container-for-top-running-line">
            <div className="container container-for-items-of-running-line">
                <img src="/assets/images/vector/pepper.svg" alt="picture of pepper"/>
                <p>put some fire in your belly</p>
                <img src="/assets/images/vector/pepper.svg" alt="picture of pepper"/>
                <p>put some fire in your belly</p>
                <img src="/assets/images/vector/pepper.svg" alt="picture of pepper"/>
                <p>put some fire in your belly</p>
                <img src="/assets/images/vector/pepper.svg" alt="picture of pepper"/>
                <p>put some fire in your belly</p>
                <img src="/assets/images/vector/pepper.svg" alt="picture of pepper"/>
                <p>put some fire in your belly</p>
            </div>
        </div>
    )
}