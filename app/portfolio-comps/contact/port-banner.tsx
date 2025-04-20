import {useState} from "react";

export function PortBanner ({show, resultMsg} ) {
return(
        <div className={`banner ${ show ? '' : 'hidden'}`}>
            <p>{resultMsg}</p>
        </div>
    );
}
