import React from "react";
import styles from './button-loader.module.scss'

import {ButtonType} from "../types";

interface Props {
    type: ButtonType
}

function ButtonLoader(props: Props) {
    let color = '#ffffff'
    switch (props.type) {
    case ButtonType.PRIMARY: {
        color = '#ffffff'
        break
    }
    case ButtonType.SECONDARY: {
        color = '#5A6069'
        break
    }
    case ButtonType.DANGER: {
        color = '#ffffff'
    }
    }

    return (
        <div className={styles.loaderWrapper}>
            <svg version="1.1" id="L1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100 100" enableBackground="new 0 0 100 100">
                <circle fill="none" stroke={color} strokeWidth="6" strokeMiterlimit="15" strokeDasharray="14.2472,14.2472" cx="50" cy="50" r="47" >
                    <animateTransform
                        attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        dur="5s"
                        from="0 50 50"
                        to="360 50 50"
                        repeatCount="indefinite" />
                </circle>
                <circle fill="none" stroke={color} strokeWidth="1" strokeMiterlimit="10" strokeDasharray="10,10" cx="50" cy="50" r="39">
                    <animateTransform
                        attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        dur="5s"
                        from="0 50 50"
                        to="-360 50 50"
                        repeatCount="indefinite" />
                </circle>
                <g fill={color}>
                    <rect x="30" y="35" width="5" height="30">
                        <animateTransform
                            attributeName="transform"
                            dur="1s"
                            type="translate"
                            values="0 5 ; 0 -5; 0 5"
                            repeatCount="indefinite"
                            begin="0.1"/>
                    </rect>
                    <rect x="40" y="35" width="5" height="30" >
                        <animateTransform
                            attributeName="transform"
                            dur="1s"
                            type="translate"
                            values="0 5 ; 0 -5; 0 5"
                            repeatCount="indefinite"
                            begin="0.2"/>
                    </rect>
                    <rect x="50" y="35" width="5" height="30" >
                        <animateTransform
                            attributeName="transform"
                            dur="1s"
                            type="translate"
                            values="0 5 ; 0 -5; 0 5"
                            repeatCount="indefinite"
                            begin="0.3"/>
                    </rect>
                    <rect x="60" y="35" width="5" height="30" >
                        <animateTransform
                            attributeName="transform"
                            dur="1s"
                            type="translate"
                            values="0 5 ; 0 -5; 0 5"
                            repeatCount="indefinite"
                            begin="0.4"/>
                    </rect>
                    <rect x="70" y="35" width="5" height="30" >
                        <animateTransform
                            attributeName="transform"
                            dur="1s"
                            type="translate"
                            values="0 5 ; 0 -5; 0 5"
                            repeatCount="indefinite"
                            begin="0.5"/>
                    </rect>
                </g>
            </svg>
        </div>
    )
}

export default ButtonLoader;