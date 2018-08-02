import Vue from 'vue';
import Vuex from 'vuex';
import window from './ui/window';

import aside from './data/todo';

Vue.use(Vuex);

const createStore = () => new Vuex.Store({
    modules: {
        window,

        // data
        aside
    }
});
  
export default createStore;