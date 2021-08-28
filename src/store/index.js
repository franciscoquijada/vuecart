import { createStore } from 'vuex'

export default createStore({
  state: {
    products: []
  },
  //Para modificar el state
  //Las mutaciones se llaman a travez de commit
  mutations: {
    setProducts(state, payload){
        state.products = payload
    }
  },
  actions: {

  },
  modules: {
  }
})
