import React from "react";
import './StorySection.css'
import { Pictures } from "../../Picture/pictures.ts";
import { Picture } from "../../Picture/Picture.tsx";

export const StorySection: React.FC = () => {
    return (
            <section className="section story-section">
                <div className="container container-for-story">
                    <h2>the story behind<br/>the souse</h2>
                    <Picture {...Pictures[6]} />
                </div>
                <div className="container container-for-story-card">
                    <Picture {...Pictures[7]}/>
                    <h3>
                        <p>HELLO, I’M LAUREN AND AS A LIFELONG ADVENTUROUS EATER, I’VE TRIED A LOT OF CRAZY THINGS,
                            BUT I NEVER THOUGHT HOT SAUCE IN COFFEE WAS A SANE OPTION UNTIL A FRIEND DARED ME TO TRY IT.</p>
                        <p>AND IT SUCKED.</p>
                        <p>BUT I WONDERED IF THERE WAS A WAY TO ADD SPICE TO MY COFFEE. WHEN THERE WAS NO EASY SOLUTION, UJJO WAS BORN.</p>
                        <p>UJJO (OOO-JOE): THE WORD FOR “FIRE” IN KONKANI, SPOKEN ON THE WEST COAST OF INDIA, IS AN HOMAGE AND A LOVE
                            LETTER TO MY DAD, AN INDIAN IMMIGRANT WHO INSTILLED A FIRE IN MY PALATE – AND MY HEART – FROM THE VERY BEGINNING.</p>
                    </h3>
                </div>
            </section>
    )
}