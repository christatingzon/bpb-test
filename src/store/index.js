import Vue from "vue";
import Vuex from "vuex";
//import cart from './modules/cart'
//import products from './modules/products'
import allProducts from '@/api/products'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    cart: []
  },

  getters: {
    cartProducts(state) {
      return state.cart.map(cartItem => {
        const product = state.products.find(product => product.id === cartItem.id)

        return {
          title: product.title,
          price: product.price,
          quantity: cartItem.quantity
        }
      })
    },

    cartTotal(state, getters) {
      let totalPrice = 0
      let totalItems = 0

      totalItems = getters.cartProducts.length
      getters.cartProducts.forEach(product => {
        totalPrice += product.price * product.quantity
      })

      return {
        price: +(Math.round(totalPrice + "e+2")  + "e-2"),
        items: totalItems
      }
    }
  },

  mutations: {
  	setProducts (state, products) {
  	  state.products = products
  	},

    pushProductToCart(state, cartItem) {
      state.cart.push({
        id: cartItem.itemId,
        quantity: cartItem.qty
      })
    },

    incrementItemQuantity(state, cartItem){
      cartItem.existingItem.quantity += cartItem.qty
    }
  },

  actions: {
    fetchProducts({ commit }) {
      return new Promise((resolve) => {
        allProducts.getProducts(products => {
          commit('setProducts', products)
          resolve()
        })
      })
    },

    addProductToCart({ state, commit }, product) {
      console.log(product);
      const itemId = product.product.id
      const qty = product.quantity
      const existingItem = state.cart.find(item => item.id === itemId)

      if (!existingItem) {
        commit('pushProductToCart', {itemId, qty})
      } else {
        commit('incrementItemQuantity', {existingItem, qty})
      }
    },

    addItem({ commit }, product) {
      commit('addItemQuantity', product)
    }
  },
  /*modules: {
  	cart,
  	products
  }*/
});
