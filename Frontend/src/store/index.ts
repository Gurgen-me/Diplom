import { createStore } from 'vuex'
import ServicesState from './ServicesState'
import PortfoliosState from "./PorpfoliosState.ts";

export default createStore({
    state: {
    },
    mutations: {
    },
    actions: {        
    },
    modules: {
        ServicesState: ServicesState,
        PortfoliosState: PortfoliosState
    }
})