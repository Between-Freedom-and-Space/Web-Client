import axios from "axios";

const {REACT_APP_BACKEND_URL, REACT_APP_REQUEST_TIMEOUT} = process.env
const searchAxios = axios.create({
    baseURL: `${REACT_APP_BACKEND_URL}/search`,
    timeout: Number.parseFloat(REACT_APP_REQUEST_TIMEOUT || '5000'),
    validateStatus: () => true
})

export default searchAxios