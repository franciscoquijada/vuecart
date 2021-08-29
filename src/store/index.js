import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [],
    cart: {}
  },
  //Para modificar el state
  //Las mutaciones se llaman a travez de commit
  mutations: {
    setProducts(state, payload) {
      state.products = payload
      console.log(payload)
    },
    //Modifico este producto en especifico dentro del carrito
    setCart(state, payload) {
      state.cart[payload.id] = payload
    }
  },
  actions: {
    async fetchData({ commit }) {
      try {
        const res = await fetch('api.json')
        const data = await res.json()
        commit('setProducts', data);
      } catch (error) {
        console.log(error)
      }
    },
    addProduct({ commit, state }, product) {
      state.cart.hasOwnProperty(product.id)
        ? product.cantidad = state.cart[product.id].cantidad + 1 :
        product.cantidad = 1
      commit('setCart', product)
    }
  },
  modules: {
  }
})
