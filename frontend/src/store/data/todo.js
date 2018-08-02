import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

export const state = () => ({
    asidedata: []
});

const actions = {
    read ({ commit }) {
        axios.get('http://localhost:8080/api/todo')
            .then(response => {
                console.log(response);
                commit('setAsideData', response);
            })
            .catch(e => {
                console.log(e)
            })
    }
}

const mutations = {
    setAsideData (state, rdata) {
        state.asidedata = rdata
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}