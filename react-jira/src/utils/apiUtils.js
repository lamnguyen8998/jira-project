import axios from "axios"

const TOKEN_CYBERSOFT = "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJzdHJpbmciLCJuYmYiOjE2Mzg5MDA3NzIsImV4cCI6MTYzODkwNDM3Mn0.qjPsHrKo6gj11mDhTphk-PGvElwNPtQN_43RauRvJRw"

const api = axios.create({
    baseURL: "http://jiranew.cybersoft.edu.vn/api/"
})

api.interceptors.request.use((config) => {
    config.headers = {
        ...config.headers,
        TokenCybersoft: TOKEN_CYBERSOFT
    };
    return config;
}, (errors) => {
    return Promise.reject(errors)

})

export default api