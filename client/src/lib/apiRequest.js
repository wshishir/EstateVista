import axios from "axios"

const apiRequest = axios.create({
    beseURL:"http://localhost:8800/api",
    withCredentials: true,
});

export default apiRequest;