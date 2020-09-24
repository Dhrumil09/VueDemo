import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        UserName:'',
    },
    mutations:{
        changeUserName(state,username){
            state.UserName =username;
        }
    },
    getters:{
        getUserName:(state)=> state.UserName
    }
})
export default store;