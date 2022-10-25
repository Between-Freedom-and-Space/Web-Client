import {ButtonCustomConfiguration, ButtonType} from "./types";
import {ReactNode} from "react";

type Props = {
    type: ButtonType
    text: string
    onClick: (event: Event) => void
    config?: ButtonCustomConfiguration
}

function Button(props: Props) {
    return <button>

    </button>
}

export default Button;