import allProducts from '@/api/products'

// initial state
// shape: [{ id, quantity }]
const state = () => ({
	products: []
})

// getters
const getters = {
}

// actions
const actions = {
	fetchProducts({ commit }) {
	  return new Promise((resolve) => {
	    allProducts.getProducts(products => {
	      commit('setProducts', products)
	      resolve()
	    })
	  })
	}
}

// mutations
const mutations = {
	setProducts (state, products) {
	  state.products = products
	},
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
