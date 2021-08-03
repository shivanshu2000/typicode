import { createStore } from 'vuex'

export default createStore({
  state: {
    users: [],
    albums:[],
    selectedUser: {
      id:-1,
      name: ''
    },
  },
  mutations: {
    selectUser(state, payload){
      state.selectedUser = {...state.selectedUser, id:payload.id, name: payload.name}
      fetch(`https://jsonplaceholder.typicode.com/albums/?userId=${state.selectedUser.id}`).then(res=>res.json()).then(albums=>state.albums =albums)
    },

    loadUsers(state, payload){
      state.users = payload
    }
  },
  actions: {
  init({commit}){

    fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(users=>{
    commit('loadUsers', users.slice(0,5));
})
  }
  },
  modules: {
  },
  getters:{
    selectedItems(state) {
      let list = state.lists.find(
        (l) => l.id === state.selectedItem
      );
      if (list) return list.items;
      return [];
    },
  }
})
