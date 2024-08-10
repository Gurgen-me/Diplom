import api from './api';
import {PORTFOLIOS_INTARFACE} from "./interfaces/PORTFOLIOS_INTARFACE.ts";
const PortfoliosState = {
    state: {
        portfolios: [] as PORTFOLIOS_INTARFACE[]
    },
    getters: {
    },
    mutations: {
        GET_PORTFOLIOS(state: any, payload: Array<PORTFOLIOS_INTARFACE>) {
            state.portfolios = payload
            console.log(state.portfolios)
        },
    },
    actions: {
        async fetchAllPortfolios({commit}: any) {
            try {
                const response = await api.get('/portfolios')
                console.log(response)
                commit('GET_PORTFOLIOS', response.data)
            } catch (error) {
                console.log(error);
            }
        },
    }

}

export default PortfoliosState