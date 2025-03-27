import { useState} from 'react';

export default function ImageBanner({nameClass}) {
    const name = "<Eric Spidle/>";
    return (
    <>
        <div class="photo-container">
            <div id="code-background"></div>
            <img id="eric-spidle"src="images/eric_spidle_portfolio_pic.jpg" alt="Photo of Eric Spidle"/>
            <div class="about-intro">
                <h3> Hi. I'm,</h3>
                <h1 className={nameClass}>{name}</h1>
            </div>
        </div>
    </>
    );
}
