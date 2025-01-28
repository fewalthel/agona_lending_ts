import React, { useEffect, useState } from 'react';

export const BottomRunningLine: React.FC = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const newItems = [];

        for (let index: number = 0; index < 15; index++) {
            newItems.push(<img key={index} src="/assets/images/vector/pepper.svg" alt="picture of pepper"/>);
            newItems.push(<p key={index}>download our media kit</p>);
            newItems.push(<img key={index} src="/assets/images/vector/pepper.svg" alt="picture of pepper"/>);
            newItems.push(<p key={index}>CONTACT FOR PARTNERSHIP OPPORTUNITIES</p>);
        }
        newItems.push(<img src="/assets/images/vector/pepper.svg" alt="picture of pepper"/>);
        newItems.push(<p>download our media kit</p>);
        setItems(newItems);
    }, [])

    return (
        <div className="container running-line" id="container-for-bottom-running-line">
            <div className="container container-for-items-of-running-line">
                {items}
            </div>
        </div>
    )
}