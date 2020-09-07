import axios from 'axios'
export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers:{
        Authorization:'Client-ID NGjstLyUVmXBG7HV1n9fDKOvAcG4T2QHSE3thkwBiIk'
        }
});