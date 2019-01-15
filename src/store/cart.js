export default {
    namespaced: true,
    state: {
        cart: {
            items: []
        }
    },
    getters: {
        cart: (state) => {
            return state.cart
        }
    },
    mutations: {
        setCart(state, newCart) {
            state.user.cart = newCart
        },
        addToCart(state, cartItem) {
            state.cart.items.push(cartItem)
        },
        removeFromCart(state, id) {
            state.cart.items.find(item => {
                return item.id !== id
            })
        }
    },
    actions: {
        setCart(context, payload) {
            context.commit('setCart', payload)
        },
        addToCart(context, cartItem) {
            context.commit('addToCart', cartItem)
        },
        removeFromCart(context, id) {
            context.commit('removeFromCart', id)
        }
    },
};
