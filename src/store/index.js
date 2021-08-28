import { createStore } from 'vuex'

export default createStore({
  state: {
    products: []
  },
  //Para modificar el state
  //Las mutaciones se llaman a travez de commit
  mutations: {
    setProducts({state, payload}){
      state.products = payload
    }
  },
  actions: {
    async fetchData({commit}){
      try {
        const res = await fetch('api.json')
        const data = await res.json()
        commit('setProducts', data);
      }catch(error){
        console.log(error)
      }
    }
  },
  modules: {
  }
})
