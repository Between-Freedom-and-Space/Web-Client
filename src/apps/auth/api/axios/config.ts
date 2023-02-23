import axios from "axios";

const {BACKEND_URL, TIMEOUT} = process.env
const authAxios = axios.create({
    baseURL: BACKEND_URL,
    timeout: Number.parseFloat(TIMEOUT || '5000'),
    validateStatus: () => true
})

export default authAxios