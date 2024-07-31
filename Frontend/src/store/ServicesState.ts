import api from './api';
import { SERVISES_INTARFACE } from './interfaces/SERVISES_INTARFACE'
const ServicesState = {
    state: {
        services: [] as SERVISES_INTARFACE[]
    },
    getters: {
    },
    mutations: {
        GET_SERVICES(state: any, payload: Array<SERVISES_INTARFACE>) {
            state.services = payload
            console.log(state.services)            
        },
    },
    actions: {
        async fetchAllServices({commit}: any) {
            try {
                const response = await api.get('/services')
                console.log(response)
                commit('GET_SERVICES', response.data)
            } catch (error) {
                console.log(error);
            }
        },
    }

}

export default ServicesState