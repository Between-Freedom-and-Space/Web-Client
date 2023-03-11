import axios from "axios";

const {REACT_APP_BACKEND_URL, REACT_APP_REQUEST_TIMEOUT} = process.env
const settingsAxios = axios.create({
    baseURL: `${REACT_APP_BACKEND_URL}/settings`,
    timeout: Number.parseFloat(REACT_APP_REQUEST_TIMEOUT || '5000'),
    validateStatus: () => true
})

export default settingsAxios