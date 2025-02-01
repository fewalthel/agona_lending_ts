import React from 'react';
import { RunningLine } from '../../RunningLines/RunningLine.tsx';
import { Picture } from '../../Picture/Picture.tsx';
import { Pictures } from '../../Picture/pictures.ts';
import './InfoSection.css';

export const InfoSection: React.FC = () => {
    return (
        <section id="top" className="section info-section">
            <div className="left-column">
                <Picture {...Pictures[0]} />
                <RunningLine repeats={5} text={'put some fire in your belly'} id={'container-for-top-running-line'}/>
                <Picture {...Pictures[1]} />
            </div>
            <div className="right-column">
                <h1>THE FIRST HOT SAUCE MADE FOR COFFEE</h1>
                <Picture {...Pictures[2]} />
            </div>
        </section>
    )
}