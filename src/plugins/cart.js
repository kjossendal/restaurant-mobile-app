import store from '../store/index.js'

export default {
    install(Vue) {
        Vue.mixin({
            computed: {
                "$cart"() {
                    var cart = store.getters['cart/cart'];
                    cart.setCart = function(cart) {
                        return store.dispatch('cart/setCart', cart)
                    }
                    cart.addToCart = function(cartItem) {
                        return store.dispatch('cart/addToCart', cartItem)
                    }
                    cart.removeFromCart = function(id) {
                        return store.dispatch('cart/removeFromCart', id)
                    }
                    return cart
                }
            }
        });
    }
}

