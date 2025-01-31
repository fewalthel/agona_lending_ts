import React, { useEffect, useState } from 'react';
import './RunningLines.css';

export const RunningLine: React.FC<{repeats: number, text: string, id: string}> = ({repeats, text, id} ) => {
    const [items, setItems] = useState([]);

    useEffect((): void => {
        const newItems: any[] = [];
        for (let index: number = 0; index < repeats; index++) {
            newItems.push(<img key={index} src="/assets/images/vector/pepper.svg" alt="picture of pepper"/>);
            newItems.push(<p key={index}>{text}</p>);
        }

        setItems(newItems);
    }, []);

    return (
        <div className="container running-line" id={id}>
            <div className="container container-for-items-of-running-line">
                {items}
            </div>
        </div>
    )
}