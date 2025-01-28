import React, { useEffect, useState } from "react";
import './RunningLines.css';

export const TopRunningLine: React.FC = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const newItems = [];
        for (let index: number = 0; index < 5; index++) {
            newItems.push(<img key={index} src="/assets/images/vector/pepper.svg" alt="picture of pepper"/>);
            newItems.push(<p key={index}>put some fire in your belly</p>);
        }
        setItems(newItems);
    }, []);

    return (
        <div className="container running-line" id="container-for-top-running-line">
            <div className="container container-for-items-of-running-line">
                {items}
            </div>
        </div>
    )
}