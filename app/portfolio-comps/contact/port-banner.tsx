import {useState} from "react";

export function PortBanner ({show, resultMsg, bannerType} ) {
return(
        <div className={`banner ${ show ? '' : 'hidden'} ${bannerType}`}>
            <p>{resultMsg}</p>
        </div>
    );
}
