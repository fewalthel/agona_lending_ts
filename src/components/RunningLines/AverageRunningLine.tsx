import React, {
    useEffect,
    useState
} from 'react';

export const AverageRunningLine: React.FC = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const newItems= [];
        for (let index: number = 0; index < 10; index++) {
            newItems.push(<img key={index} src="/assets/images/vector/pepper.svg" alt="picture of pepper"/>);
            newItems.push(<p key={index}>put some fire in your belly</p>);
        }
        // @ts-ignore
        setItems(newItems);
    });

    return (
        <div className="container running-line" id="container-for-average-running-line">
            <div className="container container-for-items-of-running-line">
                {items}
            </div>
        </div>
    )
}