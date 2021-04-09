import axios from 'axios';
import Vue from "vue";

const state = {
  cartItems: []
}

const mutations = {
  UPDATE_CART_ITEMS (state, payload) {
    state.cartItems = payload;
  }
}

// Different types of API requests depending on what has been requested.
// Includes GET, POST, and DELETE requests.
const actions = {
  getCartItems ({ commit }) {
    axios.get('/api/cart').then((response) => {
      commit('UPDATE_CART_ITEMS', response.data)
    });
  },
  addCartItem ({ commit }, cartItem) {
    axios.post('/api/cart', cartItem).then((response) => {
      commit('UPDATE_CART_ITEMS', response.data)
    });
  },
  removeCartItem ({ commit }, cartItem) {
    axios.post('/api/cart/delete', cartItem).then((response) => {
      commit('UPDATE_CART_ITEMS', response.data)
    });
  },
  removeAllCartItems ({ commit }) {
    axios.post('/api/cart/delete/all').then((response) => {
      commit('UPDATE_CART_ITEMS', response.data)
    });
  }
}

// Returns three different types of information.
// "cartItems" returns list of items in the cart.
// "cartTotal" returns the total value (for checkout) of items in the cart.
// "cartQuantity" returns the quantity of products in the cart.
const getters = {
  cartItems: state => state.cartItems,
  cartTotal: state => {
    return state.cartItems.reduce((acc, cartItem) => {
      return (cartItem.quantity * cartItem.price) + acc;
    }, 0).toFixed(2);
  },
  cartQuantity: state => {
    return state.cartItems.reduce((acc, cartItem) => {
      return cartItem.quantity + acc;
    }, 0);
  }
}

const cartModule = {
  state,
  mutations,
  actions,
  getters
}

export default cartModule;
