import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        storeItems: []
    },
    actions: {},
    mutations: {
        addStoreItems(state, item) {
            state.storeItems.push(item)
            localStorage.setItem('saveStoreItem', JSON.stringify(state.storeItems))
        },
        updateStoreItems(state, item) {
            let currentItemId = state.storeItems.findIndex(x => x.id === item.id)
            state.storeItems[currentItemId] = item
            localStorage.setItem('saveStoreItem', JSON.stringify(state.storeItems))
        }
    },
    getters: {
        allStoreItems(state) {
            return state.storeItems
        }
    }
});
